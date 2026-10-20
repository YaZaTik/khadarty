import React from 'react';
import { ShieldCheck, Truck, Sparkles, CheckCircle2, ArrowDown, MessageCircle, Star } from 'lucide-react';
import { Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

interface HeroBannerProps {
  lang: Language;
  onExplorePacks: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ lang, onExplorePacks }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-[#F9FAFB] pt-8 pb-14 border-b border-neutral-200/60">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Text (7 cols) */}
          <div className="lg:col-span-7 text-start">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20 text-xs sm:text-sm font-bold mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.heroTag}</span>
            </div>

            {/* Slogan Arabic & French */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.2] mb-3">
              {lang === 'ar' ? (
                <>
                  <span className="text-[#2E7D32]">خضرة الخير..</span> من الجنان لـباب الدار
                </>
              ) : (
                <>
                  <span className="text-[#2E7D32]">Khodrat El Kheir :</span> La qualité du Souk, la simplicité du Web.
                </>
              )}
            </h1>

            {/* Counterpart Slogan banner */}
            <div className="inline-block px-3 py-1 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold rounded-lg mb-4">
              {lang === 'ar' ? '« La qualité du Souk, la simplicité du Web »' : '« خضرة الخير.. من الجنان لـباب الدار »'}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{lang === 'ar' ? 'الدفع نقداً بعد المعاينة والرضا التام' : 'Paiement à la livraison après contrôle'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{lang === 'ar' ? 'تخصيص الخضر (استبدال حتى 2 مجاناً)' : 'Personnalisation libre (échange de 2 légumes)'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{lang === 'ar' ? 'خضار وفواكه طازجة تقطف كل صباح' : 'Cueillette ultra-fraîche du matin'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{lang === 'ar' ? 'توصيل لباب الشقة في أكادير ونواحيها' : 'Livraison jusqu’à votre porte (Grand Agadir)'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExplorePacks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2E7D32] hover:bg-[#256628] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all transform active:scale-95"
              >
                <span>{t.orderNow}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  lang === 'ar'
                    ? 'السلام عليكم، بغيت نستفسر على توصيل قفف الخضر والفواكه في أكادير 🌿'
                    : 'Bonjour, je souhaite des renseignements sur la livraison de paniers de légumes à Agadir 🌿'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-sm sm:text-base border border-neutral-300 shadow-xs hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>{t.callUs}</span>
              </a>
            </div>

            {/* Customer Rating summary */}
            <div className="mt-7 flex items-center gap-3 pt-5 border-t border-neutral-200/80">
              <div className="flex items-center text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-neutral-800">
                4.9 / 5
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                {lang === 'ar' ? 'تقييم زبناء أكادير وإنزكان وآيت ملول' : 'Avis certifiés Grand Agadir & Souss'}
              </span>
            </div>
          </div>

          {/* Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main photograph */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                  alt="خضار وفواكه طازجة - خضرة الخير بأكادير"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white text-start">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-neutral-900 text-xs font-black">
                      {lang === 'ar' ? 'طراوة اليوم 100%' : '100% Frais du Jour'}
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {lang === 'ar' ? 'مباشرة من مزارع سوس' : 'Direct Producteurs Souss'}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white font-arabic">
                    {lang === 'ar' ? 'قفة الخضر.. معزولة حبة بحبة' : 'Paniers de légumes sélectionnés avec soin'}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5">
                    {lang === 'ar' ? 'طماطم، بطاطس، بصل، جزر، فلفل، قرع، ومنسمات طازجة' : 'Tomates, pommes de terre, oignons, carottes, poivrons et herbes'}
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Price / Savings */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white border border-neutral-200/90 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 animate-pulse">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#F59E0B] font-extrabold text-lg">
                  🏷️
                </div>
                <div className="text-start">
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">
                    {lang === 'ar' ? 'ابتداءً من' : 'À partir de'}
                  </span>
                  <span className="text-sm font-black text-neutral-900">
                    125 {t.currency} <span className="text-xs font-normal text-neutral-500">/ 15 kg</span>
                  </span>
                </div>
              </div>

              {/* Floating Badge 2 - Satisfaction Guaranteed */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white border border-neutral-200/90 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#2E7D32]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-start">
                  <span className="block text-xs font-black text-neutral-900">
                    {lang === 'ar' ? 'ضمان الرضا 100%' : 'Garantie 100% Satisfait'}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">
                    {lang === 'ar' ? 'ما عجباتكش، ما تخلص والو' : 'Paiement après vérification'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
