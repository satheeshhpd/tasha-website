# Google Apps Script Integration Guide
## Tasha Inventory ↔ Google Sheets Live Sync (with Drive Image Upload)

> Connect your inventory tool at `tashabysujitha.com.au/inventory` to your live Google Sheet so changes flow both ways in real-time, including saving uploaded images directly to a Google Drive folder.

---

## Step 1 — Prepare Google Drive & Sheet

1. **Create an Image Folder**: Go to your Google Drive and create a folder named `Tasha Inventory Images`.
2. **Make it Public**: Right-click the folder → Share → change General access to **Anyone with the link (Viewer)**.
3. **Get Folder ID**: Open the folder. The URL will look like `https://drive.google.com/drive/folders/ABCDEFG1234567...`. Copy the `ABCDEFG1234567...` part. That is your **Folder ID**.
4. **Update Google Sheet**: Open your `SELL` sheet. Add a new column to the right of Customer named **Image URL**. The script expects this exact column header.

---

## Step 2 — Open the Script Editor

1. Open your Google Spreadsheet:  
   [https://docs.google.com/spreadsheets/d/1-s6eLBRjK-BhWtamg_3d9fbVg4OJZusL1SdFFCVDwPI](https://docs.google.com/spreadsheets/d/1-s6eLBRjK-BhWtamg_3d9fbVg4OJZusL1SdFFCVDwPI)
2. Click **Extensions → Apps Script**
3. Delete all existing code in the editor

---

## Step 3 — Paste This Script

Copy and paste the entire script below into the Apps Script editor. **Replace `YOUR_FOLDER_ID_HERE` with the ID from Step 1.**

```javascript
// ── CONFIG ──────────────────────────────────────────────────────
const SHEET_NAME = 'SELL';
const SPREADSHEET_ID = '1-s6eLBRjK-BhWtamg_3d9fbVg4OJZusL1SdFFCVDwPI';
const IMAGE_FOLDER_ID = 'YOUR_FOLDER_ID_HERE'; // <-- Paste your folder ID here!

// Column order MUST match your SELL sheet exactly
const HEADERS = [
  'No', 'Product Code', 'Name', 'sku', 'Size', 'Qty', 'Value',
  'QTY X VALUE', 'Category', 'Suta price AUD', 'Tasha Sales price ($)',
  'Discount', 'Sold Prize', 'Paid', 'Customer', 'Image URL'
];

// ── CORS HELPER ─────────────────────────────────────────────────
// NOTE: Apps Script does not handle OPTIONS preflight requests.
// The inventory page sends POST with Content-Type: text/plain to avoid
// triggering a preflight — DO NOT change this or CORS errors will return.
function corsOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── GET (read all rows + ping) ──────────────────────────────────
function doGet(e) {
  try {
    const action = e && e.parameter && e.parameter.action;
    if (action === 'getAll') return getAllRows();
    if (action === 'ping')   return corsOutput({ status: 'ok', message: 'Tasha Inventory API is running.' });
    return corsOutput({ status: 'ok', message: 'Tasha Inventory API is running.' });
  } catch(err) {
    return corsOutput({ status: 'error', message: err.message });
  }
}

function getAllRows() {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  const data  = sheet.getDataRange().getValues();

  if (data.length < 2) {
    return corsOutput({ status: 'ok', rows: [] });
  }

  const headers = data[0]; // row 1 = headers
  const rows = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];

    // ✅ Skip rows where both Name (col C) and SKU (col D) are missing
    const name = String(row[2] || '').trim();
    const sku  = String(row[3] || '').trim();
    if (!name && !sku) continue;

    const obj = { _rowNum: i + 1 }; // 1-based sheet row number
    headers.forEach((h, j) => {
      obj[h] = row[j] !== undefined && row[j] !== null ? String(row[j]) : '';
    });
    rows.push(obj);
  }

  return corsOutput({ status: 'ok', rows });
}

// ── POST (add / update / delete) ─────────────────────────────────
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    
    // Handle Image Upload to Drive
    if (payload.imageAction === 'upload' && payload.imageBase64) {
      const folder = DriveApp.getFolderById(IMAGE_FOLDER_ID);
      
      // Filename logic: use Product Code, add -a, -b, -c if it already exists
      let finalName = payload.imageName;
      let suffixCode = 97; // char code for 'a'
      while (folder.getFilesByName(finalName).hasNext()) {
        finalName = payload.imageName + '-' + String.fromCharCode(suffixCode);
        suffixCode++;
      }

      const blob = Utilities.newBlob(Utilities.base64Decode(payload.imageBase64), payload.imageMime, finalName);
      const file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      // Store the direct URL
      payload.data['Image URL'] = file.getUrl();
    } else if (payload.imageAction === 'remove') {
      payload.data['Image URL'] = '';
    }

    const action  = payload.action;

    if (action === 'add')    return addRow(payload.data);
    if (action === 'update') return updateRow(payload.rowNum, payload.data);
    if (action === 'delete') return deleteRow(payload.rowNum);

    return corsOutput({ status: 'error', message: 'Unknown action: ' + action });
  } catch(err) {
    return corsOutput({ status: 'error', message: err.message });
  }
}

// ── ADD ROW ──────────────────────────────────────────────────────
function addRow(data) {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  // Auto-number: find next available No
  const lastRow = sheet.getLastRow();
  const nextNo  = lastRow; // row count - 1 header = item count, +1 for next

  const rowValues = HEADERS.map(h => {
    if (h === 'No') return nextNo;
    return data[h] !== undefined ? data[h] : '';
  });

  sheet.appendRow(rowValues);
  const newRowNum = sheet.getLastRow();

  return corsOutput({ status: 'ok', rowNum: newRowNum, imageUrl: data['Image URL'], message: 'Row added.' });
}

// ── UPDATE ROW ───────────────────────────────────────────────────
function updateRow(rowNum, data) {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!rowNum || rowNum < 2) {
    return corsOutput({ status: 'error', message: 'Invalid row number.' });
  }

  // Get current row to preserve 'No' column
  const currentNo = sheet.getRange(rowNum, 1).getValue();

  const rowValues = HEADERS.map((h, colIndex) => {
    if (h === 'No') return currentNo; // keep original row number
    return data[h] !== undefined ? data[h] : '';
  });

  sheet.getRange(rowNum, 1, 1, rowValues.length).setValues([rowValues]);

  return corsOutput({ status: 'ok', imageUrl: data['Image URL'], message: 'Row ' + rowNum + ' updated.' });
}

// ── DELETE ROW ───────────────────────────────────────────────────
function deleteRow(rowNum) {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!rowNum || rowNum < 2) {
    return corsOutput({ status: 'error', message: 'Invalid row number — cannot delete header.' });
  }

  sheet.deleteRow(rowNum);
  return corsOutput({ status: 'ok', message: 'Row ' + rowNum + ' deleted.' });
}
```

---

## Step 4 — Deploy as Web App

1. Click **Deploy → New Deployment**
2. Click the ⚙️ gear icon → select **Web app**
3. Set the following:
   - **Description**: `Tasha Inventory API`
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone`  
   *(This is safe — the password is enforced by your inventory page, not the script itself)*
4. Click **Deploy**
5. Google will prompt you to **Authorize access**. Follow the prompts (Advanced -> Go to Tasha Inventory API).
6. **Copy the Web App URL** — it looks like:  
   `https://script.google.com/macros/s/AKfycb.../exec`

---

## Step 5 — Connect to Your Inventory Page

1. Go to `tashabysujitha.com.au/inventory`
2. Click the ⚙️ Settings icon in the top right.
3. Paste the new URL and click **Save & Sync**.

After connecting, try these actions:

| Action | Expected |
|--------|----------|
| Click **Sync** button | Loads all rows from SELL sheet |
| Click **Add Item** and save | New row appears in Google Sheet |
| Click ✏️ Edit and save | Matching row in Sheet updates |
| Click 🗑️ Delete | Row is removed from Sheet |

---

## How Bi-Directional Sync Works

```
Inventory Page  ←──── Apps Script ←──── Google Sheet
     │                    │                   │
  GET /exec?action=getAll → reads SELL tab → returns JSON
  POST /exec {action:add} → appends row   → row appears in sheet
  POST /exec {action:update} → updates row → sheet row changes
  POST /exec {action:delete} → deletes row → row removed from sheet
```

> **Tip**: Click the **Sync** button anytime someone edits the sheet directly in Google Sheets to pull the latest data into the inventory view.

---

## Column Mapping (SELL Sheet ↔ Inventory Tool)

| Sheet Column | Inventory Field | Notes |
|---|---|---|
| A — No | Row number | Auto-assigned |
| B — Product Code | `productCode` | Duplicate check key |
| C — Name | `name` | Required |
| D — sku | `sku` | Duplicate check key |
| E — Size | `size` | Optional |
| F — Qty | `qty` | Numeric |
| G — Value | `value` | ₹ INR price |
| H — QTY X VALUE | `qtyXVal` | Auto: Qty × Value |
| I — Category | `category` | Saree / Blouse |
| J — Suta price AUD | `sutaAUD` | A$ cost price |
| K — Tasha Sales price ($) | `salesPrice` | **Auto: round(Retail × 0.9)** |
| L — Discount | `discount` | **Auto: Retail − Sales** |
| M — Sold Prize | `soldPrize` | Actual sold amount |
| N — Paid | `paid` | e.g. "paid", "sold" |
| O — Customer | `customer` | Buyer name |

> **Price Formulas**:
> - `Tasha Retail ($)` = `Math.round(Suta AUD × 2.5)`
> - `Tasha Sales ($)` = `Math.round(Retail × 0.9)` ← written to column K
> - `Discount` = `Retail − Sales` ← written to column L

---

## Troubleshooting

| Issue | Fix |
|---|---|
| "Sync failed" error | Re-check script URL, ensure deployment is set to "Anyone" access |
| Empty inventory after sync | Make sure sheet name is exactly `SELL` (case-sensitive) |
| CORS error in browser | Re-deploy the script — click Deploy → Manage Deployments → New version |
| URL prompt keeps appearing | Clear browser localStorage and re-enter URL |
| Prices don't match | Prices are auto-calculated from Suta AUD — check column J values |
