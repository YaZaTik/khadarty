import React from 'react';
import { MessageCircle, ShoppingBag, ArrowUp } from 'lucide-react';
import { Pack, Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface FloatingMobileBarProps {
  pack: Pack;
  grandTotal: number;
  lang: Language;
  onScrollToOrder: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  pack,
  grandTotal,
  lang,
  onScrollToOrder,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-3 sm:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="text-start">
          <span className="block text-[11px] font-bold text-neutral-500 truncate max-w-[140px]">
            {pack.name[lang]}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-[#2E7D32]">
              {grandTotal}
            </span>
            <span className="text-xs font-bold text-neutral-700">
              {t.currency}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onScrollToOrder}
          className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{lang === 'ar' ? 'اطلب بالواتساب' : 'Commander via WhatsApp'}</span>
        </button>
      </div>
    </div>
  );
};
