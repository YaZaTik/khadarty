export type Language = 'ar' | 'fr';

export interface VegetableItem {
  name: { ar: string; fr: string };
  weight: { ar: string; fr: string };
  swappable?: boolean;
}

export interface Pack {
  id: string;
  name: { ar: string; fr: string };
  subtitle: { ar: string; fr: string };
  weightKg: number;
  price: number;
  isPopular?: boolean;
  image: string;
  idealFor: { ar: string; fr: string };
  items: VegetableItem[];
}

export interface SwapOption {
  id: string;
  name: { ar: string; fr: string };
  icon: string;
}

export interface AddOn {
  id: string;
  name: { ar: string; fr: string };
  description: { ar: string; fr: string };
  price: number;
  badge?: { ar: string; fr: string };
  image: string;
  items: { ar: string[]; fr: string[] };
}

export interface Zone {
  city: { ar: string; fr: string };
  neighborhoods: { ar: string[]; fr: string[] };
}

export const PACKS: Pack[] = [
  {
    id: 'pack-15kg',
    name: {
      ar: 'باك البركة (15 كغ)',
      fr: 'Pack Baraka (15 kg)',
    },
    subtitle: {
      ar: 'مثالي للأسر الصغيرة والأفراد (أسبوع كامل من الطراوة)',
      fr: 'Idéal pour petits foyers & couples (fraîcheur pour la semaine)',
    },
    weightKg: 15,
    price: 125,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    idealFor: {
      ar: '1 إلى 3 أشخاص',
      fr: '1 à 3 personnes',
    },
    items: [
      { name: { ar: 'بطاطس', fr: 'Pommes de terre' }, weight: { ar: '3 كغ', fr: '3 kg' }, swappable: false },
      { name: { ar: 'بصل أحمر/أصفر', fr: 'Oignons' }, weight: { ar: '2.5 كغ', fr: '2.5 kg' }, swappable: false },
      { name: { ar: 'طماطم بلدي', fr: 'Tomates' }, weight: { ar: '2.5 كغ', fr: '2.5 kg' }, swappable: false },
      { name: { ar: 'جزر طري', fr: 'Carottes' }, weight: { ar: '2 كغ', fr: '2 kg' }, swappable: true },
      { name: { ar: 'خيار', fr: 'Concombres' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'قرع أخضر (كورجيت)', fr: 'Courgettes' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'فلفل حلو (أخضر/أحمر)', fr: 'Poivrons' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'حزمة منسمات (نعناع، قزبور، معدنوس)', fr: 'Herbes (Menthe, Persil, Coriandre)' }, weight: { ar: 'حزمات طرية', fr: 'Bottes fraîches' }, swappable: false },
    ],
  },
  {
    id: 'pack-20kg',
    name: {
      ar: 'باك الخضر (20 كغ)',
      fr: 'Pack Légumes (20 kg)',
    },
    subtitle: {
      ar: 'الخيار الأفضل والأكثر طلباً لتوازن مثالي واحتياج عائلي',
      fr: 'Le meilleur équilibre et le plus commandé pour les familles',
    },
    weightKg: 20,
    price: 165,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80',
    idealFor: {
      ar: '3 إلى 5 أشخاص',
      fr: '3 à 5 personnes',
    },
    items: [
      { name: { ar: 'بطاطس', fr: 'Pommes de terre' }, weight: { ar: '4 كغ', fr: '4 kg' }, swappable: false },
      { name: { ar: 'بصل طري', fr: 'Oignons' }, weight: { ar: '3.5 كغ', fr: '3.5 kg' }, swappable: false },
      { name: { ar: 'طماطم طرية', fr: 'Tomates' }, weight: { ar: '3 كغ', fr: '3 kg' }, swappable: false },
      { name: { ar: 'جزر', fr: 'Carottes' }, weight: { ar: '2.5 كغ', fr: '2.5 kg' }, swappable: true },
      { name: { ar: 'فلفل حلو مشكل', fr: 'Poivrons' }, weight: { ar: '1.5 كغ', fr: '1.5 kg' }, swappable: true },
      { name: { ar: 'قرع أخضر (كورجيت)', fr: 'Courgettes' }, weight: { ar: '1.5 كغ', fr: '1.5 kg' }, swappable: true },
      { name: { ar: 'باذنجان', fr: 'Aubergines' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'خيار', fr: 'Concombres' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'حامض ليمون بلدي', fr: 'Citrons' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'تشكيلة طواجين (لفت، قرع أحمر، جلبانة، منسمات)', fr: 'Navets, Potiron, Petits pois & Herbes' }, weight: { ar: 'تشكيلة طازجة', fr: 'Sélection fraîche' }, swappable: true },
    ],
  },
  {
    id: 'pack-30kg',
    name: {
      ar: 'باك العائلة (30 كغ)',
      fr: 'Pack Famille (30 kg)',
    },
    subtitle: {
      ar: 'سخاء تام وتوفير كبير لجميع وجبات العائلة الكبيرة والضيوف',
      fr: 'Générosité maximale et économies pour grandes familles et réceptions',
    },
    weightKg: 30,
    price: 235,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    idealFor: {
      ar: '5 إلى 8 أشخاص',
      fr: '5 à 8 personnes',
    },
    items: [
      { name: { ar: 'بطاطس', fr: 'Pommes de terre' }, weight: { ar: '6 كغ', fr: '6 kg' }, swappable: false },
      { name: { ar: 'بصل', fr: 'Oignons' }, weight: { ar: '5 كغ', fr: '5 kg' }, swappable: false },
      { name: { ar: 'طماطم', fr: 'Tomates' }, weight: { ar: '5 كغ', fr: '5 kg' }, swappable: false },
      { name: { ar: 'جزر', fr: 'Carottes' }, weight: { ar: '3 كغ', fr: '3 kg' }, swappable: true },
      { name: { ar: 'فلفل حلو', fr: 'Poivrons' }, weight: { ar: '2 كغ', fr: '2 kg' }, swappable: true },
      { name: { ar: 'قرع أخضر', fr: 'Courgettes' }, weight: { ar: '2 كغ', fr: '2 kg' }, swappable: true },
      { name: { ar: 'باذنجان', fr: 'Aubergines' }, weight: { ar: '1.5 كغ', fr: '1.5 kg' }, swappable: true },
      { name: { ar: 'خيار', fr: 'Concombres' }, weight: { ar: '1.5 كغ', fr: '1.5 kg' }, swappable: true },
      { name: { ar: 'قرع أحمر ولفت للكسكس', fr: 'Potiron & Navets' }, weight: { ar: '2 كغ', fr: '2 kg' }, swappable: true },
      { name: { ar: 'حامض ليمون', fr: 'Citrons' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'جلبانة طازجة', fr: 'Petits pois' }, weight: { ar: '1 كغ', fr: '1 kg' }, swappable: true },
      { name: { ar: 'تشكيلة كاملة من المنسمات (نعناع، قزبور، معدنوس، كرفس)', fr: 'Sélection complète d’herbes & céleri' }, weight: { ar: 'حزمات وافرة', fr: 'Bottes généreuses' }, swappable: false },
    ],
  },
];

