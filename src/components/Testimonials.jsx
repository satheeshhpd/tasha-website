import React from 'react';
import { Star, Quote, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-noir-950">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Client & Community Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Loved Across Sydney's Stage & Saree Community
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Read what dance directors, cultural coordinators, and saree lovers have to say about working with Sujitha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-noir-850/70 border border-stone-800 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <Quote className="absolute top-5 right-6 w-8 h-8 text-stone-800 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-800/80">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-400">{item.role}</p>
                  <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-500" />
                    {item.location}
                  </p>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                  item.tag === 'Tasha Costumes' 
                    ? 'bg-emeraldDeep/30 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-ruby/30 text-rose-300 border border-ruby/40'
                }`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
