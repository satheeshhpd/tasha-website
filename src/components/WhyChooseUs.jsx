import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Clock, Truck, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: MapPin,
      title: 'Sydney Local Convenience',
      desc: 'No overseas delays or sizing surprises. Enjoy local Sydney try-on sessions, flexible pickup, and easy post-event returns.',
      color: 'text-gold-400',
      border: 'hover:border-gold-500/40'
    },
    {
      icon: ShieldCheck,
      title: 'Pristine & Stage-Grade Quality',
      desc: 'Every costume and accessory is maintained in immaculate condition, professionally dry-cleaned, and checked for high-motion stage durability.',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/40'
    },
    {
      icon: Sparkles,
      title: 'Complete All-in-One Ensembles',
      desc: 'We save you time by offering matching temple jewelry sets, head ornaments, waist belts, brass ghungroos, and performance props together.',
      color: 'text-gold-300',
      border: 'hover:border-gold-400/40'
    },
    {
      icon: HeartHandshake,
      title: 'Artisanal Saree Curation',
      desc: 'Handpicked directly from master weavers across India—from bridal Kanjivarams to breathable everyday SUTA handloom cottons.',
      color: 'text-rose-400',
      border: 'hover:border-ruby/50'
    },
    {
      icon: Clock,
      title: 'Stress-Free Performance Timelines',
      desc: 'We understand the demands of dress rehearsals and tech runs. We offer generous multi-day rental windows tailored to your performance schedule.',
      color: 'text-gold-400',
      border: 'hover:border-gold-500/40'
    },
    {
      icon: Truck,
      title: 'Australia-Wide Saree Delivery',
      desc: 'Fast, secure, and insured courier delivery across Sydney, Melbourne, Brisbane, Adelaide, Perth, and regional Australia for all saree purchases.',
      color: 'text-emerald-300',
      border: 'hover:border-emeraldDeep/60'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-8 border-t border-gold-500/20 bg-noir-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
            The Tasha Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Why Sydney Chooses Tasha by Sujitha
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Delivering authentic heritage, personal warmth, and stress-free service for dancers, teachers, and saree lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-noir-850/80 border border-stone-800 ${item.border} transition-all duration-300 hover:shadow-xl space-y-3 group`}
            >
              <div className="w-12 h-12 rounded-xl bg-noir-900 border border-stone-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
