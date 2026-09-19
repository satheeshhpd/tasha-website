import React from 'react';
import { Sparkles, Heart, Award, MapPin, Drama, Shirt } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-noir-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Artisan Behind The Brands
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Tasha by Sujitha
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            Rooted in Sydney, celebrating the timeless elegance of Indian textile craftsmanship and the vibrant majesty of classical performing arts.
          </p>
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-noir-900 group">
              <img
                src="/images/saree_kanjivaram_red.jpg"
                alt="Sujitha - Tasha by Sujitha"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-gold-500 text-noir-950">
                  Founder & Creative Director
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Sujitha Sugunan
                </h3>
                <p className="text-xs text-stone-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  Sydney, New South Wales, Australia
                </p>
              </div>
            </div>

            {/* Quick stats / Highlights */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-noir-850 p-4 rounded-2xl border border-stone-800">
                <span className="font-serif text-xl font-bold text-gold-400 block">Sydney</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider">Local Pickup & Fittings</span>
              </div>
              <div className="bg-noir-850 p-4 rounded-2xl border border-stone-800">
                <span className="font-serif text-xl font-bold text-rose-400 block">100% Curated</span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider">Artisan Weaves & Sets</span>
              </div>
            </div>
          </div>

          {/* Text Story (7 columns) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gold-300 font-semibold">Tasha by Sujitha</strong> was founded in Sydney with a single heartfelt mission: to keep our rich cultural heritage vibrant, accessible, and breathtakingly elegant for the Australian community.
              </p>
              
              <p>
                As a passionate patron of classical Indian arts and timeless handloom textiles, Sujitha identified two vital needs within the Sydney diaspora. First, families and performers struggled to find authentic, high-grade classical dance costumes and temple jewelry without bearing the exorbitant cost of overseas shipping. Second, modern saree connoisseurs sought authentic artisanal handlooms, SUTA cottons, and heirloom Kanjivarams with trusted local guidance.
              </p>
            </div>

            {/* Two Pillars Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-noir-850/80 border border-ruby/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-serif font-bold text-base">
                  <Shirt className="w-5 h-5 text-rose-400" />
                  <h4>Tasha Drapes</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  "Draping elegance, one sari at a time." Curated sarees for sale across Australia, celebrating both traditional silk heirlooms and contemporary minimalist handlooms.
                </p>
                <a
                  href="https://www.instagram.com/tashadrapes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-pink-400 hover:text-pink-300 pt-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>@tashadrapes on Instagram</span>
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-noir-850/80 border border-emerald-500/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-serif font-bold text-base">
                  <Drama className="w-5 h-5 text-emerald-400" />
                  <h4>Tasha Costumes</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Sydney's dedicated costume rental service, trusted by premier dance academies, schools, and cultural festivals for Bharatanatyam, Mohiniyattam, Margamkali, and stage accessories.
                </p>
                <a
                  href="https://www.instagram.com/tashacostumes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 pt-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>@tashacostumes on Instagram</span>
                </a>
              </div>
            </div>

            {/* Values / Promise */}
            <div className="pt-2 border-t border-stone-800 space-y-3">
              <h4 className="font-serif text-gold-300 font-bold text-sm">
                Our Sydney Promise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>Authentic stage-ready fabrics & genuine Kemp stones</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>Hygienically maintained & professionally sanitized sets</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Personalized fitting consultations by Sujitha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
