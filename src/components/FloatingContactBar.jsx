import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingContactBar({ onOpenEnquiry }) {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Bubble */}
      <a
        href="https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20would%20like%20to%20enquire%20about%20Tasha%20Drapes%20and%20Tasha%20Costumes."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105"
        title="Chat on WhatsApp with Sujitha"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold hidden sm:inline-block">WhatsApp Chat</span>
      </a>

      {/* Floating Action Pill on Mobile */}
      <div className="flex sm:hidden items-center gap-2 p-1.5 rounded-full bg-noir-950/95 border border-gold-500/40 shadow-2xl backdrop-blur-md">
        <a
          href="tel:0466977408"
          className="p-2.5 rounded-full bg-noir-850 text-gold-300 hover:text-white"
          title="Call 0466 977 408"
        >
          <Phone className="w-4 h-4" />
        </a>
        <button
          onClick={() => onOpenEnquiry(null)}
          className="px-3.5 py-1.5 rounded-full bg-gold-gradient text-noir-950 text-xs font-bold shadow-md"
        >
          Enquire
        </button>
      </div>
    </aside>
  );
}
