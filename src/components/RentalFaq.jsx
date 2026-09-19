import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export default function RentalFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-noir-900">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Everything You Need To Know
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Transparent answers regarding costume rentals, fittings, deposit bonds, and saree purchases.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-noir-850 border border-stone-800 overflow-hidden transition-colors hover:border-gold-500/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-stone-200 hover:text-gold-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 bg-noir-900/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-noir-850 via-noir-800 to-noir-850 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-white text-base">Have a customized performance or bridal requirement?</h4>
            <p className="text-xs text-stone-400 mt-1">Sujitha is just a phone call or WhatsApp message away.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0466977408"
              className="px-4 py-2 rounded-xl bg-noir-900 border border-gold-500/40 text-gold-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0466 977 408</span>
            </a>
            <a
              href="https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
