// LangConfig.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize language
const savedLang = localStorage.getItem("lang");
const defaultLang = savedLang || "en";

// Define translations
const resources = {
  en: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shop: "ShopNow",
      welcome: "Welcome to the E-Commerce Website",
      exclusive: "Exclusive",
      home: "Home",
      contact: "Contact",
      about: "About",
      signUp: "Sign Up",
      headerIcons: {
        1: "Manage My Account",
        2: "My Order",
        3: "My Cancellations",
        4: "My Reviews",
        5: "Logout",
      },
      search: "Search...",
      homeSections: {
        row1: {
          col1: [
            "Women's Fashion",
            "Men's Fashion",
            "Technology",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ],
          col2: ["iPhone 14 Series", "Up to 10% off Voucher", "Shop Now"],
        },
        row2: ["Today’s", "Flash Sales", "Days", "Hours", "Minutes", "Seconds"],
      },
      removeFromCart: "Remove from Cart",
      addToCart: "Add to Cart",
      new: "NEW",
      itemsArray: {
        0: {
          title: "Kids Electric Car",
          type: "Gaming",
          details:
            "An exciting electric car for kids to drive around in style, providing hours of entertainment and fun.",
        },
        1: {
          title: "CANON EOS DSLR Camera",
          type: "Technology",
          details:
            "Capture stunning photos and videos with this professional-grade Canon DSLR camera, perfect for photography enthusiasts.",
        },
        2: {
          title: "Breed Dry Dog Food",
          type: "General",
          details:
            "Nutritious dry dog food to keep your furry friend healthy and happy, made with high-quality ingredients.",
        },
        3: {
          title: "ASUS FHD Gaming Laptop",
          type: "Technology",
          details:
            "Experience high-performance gaming with this ASUS FHD gaming laptop, featuring advanced graphics and smooth gameplay.",
        },
        4: {
          title: "Curology Product Set",
          type: "General",
          details:
            "A complete skincare set by Curology to cleanse, moisturize, and protect your skin, leaving it soft and radiant.",
        },
        5: {
          title: "GP11 Shooter USB Gamepad",
          type: "Gaming",
          details:
            "Enhance your gaming experience with the GP11 Shooter USB gamepad, featuring high-quality construction and precise controls.",
        },
        6: {
          title: "Quilted Satin Jacket",
          type: "Clothes",
          details:
            "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
        },
        7: {
          title: "Small Bookshelf",
          type: "General",
          details:
            "Organize your books and decorative items neatly with this small bookshelf, designed to fit in compact spaces.",
        },
        8: {
          title: "RGB Liquid CPU Cooler",
          type: "Technology",
          details:
            "Keep your CPU cool and running smoothly with the RGB liquid CPU cooler, featuring a high-performance pump and customizable RGB lighting.",
        },
        9: {
          title: "Gucci Duffle Bag",
          type: "Clothes",
          details:
            "Travel in style with the Gucci duffle bag, crafted from premium materials and designed for durability and luxury.",
        },
        10: {
          title: "The North Coat",
          type: "Clothes",
          details:
            "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
        },
        11: {
          title: "HAVIT HV-G92 Gamepad",
          type: "Gaming",
          details:
            "Enjoy responsive and precise gaming controls with the HAVIT HV-G92 gamepad, designed for hours of gaming fun.",
        },
        12: {
          title: "AK-900 Wired Keyboard",
          type: "Technology",
          details:
            "Type with speed and accuracy using the AK-900 wired keyboard, featuring a durable construction and ergonomic design.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Technology",
          details:
            "Immerse yourself in gaming with the IPS LCD gaming monitor, delivering vibrant visuals and smooth gameplay.",
        },
        14: {
          title: "S-Series Comfort Chair",
          type: "Clothes",
          details:
            "Relax in comfort with the S-Series comfort chair, featuring ergonomic design and plush cushioning for long hours of sitting.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "New Arrival",
          details:
            "Experience powerful sound with the JBL Boombox 2, featuring a rugged design and long battery life for all-day listening.",
        },
        16: {
          title: "perfume",
          type: "New Arrival",
          details:
            "This perfume is a blend of oud, rose, and incense, creating a rich and luxurious scent that lasts all day.",
        },
        17: {
          title: "Phone",
          type: "New Arrival",
          details:
            "This phone features a large display, powerful processor, and long battery life, perfect for work and play.",
        },
        18: {
          title: "PlayStation 5",
          type: "New Arrival",
          details:
            "The black and white version of the PS5 is coming out on sale.",
        },
        19: {
          title: "Speaker",
          type: "New Arrival",
          details: "Amazing sound quality with the Amazon wireless speaker.",
        },
        20: {
          title: "Women's Collections",
          type: "New Arrival",
          details:
            "Women's collections are featured that give you another vibe, and you can find the best collections here.",
        },
        21: {
          title: "Football Shoes",
          type: "New Arrival",
          details:
            "The best football shoes for your game, and you can find the best collections here.",
        },
      },
      services: {
        0: {
          value: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140 ",
        },

        1: {
          value: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        2: {
          value: "MONEY BACK GUARANTEE",
          description: "We reurn money within 30 days",
        },
      },
      redButtons: {
        viewAllProducts: "View All Products",
        viewAll: "View All",
        buyNow: "Buy Now",
        sendMassage: "Send Massage",
        createAccount: "Create Account",
        login: "Log In",
        applyCoupon: "Apply Coupon",
        processToCheckout: "Process to checkout",
        placeOrder: "Place Order",
        backToHomePage: "Back to home page",
      },
      category: {
        redTitle: "categories",
        title: "Browse By Category",
        categories: {
          0: "Phones",
          1: "Computers",
          2: "SmartWatch",
          3: "Camera",
          4: "HeadPhones",
          5: "Gaming",
        },
      },
      bestSelling: {
        redTitle: "This Month",
        title: "Best Selling Products",
      },
      deal: {
        greenTitle: "Categories",
        title: "Enhance Your Listening Experience",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        buyNow: "Buy Now!",
      },
      allProducts: {
        redTitle: "Our Products",
        title: "Explore Our Products",
      },
      featured: {
        redTitle: "Featured",
        title: "New Arrival",
        shopNow: "Shop Now",
        playStation: {
          title: "PlayStation 5",
          description: "Black and White version of the PS5 coming out on sale.",
        },
        WomenCollections: {
          title: "Women’s Collections",
          description: "Featured woman collections that give you another vibe.",
        },
        speakers: {
          title: "Speakers",
          description: "Amazon wireless speakers",
        },
        perfume: {
          title: "Perfume",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        exclusive: "Exclusive",
        subscribe: "Subscribe",
        offer: "Get 10% off your first order",
        enterEmail: "Enter your email",
        account: "Account",
        myAccount: "My Account",
        sign: "Login / Register",
        cart: "Cart",
        wishlist: "Wishlist",
        shop: "Shop",
        downloadApp: "Download App",
        save: "Save $3 with App New User Only",
        support: "Support",
        address: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh",
        quickLinks: "Quick Links",
        privacy: "Privacy Policy",
        usage: "Terms Of Use",
        FAQ: "FAQ",
        Contact: "Contact",
        copyrights: "© Copyright Rimel 2022. All rights reserved",
        allRightsReserved: "© All rights reserved",
      },
    },
  },
  gr: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader:
        "Sommerschlussverkauf für alle Badeanzüge und kostenloser Expressversand – 50 % RABATT!",
      shop: "Jetzt einkaufen",
      welcome: "Willkommen auf der E-Commerce-Website",
      exclusive: "Exklusiv",
      home: "Zuhause",
      contact: "Kontakt",
      about: "Über",
      signUp: "Anmelden",
      headerIcons: {
        1: "Mein Konto",
        2: "Meine Bestellung",
        3: "Meine Stornierungen",
        4: "Meine Bewertungen",
        5: "Ausloggen",
      },
      search: "Suche...",
      homeSections: {
        row1: {
          col1: [
            "Damenmode",
            "Herrenmode",
            "Elektronik",
            "Zuhause & Lifestyle",
            "Medizin",
            "Sport & Outdoor",
            "Baby & Spielzeug",
            "Lebensmittel & Haustiere",
            "Gesundheit & Schönheit",
          ],
          col2: [
            "iPhone 14 Serie",
            "Bis zu 10% Rabatt Gutschein",
            "Jetzt einkaufen",
          ],
        },
        row2: [
          "Heute’s",
          "Blitzangebote",
          "Tage",
          "Stunden",
          "Minuten",
          "Sekunden",
        ],
      },
      removeFromCart: "Vom Warenkorb entfernen",
      addToCart: "In den Warenkorb legen",
      new: "NEU",
      itemsArray: {
        0: {
          title: "Kinder-Elektroauto",
          type: "Gaming",
          details:
            "Ein aufregendes Elektroauto für Kinder, um stilvoll herumzufahren und stundenlangen Spaß zu bieten.",
        },
        1: {
          title: "CANON EOS DSLR Kamera",
          type: "Elektronik",
          details:
            "Machen Sie atemberaubende Fotos und Videos mit dieser professionellen Canon DSLR-Kamera, perfekt für Fotoliebhaber.",
        },
        2: {
          title: "Rasse Trockenfutter für Hunde",
          type: "Allgemein",
          details:
            "Nahrhaftes Trockenfutter für Hunde, um Ihren pelzigen Freund gesund und glücklich zu halten, hergestellt aus hochwertigen Zutaten.",
        },
        3: {
          title: "ASUS FHD Gaming Laptop",
          type: "Elektronik",
          details:
            "Erleben Sie High-Performance-Gaming mit diesem ASUS FHD Gaming-Laptop, der fortschrittliche Grafiken und reibungsloses Gameplay bietet.",
        },
        4: {
          title: "Curology Produktset",
          type: "Allgemein",
          details:
            "Ein komplettes Hautpflegeset von Curology zum Reinigen, Befeuchten und Schützen Ihrer Haut, damit sie weich und strahlend bleibt.",
        },
        5: {
          title: "GP11 Shooter USB Gamepad",
          type: "Gaming",
          details:
            "Verbessern Sie Ihr Spielerlebnis mit dem GP11 Shooter USB Gamepad, das eine hochwertige Konstruktion und präzise Steuerungen bietet.",
        },
        6: {
          title: "Gesteppte Satinjacke",
          type: "Kleidung",
          details:
            "Bleiben Sie mit dieser gesteppten Satinjacke stilvoll und warm, perfekt, um Ihrem Outfit einen trendigen Touch zu verleihen.",
        },
        7: {
          title: "Kleines Bücherregal",
          type: "Allgemein",
          details:
            "Organisieren Sie Ihre Bücher und Dekorationsgegenstände ordentlich mit diesem kleinen Bücherregal, das für kompakte Räume geeignet ist.",
        },
        8: {
          title: "RGB Flüssigkeits-CPU-Kühler",
          type: "Elektronik",
          details:
            "Halten Sie Ihre CPU kühl und reibungslos mit dem RGB Flüssigkeits-CPU-Kühler, der eine Hochleistungspumpe und anpassbare RGB-Beleuchtung bietet.",
        },
        9: {
          title: "Gucci Reisetasche",
          type: "Kleidung",
          details:
            "Reisen Sie mit Stil mit der Gucci Reisetasche, die aus hochwertigen Materialien gefertigt und für Langlebigkeit und Luxus konzipiert ist.",
        },
        10: {
          title: "Der Nordmantel",
          type: "Kleidung",
          details:
            "Bleiben Sie warm und modisch mit dem Nordmantel, der eine robuste Konstruktion und ein zeitloses Design bietet.",
        },
        11: {
          title: "HAVIT HV-G92 Gamepad",
          type: "Gaming",
          details:
            "Genießen Sie reaktionsschnelle und präzise Spielsteuerungen mit dem HAVIT HV-G92 Gamepad, das für stundenlangen Spielspaß entwickelt wurde.",
        },
        12: {
          title: "AK-900 Kabeltastatur",
          type: "Elektronik",
          details:
            "Tippen Sie schnell und genau mit der AK-900 Kabeltastatur, die eine robuste Konstruktion und ein ergonomisches Design bietet.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Elektronik",
          details:
            "Tauchen Sie ein in das Gaming mit dem IPS LCD Gaming Monitor, der lebendige Visuals und reibungsloses Gameplay bietet.",
        },
        14: {
          title: "S-Serie Komfortstuhl",
          type: "Kleidung",
          details:
            "Entspannen Sie sich in Komfort mit dem S-Serie Komfortstuhl, der ein ergonomisches Design und weiche Polsterung für stundenlanges Sitzen bietet.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "Neuankömmling",
          details:
            "Erleben Sie kraftvollen Sound mit dem JBL Boombox 2, der ein robustes Design und eine lange Akkulaufzeit für ganztägiges Hören bietet.",
        },
        16: {
          title: "Parfüm",
          type: "Neuankömmling",
          details:
            "Dieses Parfüm ist eine Mischung aus Oud, Rose und Weihrauch und kreiert einen reichen und luxuriösen Duft, der den ganzen Tag hält.",
        },
        17: {
          title: "Telefon",
          type: "Neuankömmling",
          details:
            "Dieses Telefon verfügt über ein großes Display, einen leistungsstarken Prozessor und eine lange Akkulaufzeit, ideal für Arbeit und Spiel.",
        },
        18: {
          title: "PlayStation 5",
          type: "Neuankömmling",
          details: "Die schwarz-weiße Version der PS5 kommt in den Verkauf.",
        },
        19: {
          title: "Lautsprecher",
          type: "Neuankömmling",
          details:
            "Erstaunliche Klangqualität mit dem Amazon Wireless-Lautsprecher.",
        },
        20: {
          title: "Frauenkollektionen",
          type: "Neuankömmling",
          details:
            "Frauenkollektionen sind vorgestellt, die Ihnen eine andere Stimmung verleihen, und Sie finden die besten Kollektionen hier.",
        },
        21: {
          title: "Fußballschuhe",
          type: "Neuankömmling",
          details:
            "Die besten Fußballschuhe für Ihr Spiel, und Sie finden die besten Kollektionen hier.",
        },
      },
      services: {
        0: {
          value: "KOSTENLOSE UND SCHNELLE LIEFERUNG",
          description: "Kostenlose Lieferung für alle Bestellungen über 140 $",
        },
        1: {
          value: "24/7 KUNDENSERVICE",
          description: "Freundlicher 24/7-Kundensupport",
        },
        2: {
          value: "GELD-ZURÜCK-GARANTIE",
          description: "Wir erstatten das Geld innerhalb von 30 Tagen",
        },
      },
      redButtons: {
        viewAllProducts: "Alle Produkte anzeigen",
        viewAll: "Alle anzeigen",
        buyNow: "Jetzt kaufen",
        sendMassage: "Nachricht senden",
        createAccount: "Konto erstellen",
        login: "Einloggen",
        applyCoupon: "Gutschein anwenden",
        processToCheckout: "Zur Kasse gehen",
        placeOrder: "Bestellung aufgeben",
        backToHomePage: "Zurück zur Startseite",
      },
      category: {
        redTitle: "Kategorien",
        title: "Nach Kategorie durchsuchen",
        categories: {
          0: "Telefone",
          1: "Computer",
          2: "SmartWatch",
          3: "Kamera",
          4: "Kopfhörer",
          5: "Gaming",
        },
      },
      bestSelling: {
        redTitle: "Diesen Monat",
        title: "Bestseller-Produkte",
      },
      deal: {
        greenTitle: "Kategorien",
        title: "Verbessern Sie Ihr Hörerlebnis",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden",
        buyNow: "Jetzt kaufen!",
      },
      allProducts: {
        redTitle: "Unsere Produkte",
        title: "Entdecken Sie unsere Produkte",
      },
      featured: {
        redTitle: "Vorgestellt",
        title: "Neue Ankunft",
        shopNow: "Jetzt einkaufen",
        playStation: {
          title: "PlayStation 5",
          description: "Schwarz-weiße Version der PS5 kommt in den Verkauf.",
        },
        WomenCollections: {
          title: "Frauenkollektionen",
          description:
            "Vorgestellte Frauensammlungen, die Ihnen eine andere Stimmung verleihen.",
        },
        speakers: {
          title: "Lautsprecher",
          description: "Amazon kabellose Lautsprecher",
        },
        perfume: {
          title: "Parfüm",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        exclusive: "Exklusiv",
        subscribe: "Abonnieren",
        offer: "Erhalten Sie 10% Rabatt auf Ihre erste Bestellung",
        enterEmail: "Geben Sie Ihre E-Mail-Adresse ein",
        account: "Konto",
        myAccount: "Mein Konto",
        sign: "Anmelden / Registrieren",
        cart: "Warenkorb",
        wishlist: "Wunschliste",
        shop: "Geschäft",
        downloadApp: "App herunterladen",
        save: "Sparen Sie 3 $ mit App Nur für neue Benutzer",
        support: "Unterstützung",
        address: "111 Bijoy Sarani, Dhaka, DH 1515, Bangladesch",
        quickLinks: "Schnelle Links",
        privacy: "Datenschutz-Bestimmungen",
        usage: "Nutzungsbedingungen",
        FAQ: "FAQ",
        Contact: "Kontakt",
        copyrights: "© Urheberrecht Rimel 2022. Alle Rechte vorbehalten",
        allRightsReserved: "© Alle Rechte vorbehalten",
      },
    },
  },

  ar: {
    translation: {
      font: "font-noto",
      dir: "rtl",
      topHeader:
        "تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!",
      shop: "تسوق الآن",
      welcome: "مرحبًا بك في موقع التجارة الإلكترونية",
      exclusive: "حصري",
      home: "الصفحة الرئيسية",
      contact: "اتصل",
      about: "حول",
      signUp: "سجل",
      headerIcons: {
        1: "إدارة حسابي",
        2: "طلبي",
        3: "إلغاءاتي",
        4: "تقييماتي",
        5: "تسجيل الخروج",
      },
      search: "...بحث",
      homeSections: {
        row1: {
          col1: [
            "أزياء النساء",
            "أزياء الرجال",
            "إلكترونيات",
            "المنزل ونمط الحياة",
            "الطب",
            "الرياضة والهواء الطلق",
            "ألعاب الأطفال",
            "البقالة والحيوانات الأليفة",
            "الصحة والجمال",
          ],
          col2: ["سلسلة iPhone 14", "حتى 10% خصم القسيمة", "تسوق الآن"],
        },
        row2: ["اليوم", "عروض الفلاش", "أيام", "ساعات", "دقائق", "ثواني"],
      },
      removeFromCart: "إزالة من السلة",
      addToCart: "أضف إلى السلة",
      new: "جديد",
      itemsArray: {
        0: {
          title: "سيارة كهربائية للأطفال",
          type: "ألعاب",
          details:
            "سيارة كهربائية مثيرة للأطفال للقيادة بأناقة، توفر ساعات من الترفيه والمرح.",
        },
        1: {
          title: "كاميرا CANON EOS DSLR",
          type: "الإلكترونيات",
          details:
            "التقاط صور وفيديوهات مذهلة بهذه الكاميرا الاحترافية من كانون DSLR، مثالية لهواة التصوير.",
        },
        2: {
          title: "طعام كلب جاف للسلالة",
          type: "عام",
          details:
            "طعام كلب جاف غذائي للحفاظ على صحة وسعادة صديقك الفروي، مصنوع من مكونات عالية الجودة.",
        },
        3: {
          title: "لابتوب ASUS FHD للألعاب",
          type: "الإلكترونيات",
          details:
            "تجربة ألعاب عالية الأداء مع لابتوب ASUS FHD للألعاب، الذي يتميز برسومات متقدمة ولعب سلس.",
        },
        4: {
          title: "مجموعة منتجات Curology",
          type: "عام",
          details:
            "مجموعة كاملة للعناية بالبشرة من Curology لتنظيفها وترطيبها وحمايتها، مما يجعلها ناعمة ومشعة.",
        },
        5: {
          title: "جيمباد USB GP11 Shooter",
          type: "ألعاب",
          details:
            "تعزيز تجربة الألعاب الخاصة بك مع جيمباد USB GP11 Shooter، الذي يتميز ببناء عالي الجودة وتحكم دقيق.",
        },
        6: {
          title: "جاكيت ساتان مبطن",
          type: "ملابس",
          details:
            "ابقَ أنيقًا ودافئًا مع جاكيت ساتان مبطن، مثالية لإضافة لمسة عصرية إلى ملابسك.",
        },
        7: {
          title: "رف كتب صغير",
          type: "عام",
          details:
            "نظم كتبك والأشياء الزخرفية بشكل منظم مع هذا الرف الصغير للكتب، مصمم ليناسب المساحات المدمجة.",
        },
        8: {
          title: "مبرد سائل لوحدة المعالجة المركزية RGB",
          type: "الإلكترونيات",
          details:
            "احتفظ بوحدة المعالجة المركزية باردة وتعمل بسلاسة مع مبرد سائل وحدة المعالجة المركزية RGB، الذي يتميز بمضخة عالية الأداء وإضاءة RGB قابلة للتخصيص.",
        },
        9: {
          title: "حقيبة سفر Gucci",
          type: "ملابس",
          details:
            "سافر بأناقة مع حقيبة سفر Gucci، المصنوعة من مواد فاخرة ومصممة للمتانة والفخامة.",
        },
        10: {
          title: "معطف The North",
          type: "ملابس",
          details:
            "ابقَ دافئًا وعصريًا مع معطف The North، الذي يتميز ببناء متين وتصميم خالد.",
        },
        11: {
          title: "جيمباد HAVIT HV-G92",
          type: "ألعاب",
          details:
            "استمتع بتحكم ألعاب سريع ودقيق مع جيمباد HAVIT HV-G92، المصمم لساعات من المرح في الألعاب.",
        },
        12: {
          title: "لوحة مفاتيح سلكية AK-900",
          type: "الإلكترونيات",
          details:
            "اكتب بسرعة ودقة باستخدام لوحة المفاتيح السلكية AK-900، التي تتميز ببناء متين وتصميم مريح.",
        },
        13: {
          title: "شاشة ألعاب IPS LCD",
          type: "الإلكترونيات",
          details:
            "غمر نفسك في الألعاب مع شاشة ألعاب IPS LCD، التي تقدم صورًا حية ولعبًا سلسًا.",
        },
        14: {
          title: "كرسي راحة من السلسلة S",
          type: "ملابس",
          details:
            "استرخ في راحة مع كرسي الراحة من السلسلة S، الذي يتميز بتصميم مريح ووسادة ناعمة لساعات طويلة من الجلوس.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "جديد",
          details:
            "استمع إلى صوت قوي مع JBL Boombox 2، الذي يتميز بتصميم قوي وعمر بطارية طويل للاستماع طوال اليوم.",
        },
        16: {
          title: "عطر",
          type: "جديد",
          details:
            "هذا العطر هو مزيج من العود والورد واللبان، مما يخلق رائحة غنية وفاخرة تدوم طوال اليوم.",
        },
        17: {
          title: "هاتف",
          type: "جديد",
          details:
            "يتميز هذا الهاتف بشاشة كبيرة ومعالج قوي وعمر بطارية طويل، مثالي للعمل واللعب.",
        },
        18: {
          title: "بلاي ستيشن 5",
          type: "جديد",
          details: "النسخة السوداء والبيضاء من PS5 تصدر للبيع.",
        },
        19: {
          title: "سماعات",
          type: "جديد",
          details: "جودة صوت مذهلة مع سماعة Amazon اللاسلكية.",
        },
        20: {
          title: "مجموعات النساء",
          type: "جديد",
          details:
            "مجموعات نسائية مميزة تمنحك جوًا آخر، ويمكنك العثور على أفضل المجموعات هنا.",
        },
        21: {
          title: "أحذية كرة القدم",
          type: "جديد",
          details:
            "أفضل أحذية كرة القدم للعبتك، ويمكنك العثور على أفضل المجموعات هنا.",
        },
      },
      services: {
        0: {
          value: "توصيل مجاني وسريع",
          description: "توصيل مجاني لجميع الطلبات التي تزيد عن 140 دولارًا",
        },
        1: {
          value: "خدمة عملاء على مدار الساعة",
          description: "دعم عملاء ودود على مدار الساعة",
        },
        2: {
          value: "ضمان استعادة الأموال",
          description: "نعيد الأموال خلال 30 يومًا",
        },
      },
      redButtons: {
        viewAllProducts: "عرض جميع المنتجات",
        viewAll: "عرض الكل",
        buyNow: "اشتر الآن",
        sendMassage: "إرسال رسالة",
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
        applyCoupon: "تطبيق القسيمة",
        processToCheckout: "الانتقال إلى الخروج",
        placeOrder: "تقديم الطلب",
        backToHomePage: "العودة إلى الصفحة الرئيسية",
      },
      category: {
        redTitle: "الفئات",
        title: "تصفح حسب الفئة",
        categories: {
          0: "الهواتف",
          1: "الكمبيوتر",
          2: "الساعات الذكية",
          3: "الكاميرا",
          4: "سماعات الرأس",
          5: "ألعاب",
        },
      },
      bestSelling: {
        redTitle: "هذا الشهر",
        title: "أفضل المنتجات المباعة",
      },
      deal: {
        greenTitle: "الفئات",
        title: "تعزيز تجربة الاستماع الخاصة بك",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        buyNow: "اشتر الآن!",
      },
      allProducts: {
        redTitle: "منتجاتنا",
        title: "استكشف منتجاتنا",
      },
      featured: {
        redTitle: "متميز",
        title: "وصول جديد",
        shopNow: "تسوق الآن",
        playStation: {
          title: "بلاي ستيشن 5",
          description: "النسخة السوداء والبيضاء من PS5 تصدر للبيع.",
        },
        WomenCollections: {
          title: "مجموعات النساء",
          description: "مجموعات نسائية مميزة تمنحك جوًا آخر.",
        },
        speakers: {
          title: "مكبرات الصوت",
          description: "مكبرات صوت لاسلكية من Amazon",
        },
        perfume: {
          title: "عطر",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        exclusive: "حصري",
        subscribe: "اشترك",
        offer: "احصل على خصم 10% على طلبك الأول",
        enterEmail: "أدخل بريدك الإلكتروني",
        account: "الحساب",
        myAccount: "حسابي",
        sign: "تسجيل الدخول / التسجيل",
        cart: "عربة التسوق",
        wishlist: "قائمة الرغبات",
        shop: "متجر",
        downloadApp: "تحميل التطبيق",
        save: "وفر 3 دولارات مع تطبيق جديد للمستخدمين فقط",
        support: "الدعم",
        address: "111 بيجوي ساراني، داكا، DH 1515، بنغلاديش",
        quickLinks: "روابط سريعة",
        privacy: "سياسة الخصوصية",
        usage: "شروط الاستخدام",
        FAQ: "الأسئلة الشائعة",
        Contact: "اتصل",
        copyrights: "© حقوق الطبع والنشر Rimel 2022. كل الحقوق محفوظة",
        allRightsReserved: "© كل الحقوق محفوظة",
      },
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources,
  keySeparator: ".",
  interpolation: { escapeValue: false },
});

export default i18n;
