import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';
import { Language, DELIVERY_ZONES } from '../data/products';

interface CoverageZonesProps {
  lang: Language;
}

export const CoverageZones: React.FC<CoverageZonesProps> = ({ lang }) => {
  return (
    <section className="py-12 bg-neutral-900 text-white rounded-3xl mx-4 my-8 max-w-6xl md:mx-auto p-6 sm:p-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32] text-white text-xs font-black mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'مناطق التغطية المباشرة' : 'Zones de Livraison'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {lang === 'ar'
                ? 'نوصل يومياً في أكادير، إنزكان، الدشيرة وآيت ملول'
                : 'Livraison quotidienne à Agadir, Inezgane, Dcheira et Aït Melloul'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              {lang === 'ar'
                ? 'فريق توصيل مجهز بسيارات مبردة لضمان وصول الخضار والفواكه طازجة كأنها قطفت تواً من الشجرة'
                : 'Une logistique soignée pour préserver la fraîcheur de vos légumes et fruits jusqu’à votre porte.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#FDE68A] bg-white/10 px-4 py-2 rounded-2xl shrink-0">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === 'ar' ? 'فترتان صباحية ومسائية كل يوم' : '2 créneaux : matin et après-midi'}</span>
          </div>
        </div>

        {/* 4 Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DELIVERY_ZONES.map((zone, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2E7D32] transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#2E7D32] flex items-center justify-center text-white font-bold text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-black text-base text-white">
                  {zone.city[lang]}
                </h3>
              </div>

              <div className="space-y-1 text-xs text-neutral-300">
                {zone.neighborhoods[lang].slice(0, 4).map((n, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-[#F59E0B] shrink-0" />
                    <span className="truncate">{n}</span>
                  </div>
                ))}
                {zone.neighborhoods[lang].length > 4 && (
                  <div className="text-[11px] text-neutral-400 pt-1">
                    +{zone.neighborhoods[lang].length - 4} {lang === 'ar' ? 'أحياء أخرى...' : 'autres quartiers...'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
