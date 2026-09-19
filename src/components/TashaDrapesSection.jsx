import React, { useState } from 'react';
import { Shirt, Sparkles, Filter, CheckCircle2, MessageCircle, Heart, ArrowUpRight, ShieldCheck, Gem } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { DRAPES_CATEGORIES } from '../data/categories';
import { DRAPES_PRODUCTS } from '../data/products';

export default function TashaDrapesSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = DRAPES_PRODUCTS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.categories.includes(selectedCategory);
  });

  return (
    <section id="drapes" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-gradient-to-b from-noir-950 via-noir-900 to-noir-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Brand Header Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-ruby-dark/60 via-noir-900/90 to-noir-950 border border-ruby/40 shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-ruby/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ruby/30 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
                <Shirt className="w-3.5 h-3.5 text-rose-400" />
                Saree Boutique & Styling Portal
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Tasha Drapes
                <span className="block text-xl sm:text-2xl text-gold-400 font-sans font-normal mt-1">
                  Curated Sarees & Blouses for Sale • Australia
                </span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Tasha Drapes offers a hand-curated collection of sarees for customers across Australia, featuring heirloom Kanjivarams, breathable SUTA artisanal cottons, organza drapes, and custom hand-embroidered blouses.
              </p>

              {/* Instagram link & reassurance */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://www.instagram.com/tashadrapes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-noir-900 border border-pink-500/40 text-pink-300 hover:text-white hover:border-pink-400 text-xs font-medium transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Follow @tashadrapes on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2 text-xs text-stone-400 bg-noir-900/80 px-3 py-2 rounded-xl border border-stone-800">
                  <Gem className="w-3.5 h-3.5 text-gold-400" />
                  <span>Enquire before purchasing • Personalized video previews</span>
                </div>
              </div>
            </div>

            {/* Sujitha Styling Consultation Box */}
            <div className="w-full lg:w-80 shrink-0 bg-noir-850/90 p-5 rounded-2xl border border-gold-500/25 shadow-xl space-y-3 text-xs">
              <h4 className="font-serif text-gold-300 font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                Draping & Styling by Sujitha
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Need guidance choosing the right weave for an upcoming wedding, gala, or festive occasion? Sujitha offers personalized styling consultations in Sydney:
              </p>
              <ul className="space-y-1.5 text-stone-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Blouse color & neckline recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pleating & saree pre-draping service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Australia-wide tracked express shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collection Filter Chips */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Curated Collections</span>
              <h3 className="font-serif text-2xl font-bold text-white">Explore Saree Varieties</h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {DRAPES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-ruby text-white font-bold shadow-lg shadow-ruby/30 scale-105'
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

        {/* Saree Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-noir-850/80 border border-stone-800 hover:border-ruby/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-ruby/15"
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
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-ruby/90 text-white border border-rose-400/40 backdrop-blur-sm">
                    For Sale
                  </span>
                  {product.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/90 text-noir-950 backdrop-blur-sm">
                      Handpicked
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-noir-950/85 text-stone-300 border border-stone-800 backdrop-blur-sm">
                    {product.fabric || 'Pure Silk / Cotton'}
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

                {/* Saree Weave & Inclusions */}
                <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-stone-400">Weave Style:</span>
                    <span className="text-gold-400 font-medium">{product.weave}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-stone-400">Colorway:</span>
                    <span className="text-stone-300">{product.colors.join(', ')}</span>
                  </div>
                </div>

                {/* Package Inclusions */}
                <div className="flex flex-wrap gap-1 pt-1 text-[11px] text-stone-400">
                  {product.includes.map((inc, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-noir-900 border border-stone-800/80">
                      {inc}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-800/80">
                  <button
                    onClick={() => onOpenEnquiry(product)}
                    className="w-full py-2 px-3 rounded-xl bg-ruby hover:bg-ruby-light text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <Heart className="w-3.5 h-3.5 text-gold-300" />
                    <span>Enquire to Buy</span>
                  </button>

                  <a
                    href={`https://wa.me/61466977408?text=Hello%20Sujitha,%20I%20would%20like%20to%20enquire%20about%20purchasing%20the%20"${encodeURIComponent(product.name)}"%20from%20Tasha%20Drapes.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-noir-900 hover:bg-ruby-dark border border-ruby/40 text-rose-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
