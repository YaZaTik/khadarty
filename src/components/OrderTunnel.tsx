import React, { useState } from 'react';
import {
  MessageCircle,
  Truck,
  ShieldCheck,
  Check,
  Phone,
  User,
  MapPin,
  Clock,
  Sparkles,
  AlertTriangle,
  Receipt,
} from 'lucide-react';
import { Pack, AddOn, Language, DELIVERY_ZONES } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import {
  OrderDetails,
  SwapSelection,
  calculateOrderTotal,
  openWhatsAppLink,
  generateWhatsAppMessage,
  WHATSAPP_PHONE,
} from '../utils/whatsapp';

interface OrderTunnelProps {
  selectedPack: Pack;
  swaps: SwapSelection[];
  selectedAddOns: { [id: string]: number };
  addOnsList: AddOn[];
  isWeeklySubscription: boolean;
  onToggleSubscription: (val: boolean) => void;
  lang: Language;
}

export const OrderTunnel: React.FC<OrderTunnelProps> = ({
  selectedPack,
  swaps,
  selectedAddOns,
  addOnsList,
  isWeeklySubscription,
  onToggleSubscription,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  // Customer Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [neighborhood, setNeighborhood] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [deliverySlot, setDeliverySlot] = useState(t.slot1);
  const [notes, setNotes] = useState('');

  // Success Modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const currentCity = DELIVERY_ZONES[selectedCityIndex];

  const { packBasePrice, packDiscount, packFinalPrice, addOnsTotal, grandTotal } =
    calculateOrderTotal(selectedPack, isWeeklySubscription, selectedAddOns, addOnsList);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const currentOrder: OrderDetails = {
      fullName,
      phone,
      city: currentCity.city[lang],
      neighborhood: neighborhood || currentCity.neighborhoods[lang][0],
      addressDetails,
      deliverySlot,
      notes,
      isWeeklySubscription,
      selectedPack,
      swaps,
      selectedAddOns,
      addOnsList,
    };

    // Generate random reference code e.g. KH-8492
    const refCode = `KH-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(refCode);
    setShowSuccessModal(true);

    // Open WhatsApp
    openWhatsAppLink(currentOrder, lang);
  };

  const currentOrderObject: OrderDetails = {
    fullName,
    phone,
    city: currentCity.city[lang],
    neighborhood: neighborhood || currentCity.neighborhoods[lang][0],
    addressDetails,
    deliverySlot,
    notes,
    isWeeklySubscription,
    selectedPack,
    swaps,
    selectedAddOns,
    addOnsList,
  };

  return (
    <section id="order-section" className="py-14 bg-gradient-to-b from-[#F9FAFB] to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-black mb-3">
            <Truck className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>{lang === 'ar' ? 'توصيل سريع حتى باب الدار' : 'Livraison directe jusqu’à votre porte'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-2">
            {t.orderSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.orderSectionSubtitle}
          </p>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Details (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm text-start">
            <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
              
              <div className="flex items-center gap-2 pb-4 border-b border-neutral-100">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-[#2E7D32] font-black flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="text-lg font-black text-neutral-900">
                  {lang === 'ar' ? 'معلومات التوصيل والاتصال' : 'Coordonnées de livraison'}
                </h3>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    {t.fullName} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.fullNamePlaceholder}
                      className="w-full py-2.5 px-9 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className="w-full py-2.5 px-9 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* City Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    {t.city} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedCityIndex}
                    onChange={(e) => {
                      setSelectedCityIndex(Number(e.target.value));
                      setNeighborhood('');
                    }}
                    className="w-full py-2.5 px-3 text-sm rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 font-medium"
                  >
                    {DELIVERY_ZONES.map((zone, idx) => (
                      <option key={idx} value={idx}>
                        {zone.city[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    {t.neighborhood} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    list="neighborhood-list"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder={t.neighborhoodPlaceholder}
                    required
                    className="w-full py-2.5 px-3 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                  <datalist id="neighborhood-list">
                    {currentCity.neighborhoods[lang].map((n, idx) => (
                      <option key={idx} value={n} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Detailed Address */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  {t.address}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto pointer-events-none" />
                  <input
                    type="text"
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    placeholder={t.addressPlaceholder}
                    className="w-full py-2.5 px-9 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  {t.deliverySlot}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[t.slot1, t.slot2, t.slot3].map((slotName, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDeliverySlot(slotName)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold text-start flex items-center gap-1.5 transition-all cursor-pointer ${
                        deliverySlot === slotName
                          ? 'bg-emerald-50 border-[#2E7D32] text-[#2E7D32] ring-2 ring-emerald-400/20 font-bold'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0 text-[#2E7D32]" />
                      <span className="truncate">{slotName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Driver Notes */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                  {t.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.notesPlaceholder}
                  className="w-full py-2 px-3 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-emerald-400/20 transition-all"
                />
              </div>

              {/* Primary WhatsApp Order Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-900/20 hover:shadow-xl transition-all transform active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
                  <span>{t.orderViaWhatsApp}</span>
                  <span className="text-white/80 text-sm font-semibold">({grandTotal} {t.currency})</span>
                </button>
                <p className="text-xs text-center text-neutral-500 mt-2">
                  {t.orderViaWhatsAppDesc}
                </p>
              </div>

              {/* Guarantee badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <span>{t.guaranteeNotice}</span>
              </div>

            </form>
          </div>

          {/* Right Column: Order Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm text-start sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="font-black text-lg text-neutral-900">
                  {t.orderSummary}
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#2E7D32]/10 text-[#2E7D32]">
                {selectedPack.weightKg} {lang === 'ar' ? 'كغ' : 'kg'}
              </span>
            </div>

            {/* Selected Pack Row */}
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 mb-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-sm text-neutral-900">
                    {selectedPack.name[lang]}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    {selectedPack.subtitle[lang]}
                  </p>
                </div>
                <span className="font-black text-sm text-neutral-900 shrink-0">
                  {packBasePrice} {t.currency}
                </span>
              </div>

              {/* Swaps in summary */}
              {swaps.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-neutral-200/80 space-y-1">
                  <span className="text-[11px] font-bold text-neutral-500 block">
                    {lang === 'ar' ? 'الخضر المستبدلة:' : 'Légumes remplacés :'}
                  </span>
                  {swaps.map((s, idx) => (
                    <div key={idx} className="text-[11px] text-neutral-700 flex items-center gap-1.5">
                      <span className="text-red-500 line-through">{s.originalItem}</span>
                      <span>➔</span>
                      <span className="font-bold text-[#2E7D32]">{s.replacementItem}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Weekly Subscription Option in Summary */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/40 border border-amber-200 mb-4 flex items-center justify-between gap-3">
              <div className="text-start">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-amber-950">
                    {t.subscriptionTitle}
                  </span>
                  <span className="px-1.5 py-0.2 bg-[#F59E0B] text-neutral-950 text-[10px] font-black rounded">
                    -10%
                  </span>
                </div>
                <p className="text-[11px] text-amber-800/80 mt-0.5">
                  {lang === 'ar' ? 'توصيل أسبوعي تلقائي مستمر' : 'Livraison hebdomadaire automatique'}
                </p>
              </div>

              <input
                type="checkbox"
                checked={isWeeklySubscription}
                onChange={(e) => onToggleSubscription(e.target.checked)}
                className="w-5 h-5 accent-[#2E7D32] rounded cursor-pointer"
              />
            </div>

            {/* Selected Add-ons Row */}
            {addOnsTotal > 0 && (
              <div className="space-y-2 mb-4 pt-2 border-t border-neutral-100">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  {t.totalAddOns}
                </span>
                {addOnsList
                  .filter((a) => (selectedAddOns[a.id] || 0) > 0)
                  .map((addon) => {
                    const qty = selectedAddOns[addon.id];
                    return (
                      <div key={addon.id} className="flex items-center justify-between text-xs">
                        <span className="text-neutral-700 font-medium">
                          • {addon.name[lang]}
                        </span>
                        <span className="font-bold text-neutral-900">
                          +{addon.price * qty} {t.currency}
                        </span>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-2 pt-3 border-t border-neutral-200 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>{t.packPrice}</span>
                <span>{packBasePrice} {t.currency}</span>
              </div>

              {isWeeklySubscription && (
                <div className="flex justify-between text-[#2E7D32] font-semibold">
                  <span>{t.discountWeekly}</span>
                  <span>-{packDiscount} {t.currency}</span>
                </div>
              )}

              {addOnsTotal > 0 && (
                <div className="flex justify-between text-neutral-600">
                  <span>{t.totalAddOns}</span>
                  <span>+{addOnsTotal} {t.currency}</span>
                </div>
              )}

              <div className="flex justify-between text-neutral-600">
                <span>{t.freeDelivery}</span>
                <span className="font-bold text-[#2E7D32]">{lang === 'ar' ? 'مجاني' : 'Offert'}</span>
              </div>

              {/* Grand Total */}
              <div className="flex items-baseline justify-between pt-3 border-t border-neutral-200">
                <span className="font-black text-base text-neutral-900">
                  {t.totalToPay}
                </span>
                <div className="text-end">
                  <span className="text-2xl font-black text-[#2E7D32]">
                    {grandTotal}
                  </span>
                  <span className="text-sm font-bold text-neutral-700 mr-1 ml-1">
                    {t.currency}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Badge */}
            <div className="mt-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs font-bold text-[#1B5E20]">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
              <span>{t.codBadge}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-neutral-100 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#2E7D32] flex items-center justify-center mx-auto mb-4 text-3xl">
              🧺
            </div>

            <h3 className="text-xl font-black text-neutral-900 mb-2">
              {t.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
              {t.successDesc}
            </p>

            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 mb-5">
              <span className="text-xs text-neutral-400 font-medium block">
                {t.orderRef}
              </span>
              <span className="text-lg font-black font-mono text-[#2E7D32]">
                {orderRef}
              </span>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => openWhatsAppLink(currentOrderObject, lang)}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.openChatAgain}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs transition-colors"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
