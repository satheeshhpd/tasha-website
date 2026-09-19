import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Phone, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, selectedItem }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: 'Tasha Costumes',
    serviceType: 'rental',
    itemName: '',
    eventDate: '',
    quantity: '1',
    sizeNotes: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setFormData(prev => ({
        ...prev,
        brand: selectedItem.brand || 'Tasha Costumes',
        serviceType: selectedItem.type || 'rental',
        itemName: selectedItem.name || '',
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        itemName: 'General Enquiry',
      }));
    }
    setSubmitted(false);
  }, [selectedItem, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = () => {
    let msg = `*Enquiry for ${formData.brand}*\n`;
    msg += `------------------------------\n`;
    msg += `• *Name:* ${formData.name || 'Not provided'}\n`;
    msg += `• *Phone:* ${formData.phone || 'Not provided'}\n`;
    msg += `• *Email:* ${formData.email || 'Not provided'}\n`;
    msg += `• *Item/Service:* ${formData.itemName || 'General enquiry'}\n`;
    if (formData.serviceType === 'rental' && formData.eventDate) {
      msg += `• *Performance/Event Date:* ${formData.eventDate}\n`;
      msg += `• *Required Sets/Quantity:* ${formData.quantity}\n`;
    }
    if (formData.sizeNotes) {
      msg += `• *Size/Measurements:* ${formData.sizeNotes}\n`;
    }
    if (formData.message) {
      msg += `• *Notes:* ${formData.message}\n`;
    }
    msg += `------------------------------\nSent from tashabysujitha.com.au`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const encoded = constructWhatsAppMessage();
    const url = `https://wa.me/61466977408?text=${encoded}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry: ${formData.brand} - ${formData.itemName}`);
    let body = `Hello Sujitha,\n\nI would like to enquire regarding ${formData.brand}.\n\n`;
    body += `Name: ${formData.name}\n`;
    body += `Phone: ${formData.phone}\n`;
    body += `Email: ${formData.email}\n`;
    body += `Item: ${formData.itemName}\n`;
    if (formData.eventDate) body += `Event Date: ${formData.eventDate}\n`;
    if (formData.quantity) body += `Quantity/Sets: ${formData.quantity}\n`;
    if (formData.sizeNotes) body += `Size Notes: ${formData.sizeNotes}\n`;
    if (formData.message) body += `Message: ${formData.message}\n`;
    body += `\nThank you!`;
    
    window.location.href = `mailto:sujitha.cs@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-noir-900 border border-gold-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-full bg-noir-850 hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
            <p className="text-stone-300 text-sm max-w-md mx-auto">
              Your enquiry has been dispatched. Sujitha will connect with you promptly to confirm availability, sizing, and details.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-gold-500 text-noir-950 font-bold text-xs"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1 text-left">
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Booking & Purchase Enquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedItem ? `Enquire: ${selectedItem.name}` : 'Enquire with Tasha by Sujitha'}
              </h3>
              <p className="text-xs text-stone-400">
                Sydney-based pickups, costume rental dates & Australia-wide saree shipping.
              </p>
            </div>

            {/* Quick Contact Numbers */}
            <div className="p-3.5 rounded-xl bg-noir-850 border border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Sujitha: <strong>0466 977 408</strong></span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>sujitha.cs@gmail.com</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4 text-xs">
              {/* Brand & Type Selection */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Brand</label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Tasha Costumes">Tasha Costumes (Rentals)</option>
                    <option value="Tasha Drapes">Tasha Drapes (Sarees for Sale)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Enquiry Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="rental">Costume / Jewelry Rental</option>
                    <option value="sale">Saree Purchase / Styling</option>
                    <option value="bulk">Bulk School/Troupe Order</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0412 345 678"
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Email & Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. priya@gmail.com"
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Performance / Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Selected Item / Description */}
              <div>
                <label className="block text-stone-300 font-medium mb-1">Selected Item / Category</label>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  placeholder="e.g. Peacock Bharatanatyam Silk Costume or Kanjivaram Saree"
                  className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Size & Message */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Size / Age Group / Sets Needed</label>
                  <input
                    type="text"
                    name="sizeNotes"
                    value={formData.sizeNotes}
                    onChange={handleChange}
                    placeholder="e.g. Adult Medium, or 8 Kids Sets"
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Special Requests / Questions</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Need matching temple jewelry"
                    className="w-full px-3 py-2 rounded-xl bg-noir-850 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp (+61 466 977 408)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full py-2.5 px-3 rounded-xl bg-noir-850 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold flex items-center justify-center gap-1.5 transition-all text-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400" />
                    <span>Send via Email</span>
                  </button>

                  <a
                    href="tel:0466977408"
                    className="w-full py-2.5 px-3 rounded-xl bg-noir-850 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold flex items-center justify-center gap-1.5 transition-all text-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
