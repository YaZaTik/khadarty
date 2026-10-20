/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PACKS, ADD_ONS, Pack, Language } from './data/products';
import { SwapSelection, calculateOrderTotal } from './utils/whatsapp';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { FeaturesSection } from './components/FeaturesSection';
import { WeeklySubscriptionBanner } from './components/WeeklySubscriptionBanner';
import { PackCards } from './components/PackCards';
import { CustomSwapModal } from './components/CustomSwapModal';
import { AddOnsSection } from './components/AddOnsSection';
import { OrderTunnel } from './components/OrderTunnel';
import { CoverageZones } from './components/CoverageZones';
import { ReviewsAndFAQ } from './components/ReviewsAndFAQ';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  // Main language state: 'ar' (Arabic RTL) by default as requested
  const [lang, setLang] = useState<Language>('ar');

  // Currently chosen pack (default to 20kg pack - "الأكثر طلباً")
  const [selectedPack, setSelectedPack] = useState<Pack>(PACKS[1]);

  // Swaps per pack: { [packId: string]: SwapSelection[] }
  const [swapsByPack, setSwapsByPack] = useState<{ [packId: string]: SwapSelection[] }>({
    'pack-20kg': [],
    'pack-15kg': [],
    'pack-30kg': [],
  });

  // Selected Add-ons: { [addOnId: string]: quantity }
  const [selectedAddOns, setSelectedAddOns] = useState<{ [id: string]: number }>({
    'couscous-pack': 0,
    'fruits-pack': 0,
    'spices-pack': 0,
  });

  // Weekly subscription toggle (gives 10% discount)
  const [isWeeklySubscription, setIsWeeklySubscription] = useState<boolean>(false);

  // Custom Swap Modal state
  const [swapModalOpen, setSwapModalOpen] = useState<boolean>(false);
  const [packForSwap, setPackForSwap] = useState<Pack>(selectedPack);

  // Sync document direction and lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      document.title = 'خضرة الخير | توصيل الخضر والفواكه بأكادير ونواحيها - من الجنان لباب الدار';
    } else {
      document.title = 'Khodrat El Kheir | Livraison de fruits et légumes à Agadir - Du Souk au Web';
    }
  }, [lang]);

  // Handle swapping vegetables for a pack
  const handleOpenSwapModal = (pack: Pack) => {
    setPackForSwap(pack);
    setSwapModalOpen(true);
  };

  const handleUpdateSwaps = (newSwaps: SwapSelection[]) => {
    setSwapsByPack((prev) => ({
      ...prev,
      [packForSwap.id]: newSwaps,
    }));
  };

  // Handle Add-On toggle (quantity 1 or 0)
  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? 0 : 1,
    }));
  };

  // Scroll to section helper
  const scrollToOrder = () => {
    const el = document.getElementById('order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPacks = () => {
    const el = document.getElementById('packs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate live grand total
  const { grandTotal } = calculateOrderTotal(
    selectedPack,
    isWeeklySubscription,
    selectedAddOns,
    ADD_ONS
  );

  return (
    <div className={`min-h-screen flex flex-col font-sans ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Sticky Top Header Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        selectedPackName={selectedPack.name[lang]}
        totalPrice={grandTotal}
        onOpenOrder={scrollToOrder}
      />

      {/* Hero Banner with Slogans & Badges */}
      <HeroBanner lang={lang} onExplorePacks={scrollToPacks} />

      {/* 4 Quality Guarantees Features */}
      <FeaturesSection lang={lang} />

      {/* Weekly Subscription Banner (-10% Discount Toggle) */}
      <WeeklySubscriptionBanner
        lang={lang}
        isSubscribed={isWeeklySubscription}
        onToggleSubscription={setIsWeeklySubscription}
      />

      {/* Main Product Packs (15kg, 20kg Popular, 30kg) */}
      <PackCards
        packs={PACKS}
        selectedPackId={selectedPack.id}
        onSelectPack={(pack) => {
          setSelectedPack(pack);
          scrollToOrder();
        }}
        lang={lang}
        isSubscribed={isWeeklySubscription}
        swapsByPack={swapsByPack}
        onOpenSwapModal={handleOpenSwapModal}
      />

      {/* Add-Ons Section: Couscous Vendredi, Fruits 5kg, Spices */}
      <AddOnsSection
        addOns={ADD_ONS}
        selectedAddOns={selectedAddOns}
        onToggleAddOn={handleToggleAddOn}
        lang={lang}
      />

      {/* Delivery Coverage Areas: Agadir, Inezgane, Dcheira, Aït Melloul */}
      <CoverageZones lang={lang} />

      {/* Complete Order Tunnel with WhatsApp Integration */}
      <OrderTunnel
        selectedPack={selectedPack}
        swaps={swapsByPack[selectedPack.id] || []}
        selectedAddOns={selectedAddOns}
        addOnsList={ADD_ONS}
        isWeeklySubscription={isWeeklySubscription}
        onToggleSubscription={setIsWeeklySubscription}
        lang={lang}
      />

      {/* Testimonials from Souss residents & FAQ */}
      <ReviewsAndFAQ lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Custom Swap Modal Drawer */}
      <CustomSwapModal
        isOpen={swapModalOpen}
        onClose={() => setSwapModalOpen(false)}
        pack={packForSwap}
        lang={lang}
        swaps={swapsByPack[packForSwap.id] || []}
        onUpdateSwaps={handleUpdateSwaps}
      />

      {/* Floating Bottom Action Bar for Mobile Screens */}
      <FloatingMobileBar
        pack={selectedPack}
        grandTotal={grandTotal}
        lang={lang}
        onScrollToOrder={scrollToOrder}
      />

    </div>
  );
}
