import React from 'react';
import { Phone, ShoppingBag, Sparkles, MessageCircle, Globe } from 'lucide-react';
import { Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  selectedPackName: string;
  totalPrice: number;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  selectedPackName,
  totalPrice,
  onOpenOrder,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      {/* Top micro-bar */}
      <div className="bg-[#2E7D32] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center md:text-start">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <span>{t.deliveryCoverage}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-white/90">
            <span className="font-semibold text-[#FDE68A]">{lang === 'ar' ? t.frenchSlogan : t.frenchSlogan}</span>
            <span>•</span>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 text-white"
            >
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              <span>+212 781-376157</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group text-start">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] flex items-center justify-center text-white shadow-md shadow-emerald-900/10 transform transition-transform group-hover:scale-105">
            <span className="text-2xl">🧺</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl text-neutral-900 tracking-tight font-arabic">
                {t.brandName}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#2E7D32]/10 text-[#2E7D32]">
                أكادير
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-medium hidden sm:block">
              {lang === 'ar' ? 'خضرة الخير.. من الجنان لـباب الدار' : 'La qualité du Souk, la simplicité du Web'}
            </p>
          </div>
        </a>

        {/* Actions & Language Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={() => onLanguageChange(lang === 'ar' ? 'fr' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors shadow-2xs"
            title={lang === 'ar' ? 'Passer en Français' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>{lang === 'ar' ? 'Français' : 'العربية'}</span>
          </button>

          {/* Quick WhatsApp chat icon button */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>واتساب</span>
          </a>

          {/* Cart / Order CTA button */}
          <button
            onClick={onOpenOrder}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32] hover:bg-[#256628] text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-900/15 transition-all hover:shadow-lg active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'ar' ? 'طلبك:' : 'Commande:'}</span>
            <span className="font-extrabold text-[#FDE68A]">{totalPrice} {t.currency}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
