import React from 'react';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { AddOn, Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface AddOnsSectionProps {
  addOns: AddOn[];
  selectedAddOns: { [id: string]: number };
  onToggleAddOn: (id: string) => void;
  lang: Language;
}

export const AddOnsSection: React.FC<AddOnsSectionProps> = ({
  addOns,
  selectedAddOns,
  onToggleAddOn,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="py-12 bg-white/70 border-y border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{lang === 'ar' ? 'أضف ما تحتاجه لقفة متكاملة' : 'Compléments gourmands & utiles'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-2">
            {t.addOnsTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.addOnsSubtitle}
          </p>
        </div>

        {/* 3 Add-on Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addon) => {
            const quantity = selectedAddOns[addon.id] || 0;
            const isAdded = quantity > 0;

            return (
              <div
                key={addon.id}
                className={`flex flex-col justify-between rounded-3xl border-2 transition-all overflow-hidden bg-white text-start ${
                  isAdded
                    ? 'border-[#2E7D32] shadow-lg shadow-emerald-950/10'
                    : 'border-neutral-200 hover:border-neutral-300 shadow-xs'
                }`}
              >
                {/* Image and Badges */}
                <div className="relative h-44 overflow-hidden bg-neutral-100">
                  <img
                    src={addon.image}
                    alt={addon.name[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      {addon.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-[#F59E0B] text-neutral-950 shadow-xs">
                          {addon.badge[lang]}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline justify-between text-white">
                      <span className="text-2xl font-black text-[#FDE68A]">
                        +{addon.price} {t.currency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-neutral-900 mb-1.5">
                      {addon.name[lang]}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {addon.description[lang]}
                    </p>

                    {/* Items chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {addon.items[lang].map((itemStr, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-0.5 rounded-lg bg-neutral-100 text-neutral-700 text-[11px] font-medium"
                        >
                          • {itemStr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Add / Added toggle button */}
                  <button
                    type="button"
                    onClick={() => onToggleAddOn(addon.id)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#2E7D32] text-white shadow-xs'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#FDE68A]" />
                        <span>{t.addedBtn} (+{addon.price} {t.currency})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>{t.addBtn} (+{addon.price} {t.currency})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
