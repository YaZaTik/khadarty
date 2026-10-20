import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, RefreshCw, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Pack, Language, SWAP_ALTERNATIVES } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { SwapSelection } from '../utils/whatsapp';

interface CustomSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  pack: Pack;
  lang: Language;
  swaps: SwapSelection[];
  onUpdateSwaps: (newSwaps: SwapSelection[]) => void;
}

export const CustomSwapModal: React.FC<CustomSwapModalProps> = ({
  isOpen,
  onClose,
  pack,
  lang,
  swaps,
  onUpdateSwaps,
}) => {
  const t = TRANSLATIONS[lang];

  // Selected item to replace from current pack
  const [selectedPackItem, setSelectedPackItem] = useState<string>('');
  // Selected alternative replacement
  const [selectedAlternative, setSelectedAlternative] = useState<string>('');

  if (!isOpen) return null;

  // Filter pack items that can be swapped and aren't already swapped
  const swappablePackItems = pack.items.filter((item) => {
    // If already in swaps as originalItem, don't show again
    return !swaps.some((s) => s.originalItem === item.name[lang]);
  });

  // Filter alternatives that aren't already chosen
  const availableAlternatives = SWAP_ALTERNATIVES.filter((alt) => {
    return !swaps.some((s) => s.replacementItem === alt.name[lang]);
  });

  const canAddSwap = swaps.length < 2;

  const handleAddSwap = () => {
    if (!selectedPackItem || !selectedAlternative || !canAddSwap) return;

    const newSwaps = [
      ...swaps,
      {
        originalItem: selectedPackItem,
        replacementItem: selectedAlternative,
      },
    ];

    onUpdateSwaps(newSwaps);
    setSelectedPackItem('');
    setSelectedAlternative('');
  };

  const handleRemoveSwap = (index: number) => {
    const updated = swaps.filter((_, idx) => idx !== index);
    onUpdateSwaps(updated);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-neutral-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-[#2E7D32] text-white p-5 sm:p-6 flex items-start justify-between gap-4">
          <div className="text-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-lg bg-white/20">
                <RefreshCw className="w-4 h-4 text-[#FDE68A]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FDE68A]">
                {pack.name[lang]}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black">{t.swapModalTitle}</h3>
            <p className="text-xs text-white/80 mt-1 max-w-md">{t.swapModalSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-start">
          
          {/* Swaps quota status */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-xs sm:text-sm font-bold text-neutral-800">
                {t.swapSlotsRemaining}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[0, 1].map((slotIdx) => (
                <span
                  key={slotIdx}
                  className={`px-2.5 py-1 rounded-lg text-xs font-extrabold ${
                    slotIdx < swaps.length
                      ? 'bg-[#2E7D32] text-white'
                      : 'bg-white text-neutral-400 border border-neutral-300'
                  }`}
                >
                  {slotIdx < swaps.length
                    ? lang === 'ar'
                      ? `تم (${slotIdx + 1}/2)`
                      : `Actif (${slotIdx + 1}/2)`
                    : lang === 'ar'
                    ? `متاح (${slotIdx + 1}/2)`
                    : `Dispo (${slotIdx + 1}/2)`}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Applied Swaps list */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
              {t.currentSwaps}
            </h4>

            {swaps.length === 0 ? (
              <p className="text-xs text-neutral-500 bg-neutral-50 p-3.5 rounded-xl border border-dashed border-neutral-300 text-center">
                {t.noSwapsYet}
              </p>
            ) : (
              <div className="space-y-2">
                {swaps.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-amber-50/80 border border-amber-200"
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                      <span className="text-red-700 line-through bg-red-100/70 px-2 py-0.5 rounded-md">
                        {s.originalItem}
                      </span>
                      <span className="text-neutral-400 text-xs font-normal">
                        {lang === 'ar' ? '⬅️ استبدل بـ' : '➔ Remplacé par'}
                      </span>
                      <span className="text-[#2E7D32] bg-emerald-100/70 px-2 py-0.5 rounded-md font-black">
                        {s.replacementItem}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemoveSwap(idx)}
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title={t.removeSwap}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* New Swap Creator (if quota allows) */}
          {canAddSwap ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <h4 className="text-sm font-extrabold text-neutral-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center text-xs">
                  +
                </span>
                <span>
                  {lang === 'ar' ? `إضافة استبدال (${swaps.length + 1} من 2)` : `Ajouter un échange (${swaps.length + 1} sur 2)`}
                </span>
              </h4>

              {/* Step 1: Select Pack item to replace */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  {t.selectItemToReplace}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {swappablePackItems.map((item, idx) => {
                    const itemName = item.name[lang];
                    const isSelected = selectedPackItem === itemName;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedPackItem(itemName)}
                        className={`p-2 rounded-xl text-xs font-semibold border text-start transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-red-50 border-red-500 text-red-800 ring-2 ring-red-400/30'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="font-bold truncate">{itemName}</div>
                        <div className="text-[10px] text-neutral-400 font-normal">
                          {item.weight[lang]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Replacement Alternative */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  {t.selectReplacement}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableAlternatives.map((alt) => {
                    const altName = alt.name[lang];
                    const isSelected = selectedAlternative === altName;
                    return (
                      <button
                        key={alt.id}
                        type="button"
                        onClick={() => setSelectedAlternative(altName)}
                        className={`p-2 rounded-xl text-xs font-semibold border text-start transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-emerald-50 border-[#2E7D32] text-[#2E7D32] ring-2 ring-emerald-400/30 font-bold'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <span className="text-base">{alt.icon}</span>
                        <span className="truncate">{altName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confirm Swap button */}
              <button
                type="button"
                disabled={!selectedPackItem || !selectedAlternative}
                onClick={handleAddSwap}
                className="w-full py-2.5 px-4 rounded-xl bg-[#2E7D32] hover:bg-[#256628] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                {t.confirmSwap}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#F59E0B]" />
              <span>{t.maxSwapsReached}</span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 font-medium">
            {swaps.length > 0
              ? lang === 'ar'
                ? `سيتم حفظ ${swaps.length} استبدال في رسالة طلبك`
                : `${swaps.length} échange(s) enregistré(s) dans votre commande`
              : lang === 'ar'
              ? 'الباقة بدون أي تعديل'
              : 'Pack standard'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
