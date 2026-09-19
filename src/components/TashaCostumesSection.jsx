import React, { useState } from 'react';
import { Drama, Sparkles, Filter, CheckCircle2, MessageCircle, Calendar, Users, Shield, ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { COSTUME_CATEGORIES, TARGET_AUDIENCE } from '../data/categories';
import { COSTUME_PRODUCTS } from '../data/products';

export default function TashaCostumesSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = COSTUME_PRODUCTS.filter((item) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      item.categories.includes(selectedCategory);

    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="costumes" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-gradient-to-b from-noir-900 via-noir-950 to-noir-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Brand Header Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-emerald-950/60 via-noir-900/90 to-noir-950 border border-emerald-500/30 shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-emeraldDeep/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emeraldDeep/40 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Drama className="w-3.5 h-3.5" />
                Sydney Costume Rental Portal
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Tasha Costumes
                <span className="block text-xl sm:text-2xl text-gold-400 font-sans font-normal mt-1">
                  Dance Costumes & Accessories for Rental • Sydney
                </span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Tasha Costumes is a Sydney-based costume rental business providing high-quality costumes and accessories for classical dance performances, cultural events, school functions, stage shows, festivals, and competitions.
              </p>

              {/* Instagram link & stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://www.instagram.com/tashacostumes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-noir-900 border border-emerald-500/40 text-emerald-300 hover:text-white hover:border-emerald-400 text-xs font-medium transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4 text-emerald-400" />
                  <span>Follow @tashacostumes on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2 text-xs text-stone-400 bg-noir-900/80 px-3 py-2 rounded-xl border border-stone-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Enquiry-based bookings • No online payment required</span>
                </div>
              </div>
            </div>

            {/* Quick Rental Process Card */}
            <div className="w-full lg:w-80 shrink-0 bg-noir-850/90 p-5 rounded-2xl border border-gold-500/25 shadow-xl space-y-3 text-xs">
              <h4 className="font-serif text-gold-300 font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                How Rentals Work in Sydney
              </h4>
              <ul className="space-y-2.5 text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emeraldDeep/80 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">1</span>
                  <span>Browse our 17 categories below and select your items.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emeraldDeep/80 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">2</span>
                  <span>Click <strong>Check Availability</strong> or WhatsApp us your performance dates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emeraldDeep/80 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">3</span>
                  <span>Schedule convenient local pickup & try-on in Sydney.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emeraldDeep/80 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">4</span>
                  <span>Return post-event. We handle professional dry-cleaning!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Audience Showcase */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">Who We Serve</span>
              <h3 className="font-serif text-2xl font-bold text-white">Trusted Across the Sydney Dance Community</h3>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              From prestigious Sydney dance academies like Nitya Natyashale to youth school concerts and community festivals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {TARGET_AUDIENCE.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-noir-850/60 p-4 rounded-xl border border-stone-800/80 hover:border-emerald-500/40 transition-all text-center space-y-1.5 group"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-200 text-xs leading-snug">{item.title}</h4>
                <p className="text-[11px] text-stone-400 line-clamp-2 leading-tight">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Filter Tabs (All 17 Categories) */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                Browse 17 Costume & Accessory Categories
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Select a Category</h3>
            </div>

            {/* Quick Search */}
            <div className="w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Bharatanatyam, props, jewelry..."
                className="w-full px-3.5 py-2 rounded-xl bg-noir-850 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          {/* 17 Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {COSTUME_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-700/30 scale-105'
                    : 'bg-noir-850 text-stone-300 hover:bg-noir-800 hover:text-white border border-stone-800'
                }`}
              >
                <span>{cat.name}</span>
                {selectedCategory === cat.id && (
                  <CheckCircle2 className="w-3 h-3 text-gold-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Costume Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-noir-850/80 border border-stone-800 hover:border-emerald-500/40 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emeraldDeep/10"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-noir-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm">
                    Rental • Sydney
                  </span>
                  {product.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/90 text-noir-950 backdrop-blur-sm">
                      Popular
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-noir-950/80 text-stone-300 border border-stone-800 backdrop-blur-sm">
                    {product.categories[1] ? product.categories[1].toUpperCase() : 'CLASSICAL'}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Inclusions List */}
                <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400 block">
                    Set Inclusions:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-stone-300">
                    {product.includes.map((inc, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-noir-900 border border-stone-800/80">
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizes Available */}
                <div className="text-[11px] text-stone-400 flex items-center justify-between pt-1">
                  <span>Sizes:</span>
                  <span className="text-stone-300 font-medium">
                    {product.sizesAvailable.join(', ')}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-800/80">
                  <button
                    onClick={() => onOpenEnquiry(product)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Check Dates</span>
                  </button>

                  <a
                    href={`https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20am%20interested%20in%20renting%20the%20"${encodeURIComponent(product.name)}"%20for%20an%20upcoming%20dance%20performance.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-noir-900 hover:bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-noir-850/40 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-sm">No costumes found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-gold-400 underline font-semibold"
            >
              Clear filters and show all costumes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