export const SWAP_ALTERNATIVES: SwapOption[] = [
  { id: 'betterave', name: { ar: 'باربا طرية (شمندر)', fr: 'Betteraves fraîches' }, icon: '🥗' },
  { id: 'haricots', name: { ar: 'لوبيا خضراء بلدي', fr: 'Haricots verts frais' }, icon: '🫘' },
  { id: 'chou', name: { ar: 'مكور أبيض (ملفوف)', fr: 'Chou blanc croquant' }, icon: '🥬' },
  { id: 'fenouil', name: { ar: 'بسباس طري', fr: 'Fenouil parfumé' }, icon: '🌿' },
  { id: 'salade', name: { ar: 'خس باتافيا بلدي', fr: 'Salade Batavia du jour' }, icon: '🥗' },
  { id: 'piment', name: { ar: 'مزاود حارة سوسية', fr: 'Piments forts du Souss' }, icon: '🌶️' },
  { id: 'navet_jaune', name: { ar: 'لفت أصفر محفور بلدي', fr: 'Navets jaunes de terroir' }, icon: '🥕' },
  { id: 'radis', name: { ar: 'فجل أحمر بلدي', fr: 'Radis roses croquants' }, icon: '🌱' },
];

export const ADD_ONS: AddOn[] = [
  {
    id: 'couscous-pack',
    name: {
      ar: 'قفة الجمعة (باك الكسكس)',
      fr: 'Pack Couscous du Vendredi (Gouffa Al Joumouâ)',
    },
    description: {
      ar: 'كل ما تحتاجه لكسكس الجمعة الأصيل: قرع أحمر سوسي، لفت محفور وأبيض، كورجيت مكورة، مكور، حمص مرقد ومزاود حارة.',
      fr: 'Tout pour un couscous marocain royal : potiron rouge, navets jaunes & blancs, courgette ronde, chou, pois chiches et piments.',
    },
    price: 30,
    badge: { ar: 'خاص بيوم الجمعة', fr: 'Spécial Vendredi' },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    items: {
      ar: ['قرع أحمر بلدي معسل', 'لفت أصفر محفور ولفت أبيض', 'قرع أخضر مدور', 'مكور بلدي', 'حمص مرقد جاهز للطهي', 'مزاود فلفل حار'],
      fr: ['Potiron rouge du Souss', 'Navets jaunes et blancs', 'Courgette ronde', 'Chou frais', 'Pois chiches trempés', 'Piments forts'],
    },
  },
  {
    id: 'fruits-pack',
    name: {
      ar: 'سلة فواكه الموسم (5 كغ)',
      fr: 'Panier de fruits de saison (5 kg)',
    },
    description: {
      ar: 'تشكيلة فيتامينات طازجة منتقاة بعناية: برتقال العصير والأكل من حقول تارودانت، موز حلو، تفاح أطلسي، وفاكهة الموسم الحالية.',
      fr: 'Sélection sucrée et vitaminée : oranges à jus & table de Taroudant, bananes fraîches, pommes croquantes et clémentines.',
    },
    price: 60,
    badge: { ar: 'فواكه سوس الطازجة', fr: 'Fruits Frais du Souss' },
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    items: {
      ar: ['برتقال سوس حلو ممتاز (2 كغ)', 'موز طازج (1 كغ)', 'تفاح محلي بلدي (1 كغ)', 'يوسفي / فاكهة الموسم (1 كغ)'],
      fr: ['Oranges douces du Souss (2 kg)', 'Bananes de qualité (1 kg)', 'Pommes locales (1 kg)', 'Fruits de saison (1 kg)'],
    },
  },
  {
    id: 'spices-pack',
    name: {
      ar: 'باك عطرية بلادنا مطحونة على اليد',
      fr: 'Pack Épices marocaines artisanales',
    },
    description: {
      ar: 'توابل نقية 100% مغسولة ومنقية ومطحونة على اليد: كمون بلدي تافراوت، خرقوم بلدي، سكنجبير، تحميرة حلوة، وإبزار أسود.',
      fr: 'Épices pures lavées, séchées et fraîchement moulues : cumin de Tafraout, curcuma pur, gingembre, paprika doux et poivre noir.',
    },
    price: 25,
    badge: { ar: 'مطحونة على اليد 100%', fr: '100% Pures & Fraîches' },
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    items: {
      ar: ['كمون بلدي تافراوت أصيل (100غ)', 'خرقوم بلدي مطحون (100غ)', 'سكنجبير زنجبيل بلدي (100غ)', 'تحميرة فلفل حلو (100غ)', 'إبزار أسود حار منقى (50غ)'],
      fr: ['Cumin pur de Tafraout (100g)', 'Curcuma moulu (100g)', 'Gingembre pur (100g)', 'Paprika doux (100g)', 'Poivre noir moulu (50g)'],
    },
  },
];

