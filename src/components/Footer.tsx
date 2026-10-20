import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-14 pb-24 sm:pb-14 border-t border-neutral-800 text-start">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand & Slogans */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2E7D32] flex items-center justify-center text-white text-xl">
                🧺
              </div>
              <span className="text-xl font-black text-white font-arabic">
                {t.brandName}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#FDE68A] mb-2 font-arabic">
              {lang === 'ar' ? '« خضرة الخير.. من الجنان لـباب الدار »' : '« La qualité du Souk, la simplicité du Web »'}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
              {lang === 'ar'
                ? 'خدمة توصيل خضر وفواكه طازجة بأكادير ونواحيها من الجنان مباشرة لباب منزلك. جودة ممتازة، ميزان مضبوط، ودفع عند الاستلام بعد المعاينة.'
                : 'Service de livraison de fruits et légumes frais à domicile sur le Grand Agadir. Produits frais, pesée exacte et paiement à la livraison.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'ضمان الرضا 100% أو استرجاع كامل' : 'Garantie 100% satisfait ou remboursé'}</span>
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div>
            <h4 className="font-extrabold text-sm text-white mb-3">
              {t.hotline}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-mono font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>+212 781-376157</span>
              </a>

              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>{lang === 'ar' ? 'يومياً: 07:00 صباحاً - 21:00 مساءً' : 'Tous les jours : 07h00 - 21h00'}</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#2E7D32]" />
                <span>{lang === 'ar' ? 'سوس ماسة - أكادير، المغرب' : 'Souss-Massa - Agadir, Maroc'}</span>
              </div>
            </div>
          </div>

          {/* Covered Zones */}
          <div>
            <h4 className="font-extrabold text-sm text-white mb-3">
              {lang === 'ar' ? 'المدن والمناطق المغطاة' : 'Zones couvertes'}
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                <span>{lang === 'ar' ? 'أكادير (جميع الأحياء)' : 'Agadir (tous quartiers)'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                <span>{lang === 'ar' ? 'إنزكان والجرف وتراست' : 'Inezgane, Al Jorf, Trast'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                <span>{lang === 'ar' ? 'الدشيرة الجهادية وتاسيلا' : 'Dcheira El Jihadia, Tassila'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                <span>{lang === 'ar' ? 'آيت ملول وأزرو والمزار' : 'Aït Melloul, Azrou, Mzar'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t.footerRights}</p>
          <div className="flex items-center gap-1">
            <span>{lang === 'ar' ? 'صُنعت بحب في سوس العالمة' : 'Fait avec passion au Souss'}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
