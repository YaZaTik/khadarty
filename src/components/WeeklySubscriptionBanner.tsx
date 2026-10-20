import React from 'react';
import { Sparkles, CalendarCheck, Check, Shield } from 'lucide-react';
import { Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface WeeklySubscriptionBannerProps {
  lang: Language;
  isSubscribed: boolean;
  onToggleSubscription: (checked: boolean) => void;
}

export const WeeklySubscriptionBanner: React.FC<WeeklySubscriptionBannerProps> = ({
  lang,
  isSubscribed,
  onToggleSubscription,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="max-w-6xl mx-auto px-4 my-8">
      <div
        className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 p-5 sm:p-7 ${
          isSubscribed
            ? 'bg-gradient-to-r from-emerald-900 via-[#1B5E20] to-[#2E7D32] border-[#2E7D32] text-white shadow-xl shadow-emerald-950/20'
            : 'bg-gradient-to-r from-white via-amber-50/50 to-white border-amber-300/80 shadow-md text-neutral-900'
        }`}
      >
        {/* Background badge icon */}
        <div className="absolute -bottom-6 -right-6 text-8xl opacity-10 select-none pointer-events-none">
          🔄
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-start">
          
          {/* Information */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide ${
                  isSubscribed
                    ? 'bg-[#F59E0B] text-neutral-950'
                    : 'bg-[#2E7D32] text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.subscriptionBadge}</span>
              </span>

              <span
                className={`text-xs font-semibold ${
                  isSubscribed ? 'text-emerald-200' : 'text-neutral-500'
                }`}
              >
                {lang === 'ar' ? 'توصيل أسبوعي تلقائي • بدون التزام' : 'Livraison hebdomadaire automatique • Sans engagement'}
              </span>
            </div>

            <h2
              className={`text-xl sm:text-2xl font-black mb-2 ${
                isSubscribed ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {t.subscriptionTitle}
            </h2>

            <p
              className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${
                isSubscribed ? 'text-emerald-100' : 'text-neutral-600'
              }`}
            >
              {t.subscriptionDesc}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium">
              <span className={`inline-flex items-center gap-1 ${isSubscribed ? 'text-emerald-200' : 'text-neutral-600'}`}>
                <Check className="w-3.5 h-3.5 text-[#F59E0B]" />
                {lang === 'ar' ? 'توصيل منتظم كل سبت أو اثنين' : 'Livraison programmée le jour de votre choix'}
              </span>
              <span className={`inline-flex items-center gap-1 ${isSubscribed ? 'text-emerald-200' : 'text-neutral-600'}`}>
                <Check className="w-3.5 h-3.5 text-[#F59E0B]" />
                {lang === 'ar' ? 'يمكنك إيقافه أو تأجيله برسالة واتساب واحدة' : 'Suspendable ou annulable par simple message WhatsApp'}
              </span>
            </div>
          </div>

          {/* Toggle Button Box */}
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => onToggleSubscription(!isSubscribed)}
              className={`w-full sm:w-auto cursor-pointer flex items-center justify-between sm:justify-start gap-4 px-6 py-4 rounded-2xl font-black text-sm sm:text-base transition-all shadow-md active:scale-98 ${
                isSubscribed
                  ? 'bg-white text-[#1B5E20] hover:bg-neutral-100 shadow-white/10'
                  : 'bg-[#2E7D32] text-white hover:bg-[#256628] shadow-emerald-900/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <CalendarCheck className="w-5 h-5" />
                <span>
                  {isSubscribed ? t.subscribedState : t.unsubscribedState}
                </span>
              </div>

              {/* Visual switch toggle */}
              <div
                className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out shrink-0 ${
                  isSubscribed ? 'bg-[#2E7D32]' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                    isSubscribed ? (lang === 'ar' ? '-translate-x-6' : 'translate-x-6') : 'translate-x-0'
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