export const DELIVERY_ZONES: Zone[] = [
  {
    city: { ar: 'أكادير (Agadir)', fr: 'Agadir' },
    neighborhoods: {
      ar: [
        'وسط المدينة (Centre-Ville)',
        'تالبرجت (Talborjt)',
        'حي الداخلة (Dakhla)',
        'حي السلام (Salam)',
        'حي الهدى (Al Houda)',
        'الحي المحمدي (Hay Mohammadi)',
        'تيكيوين (Tikiouine)',
        'بنسركاو (Bensergao)',
        'فونتي والمارينا (Founty / Marina)',
        'صونابا والخيام (Sonaba / El Khiam)',
        'أنزا والشاطئ (Anza)',
        'حي تليلا (Tilila)',
        'حي القدس والنجاح (Al Qods / Ennajah)',
      ],
      fr: [
        'Centre-Ville',
        'Talborjt',
        'Dakhla',
        'Salam',
        'Al Houda',
        'Hay Mohammadi',
        'Tikiouine',
        'Bensergao',
        'Founty / Marina',
        'Sonaba / El Khiam',
        'Anza',
        'Tilila',
        'Al Qods / Ennajah',
      ],
    },
  },
  {
    city: { ar: 'إنزكان (Inezgane)', fr: 'Inezgane' },
    neighborhoods: {
      ar: ['وسط إنزكان (Centre)', 'حي الجرف (Al Jorf)', 'حي تراست والتربايت (Trast / Tarbajt)', 'حي الرمل (Hay Rmel)'],
      fr: ['Centre Inezgane', 'Al Jorf', 'Trast / Tarbajt', 'Hay Rmel'],
    },
  },
  {
    city: { ar: 'الدشيرة الجهادية (Dcheira)', fr: 'Dcheira El Jihadia' },
    neighborhoods: {
      ar: ['وسط الدشيرة (Centre)', 'حي الأمل (Hay Al Amal)', 'المنطقة الصناعية تاسيلا (Tassila)', 'حي الهناء والزهور (Hay Lhana / Zouhour)'],
      fr: ['Centre Dcheira', 'Hay Al Amal', 'Tassila', 'Hay Lhana / Zouhour'],
    },
  },
  {
    city: { ar: 'آيت ملول (Aït Melloul)', fr: 'Aït Melloul' },
    neighborhoods: {
      ar: ['وسط آيت ملول (Centre)', 'حي أزرو (Azrou)', 'حي المزار (Mzar)', 'حي القصبة وتمرسيط (Kasbah / Tamsoult)'],
      fr: ['Centre Aït Melloul', 'Azrou', 'Mzar', 'Kasbah / Tamsoult'],
    },
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: { ar: 'فاطمة الزهراء ب.', fr: 'Fatima-Zahra B.' },
    location: { ar: 'حي الهدى، أكادير', fr: 'Hay Al Houda, Agadir' },
    comment: {
      ar: 'صراحة أول مرة نجربهم والنتيجة فوق المتوقع. الخضرة واصلة نقية وجديدة، وكأنني نزلت للسوق الصباح بكري. وعجبني بزاف إمكانية نبدل الباذنجان باللوبيا الخضرا!',
      fr: 'Franchement une excellente surprise ! Légumes très frais comme si je venais de faire mon marché le matin à l\'aube. Le service swap pour échanger les légumes est un vrai plus.',
    },
    pack: { ar: 'باك الخضر 20 كغ', fr: 'Pack Légumes 20 kg' },
    rating: 5,
  },
  {
    id: 2,
    name: { ar: 'رشيد المرابط', fr: 'Rachid El Mourabit' },
    location: { ar: 'حي الداخلة، أكادير', fr: 'Hay Dakhla, Agadir' },
    comment: {
      ar: 'خدمة راقية وسريعة. قفة الجمعة للكسكس عاوناتنا بزاف ولقينا فيها كل التخلاطة طرية. والدفع عند الاستلام كيعطي ثقة تامة. تبارك الله عليكم.',
      fr: 'Service impeccable et ponctuel. Le pack couscous du vendredi nous a fait gagner un temps précieux. Le paiement à la livraison après contrôle est très rassurant.',
    },
    pack: { ar: 'باك 20 كغ + قفة الجمعة', fr: 'Pack 20 kg + Pack Couscous' },
    rating: 5,
  },
  {
    id: 3,
    name: { ar: 'أمينة بنجلون', fr: 'Amina Benjelloun' },
    location: { ar: 'تيكيوين', fr: 'Tikiouine' },
    comment: {
      ar: 'اشتركت اشتراك أسبوعي واستفدت من خصم 10%. كل سبت كيوصلني الباك للباب، الخضار جودة عالية ونقية وموزونة بالميزان المظبوط. شكرا خضرة الخير.',
      fr: 'Abonnée hebdomadaire avec les 10% de réduction. Chaque samedi mon panier arrive à la maison, pesé au gramme près et d’une fraîcheur irréprochable.',
    },
    pack: { ar: 'باك العائلة 30 كغ (إشتراك أسبوعي)', fr: 'Pack Famille 30 kg (Abonnement)' },
    rating: 5,
  },
];

