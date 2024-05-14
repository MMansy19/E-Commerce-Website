// LangConfig.jsx
import { Reviews } from "@mui/icons-material";
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

      home: "Home",
      contact: "Contact",
      about: "About",
      signUp: "Sign Up",
      account: "My Account",

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
      categories: {
        general: "General",
        technology: "Technology",
        gaming: "Gaming",
        clothes: "Clothes",
        newArrival: "New Arrival",
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
        exploreByCategory: "Explore By Category",
        buyNow: "Buy Now",
        sendMassage: "Send Massage",
        createAccount: "Create Account",
        login: "Log In",
        applyCoupon: "Apply Coupon",
        processToCheckout: "Process to checkout",
        placeOrder: "Place Order",
        backToHomePage: "Back to home page",
        chooseByCategory: "Choose By Category",
      },
      whiteButtons: {
        backToHomePage: "Back to Home Page",
        loadMore: "Load More..",
        moveAllToBag: "Move All to Bag",
        seeAll: "See All",
        returnToShop: "Return to Shop",
        updateCart: "Update Cart",
      },

      wishlist: {
        title: "Wishlist",
        justForYou: "Just for you",
      },
      cart: {
        header: {
          product: "Product",
          price: "Price",
          quantity: "Quantity",
          subtotal: "Subtotal",
        },
        cartTotal: "Cart Total",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free: "Free",
      },
      checkOut: {
        title: "Checkout",
        billingDetails: "Billing Details",
        firstName: "First Name",
        company: "Company Name",
        Country: "Country",
        address: "Street Address",
        city: "Town / City",
        phone: "Phone",
        email: "Email Address",
        apartment: "Apartment, floor, etc. (optional)",
        methods: "Payment Methods",
        bank: "Bank (Visa)",
        cash: "Cash on Delivery",
        couponCode: "Coupon Code",
      },
      payment: {
        payment: "Payment Details",
        number: "Card Number",
        enter: "Enter your card number",
        expirationDate: "Expiration Date",
      },
      productPage: {
        relatedItems: "Related Items",
        colors: "Colors",
        size: "Size",
        inStock: "In Stock",
        reviews: "Reviews",
        review: "Review",
        1: "Free Delivery",
        1.1: "Enter your postal code for Delivery Availability",
        2: "Return Delivery",
        2.1: "Free 30 Days Delivery Returns.Details",
      },
      contactPage: {
        call: "Call To Us",
        available: "We are available 24/7, 7 days a week.",
        phone: "Phone",
        write: "Write To US",
        fillForm: "Fill out our form and we will contact you within 24 hours.",
        emails: "Emails",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone Number",
        yourMessage: "Your Message",
      },
      aboutPage: {
        title: "About",
        story: "Our Story",
        paragraph1:
          "Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.",
        paragraph2:
          "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.",
        card1: "Sellers active on our site",
        card2: "Monthly Product Sales",
        card3: "Customers active on our site",
        card4: "Annual gross sale on our site",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "Tom Cruise",
        name2: "Tom Hanks",
        name3: "Will Smith",
        name4: "Tom Hardy",
        job1: "Founder & Chairman",
        job2: "CTO",
        job3: "CEO",
        job4: "Product Designer",
      },
      signUpPage: {
        title: "Create an account",
        enter: "Enter your details below:",
        email: "Email",
        password: "Password",
        createAccount: "Create Account",
        withGoogle: "Sign up with Google",
        haveAccount: "Already have an account?",
        login: "Log in",
      },
      loginPage: {
        title: "Log in to Exclusive",
        enter: "Enter your details below:",
        emailOrPhone: "Email or Phone Number",
        password: "Password",
        forgot: "Forgot Password?",
        notHaveAccount: "Don't have an account?",
        login: "Log In",
      },
      Snackbar: {
        inCart: "Items already in the cart!",
        movedToCart: "Items moved to the cart successfully!",
        noItems: "No items to move to the cart!",
      },
      category: {
        redTitle: "Categories",
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
        byCategory: "Explore By Category",
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
        subscribe: "Subscribe",
        offer: "Get 10% off your first order",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
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
      topHeader: "Sommerschlussverkauf - 50 % RABATT!",
      shop: "Jetzt einkaufen",
      welcome: "Willkommen auf der E-Commerce-Website",

      home: "Zuhause",
      contact: "Kontakt",
      about: "Über",
      signUp: "Anmelden",
      account: "Mein Konto",
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
          type: "Technologie",
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
          type: "Technologie",
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
          type: "Technologie",
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
          type: "Technologie",
          details:
            "Tippen Sie schnell und genau mit der AK-900 Kabeltastatur, die eine robuste Konstruktion und ein ergonomisches Design bietet.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Technologie",
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
      categories: {
        general: "Allgemein",
        technology: "Technologie",
        gaming: "Gaming",
        clothes: "Kleidung",
        newArrival: "Neuankömmling",
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
        exploreByCategory: "Nach Kategorie erkunden",
        buyNow: "Jetzt kaufen",
        sendMassage: "Nachricht senden",
        createAccount: "Konto erstellen",
        login: "Einloggen",
        applyCoupon: "Gutschein anwenden",
        processToCheckout: "Zur Kasse gehen",
        placeOrder: "Bestellung aufgeben",
        backToHomePage: "Zurück zur Startseite",
        chooseByCategory: "Nach Kategorie wählen",
      },
      whiteButtons: {
        backToHomePage: "Zurück zur Startseite",
        loadMore: "Mehr laden..",
        moveAllToBag: "Alle in den Warenkorb legen",
        seeAll: "Alle anzeigen",
        returnToShop: "Zurück zum Shop",
        updateCart: "Warenkorb aktualisieren",
      },
      wishlist: {
        title: "Wunschliste",
        justForYou: "Nur für dich",
      },
      cart: {
        header: {
          product: "Produkt",
          price: "Preis",
          quantity: "Menge",
          subtotal: "Zwischensumme",
        },
        cartTotal: "Warenkorb Gesamt",
        total: "Gesamt",
        subtotal: "Zwischensumme",
        shipping: "Versand",
        free: "Kostenlos",
      },
      checkOut: {
        title: "Kasse",
        billingDetails: "Rechnungsdetails",
        firstName: "Vorname",
        company: "Firmenname",
        Country: "Land",
        address: "Straßenadresse",
        city: "Stadt",
        phone: "Telefon",
        email: "E-Mail-Adresse",
        apartment: "Wohnung, Etage usw. (optional)",
        methods: "Zahlungsmethoden",
        bank: "Bank (Visa)",
        cash: "Nachnahme",
        couponCode: "Gutscheincode",
      },
      payment: {
        payment: "Zahlungsdetails",
        number: "Kartennummer",
        enter: "Geben Sie Ihre Kartennummer ein",
        expirationDate: "Ablaufdatum",
      },
      productPage: {
        relatedItems: "Ähnliche Artikel",
        colors: "Farben",
        size: "Größe",
        inStock: "Auf Lager",
        reviews: "Bewertungen",
        review: "Bewertung",
        1: "Kostenlose Lieferung",
        1.1: "Geben Sie Ihre Postleitzahl für die Lieferverfügbarkeit ein",
        2: "Rücksendung",
        2.1: "Kostenlose 30-tägige Lieferdetails",
      },

      contactPage: {
        call: "Rufen Sie uns an",
        available: "Wir sind 24/7, 7 Tage die Woche erreichbar.",
        phone: "Telefon",
        write: "Schreiben Sie uns",
        fillForm:
          "Füllen Sie unser Formular aus, und wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
        emails: "E-Mails",
        yourName: "Ihr Name",
        yourEmail: "Ihre E-Mail",
        yourPhone: "Ihre Telefonnummer",
        yourMessage: "Ihre Nachricht",
      },
      aboutPage: {
        title: "Über",
        story: "Unsere Geschichte",
        paragraph1:
          "Gestartet im Jahr 2015, ist Exclusive der führende Online-Shopping-Marktplatz Südasiens mit einer aktiven Präsenz in Bangladesch. Unterstützt von einer breiten Palette maßgeschneiderter Marketing-, Daten- und Service-Lösungen hat Exclusive 10.500 Verkäufer und 300 Marken und bedient 3 Millionen Kunden in der Region.",
        paragraph2:
          "Exclusive hat mehr als 1 Million Produkte im Angebot, die sehr schnell wachsen. Exclusive bietet eine vielfältige Auswahl in Kategorien, die von Verbraucher.",
        card1: "Verkäufer aktiv auf unserer Website",
        card2: "Monatlicher Produktverkauf",
        card3: "Kunden aktiv auf unserer Website",
        card4: "Jährlicher Bruttoumsatz auf unserer Website",
        k1: "10,5k",
        k2: "33k",
        k3: "45,5k",
        k4: "25k",
        name1: "Tom Cruise",
        name2: "Tom Hanks",
        name3: "Will Smith",
        name4: "Tom Hardy",
        job1: "Gründer & Vorsitzender",
        job2: "CTO",
        job3: "CEO",
        job4: "Produktdesigner",
      },
      signUpPage: {
        title: "Ein Konto erstellen",
        enter: "Geben Sie Ihre Daten unten ein:",
        email: "E-Mail",
        password: "Passwort",
        createAccount: "Konto erstellen",
        withGoogle: "Mit Google anmelden",
        haveAccount: "Sie haben bereits ein Konto?",
        login: "Einloggen",
      },
      loginPage: {
        title: "Bei Exclusive anmelden",
        enter: "Geben Sie Ihre Daten unten ein:",
        emailOrPhone: "E-Mail oder Telefonnummer",
        password: "Passwort",
        forgot: "Passwort vergessen?",
        notHaveAccount: "Sie haben noch kein Konto?",
        login: "Einloggen",
      },

      Snackbar: {
        inCart: "Artikel bereits im Warenkorb!",
        movedToCart: "Artikel erfolgreich in den Warenkorb verschoben!",
        noItems: "Keine Artikel zum Verschieben in den Warenkorb!",
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
        byCategory: "Nach Kategorie erkunden",
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
        subscribe: "Abonnieren",
        offer: "Erhalten Sie 10% Rabatt auf Ihre erste Bestellung",
        enterEmail: "Geben Sie Ihre E-Mail-Adresse ein",
        enterPassword: "Geben Sie Ihr Passwort ein",
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
      home: "الصفحة الرئيسية",
      contact: "اتصل بنا",
      about: "من نحن",
      signUp: "إنشاء حساب",
      account: "حسابي",
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
          type: "تكنولوجيا",
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
          type: "تكنولوجيا",
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
          type: "تكنولوجيا",
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
          type: "تكنولوجيا",
          details:
            "اكتب بسرعة ودقة باستخدام لوحة المفاتيح السلكية AK-900، التي تتميز ببناء متين وتصميم مريح.",
        },
        13: {
          title: "شاشة ألعاب IPS LCD",
          type: "تكنولوجيا",
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
      categories: {
        general: "عام",
        technology: "تكنولوجيا",
        gaming: "ألعاب",
        clothes: "ملابس",
        newArrival: "جديد",
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
        exploreByCategory: "استكشاف حسب الفئة",
        buyNow: "اشتر الآن",
        sendMassage: "إرسال رسالة",
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
        applyCoupon: "تطبيق القسيمة",
        processToCheckout: "الانتقال إلى الخروج",
        placeOrder: "تقديم الطلب",
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        chooseByCategory: "اختيار حسب الفئة",
      },
      whiteButtons: {
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        loadMore: "تحميل المزيد..",
        moveAllToBag: "وضع الكل في السلة",
        seeAll: "عرض الكل",
        returnToShop: "العودة للتسوق",
        updateCart: "تحديث السلة",
      },
      wishlist: {
        title: "قائمة الرغبات",
        justForYou: "فقط لك",
      },
      cart: {
        header: {
          product: "المنتج",
          price: "السعر",
          quantity: "الكمية",
          subtotal: "المجموع الفرعي",
        },
        cartTotal: "المجموع الكلي للسلة",
        total: "الإجمالي",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        free: "مجانًا",
      },
      checkOut: {
        title: "الدفع",
        billingDetails: "تفاصيل الفواتير",
        firstName: "الاسم الأول",
        company: "الشركة",
        Country: "البلد",
        address: "العنوان",
        city: "المدينة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        apartment: "الشقة، الطابق الخ (اختياري)",
        methods: "طرق الدفع",
        bank: "بنك (فيزا)",
        cash: "الدفع عند الاستلام",
        couponCode: "رمز القسيمة",
      },
      payment: {
        payment: "تفاصيل الدفع",
        number: "رقم البطاقة",
        enter: "أدخل رقم بطاقتك",
        expirationDate: "تاريخ انتهاء الصلاحية",
      },
      productPage: {
        relatedItems: "العناصر ذات الصلة",
        colors: "الألوان",
        size: "الحجم",
        inStock: "متوفر",
        reviews: "تقييم",
        review: "تقييم",
        1: "التوصيل المجاني",
        1.1: "أدخل الرمز البريدي الخاص بك للتحقق من توفر التسليم",
        2: "الإرجاع",
        2.1: "تفاصيل الإرجاع المجاني لمدة 30 يومًا",
      },
      contactPage: {
        call: "اتصل بنا",
        available: "نحن متاحون على مدار الساعة طوال أيام الأسبوع.",
        phone: "الهاتف",
        write: "اكتب لنا",
        fillForm: "املأ نموذجنا وسنتصل بك في غضون 24 ساعة.",
        emails: "البريد الإلكتروني",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourPhone: "رقم هاتفك",
        yourMessage: "رسالتك",
      },
      aboutPage: {
        title: "من نحن",
        story: "قصتنا",
        paragraph1:
          "بدأت Exclusive في عام 2015، وهي السوق الرائدة للتسوق عبر الإنترنت في جنوب آسيا بوجود نشط في بنغلاديش. مدعومة بمجموعة واسعة من حلول التسويق والبيانات والخدمات المخصصة، يضم Exclusive 10،500 بائع و 300 علامة تجارية ويخدم 3 ملايين عميل في المنطقة.",
        paragraph2:
          "يقدم Exclusive أكثر من مليون منتج، وهو ينمو بسرعة كبيرة. يقدم Exclusive مجموعة متنوعة من الفئات التي تتراوح من المستهلك.",
        card1: "البائعين نشطون على موقعنا",
        card2: "مبيعات المنتجات الشهرية",
        card3: "العملاء نشطون على موقعنا",
        card4: "الإيرادات الإجمالية السنوية على موقعنا",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "توم كروز",
        name2: "توم هانكس",
        name3: "ويل سميث",
        name4: "توم هاردي",
        job1: "مؤسس ورئيس",
        job2: "المدير التنفيذي للتكنولوجيا",
        job3: "الرئيس التنفيذي",
        job4: "مصمم المنتج",
      },
      signUpPage: {
        title: "إنشاء حساب",
        enter: "أدخل بياناتك أدناه:",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        createAccount: "إنشاء حساب",
        withGoogle: "تسجيل الدخول بواسطة جوجل",
        haveAccount: "هل لديك حساب بالفعل؟",
        login: "تسجيل الدخول",
      },
      loginPage: {
        title: "تسجيل الدخول إلى Exclusive",
        enter: "أدخل بياناتك أدناه:",
        emailOrPhone: "البريد الإلكتروني أو رقم الهاتف",
        password: "كلمة المرور",
        forgot: "نسيت كلمة المرور؟",
        notHaveAccount: "ليس لديك حساب بعد؟",
        login: "تسجيل الدخول",
      },

      Snackbar: {
        inCart: "العناصر موجود بالفعل في السلة!",
        movedToCart: "تم نقل العناصر بنجاح إلى السلة!",
        noItems: "لا توجد عناصر لنقلها إلى السلة!",
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
        byCategory: "استكشف حسب الفئة",
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
        subscribe: "اشترك",
        offer: "احصل على خصم 10% على طلبك الأول",
        enterEmail: "أدخل بريدك الإلكتروني",
        enterPassword: "أدخل كلمة المرور",
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
        Contact: "اتصل بنا",
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
