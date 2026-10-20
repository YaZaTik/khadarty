import React from 'react';
import { Leaf, ShieldCheck, Sliders, Home } from 'lucide-react';
import { Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-[#2E7D32]" />,
      title: t.feature1Title,
      desc: t.feature1Desc,
      tag: lang === 'ar' ? 'طبيعي 100%' : '100% Naturel',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />,
      title: t.feature2Title,
      desc: t.feature2Desc,
      tag: lang === 'ar' ? 'أداء عند الاستلام' : 'Paiement à la livraison',
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#2E7D32]" />,
      title: t.feature3Title,
      desc: t.feature3Desc,
      tag: lang === 'ar' ? 'تخصيص مجاني' : 'Sans frais',
    },
    {
      icon: <Home className="w-6 h-6 text-[#2E7D32]" />,
      title: t.feature4Title,
      desc: t.feature4Desc,
      tag: lang === 'ar' ? 'حتى عتبة الباب' : 'Direct chez vous',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#2E7D32]/40 hover:bg-emerald-50/30 transition-all text-start group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-neutral-200/70 text-neutral-700">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-neutral-900 mb-2">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
