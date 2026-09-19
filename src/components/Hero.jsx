import React from 'react';
import { Sparkles, ArrowRight, Phone, MessageCircle, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export default function Hero({ onSelectBrand, onOpenEnquiry }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-ruby/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emeraldDeep/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full text-center space-y-8">
        {/* Brand Pre-title Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-850/90 border border-gold-500/30 text-xs text-gold-300 font-medium shadow-lg backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span className="tracking-wide">Sydney's Destination for Indian Elegance & Classical Performing Arts</span>
          <span className="hidden sm:inline-block text-stone-600">|</span>
          <span className="hidden sm:flex items-center gap-1 text-stone-400">
            <MapPin className="w-3 h-3 text-gold-500" />
            Sydney, NSW
          </span>
        </div>

        {/* Master Headline */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Elegance Draped in Tradition,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 block sm:inline">
              Artistry Brought to Stage.
            </span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to <span className="text-gold-300 font-medium">Tasha by Sujitha</span>. Uniting two curated worlds: bespoke sarees for celebration, and stage-ready authentic classical dance costumes for rental in Sydney.
          </p>
        </div>

        {/* Dual Brand Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto pt-6 text-left">
          {/* Brand Card 1: Tasha Drapes */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-noir-800/95 to-noir-900/95 border border-gold-500/25 hover:border-ruby/60 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-ruby/15 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="flex justify-between items-start mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-ruby/20 border border-ruby/40 text-rose-300">
                Sarees & Blouses for Sale
              </span>
              <span className="text-xs text-stone-400">Australia-wide</span>
            </div>

            {/* Logo and Brand Presentation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-28 sm:w-32 h-40 sm:h-44 shrink-0 rounded-xl overflow-hidden bg-black border border-gold-500/30 p-2 shadow-lg group-hover:border-gold-400 transition-all flex items-center justify-center">
                <img 
                  src="/logos/tashadrapes_small.png" 
                  alt="Tasha Drapes Logo - by Sujitha" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  Tasha Drapes
                </h2>
                <p className="text-xs text-gold-400 tracking-wider uppercase font-medium">
                  by Sujitha • Saree Boutique
                </p>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                  A curated collection of timeless sarees for customers across Australia. Featuring heirloom Kanjivarams, SUTA handloom cottons, organza drapes, and designer blouses.
                </p>
              </div>
            </div>

            {/* Key Offerings Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] text-stone-300">
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Pure Kanjivaram Silks</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">SUTA Artisanal Cotton</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Banarasi Brocades</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Custom Blouse Styling</span>
            </div>

            {/* Instagram Profile & Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80">
              <a
                href="https://www.instagram.com/tashadrapes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-pink-950/40 border border-pink-500/30 hover:bg-pink-900/40 hover:border-pink-400 text-pink-300 text-xs font-medium transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>View Instagram Profile: @tashadrapes</span>
              </a>

              <button
                onClick={() => onSelectBrand('drapes')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-ruby via-rose-900 to-ruby hover:from-ruby-light hover:to-ruby text-white text-xs sm:text-sm font-semibold shadow-lg shadow-ruby/20 transition-all group-hover:scale-[1.01]"
              >
                <span>Explore Tasha Drapes Collection</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Brand Card 2: Tasha Costumes */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-noir-800/95 to-noir-900/95 border border-gold-500/25 hover:border-emeraldDeep/60 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emeraldDeep/15 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="flex justify-between items-start mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emeraldDeep/30 border border-emeraldDeep/50 text-emerald-300">
                Dance Costumes & Accessories for Rental
              </span>
              <span className="text-xs text-gold-400 font-medium">Sydney Rental Hub</span>
            </div>

            {/* Logo and Brand Presentation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-28 sm:w-32 h-40 sm:h-44 shrink-0 rounded-xl overflow-hidden bg-black border border-gold-500/30 p-2 shadow-lg group-hover:border-gold-400 transition-all flex items-center justify-center">
                <img 
                  src="/logos/tashacostumes_small.png" 
                  alt="Tasha Costumes Logo - by Sujitha" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  Tasha Costumes
                </h2>
                <p className="text-xs text-emerald-400 tracking-wider uppercase font-medium">
                  by Sujitha • Costume Rentals
                </p>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                  Sydney-based costume rental business providing stage-grade costumes and authentic temple accessories for dance performances, cultural festivals, school functions, and competitions.
                </p>
              </div>
            </div>

            {/* Key Offerings Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] text-stone-300">
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Bharatanatyam</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Mohiniyattam</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Margamkali</span>
              <span className="px-2.5 py-0.5 rounded-full bg-noir-850 border border-stone-800">Temple Ornaments & Props</span>
            </div>

            {/* Instagram Profile & Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80">
              <a
                href="https://www.instagram.com/tashacostumes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 hover:border-emerald-400 text-emerald-300 text-xs font-medium transition-all"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
                <span>View Instagram Profile: @tashacostumes</span>
              </a>

              <button
                onClick={() => onSelectBrand('costumes')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-emeraldDeep via-emerald-800 to-emeraldDeep hover:from-emeraldDeep-light hover:to-emeraldDeep text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emeraldDeep/20 transition-all group-hover:scale-[1.01]"
              >
                <span>Explore Tasha Costumes (17 Categories)</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Direct Contact reassurance bar */}
        <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Sydney Local Try-ons & Pickup Available</span>
          </div>
          <span className="hidden sm:inline-block text-stone-700">•</span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Direct Call & WhatsApp: <strong className="text-stone-200">0466 977 408</strong></span>
          </div>
          <span className="hidden sm:inline-block text-stone-700">•</span>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-400" />
            <span>Enquiry-Driven • No Online Payment Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
