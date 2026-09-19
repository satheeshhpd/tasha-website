import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Menu, X, Sparkles, Shirt, Drama } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export default function Navbar({ activeBrand, setActiveBrand, onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', brand: 'all' },
    { label: 'Tasha Drapes (Sarees)', href: '#drapes', brand: 'drapes', icon: Shirt },
    { label: 'Tasha Costumes (Rentals)', href: '#costumes', brand: 'costumes', icon: Drama },
    { label: 'About Us', href: '#about', brand: 'all' },
    { label: 'Why Choose Us', href: '#why-us', brand: 'all' },
    { label: 'Reviews', href: '#testimonials', brand: 'all' },
    { label: 'FAQs', href: '#faqs', brand: 'all' },
    { label: 'Contact', href: '#contact', brand: 'all' },
  ];

  const handleBrandSelect = (brand) => {
    setActiveBrand(brand);
    if (brand === 'drapes') {
      const el = document.getElementById('drapes');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (brand === 'costumes') {
      const el = document.getElementById('costumes');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-noir-950/90 backdrop-blur-md border-b border-gold-500/20 transition-all duration-300">
      {/* Top micro bar with contact info */}
      <div className="bg-noir-900 border-b border-gold-500/10 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              Sydney, NSW, Australia
            </span>
            <span className="hidden sm:inline-block text-stone-600">•</span>
            <a 
              href="tel:0466977408" 
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              0466 977 408
            </a>
            <span className="hidden sm:inline-block text-stone-600">•</span>
            <a 
              href="mailto:sujitha.cs@gmail.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              sujitha.cs@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-stone-400 text-[11px] hidden lg:inline">Official Instagram:</span>
            <a 
              href="https://www.instagram.com/tashadrapes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-stone-300 hover:text-pink-400 transition-colors"
              title="Tasha Drapes on Instagram"
            >
              <Instagram className="w-3 h-3 text-pink-400" />
              <span>@tashadrapes</span>
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href="https://www.instagram.com/tashacostumes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-stone-300 hover:text-gold-400 transition-colors"
              title="Tasha Costumes on Instagram"
            >
              <Instagram className="w-3 h-3 text-gold-400" />
              <span>@tashacostumes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border border-gold-500/40 p-0.5 bg-noir-850 group-hover:border-gold-400 transition-all">
              <img 
                src="/logos/tashadrapes_small.png" 
                alt="Tasha by Sujitha" 
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
              </span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 block">
                TASHA
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 font-light block -mt-1">
                by Sujitha
              </span>
            </div>
          </a>
        </div>

        {/* Brand Switcher Pill Buttons (Desktop) */}
        <div className="hidden md:flex items-center bg-noir-850/80 p-1 rounded-full border border-gold-500/20 shadow-inner">
          <button
            onClick={() => handleBrandSelect('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeBrand === 'all'
                ? 'bg-gold-gradient text-noir-950 font-bold shadow-md shadow-gold-500/20'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            All Brands
          </button>
          <button
            onClick={() => handleBrandSelect('drapes')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeBrand === 'drapes'
                ? 'bg-ruby text-white font-bold shadow-md shadow-ruby/30'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Shirt className="w-3 h-3 text-gold-300" />
            Tasha Drapes
            <span className="text-[10px] bg-noir-900/60 text-gold-300 px-1.5 py-0.2 rounded-full">Sale</span>
          </button>
          <button
            onClick={() => handleBrandSelect('costumes')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeBrand === 'costumes'
                ? 'bg-emeraldDeep text-white font-bold shadow-md shadow-emeraldDeep/30'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Drama className="w-3 h-3 text-gold-300" />
            Tasha Costumes
            <span className="text-[10px] bg-noir-900/60 text-gold-300 px-1.5 py-0.2 rounded-full">Rental</span>
          </button>
        </div>

        {/* Header CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20would%20like%20to%20enquire%20about%20Tasha%20Drapes%20and%20Tasha%20Costumes."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 text-xs font-medium transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp
          </a>
          <button
            onClick={() => onOpenEnquiry(null)}
            className="px-4 py-1.5 rounded-full bg-gold-gradient text-noir-950 text-xs font-bold hover:shadow-lg hover:shadow-gold-500/25 transition-all"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenEnquiry(null)}
            className="px-3 py-1 rounded-full bg-gold-500 text-noir-950 text-xs font-bold"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-300 hover:text-gold-400 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-noir-950/98 border-b border-gold-500/20 px-6 py-4 space-y-4">
          <div className="space-y-1 pb-3 border-b border-stone-800">
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-2">
              Select Brand View
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setActiveBrand('all'); setMobileMenuOpen(false); }}
                className={`py-2 text-xs rounded-lg text-center font-medium ${
                  activeBrand === 'all' ? 'bg-gold-500 text-noir-950 font-bold' : 'bg-noir-850 text-stone-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => { handleBrandSelect('drapes'); setMobileMenuOpen(false); }}
                className={`py-2 text-xs rounded-lg text-center font-medium ${
                  activeBrand === 'drapes' ? 'bg-ruby text-white font-bold' : 'bg-noir-850 text-stone-300'
                }`}
              >
                Drapes
              </button>
              <button
                onClick={() => { handleBrandSelect('costumes'); setMobileMenuOpen(false); }}
                className={`py-2 text-xs rounded-lg text-center font-medium ${
                  activeBrand === 'costumes' ? 'bg-emeraldDeep text-white font-bold' : 'bg-noir-850 text-stone-300'
                }`}
              >
                Costumes
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-2 text-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-stone-300 hover:text-gold-400 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.icon && <item.icon className="w-4 h-4 text-stone-500" />}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-stone-800 space-y-2">
            <a
              href="tel:0466977408"
              className="w-full flex items-center justify-center gap-2 py-2 bg-noir-850 border border-gold-500/30 rounded-lg text-xs text-gold-300 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Sujitha: 0466 977 408
            </a>
            <a
              href="https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20would%20like%20to%20enquire%20about%20Tasha%20by%20Sujitha."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 bg-emerald-900/60 border border-emerald-500/40 rounded-lg text-xs text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
