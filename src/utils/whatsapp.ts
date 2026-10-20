import { Pack, AddOn, Language } from '../data/products';

export interface SwapSelection {
  originalItem: string;
  replacementItem: string;
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  city: string;
  neighborhood: string;
  addressDetails: string;
  deliverySlot: string;
  notes?: string;
  isWeeklySubscription: boolean;
  selectedPack: Pack;
  swaps: SwapSelection[];
  selectedAddOns: { [addOnId: string]: number };
  addOnsList: AddOn[];
}

export const WHATSAPP_PHONE = '212781376157'; // +212 781-376157

export function calculateOrderTotal(
  pack: Pack,
  isSubscription: boolean,
  selectedAddOns: { [addOnId: string]: number },
  addOnsList: AddOn[]
) {
  const packBasePrice = pack.price;
  const packDiscount = isSubscription ? Math.round(packBasePrice * 0.1) : 0;
  const packFinalPrice = packBasePrice - packDiscount;

  let addOnsTotal = 0;
  for (const addOn of addOnsList) {
    const qty = selectedAddOns[addOn.id] || 0;
    addOnsTotal += addOn.price * qty;
  }

  const grandTotal = packFinalPrice + addOnsTotal;

  return {
    packBasePrice,
    packDiscount,
    packFinalPrice,
    addOnsTotal,
    grandTotal,
  };
}

export function generateWhatsAppMessage(order: OrderDetails, lang: Language): string {
  const { packDiscount, packFinalPrice, grandTotal } = calculateOrderTotal(
    order.selectedPack,
    order.isWeeklySubscription,
    order.selectedAddOns,
    order.addOnsList
  );

  const packName = order.selectedPack.name[lang];

  if (lang === 'ar') {
    let msg = `السلام عليكم ورحمة الله وبركاته 🌿🧺\n`;
    msg += `بغيت نأكد طلبي من *خضرة الخير* (أكادير ونواحيها):\n\n`;

    msg += `📦 *الباك المختار:* ${packName} (${order.selectedPack.price} درهم)\n`;

    if (order.swaps.length > 0) {
      msg += `🔄 *تخصيص الخضر (الاستبدال):*\n`;
      order.swaps.forEach((swap, idx) => {
        msg += `   ${idx + 1}. استبدال [${swap.originalItem}] بـ [${swap.replacementItem}]\n`;
      });
    }

    const activeAddOns = order.addOnsList.filter((a) => (order.selectedAddOns[a.id] || 0) > 0);
    if (activeAddOns.length > 0) {
      msg += `\n➕ *الإضافات المختارة:*\n`;
      activeAddOns.forEach((addOn) => {
        const qty = order.selectedAddOns[addOn.id];
        msg += `   • ${addOn.name.ar} (${addOn.price * qty} درهم)\n`;
      });
    }

    if (order.isWeeklySubscription) {
      msg += `\n🏷️ *إشتراك أسبوعي:* نعم (تخفيض 10% = -${packDiscount} درهم)\n`;
    }

    msg += `\n💰 *المجموع الإجمالي للدفع:* *${grandTotal} درهم* (عند الاستلام)\n`;

    msg += `\n👤 *معلومات التوصيل:*\n`;
    msg += `• الاسم: ${order.fullName || 'غير محدد'}\n`;
    msg += `• الهاتف: ${order.phone || 'غير محدد'}\n`;
    msg += `• المدينة: ${order.city}\n`;
    msg += `• الحي: ${order.neighborhood || 'غير محدد'}\n`;
    if (order.addressDetails) {
      msg += `• العنوان / تفاصيل الموقع: ${order.addressDetails}\n`;
    }
    msg += `• وقت التوصيل المفضل: ${order.deliverySlot}\n`;

    if (order.notes) {
      msg += `• ملاحظات إضافية: ${order.notes}\n`;
    }

    msg += `\n🤝 *طريقة الدفع:* نقداً عند الاستلام بعد معاينة وفحص الخضر.\n`;
    msg += `شكراً لكم!`;

    return msg;
  } else {
    // French message
    let msg = `Bonjour Khodrat El Kheir 🌿🧺\n`;
    msg += `Je souhaite confirmer ma commande de légumes frais :\n\n`;

    msg += `📦 *Pack sélectionné :* ${packName} (${order.selectedPack.price} DH)\n`;

    if (order.swaps.length > 0) {
      msg += `🔄 *Personnalisation (Swaps) :*\n`;
      order.swaps.forEach((swap, idx) => {
        msg += `   ${idx + 1}. Remplacer [${swap.originalItem}] par [${swap.replacementItem}]\n`;
      });
    }

    const activeAddOns = order.addOnsList.filter((a) => (order.selectedAddOns[a.id] || 0) > 0);
    if (activeAddOns.length > 0) {
      msg += `\n➕ *Suppléments (Add-ons) :*\n`;
      activeAddOns.forEach((addOn) => {
        const qty = order.selectedAddOns[addOn.id];
        msg += `   • ${addOn.name.fr} (${addOn.price * qty} DH)\n`;
      });
    }

    if (order.isWeeklySubscription) {
      msg += `\n🏷️ *Abonnement hebdomadaire :* Oui (-10% de remise = -${packDiscount} DH)\n`;
    }

    msg += `\n💰 *Total à régler :* *${grandTotal} DH* (Paiement à la livraison)\n`;

    msg += `\n👤 *Informations de livraison :*\n`;
    msg += `• Nom complet : ${order.fullName || 'Non spécifié'}\n`;
    msg += `• Téléphone : ${order.phone || 'Non spécifié'}\n`;
    msg += `• Ville : ${order.city}\n`;
    msg += `• Quartier : ${order.neighborhood || 'Non spécifié'}\n`;
    if (order.addressDetails) {
      msg += `• Adresse / Repères : ${order.addressDetails}\n`;
    }
    msg += `• Créneau souhaité : ${order.deliverySlot}\n`;

    if (order.notes) {
      msg += `• Notes : ${order.notes}\n`;
    }

    msg += `\n🤝 *Paiement :* En espèces à la livraison après contrôle qualité.\n`;
    msg += `Merci !`;

    return msg;
  }
}

export function openWhatsAppLink(order: OrderDetails, lang: Language): void {
  const message = generateWhatsAppMessage(order, lang);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
  window.open(url, '_blank');
}
