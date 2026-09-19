import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Sparkles, Drama, Shirt } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { COSTUME_CATEGORIES } from '../data/categories';

export default function Footer({ onSelectBrand, onOpenEnquiry }) {
  return (
    <footer id="contact" className="border-t border-gold-500/20 bg-noir-950 text-stone-300 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Contact CTA Header Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-noir-900 via-noir-850 to-noir-900 border border-gold-500/30 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Sujitha
          </span>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Ready to Plan Your Next Performance or Saree Styling?
          </h3>

          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Whether booking dance costume rentals for your Sydney troupe or choosing an heirloom saree for an upcoming milestone, we are here to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:0466977408"
              className="px-6 py-3 rounded-full bg-gold-gradient text-noir-950 text-xs sm:text-sm font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-gold-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 0466 977 408</span>
            </a>

            <a
              href="https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => onOpenEnquiry(null)}
              className="px-6 py-3 rounded-full bg-noir-850 hover:bg-stone-800 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-semibold transition-all"
            >
              Submit Online Enquiry
            </button>
          </div>
        </div>

        {/* Dual Brand Logos & Instagram Footer Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-stone-800/80">
          {/* Brand 1: Tasha Drapes */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-noir-900/60 border border-stone-800 hover:border-ruby/40 transition-colors text-center sm:text-left">
            <div className="w-20 h-28 shrink-0 rounded-xl overflow-hidden bg-black border border-gold-500/30 p-1 flex items-center justify-center">
              <img
                src="/logos/tashadrapes_small.png"
                alt="Tasha Drapes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-serif text-lg font-bold text-white">Tasha Drapes</h4>
              <p className="text-xs text-rose-300">Curated Sarees & Blouses for Sale • Australia</p>
              <p className="text-xs text-stone-400">
                Timeless Kanjivaram, Banarasi, and SUTA artisanal handloom cottons with bespoke styling.
              </p>
              <a
                href="https://www.instagram.com/tashadrapes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 pt-1 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>View Instagram Profile: @tashadrapes</span>
              </a>
            </div>
          </div>

          {/* Brand 2: Tasha Costumes */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-noir-900/60 border border-stone-800 hover:border-emeraldDeep/50 transition-colors text-center sm:text-left">
            <div className="w-20 h-28 shrink-0 rounded-xl overflow-hidden bg-black border border-gold-500/30 p-1 flex items-center justify-center">
              <img
                src="/logos/tashacostumes_small.png"
                alt="Tasha Costumes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-serif text-lg font-bold text-white">Tasha Costumes</h4>
              <p className="text-xs text-emerald-300">Dance Costumes & Accessories for Rental • Sydney</p>
              <p className="text-xs text-stone-400">
                Stage-ready classical dance ensembles, temple jewelry, and props for performers and schools.
              </p>
              <a
                href="https://www.instagram.com/tashacostumes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 pt-1 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>View Instagram Profile: @tashacostumes</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase">
              Tasha by Sujitha
            </h4>
            <p className="text-stone-400 leading-relaxed">
              Official website: <strong>tashabysujitha.com.au</strong>. Dedicated to showcasing Australian Indian diaspora artistry through authentic saree draping and classical dance costume hire.
            </p>
            <div className="space-y-1.5 pt-2 text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>Sydney, NSW, Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a href="tel:0466977408" className="hover:text-gold-300">0466 977 408</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a href="mailto:sujitha.cs@gmail.com" className="hover:text-gold-300">sujitha.cs@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Tasha Costumes Categories */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
              <Drama className="w-3.5 h-3.5" />
              Tasha Costumes (Rentals)
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Classical Dance Costumes</a></li>
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Bharatanatyam & Mohiniyattam</a></li>
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Margamkali & Kathak Costumes</a></li>
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Folk Dance & Bollywood Outfits</a></li>
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Dance Props & Temple Ornaments</a></li>
              <li><a href="#costumes" onClick={() => onSelectBrand('costumes')} className="hover:text-white">Kids & Adults Performance Sets</a></li>
            </ul>
          </div>

          {/* Col 3: Tasha Drapes Collections */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-rose-400 tracking-wider uppercase flex items-center gap-1.5">
              <Shirt className="w-3.5 h-3.5" />
              Tasha Drapes (Sarees)
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">Pure Kanjivaram Silks</a></li>
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">SUTA Artisanal Handloom Cotton</a></li>
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">Heritage Banarasi Brocades</a></li>
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">Botanical Organza Drapes</a></li>
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">Bespoke Hand-Embroidered Blouses</a></li>
              <li><a href="#drapes" onClick={() => onSelectBrand('drapes')} className="hover:text-white">Sydney Saree Draping Services</a></li>
            </ul>
          </div>

          {/* Col 4: Target Audience & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase">
              Target Audience
            </h4>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Proudly supporting Sydney Dance Schools, Choreographers, Cultural Associations, Stage Performers, Schools, and Saree Collectors.
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-stone-400 block mb-1">Follow On Social:</span>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/tashadrapes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-noir-850 border border-stone-800 text-pink-400 hover:border-pink-400 transition-colors"
                  title="Tasha Drapes Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/tashacostumes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-noir-850 border border-stone-800 text-gold-400 hover:border-gold-400 transition-colors"
                  title="Tasha Costumes Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-stone-800 text-center text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Tasha by Sujitha (tashabysujitha.com.au). All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Sydney's Performing Arts & Saree Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
