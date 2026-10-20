import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquareQuote, HelpCircle } from 'lucide-react';
import { Language, REVIEWS, FAQS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface ReviewsAndFAQProps {
  lang: Language;
}

export const ReviewsAndFAQ: React.FC<ReviewsAndFAQProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-white text-start">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#2E7D32] text-xs font-black mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تجارب حقيقية وموثوقة' : 'Avis vérifiés'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-2">
              {t.testimonialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-[#F59E0B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-neutral-400 bg-white px-2.5 py-1 rounded-full border border-neutral-200">
                      {rev.pack[lang]}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-5">
                    « {rev.comment[lang]} »
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E7D32] text-white font-black flex items-center justify-center text-sm shadow-xs">
                    {rev.name[lang].charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-neutral-900">
                      {rev.name[lang]}
                    </h4>
                    <span className="text-xs text-neutral-500">
                      {rev.location[lang]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{lang === 'ar' ? 'إجابات على تساؤلاتكم' : 'FAQ'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-2">
              {t.faqTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'border-[#2E7D32] bg-emerald-50/20 shadow-xs'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-start cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-neutral-900">
                      {faq.q[lang]}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#2E7D32]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
