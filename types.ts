
export enum Language {
  IT = 'IT',
  EN = 'EN',
  DE = 'DE',
  FR = 'FR',
  ES = 'ES',
  BG = 'BG',
  HU = 'HU',
  PL = 'PL'
}

export interface SectionItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  link?: string;
  category: 'checkin' | 'checkout' | 'rules' | 'wifi' | 'house' | 'local' | 'transport';
}

export interface GuideData {
  propertyName: string;
  hostName: string;
  hostImage: string;
  location: string;
  address: string;
  coordinates: { lat: number; lng: number };
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  wifi: {
    name: string;
    password: string;
  };
  sections: SectionItem[];
}

export interface TranslationSet {
  welcome: string;
  yourHost: string;
  copyWifi: string;
  copied: string;
  addressCopied: string;
  getDirections: string;
  contactHost: string;
  adminMode: string;
  guestView: string;
  saveChanges: string;
  magicPolish: string;
  arrival: string;
  departure: string;
  checkinInstructions: string;
  checkoutInstructions: string;
  checkoutChecklist: string;
  msgArriving: string;
  msgCheckout: string;
  msgHelp: string;
  leaveReview: string;
  reviewText: string;
  checklist: {
    keys: string;
    lights: string;
    trash: string;
    windows: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  [Language.IT]: {
    welcome: "Benvenuti a Dimora Sorriso",
    yourHost: "Il tuo Host",
    copyWifi: "Copia Password WiFi",
    copied: "Copiato!",
    addressCopied: "Indirizzo copiato!",
    getDirections: "Come arrivare",
    contactHost: "Contattaci",
    adminMode: "Modalità Gestore",
    guestView: "Vista Ospite",
    saveChanges: "Salva Modifiche",
    magicPolish: "Perfeziona con AI",
    arrival: "Arrivo",
    departure: "Partenza",
    checkinInstructions: "Istruzioni Check-in",
    checkoutInstructions: "Istruzioni Check-out",
    checkoutChecklist: "Prima di andare via",
    msgArriving: "Sto arrivando!",
    msgCheckout: "Ho fatto il check-out",
    msgHelp: "Ho bisogno di aiuto",
    leaveReview: "Lascia una recensione",
    reviewText: "Ti è piaciuto il soggiorno? Lasciaci 5 stelle!",
    checklist: {
      keys: "Chiavi sul mobile all'ingresso",
      lights: "Luci e aria condizionata spente",
      trash: "Rifiuti buttati",
      windows: "Finestre chiuse"
    }
  },
  [Language.EN]: {
    welcome: "Welcome to Dimora Sorriso",
    yourHost: "Your Host",
    copyWifi: "Copy WiFi Password",
    copied: "Copied!",
    addressCopied: "Address copied!",
    getDirections: "Get Directions",
    contactHost: "Contact Us",
    adminMode: "Host Mode",
    guestView: "Guest View",
    saveChanges: "Save Changes",
    magicPolish: "Polish with AI",
    arrival: "Arrival",
    departure: "Departure",
    checkinInstructions: "Check-in Instructions",
    checkoutInstructions: "Check-out Instructions",
    checkoutChecklist: "Before you leave",
    msgArriving: "I am arriving!",
    msgCheckout: "I have checked out",
    msgHelp: "I need help",
    leaveReview: "Leave a review",
    reviewText: "Did you enjoy your stay? Leave us 5 stars!",
    checklist: {
      keys: "Keys on the furniture at the entrance",
      lights: "Lights & AC turned off",
      trash: "Trash disposed",
      windows: "Windows closed"
    }
  },
  [Language.DE]: {
    welcome: "Willkommen in der Dimora Sorriso",
    yourHost: "Ihr Gastgeber",
    copyWifi: "WLAN-Passwort kopieren",
    copied: "Kopiert!",
    addressCopied: "Adresse kopiert!",
    getDirections: "Anfahrt",
    contactHost: "Kontakt",
    adminMode: "Host-Modus",
    guestView: "Gast-Ansicht",
    saveChanges: "Änderungen speichern",
    magicPolish: "Mit KI verfeinern",
    arrival: "Anreise",
    departure: "Abreise",
    checkinInstructions: "Check-in Anweisungen",
    checkoutInstructions: "Check-out Anweisungen",
    checkoutChecklist: "Bevor Sie gehen",
    msgArriving: "Ich komme an!",
    msgCheckout: "Ich habe ausgecheckt",
    msgHelp: "Ich brauche Hilfe",
    leaveReview: "Bewertung abgeben",
    reviewText: "Hat es Ihnen gefallen? Hinterlassen Sie uns 5 Sterne!",
    checklist: {
      keys: "Schlüssel auf dem Möbelstück am Eingang",
      lights: "Licht & Klimaanlage aus",
      trash: "Müll entsorgt",
      windows: "Fenster geschlossen"
    }
  },
  [Language.FR]: {
    welcome: "Bienvenue à Dimora Sorriso",
    yourHost: "Votre Hôte",
    copyWifi: "Copier le mot de passe WiFi",
    copied: "Copié !",
    addressCopied: "Adresse copiée !",
    getDirections: "Comment arriver",
    contactHost: "Contactez-nous",
    adminMode: "Mode Hôte",
    guestView: "Vue Invité",
    saveChanges: "Enregistrer les modifications",
    magicPolish: "Peaufiner avec l'IA",
    arrival: "Arrivée",
    departure: "Départ",
    checkinInstructions: "Instructions d'arrivée",
    checkoutInstructions: "Instructions de départ",
    checkoutChecklist: "Avant de partir",
    msgArriving: "J'arrive !",
    msgCheckout: "J'ai fait le check-out",
    msgHelp: "J'ai besoin d'aide",
    leaveReview: "Laisser un avis",
    reviewText: "Vous avez aimé votre séjour ? Laissez-nous 5 étoiles !",
    checklist: {
      keys: "Clés sur le meuble à l'entrée",
      lights: "Lumières et climatisation éteintes",
      trash: "Poubelles vidées",
      windows: "Fenêtres fermées"
    }
  },
  [Language.ES]: {
    welcome: "Bienvenidos a Dimora Sorriso",
    yourHost: "Tu Anfitrión",
    copyWifi: "Copiar contraseña WiFi",
    copied: "¡Copiado!",
    addressCopied: "¡Dirección copiada!",
    getDirections: "Cómo llegar",
    contactHost: "Contáctanos",
    adminMode: "Modo Anfitrión",
    guestView: "Vista Huésped",
    saveChanges: "Guardar cambios",
    magicPolish: "Perfeccionar con IA",
    arrival: "Llegada",
    departure: "Salida",
    checkinInstructions: "Instrucciones de llegada",
    checkoutInstructions: "Instrucciones de salida",
    checkoutChecklist: "Antes de irte",
    msgArriving: "¡Estoy llegando!",
    msgCheckout: "He hecho el check-out",
    msgHelp: "Necesito ayuda",
    leaveReview: "Dejar una reseña",
    reviewText: "¿Te gustó tu estancia? ¡Déjanos 5 estrellas!",
    checklist: {
      keys: "Llaves en el mueble a la entrada",
      lights: "Luces y aire acondicionado apagados",
      trash: "Basura tirada",
      windows: "Ventanas cerradas"
    }
  },
  [Language.BG]: {
    welcome: "Добре дошли в Dimora Sorriso",
    yourHost: "Вашият домакин",
    copyWifi: "Копиране на WiFi парола",
    copied: "Копирано!",
    addressCopied: "Адресът е копиран!",
    getDirections: "Получаване на упътвания",
    contactHost: "Свържете се с нас",
    adminMode: "Режим на домакин",
    guestView: "Изглед за гости",
    saveChanges: "Запазване на промените",
    magicPolish: "Подобряване с AI",
    arrival: "Пристигане",
    departure: "Заминаване",
    checkinInstructions: "Инструкции за настаняване",
    checkoutInstructions: "Инструкции за напускане",
    checkoutChecklist: "Преди да си тръгнете",
    msgArriving: "Пристигам!",
    msgCheckout: "Напуснах",
    msgHelp: "Имам нужда от помощ",
    leaveReview: "Оставете отзив",
    reviewText: "Хареса ли ви престоят? Оставете ни 5 звезди!",
    checklist: {
      keys: "Ключове на шкафа на входа",
      lights: "Изгасени светлини и климатик",
      trash: "Изхвърлен боклук",
      windows: "Затворени прозорци"
    }
  },
  [Language.HU]: {
    welcome: "Üdvözöljük a Dimora Sorriso-ban",
    yourHost: "Az Ön házigazdája",
    copyWifi: "WiFi jelszó másolása",
    copied: "Másolva!",
    addressCopied: "Cím másolva!",
    getDirections: "Útvonaltervezés",
    contactHost: "Lépjen kapcsolatba velünk",
    adminMode: "Házigazda mód",
    guestView: "Vendég nézet",
    saveChanges: "Változtatások mentése",
    magicPolish: "Tökéletesítés AI-val",
    arrival: "Érkezés",
    departure: "Távozás",
    checkinInstructions: "Bejelentkezési utasítások",
    checkoutInstructions: "Kijelentkezési utasítások",
    checkoutChecklist: "Mielőtt elindul",
    msgArriving: "Érkezem!",
    msgCheckout: "Kijelentkeztem",
    msgHelp: "Segítségre van szükségem",
    leaveReview: "Értékelés írása",
    reviewText: "Tetszett az itt-tartózkodás? Hagyjon nekünk 5 csillagot!",
    checklist: {
      keys: "Kulcsok a bejárati bútoron",
      lights: "Lámpák és légkondicionáló kikapcsolva",
      trash: "Szemét kidobva",
      windows: "Ablakok bezárva"
    }
  },
  [Language.PL]: {
    welcome: "Witamy w Dimora Sorriso",
    yourHost: "Twój gospodarz",
    copyWifi: "Skopiuj hasło WiFi",
    copied: "Skopiowano!",
    addressCopied: "Adres skopiowany!",
    getDirections: "Jak dojechać",
    contactHost: "Skontaktuj się z nami",
    adminMode: "Tryb gospodarza",
    guestView: "Widok gościa",
    saveChanges: "Zapisz zmiany",
    magicPolish: "Ulepsz za pomocą AI",
    arrival: "Przyjazd",
    departure: "Wyjazd",
    checkinInstructions: "Instrukcje zameldowania",
    checkoutInstructions: "Instrukcje wymeldowania",
    checkoutChecklist: "Zanim wyjedziesz",
    msgArriving: "Przyjeżdżam!",
    msgCheckout: "Wymeldowałem się",
    msgHelp: "Potrzebuję pomocy",
    leaveReview: "Zostaw opinię",
    reviewText: "Podobał Ci się pobyt? Zostaw nam 5 gwiazdek!",
    checklist: {
      keys: "Klucze na szafce przy wejściu",
      lights: "Światła i klimatyzacja wyłączone",
      trash: "Śmieci wyrzucone",
      windows: "Okna zamknięte"
    }
  }
};