export const FAQS = [
  {
    q: {
      ar: 'ما هي المدن والأحياء التي تغطيها خدمة التوصيل؟',
      fr: 'Quelles sont les villes et quartiers desservis ?',
    },
    a: {
      ar: 'نقوم بالتوصيل يومياً في جميع أحياء أكادير الكبرى، إنزكان، الدشيرة الجهادية، وآيت ملول إلى غاية باب منزلك أو شقتك.',
      fr: 'Nous livrons quotidiennement sur l’ensemble du Grand Agadir : Agadir Ville, Inezgane, Dcheira El Jihadia et Aït Melloul, directement à votre porte.',
    },
  },
  {
    q: {
      ar: 'كيف تتم عملية الدفع ومعاينة الخضر؟',
      fr: 'Comment s’effectue le paiement et la vérification ?',
    },
    a: {
      ar: 'الدفع نقداً عند الاستلام 100%. عند وصول عامل التوصيل، يحق لك فتح القفة وفحص طراوة وجودة الخضر والفواكه بالكامل. إذا لم ترضك أي حبة، يمكنك رفض الطلب دون دفع أي درهم!',
      fr: 'Paiement à la livraison 100% en espèces. À l’arrivée du livreur, vous ouvrez le panier et inspectez la fraîcheur de vos produits. Si un produit ne vous convient pas, vous êtes libre d’annuler sans frais.',
    },
  },
  {
    q: {
      ar: 'كيف يعمل نظام استبدال الخضر (Custom Swap)؟',
      fr: 'Comment fonctionne l’option d’échange de légumes (Custom Swap) ?',
    },
    a: {
      ar: 'يمكنك بسهولة استبدال حتى عنصرين (2) من الباك المختار بأي خضار أخرى تحبها من قائمة البدائل المتاحة (كالباربا، اللوبيا الخضراء، الملفوف، البسباس، إلخ) دون أي تكلفة إضافية.',
      fr: 'Vous pouvez remplacer jusqu’à deux (2) légumes de votre pack par d’autres légumes disponibles dans notre liste de substitution (betteraves, haricots verts, chou, fenouil, etc.) sans supplément.',
    },
  },
  {
    q: {
      ar: 'كيف استفيد من خصم 10% عبر الاشتراك الأسبوعي؟',
      fr: 'Comment profiter des 10% de réduction sur l’abonnement ?',
    },
    a: {
      ar: 'عند تفعيل خيار "إشتراك أسبوعي"، يتم تطبيق خصم 10% فوراً على سعر الباك، ونقوم بالتنسيق معك لجدولة توصيل قفتك الطازجة في نفس اليوم المفضل لديك أسبوعياً دون أي التزام طويل الأمد.',
      fr: 'En activant l’option "Abonnement hebdomadaire", vous bénéficiez immédiatement de 10% de remise. Nous planifions votre livraison chaque semaine au jour de votre choix, sans engagement.',
    },
  },
  {
    q: {
      ar: 'ما هي مواعيد وأوقات التوصيل؟',
      fr: 'Quels sont les créneaux et délais de livraison ?',
    },
    a: {
      ar: 'نقدم فترتين للتوصيل يومياً: الفترة الصباحية (من 09:30 إلى 13:30) والفترة المسائية (من 15:30 إلى 19:30). الطلبات المؤكدة قبل الساعة 11 صباحاً يمكن توصيلها في نفس اليوم.',
      fr: 'Deux créneaux quotidiens : Matinée (09h30 - 13h30) et Après-midi (15h30 - 19h30). Les commandes passées avant 11h peuvent être livrées le jour même.',
    },
  },
];
