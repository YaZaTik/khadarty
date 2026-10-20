import React from 'react';
import { Check, Sparkles, SlidersHorizontal, CheckCircle, Scale, Users } from 'lucide-react';
import { Pack, Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { SwapSelection } from '../utils/whatsapp';

interface PackCardsProps {
  packs: Pack[];
  selectedPackId: string;
  onSelectPack: (pack: Pack) => void;
  lang: Language;
  isSubscribed: boolean;
  swapsByPack: { [packId: string]: SwapSelection[] };
  onOpenSwapModal: (pack: Pack) => void;
}

export const PackCards: React.FC<PackCardsProps> = ({
  packs,
  selectedPackId,
  onSelectPack,
  lang,
  isSubscribed,
  swapsByPack,
  onOpenSwapModal,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="packs-section" className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{lang === 'ar' ? 'جودة طازجة 100% يومياً' : 'Fraîcheur garantie tous les jours'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-2">
            {t.packsTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.packsSubtitle}
          </p>
        </div>

        {/* 3 Pack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packs.map((pack) => {
            const isSelected = selectedPackId === pack.id;
            const swaps = swapsByPack[pack.id] || [];
            
            // Calculate discounted price
            const regularPrice = pack.price;
            const discountedPrice = Math.round(regularPrice * 0.9);
            const currentPrice = isSubscribed ? discountedPrice : regularPrice;

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-3xl transition-all duration-300 overflow-hidden border-2 text-start ${
                  pack.isPopular
                    ? 'border-[#2E7D32] bg-white shadow-xl shadow-emerald-950/10 md:-translate-y-2'
                    : isSelected
                    ? 'border-[#2E7D32] bg-white shadow-lg'
                    : 'border-neutral-200/90 bg-white hover:border-neutral-300 shadow-sm'
                }`}
              >
                {/* Popular Badge on 20kg pack */}
                {pack.isPopular && (
                  <div className="bg-gradient-to-r from-[#2E7D32] via-[#1B5E20] to-[#2E7D32] text-white text-xs font-black py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{t.popularBadge}</span>
                  </div>
                )}

                {/* Pack Image Header */}
                <div className="relative h-44 overflow-hidden bg-neutral-100">
                  <img
                    src={pack.image}
                    alt={pack.name[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                        <Scale className="w-3.5 h-3.5 text-[#FDE68A]" />
                        <span>{pack.weightKg} {lang === 'ar' ? 'كيلوغرام' : 'kg'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white/90 border border-white/20">
                        <Users className="w-3 h-3 text-[#FDE68A]" />
                        <span>{pack.idealFor[lang]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Pack Titles */}
                    <div className="mb-3">
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                        {pack.name[lang]}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-1 leading-relaxed">
                        {pack.subtitle[lang]}
                      </p>
                    </div>

                    {/* Price display with discount support */}
                    <div className="flex items-baseline gap-2 py-3 border-y border-neutral-100 my-4">
                      {isSubscribed ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-[#2E7D32]">
                            {discountedPrice}
                          </span>
                          <span className="text-lg text-neutral-400 line-through font-semibold">
                            {regularPrice}
                          </span>
                          <span className="text-xs font-bold text-[#2E7D32] bg-emerald-100 px-2 py-0.5 rounded-full">
                            -10%
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl font-black text-neutral-900">
                            {regularPrice}
                          </span>
                          <span className="text-sm font-bold text-neutral-600">
                            {t.currency}
                          </span>
                        </div>
                      )}
                      <span className="text-xs text-neutral-400 font-medium">
                        {t.perPack}
                      </span>
                    </div>

                    {/* Content Items List */}
                    <div className="mb-5">
                      <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                        {t.itemsIncluded}
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                        {pack.items.map((item, idx) => {
                          const itemName = item.name[lang];
                          // Check if swapped
                          const swapForThis = swaps.find((s) => s.originalItem === itemName);

                          return (
                            <li key={idx} className="flex items-start justify-between gap-2 py-0.5">
                              <div className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                                {swapForThis ? (
                                  <div className="flex items-center gap-1">
                                    <span className="line-through text-red-500 text-[11px]">
                                      {itemName}
                                    </span>
                                    <span className="text-neutral-400 text-[10px]">➔</span>
                                    <span className="font-bold text-[#2E7D32] bg-emerald-50 px-1.5 rounded">
                                      {swapForThis.replacementItem}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="font-medium text-neutral-800">
                                    {itemName}
                                  </span>
                                )}
                              </div>
                              <span className="text-neutral-400 text-xs shrink-0 font-normal">
                                {item.weight[lang]}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                    {/* Custom Swap Trigger Button */}
                    <button
                      type="button"
                      onClick={() => onOpenSwapModal(pack)}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-neutral-300 hover:border-[#2E7D32] hover:bg-emerald-50/50 text-neutral-700 hover:text-[#2E7D32] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>{t.customSwapBtn}</span>
                      {swaps.length > 0 && (
                        <span className="bg-[#2E7D32] text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
                          {swaps.length}/2
                        </span>
                      )}
                    </button>

                    {/* Main Select Button */}
                    <button
                      type="button"
                      onClick={() => onSelectPack(pack)}
                      className={`w-full py-3 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#2E7D32] text-white shadow-md shadow-emerald-950/20'
                          : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-[#FDE68A]" />
                          <span>{t.selectedPackBadge}</span>
                        </>
                      ) : (
                        <span>{t.selectPackBtn}</span>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
