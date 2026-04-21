import { GuideData, Language } from './types';

export const INITIAL_GUIDE_DATA: GuideData = {
  propertyName: "Dimora Sorriso",
  hostName: "Salvatore",
  hostImage: "https://lh3.googleusercontent.com/d/1rpoY5yZMqhUip1fPrje69AKGF78PN6wu",
  location: "Bari, Italy",
  address: "Via Trevisani, 43, 70123 Bari BA, Italy",
  coordinates: { lat: 41.1235, lng: 16.8625 },
  contacts: {
    phone: "+393890170579",
    whatsapp: "+393890170579",
    email: "info@dimorasorriso.it"
  },
  wifi: {
    name: "DimoraSorriso2.4",
    password: "GuestDimora"
  },
  sections: [
    {
      id: "checkin",
      category: "checkin",
      icon: "key",
      title: {
        IT: "Check-in / Check-out",
        EN: "Check-in / Check-out",
        DE: "Check-in / Check-out",
        FR: "Check-in / Check-out",
        ES: "Check-in / Check-out",
        BG: "Настаняване / Напускане",
        HU: "Bejelentkezés / Kijelentkezés",
        PL: "Zameldowanie / Wymeldowanie"
      },
      description: {
        IT: "Il check-in è garantito a partire dalle ore 15:00 con accoglienza in presenza. Qualora si opti per la modalità self check-in, le relative istruzioni operative verranno condivise e concordate preventivamente. ||| Il check-out è richiesto entro e non oltre le ore 10:00; prima della partenza si prega di spegnere luci ed elettrodomestici, verificare la corretta chiusura di porte e finestre, riporre le chiavi sul mobile all’ingresso, controllare di non aver dimenticato effetti personali e inviare un messaggio WhatsApp a conferma dell’avvenuto check-out.",
        EN: "Check-in is guaranteed from 3:00 PM with in-person greeting. If you opt for the self check-in mode, the relevant operating instructions will be shared and agreed upon in advance. ||| Check-out is required no later than 10:00 AM; before departure, please turn off lights and appliances, verify the correct closing of doors and windows, place the keys on the furniture at the entrance, check that you haven't forgotten any personal belongings and send a WhatsApp message to confirm the check-out.",
        DE: "Der Check-in ist ab 15:00 Uhr mit persönlichem Empfang garantiert. Wenn Sie sich für den Self-Check-in-Modus entscheiden, werden die entsprechenden Bedienungsanleitungen im Voraus mitgeteilt und vereinbart. ||| Der Check-out ist bis spätestens 10:00 Uhr erforderlich; Bitte schalten Sie vor der Abreise Licht und Geräte aus, überprüfen Sie das korrekte Schließen von Türen und Fenstern, legen Sie die Schlüssel auf das Möbelstück am Eingang, vergewissern Sie sich, dass Sie keine persönlichen Gegenstände vergessen haben, und senden Sie eine WhatsApp-Nachricht, um den Check-out zu bestätigen.",
        FR: "L'enregistrement est garanti à partir de 15h00 avec un accueil en personne. Si vous optez pour le mode self check-in, les instructions opératoires correspondantes seront partagées et convenues à l'avance. ||| Le départ est requis au plus tard à 10h00 ; avant le départ, veuillez éteindre les lumières et les appareils électroménagers, vérifier la fermeture correcte des portes et fenêtres, placer les clés sur le meuble à l'entrée, vérifier que vous n'avez pas oublié d'effets personnels et envoyer un message WhatsApp pour confirmer le départ.",
        ES: "El check-in está garantizado a partir de las 15:00 con recepción presencial. Si opta por la modalidad de self check-in, las instrucciones operativas correspondientes se compartirán y acordarán previamente. ||| El check-out se requiere a más tardar a las 10:00; antes de la salida, apague las luces y los electrodomésticos, verifique el cierre correcto de puertas y ventanas, coloque las llaves en el mueble a la entrada, verifique que no ha olvidado pertenencias personales y envíe un mensaje de WhatsApp para confirmar la salida.",
        BG: "Настаняването е гарантирано след 15:00 ч. с лично посрещане. Ако изберете опцията за самостоятелно настаняване, съответните инструкции ще бъдат споделени и договорени предварително. ||| Напускането е задължително най-късно до 10:00 ч.; преди заминаване, моля, изгасете светлините и уредите, проверете дали вратите и прозорците са правилно затворени, оставете ключовете на мебелите на входа, уверете се, че не сте забравили лични вещи и изпратете съобщение по WhatsApp, за да потвърдите напускането.",
        HU: "A bejelentkezés 15:00 órától garantált, személyes fogadással. Ha az önálló bejelentkezést (self check-in) választja, a vonatkozó utasításokat előzetesen megosztjuk és egyeztetjük. ||| A kijelentkezés legkésőbb 10:00 óráig kötelező; távozás előtt kérjük, kapcsolja le a villanyt és a készülékeket, ellenőrizze az ajtók és ablakok megfelelő záródását, hagyja a kulcsokat a bejárati bútoron, ellenőrizze, hogy nem felejtett-e el személyes tárgyakat, és küldjön egy WhatsApp üzenetet a kijelentkezés megerősítésére.",
        PL: "Zameldowanie jest gwarantowane od godziny 15:00 z osobistym powitaniem. Jeśli wybierzesz opcję samodzielnego zameldowania, odpowiednie instrukcje zostaną udostępnione i uzgodnione z wyprzedzeniem. ||| Wymeldowanie jest wymagane najpóźniej do godziny 10:00; przed wyjazdem prosimy o wyłączenie świateł i urządzeń, sprawdzenie prawidłowego zamknięcia drzwi i okien, pozostawienie kluczy na meblach przy wejściu, upewnienie się, że nie zapomniano rzeczy osobistych i wysłanie wiadomości WhatsApp w celu potwierdzenia wymeldowania."
      }
    },
    {
      id: "wifi",
      category: "wifi",
      icon: "wifi",
      title: {
        IT: "Connessione WiFi",
        EN: "WiFi Connection",
        DE: "WLAN-Verbindung",
        FR: "Connexion WiFi",
        ES: "Conexión WiFi",
        BG: "WiFi връзка",
        HU: "WiFi kapcsolat",
        PL: "Połączenie WiFi"
      },
      description: {
        IT: "Dettagli WiFi",
        EN: "WiFi Details",
        DE: "WLAN-Details",
        FR: "Détails WiFi",
        ES: "Detalles WiFi",
        BG: "WiFi детайли",
        HU: "WiFi részletek",
        PL: "Szczegóły WiFi"
      }
    },
    {
      id: "video_guides",
      category: "house",
      icon: "video",
      title: {
        IT: "Video Guide",
        EN: "Video Tutorials",
        DE: "Video-Anleitungen",
        FR: "Guides Vidéo",
        ES: "Guías en Video",
        BG: "Видео ръководства",
        HU: "Videós útmutatók",
        PL: "Przewodniki wideo"
      },
      description: {
        IT: "Guida Macchina Caffè ITA | https://drive.google.com/file/d/1QEl2VjhwS-b6l0Ktvei_UPNRc566hEXQ/view?usp=sharing",
        EN: "Coffee Machine Guide ENG | https://drive.google.com/file/d/1B8IjADYQM_NOxg85HYa_mtXqkyyaHrwo/view?usp=sharing",
        DE: "Kaffeemaschinen-Ratgeber DE | https://drive.google.com/file/d/11hpGBuTYBAEBMoAtgux0AvjqClbApeQw/view?usp=sharing",
        FR: "Guide des machines à café FRA | https://drive.google.com/file/d/19R7T023h8-sxHpZ-CpaezJY2izJZMYyZ/view?usp=sharing",
        ES: "Guía de máquinas de café ES | https://drive.google.com/file/d/193Mc8CdOJ1jPRA_9IfhYE5W4VjHoyiDn/view?usp=sharing",
        BG: "Ръководство за кафемашина EN | https://drive.google.com/file/d/1B8IjADYQM_NOxg85HYa_mtXqkyyaHrwo/view?usp=sharing",
        HU: "Kávéfőző útmutató EN | https://drive.google.com/file/d/1B8IjADYQM_NOxg85HYa_mtXqkyyaHrwo/view?usp=sharing",
        PL: "Instrukcja ekspresu do kawy EN | https://drive.google.com/file/d/1B8IjADYQM_NOxg85HYa_mtXqkyyaHrwo/view?usp=sharing"
      }
    },
    {
      id: "rules",
      category: "rules",
      icon: "clipboard-list",
      title: {
        IT: "Regole della Casa",
        EN: "House Rules",
        DE: "Hausregeln",
        FR: "Règlement Intérieur",
        ES: "Reglas de la Casa",
        BG: "Правила на къщата",
        HU: "Házirend",
        PL: "Zasady domu"
      },
      description: {
        IT: "NON FUMARE: Si prega di non fumare o svapare in casa.\nNO OSPITI: È tassativamente vietato introdurre persone di cui non sia stato registrato il documento d'identità e senza il consenso della struttura.\nNO ANIMALI: Vietato l'ingresso agli animali domestici.\nNO FESTE O EVENTI: Non sono ammesse feste o eventi. L'uso di droghe e il consumo eccessivo di alcol sono vietati.\nDANNI O GUASTI: Si prega di segnalare immediatamente all'host eventuali danni o malfunzionamenti in modo da poter riparare o sostituire l'oggetto danneggiato.\nSILENZIO NOTTURNO: Si prega di rispettare il silenzio nelle ore notturne (22:00 – 8:00).\nRISPARMIO ENERGETICO: Spegnere luci, aria condizionata ed elettrodomestici quando si esce.\nRIFIUTI: Smaltire i rifiuti correttamente.",
        EN: "NO SMOKING: Please do not smoke or vape inside the house.\nNO GUESTS: It is strictly forbidden to bring in unregistered guests without host consent. ID registration is mandatory.\nNO PETS: Pets are not allowed.\nNO PARTIES OR EVENTS: Parties or events are not allowed. Drug use and excessive alcohol consumption are prohibited.\nDAMAGES OR FAULTS: Please report any damage or malfunctions to the host immediately.\nNIGHT SILENCE: Please respect silence during night hours (22:00 – 8:00).\nECO-FRIENDLY: Turn off lights, air conditioning, and appliances when leaving.\nWASTE DISPOSAL: Please dispose of waste correctly.",
        DE: "RAUCHVERBOT: Bitte nicht im Haus rauchen oder dampfen.\nKEINE GÄSTE: Es ist strengstens verboten, nicht registrierte Personen ohne Zustimmung des Gastgebers mitzubringen.\nKEINE HAUSTIERE: Haustiere sind nicht gestattet.\nKEINE PARTYS: Partys oder Veranstaltungen sind nicht erlaubt. Drogenkonsum und übermäßiger Alkoholkonsum sind verboten.\nSCHÄDEN ODER DEFEKTE: Bitte melden Sie Schäden oder Störungen sofort dem Gastgeber.\nNACHTRUHE: Bitte respektieren Sie die Ruhezeiten in der Nacht (22:00 – 8:00 Uhr).\nUMWELTFREUNDLICH: Bitte schalten Sie Licht und Klimaanlage beim Verlassen aus.\nMÜLLTRENNUNG: Bitte entsorgen Sie den Müll ordnungsgemäß.",
        FR: "NE PAS FUMER : Veuillez ne pas fumer ou vapoter dans la maison.\nPAS D'INVITÉS : Il est strictement interdit de faire entrer des personnes non enregistrées sans le consentement de l'hôte.\nPAS D'ANIMAUX : Les animaux domestiques ne sont pas admis.\nPAS DE FÊTES : Les fêtes ou événements ne sont pas autorisés. L'usage de drogues et l'alcool excessif sont interdits.\nDOMMAGES : Veuillez signaler immédiatement tout dommage ou dysfonctionnement à l'hôte.\nSILENCE NOCTURNO : Veuillez respecter le silence pendant les heures nocturnes (22:00 – 8:00).\nÉCO-RESPONSABLE : Éteignez les lumières et la climatisation en sortant.\nDÉCHETS : Triez les déchets correctement.",
        ES: "NO FUMAR: Por favor, no fume ni vapee en la casa.\nNO INVITADOS: Está terminantemente prohibido introducir personas no registradas sin el consentimiento del anfitrión.\nNO MASCOTAS: No se admiten mascotas.\nNO FIESTAS: No se permiten fiestas o eventos. El uso de drogas y el consumo excesivo de alcohol están prohibidos.\nDAÑOS O AVERÍAS: Por favor, informe inmediatamente al anfitrión sobre cualquier daño.\nSILENCIO NOCTURNO: Por favor, respete el silencio en las horas nocturnas (22:00 – 8:00).\nECOLÓGICO: Apague luces y aire acondicionado al salir.\nRESIDUOS: Deseche los residuos correctamente.",
        BG: "БЕЗ ПУШЕНЕ: Моля, не пушете и не използвайте електронни цигари в къщата.\nБЕЗ ГОСТИ: Строго е забранено да водите нерегистрирани гости без съгласието на домакина. Регистрацията на лична карта е задължителна.\nБЕЗ ДОМАШНИ ЛЮБИМЦИ: Домашни любимци не са разрешени.\nБЕЗ ПАРТИТА ИЛИ СЪБИТИЯ: Партита или събития не са разрешени. Употребата на наркотици и прекомерната консумация на алкохол са забранени.\nПОВРЕДИ ИЛИ НЕИЗПРАВНОСТИ: Моля, незабавно съобщете на домакина за всякакви повреди или неизправности.\nНОЩНА ТИШИНА: Моля, спазвайте тишина през нощните часове (22:00 – 8:00).\nЕКОЛОГИЧНО: Изключвайте светлините, климатика и уредите, когато излизате.\nИЗХВЪРЛЯНЕ НА ОТПАДЪЦИ: Моля, изхвърляйте отпадъците правилно.",
        HU: "NEM DOHÁNYZÓ: Kérjük, ne dohányozzon vagy e-cigarettázzon a házban.\nNINCSENEK VENDÉGEK: Szigorúan tilos be nem jelentett vendégeket behozni a házigazda beleegyezése nélkül. A személyi igazolvány regisztrációja kötelező.\nNINCSENEK HÁZIÁLLATOK: Háziállatok nem hozhatók be.\nNINCSENEK BULIK VAGY RENDEZVÉNYEK: Bulik vagy rendezvények tartása tilos. A kábítószer-használat és a túlzott alkoholfogyasztás tilos.\nKÁROK VAGY HIBÁK: Kérjük, azonnal jelezze a házigazdának az esetleges károkat vagy meghibásodásokat.\nÉJSZAKAI CSEND: Kérjük, tartsa be a csendet az éjszakai órákban (22:00 – 8:00).\nKÖRNYEZETBARÁT: Távozáskor kapcsolja le a villanyt, a légkondicionálót és a készülékeket.\nHULLADÉKKEZELÉS: Kérjük, megfelelően dobja ki a hulladékot.",
        PL: "ZAKAZ PALENIA: Prosimy nie palić ani nie używać e-papierosów w domu.\nZAKAZ GOŚCI: Surowo zabrania się wprowadzania niezarejestrowanych gości bez zgody gospodarza. Rejestracja dowodu tożsamości jest obowiązkowa.\nZAKAZ ZWIERZĄT: Zwierzęta nie są akceptowane.\nZAKAZ IMPREZ I WYDARZEŃ: Imprezy lub wydarzenia są niedozwolone. Używanie narkotyków i nadmierne spożycie alkoholu są zabronione.\nUSZKODZENIA LUB USTERKI: Prosimy o natychmiastowe zgłaszanie gospodarzowi wszelkich uszkodzeń lub usterek.\nCISZA NOCNA: Prosimy o zachowanie ciszy w godzinach nocnych (22:00 – 8:00).\nEKOLOGICZNIE: Wyłączaj światła, klimatyzację i urządzenia przed wyjściem.\nUTYLIZACJA ODPADÓW: Prosimy o prawidłowe wyrzucanie śmieci."
      }
    },
    {
      id: "waste",
      category: "house",
      icon: "trash",
      title: {
        IT: "Rifiuti",
        EN: "Waste Disposal",
        DE: "Müllentsorgung",
        FR: "Déchets",
        ES: "Residuos",
        BG: "Отпадъци",
        HU: "Hulladék",
        PL: "Odpady"
      },
      description: {
        IT: "I bidoni della spazzatura si trovano in due punti vicini alla struttura:\n\n• Punto 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Punto 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• PLASTICA E METALLI (Giallo)\n• CARTA E CARTONE (Blu)\n• VETRO (Verde)\n• ORGANICO (Marrone)\n• INDIFFERENZIATA (Grigio)",
        EN: "The trash bins are located at two points near the property:\n\n• Point 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Point 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• PLASTIC AND METALS (Yellow)\n• PAPER AND CARDBOARD (Blue)\n• GLASS (Green)\n• ORGANIC (Brown)\n• GENERAL WASTE (Gray)",
        DE: "Die Mülltonnen befinden sich an zwei Punkten in der Nähe der Unterkunft:\n\n• Punkt 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Punkt 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• KUNSTSTOFF UND METALLE (Gelb)\n• PAPIER UND PAPPE (Blau)\n• GLAS (Grün)\n• BIOABFALL (Braun)\n• RESTMÜLL (Grau)",
        FR: "Les poubelles se trouvent à deux endroits près de la propriété :\n\n• Point 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Point 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• PLASTIQUE ET MÉTAUX (Jaune)\n• PAPIER ET CARTON (Bleu)\n• VERRE (Vert)\n• ORGANIQUE (Marron)\n• DÉCHETS MÉNAGERS (Gris)",
        ES: "Los contenedores de basura se encuentran en dos puntos cerca de la propiedad:\n\n• Punto 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Punto 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• PLÁSTICO Y METALES (Amarillo)\n• PAPEL Y CARTÓN (Azul)\n• VIDRIO (Verde)\n• ORGÁNICO (Marrón)\n• RESIDUOS GENERALES (Gris)",
        BG: "Кофите за боклук се намират на две места близо до имота:\n\n• Точка 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Точка 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• ПЛАСТМАСА И МЕТАЛИ (Жълто)\n• ХАРТИЯ И КАРТОН (Синьо)\n• СТЪКЛО (Зелено)\n• ОРГАНИЧНИ (Кафяво)\n• ОБЩИ ОТПАДЪЦИ (Сиво)",
        HU: "A szemeteskukák két helyen találhatók az ingatlan közelében:\n\n• 1. pont (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• 2. pont (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• MŰANYAG ÉS FÉM (Sárga)\n• PAPÍR ÉS KARTON (Kék)\n• ÜVEG (Zöld)\n• SZERVES (Barna)\n• VEGYES HULLADÉK (Szürke)",
        PL: "Pojemniki na śmieci znajdują się w dwóch miejscach w pobliżu obiektu:\n\n• Punkt 1 (Via Pizzoli)\nMaps: https://maps.app.goo.gl/rfnKf4TGskYaubuz9\n\n• Punkt 2 (Via Crispi)\nMaps: https://maps.app.goo.gl/568hUi2sqhNMLpu68\n\n• PLASTIK I METAL (Żółty)\n• PAPIER I TEKTURA (Niebieski)\n• SZKŁO (Zielony)\n• ODPADY BIO (Brązowy)\n• ZMIESZANE ODPADY (Szary)"
      }
    },
    {
      id: "supermarkets",
      category: "local",
      icon: "shopping-cart",
      title: {
        IT: "Supermercati",
        EN: "Supermarkets",
        DE: "Supermärkte",
        FR: "Supermarchés",
        ES: "Supermercados",
        BG: "Супермаркети",
        HU: "Szupermarketek",
        PL: "Supermarkety"
      },
      description: {
        IT: "Ecco alcuni supermercati vicini alla struttura:\n\n• Dok Supermercati (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        EN: "Here are some supermarkets near the property:\n\n• Dok Supermercati (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        DE: "Hier sind einige Supermärkte in der Nähe der Unterkunft:\n\n• Dok Supermärkte (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        FR: "Voici quelques supermarchés près de la propriété :\n\n• Dok Supermarchés (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        ES: "Aquí hay algunos supermercados cerca de la propiedad:\n\n• Dok Supermercados (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        BG: "Ето няколко супермаркета близо до имота:\n\n• Dok Supermercati (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        HU: "Íme néhány szupermarket az ingatlan közelében:\n\n• Dok Supermercati (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/...",
        PL: "Oto kilka supermarketów w pobliżu obiektu:\n\n• Dok Supermercati (Via Trevisani)\nMaps: https://maps.app.goo.gl/...\n\n• Despar (Via Napoli)\nMaps: https://maps.app.goo.gl/..."
      }
    },
    {
      id: "attractions",
      category: "local",
      icon: "map-pin",
      title: {
        IT: "Attrazioni Locali",
        EN: "Local Attractions",
        DE: "Sehenswürdigkeiten",
        FR: "Attractions Locales",
        ES: "Atracciones Locales",
        BG: "Местни атракции",
        HU: "Helyi látványosságok",
        PL: "Lokalne atrakcje"
      },
      description: {
        IT: "Ecco 5 attrazioni imperdibili a Bari:\n\n• Basilica San Nicola: Cuore pulsante di Bari Vecchia e capolavoro del romanico pugliese.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Castello Normanno-Svevo: Imponente fortezza alle porte della città vecchia, oggi sede museale.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cattedrale di San Sabino: Elegante esempio di architettura romanica con la sua famosa cripta barocca.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia: Perdetevi tra i vicoli, dove le signore preparano ancora le orecchiette per strada (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Uno dei teatri più belli e grandi d'Italia, simbolo culturale della città.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        EN: "Here are 5 must-see attractions in Bari:\n\n• Basilica San Nicola: The beating heart of Bari Vecchia and a masterpiece of Apulian Romanesque architecture.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Norman-Swabian Castle: An imposing fortress at the gates of the old city, now a museum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cathedral of San Sabino: An elegant example of Romanesque architecture with its famous Baroque crypt.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Old Town): Get lost in the alleys, where ladies still make orecchiette pasta on the street (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: One of the most beautiful and largest theaters in Italy, a cultural symbol of the city.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        DE: "Hier sind 5 Sehenswürdigkeiten in Bari, die Sie gesehen haben müssen:\n\n• Basilika San Nicola: Das pulsierende Herz von Bari Vecchia und ein Meisterwerk der apulischen Romanik.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Normannisch-Staufische Burg: Eine imposante Festung vor den Toren der Altstadt, heute ein Museum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Kathedrale San Sabino: Ein elegantes Beispiel romanischer Architektur mit ihrer berühmten Barockkrypta.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Altstadt): Verlieren Sie sich in den Gassen, in denen Frauen noch immer Orecchiette auf der Straße herstellen (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Eines der schönsten und größten Theater Italiens, ein kulturelles Wahrzeichen der Stadt.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        FR: "Voici 5 attractions incontournables à Bari :\n\n• Basilique San Nicola : Le cœur battant de Bari Vecchia et un chef-d'œuvre de l'art roman des Pouilles.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Château Normand-Souabe : Une imposante forteresse aux portes de la vieille ville, aujourd'hui un musée.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cathédrale de San Sabino : Un exemple élégant d'architecture romane avec sa célèbre crypte baroque.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia : Perdez-vous dans les ruelles où les dames préparent encore les orecchiette dans la rue (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli : L'un des plus beaux et des plus grands théâtres d'Italie, symbole culturel de la ville.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        ES: "Aquí hay 5 atracciones imperdibles en Bari:\n\n• Basílica de San Nicola: El corazón palpitante de Bari Vecchia y una obra maestra del románico de Apulia.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Castillo Normando-Suabo: Una imponente fortaleza a las puertas de la ciudad vieja, hoy un museo.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Catedral de San Sabino: Un elegante ejemplo de arquitectura románica con su famosa cripta barroca.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia: Piérdase en los callejones, donde las señoras todavía hacen orecchiette en la calle (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Uno de los teatros más bellos y grandes de Italia, símbolo cultural de la ciudad.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        BG: "Ето 5 задължителни забележителности в Бари:\n\n• Базилика Сан Никола: Туптящото сърце на Стария Бари и шедьовър на апулийската романска архитектура.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Нормандско-швабски замък: Внушителна крепост пред портите на стария град, днес музей.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Катедрала Сан Сабино: Елегантен пример за романска архитектура с известната си барокова крипта.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Старият Бари (Bari Vecchia): Изгубете се в уличките, където дамите все още правят паста орекиете на улицата (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Театър Петруцели: Един от най-красивите и големи театри в Италия, културен символ на града.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        HU: "Íme 5 kihagyhatatlan látnivaló Bariban:\n\n• San Nicola Bazilika: Bari Vecchia dobogó szíve és az apuliai román építészet remekműve.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Normann-sváb kastély: Impozáns erődítmény az óváros kapujában, ma múzeum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• San Sabino Katedrális: A román építészet elegáns példája híres barokk kriptájával.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Óváros): Vesszen el a sikátorokban, ahol a hölgyek még mindig az utcán készítik az orecchiette tésztát (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Petruzzelli Színház: Olaszország egyik legszebb és legnagyobb színháza, a város kulturális szimbóluma.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        PL: "Oto 5 atrakcji, które musisz zobaczyć w Bari:\n\n• Bazylika San Nicola: Bijące serce Bari Vecchia i arcydzieło apulijskiej architektury romańskiej.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Zamek normańsko-szwabski: Imponująca forteca u bram starego miasta, obecnie muzeum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Katedra San Sabino: Elegancki przykład architektury romańskiej ze słynną barokową kryptą.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Stare Miasto): Zgub się w alejkach, gdzie panie wciąż robią makaron orecchiette na ulicy (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatr Petruzzelli: Jeden z najpiękniejszych i największych teatrów we Włoszech, kulturalny symbol miasta.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari"
      }
    },
    {
      id: "tours",
      category: "local",
      icon: "map",
      title: {
        IT: "Tour Bari e provincia",
        EN: "Bari and Province Tours",
        DE: "Touren in Bari und Provinz",
        FR: "Tours de Bari et province",
        ES: "Tours por Bari y provincia",
        BG: "Обиколки на Бари и провинцията",
        HU: "Bari és tartományi túrák",
        PL: "Wycieczki po Bari i prowincji"
      },
      description: {
        IT: "Scopri i luoghi e i tour di Bari e provincia tramite questa mappa interattiva:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        EN: "Discover the places and tours of Bari and its province through this interactive map:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        DE: "Entdecken Sie die Orte und Touren von Bari und seiner Provinz auf dieser interaktiven Karte:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        FR: "Découvrez les lieux et les circuits de Bari et de sa province grâce à cette carte interactive :\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        ES: "Descubra los lugares y tours de Bari y su provincia a través de este mapa interactivo:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        BG: "Открийте местата и обиколките на Бари и неговата провинция чрез тази интерактивна карта:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        HU: "Fedezze fel Bari és tartománya helyeit és túráit ezen az interaktív térképen:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa",
        PL: "Odkryj miejsca i wycieczki po Bari i prowincji dzięki tej interaktywnej mapie:\n\n• Bari inedita Map\nLink: https://www.barineditamap.it/map/?fbclid=IwY2xjawLXpNBleHRuA2FlbQIxMQABHis_zA2gDDrJCLB928GU6g_xSqJM-9AMyAvceL03unq0YyVTVi-VmJihUEkt_aem_U0g-HWnaw_vn1HRKSyLBrw&sfnsn=scwspwa"
      }
    },
    {
      id: "beaches",
      category: "local",
      icon: "beach",
      title: {
        IT: "Spiagge",
        EN: "Beaches",
        DE: "Strände",
        FR: "Plages",
        ES: "Playas",
        BG: "Плажове",
        HU: "Strandok",
        PL: "Plaże"
      },
      description: {
        IT: "Ecco le spiagge più belle di Bari e dintorni:\n\n• Pane e Pomodoro (Città): La spiaggia dei baresi, sabbiosa e facilmente raggiungibile a piedi o con il bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Città): Spiaggia di ciottoli attrezzata con bar, ideale per aperitivi e sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Città): Stabilimento balneare privato con sabbia, perfetto per famiglie.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Fuori città): Iconica spiaggia tra le scogliere, raggiungibile in 30 minuti di treno.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        EN: "Here are the most beautiful beaches in and around Bari:\n\n• Pane e Pomodoro (City): The locals' beach, sandy and easily accessible by foot or bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (City): Pebble beach equipped with bars, ideal for drinks and sports.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (City): Private beach club with sand, perfect for families.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Out of town): Iconic beach between cliffs, reachable in 30 minutes by train.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        DE: "Hier sind die schönsten Strände in und um Bari:\n\n• Pane e Pomodoro (Stadt): Der Strand der Einheimischen, sandig und leicht zu Fuß oder mit dem Bus erreichbar.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Stadt): Kiesstrand mit Bars, ideal für Drinks und Sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Stadt): Privates Strandbad mit Sand, perfekt für Familien.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Außerhalb): Ikonischer Strand zwischen Klippen, erreichbar in 30 Minuten mit dem Zug.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        FR: "Voici les plus belles plages de Bari et ses environs :\n\n• Pane e Pomodoro (Ville) : La plage des locaux, sablonneuse et facile d'accès à pied ou en bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Ville) : Plage de galets équipée de bars, idéale pour les apéritifs et le sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Ville) : Établissement balnéaire privé avec sable, parfait pour les familles.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Hors ville) : Plage emblématique entre les falaises, accessible en 30 minutes en train.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        ES: "Aquí están las playas más hermosas de Bari y sus alrededores:\n\n• Pane e Pomodoro (Ciudad): La playa de los locales, de arena y fácilmente accesible a pie o en autobús.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Ciudad): Playa de guijarros equipada con bares, ideal para aperitivos y deportes.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Ciudad): Balneario privado con arena, perfecto para familias.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Fuera de la ciudad): Playa icónica entre acantilados, accesible en 30 minutes en tren.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        BG: "Ето най-красивите плажове в и около Бари:\n\n• Pane e Pomodoro (Градски): Плажът на местните, пясъчен и лесно достъпен пеша или с автобус.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Градски): Каменист плаж, оборудван с барове, идеален за аперитиви и спорт.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Градски): Частен плажен клуб с пясък, перфектен за семейства.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Извън града): Емблематичен плаж между скали, достъпен за 30 минути с влак.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        HU: "Íme a legszebb strandok Bariban és környékén:\n\n• Pane e Pomodoro (Város): A helyiek strandja, homokos és könnyen megközelíthető gyalog vagy busszal.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Város): Kavicsos strand bárokkal, ideális italokhoz és sportoláshoz.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Város): Privát homokos strandklub, tökéletes családok számára.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Városon kívül): Ikonikus strand a sziklák között, vonattal 30 perc alatt elérhető.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        PL: "Oto najpiękniejsze plaże w Bari i okolicach:\n\n• Pane e Pomodoro (Miasto): Plaża mieszkańców, piaszczysta i łatwo dostępna pieszo lub autobusem.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Miasto): Kamienista plaża wyposażona w bary, idealna na drinki i sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Miasto): Prywatny klub plażowy z piaskiem, idealny dla rodzin.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Poza miastem): Kultowa plaża między klifami, do której można dojechać pociągiem w 30 minut.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano"
      }
    },
    {
      id: "eat",
      category: "local",
      icon: "utensils",
      title: {
        IT: "Dove Mangiare",
        EN: "Where to Eat",
        DE: "Essen & Trinken",
        FR: "Où Manger",
        ES: "Dónde Comer",
        BG: "Къде да хапнем",
        HU: "Hol együnk",
        PL: "Gdzie zjeść"
      },
      description: {
        IT: "I nostri ristoranti preferiti a Bari:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(consigliato da Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(consigliato da Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(consigliato da Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        EN: "Our favorite dining spots in Bari:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(recommended by Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(recommended by Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(recommended by Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        DE: "Unsere Lieblingsrestaurants in Bari:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(empfohlen von Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(empfohlen von Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(empfohlen von Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        FR: "Nos restaurants préférés à Bari :\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(recommandé par Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(recommandé par Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(recommandé par Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        ES: "Nuestros restaurantes favoritos en Bari:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(recomendado por Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(recomendado por Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(recomendado por Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        BG: "Нашите любими ресторанти в Бари:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(препоръчано от Салваторе)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(препоръчано от Салваторе)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(препоръчано от Салваторе)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        HU: "Kedvenc éttermeink Bariban:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(Salvatore ajánlásával)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(Salvatore ajánlásával)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(Salvatore ajánlásával)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6",
        PL: "Nasze ulubione restauracje w Bari:\n\n• ARMONIA\nMaps: https://maps.app.goo.gl/PC5j3Vamt6MhzJfZA\n\n• LA LANTERNA VERDE\nMaps: https://maps.app.goo.gl/eNNFLR8MepBWJVbaA\n\n• BARI NAPOLI PIZZERIA\nMaps: https://maps.app.goo.gl/X6KZP42rMChMdhrq5\n\n• MOZZARELA BASILICO <small>(polecane przez Salvatore)</small>\nMaps: https://maps.app.goo.gl/DkZHxHypgrwVhKTp7\n\n• LA BARESANA <small>(polecane przez Salvatore)</small>\nMaps: https://maps.app.goo.gl/sqFz6GgChXTSJBGU6\n\n• MASTRO CICCIO <small>(polecane przez Salvatore)</small>\nMaps: https://maps.app.goo.gl/EsN8zYPcY1QGLcbj8\n\n• ALLA BARESE\nMaps: https://maps.app.goo.gl/QXiwiWaKiL3Je28h9\n\n• FRA BO\nMaps: https://maps.app.goo.gl/Bdki4335Nptu7RGX6"
      }
    },
    {
      id: "pharmacies",
      category: "local",
      icon: "pharmacy",
      title: {
        IT: "Farmacie Vicine",
        EN: "Nearby Pharmacies",
        DE: "Apotheken in der Nähe",
        FR: "Pharmacies à Proximité",
        ES: "Farmacias Cercanas",
        BG: "Близки аптеки",
        HU: "Közeli gyógyszertárak",
        PL: "Pobliskie apteki"
      },
      description: {
        IT: "Ecco le farmacie più vicine:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        EN: "Here are the nearest pharmacies:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        DE: "Hier sind die nächstgelegenen Apotheken:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        FR: "Voici les pharmacies les plus proches :\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        ES: "Aquí están las farmacias más cercanas:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        BG: "Ето най-близките аптеки:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        HU: "Íme a legközelebbi gyógyszertárak:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        PL: "Oto najbliższe apteki:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6"
      }
    },
    {
      id: "laundry",
      category: "local",
      icon: "washing-machine",
      title: {
        IT: "Lavanderia self-service",
        EN: "Self-service laundry",
        DE: "Selbstbedienungswäscherei",
        FR: "Laverie en libre-service",
        ES: "Lavandería autoservicio",
        BG: "Пералня на самообслужване",
        HU: "Önkiszolgáló mosoda",
        PL: "Pralnia samoobsługowa"
      },
      description: {
        IT: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        EN: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        DE: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        FR: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        ES: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        BG: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        HU: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8",
        PL: "• BLUWASH\nMaps: https://maps.app.goo.gl/GiP8TLpDZEqPkVxw7\n\n• LAUNDRY\nMaps: https://maps.app.goo.gl/VmxsKwdCGvfaTHFP8"
      }
    },
    {
      id: "hospital",
      category: "local",
      icon: "siren",
      title: {
        IT: "Ospedale e Guardia Medica",
        EN: "Hospital & Medical Guard",
        DE: "Krankenhaus & Ärztlicher Notdienst",
        FR: "Hôpital et Garde Médicale",
        ES: "Hospital y Guardia Médica",
        BG: "Болница и медицинска помощ",
        HU: "Kórház és orvosi ügyelet",
        PL: "Szpital i pomoc medyczna"
      },
      description: {
        IT: "Per emergenze mediche:\n\n• Policlinico di Bari (Ospedale principale): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Medica (Assistenza notturna e festiva): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        EN: "For medical emergencies:\n\n• Policlinico di Bari (Main Hospital): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Medical Guard (Night & Holiday Assistance): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        DE: "Für medizinische Notfälle:\n\n• Policlinico di Bari (Hauptkrankenhaus): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Ärztlicher Notdienst (Nachts & Feiertage): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        FR: "Pour les urgences médicales :\n\n• Policlinico di Bari (Hôpital principal) : Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Garde Médicale (Assistance nuit et jours fériés) : Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        ES: "Para emergencias médicas:\n\n• Policlinico di Bari (Hospital principal): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Médica (Asistencia nocturna y festivos): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        BG: "За спешни медицински случаи:\n\n• Policlinico di Bari (Главна болница): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Medica (Нощна и празнична помощ): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        HU: "Orvosi vészhelyzet esetén:\n\n• Policlinico di Bari (Főkórház): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Medica (Éjszakai és ünnepnapi ügyelet): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        PL: "W nagłych przypadkach medycznych:\n\n• Policlinico di Bari (Główny Szpital): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Medica (Pomoc nocna i świąteczna): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari"
      }
    },
    {
      id: "parking",
      category: "local",
      icon: "parking",
      title: {
        IT: "Parcheggio Saba",
        EN: "Saba Parking",
        DE: "Saba Parkplatz",
        FR: "Parking Saba",
        ES: "Aparcamiento Saba",
        BG: "Паркинг Saba",
        HU: "Saba Parkoló",
        PL: "Parking Saba"
      },
      description: {
        IT: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        EN: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        DE: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        FR: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        ES: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        BG: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        HU: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        PL: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7"
      }
    },
    {
      id: "bus",
      category: "local",
      icon: "bus",
      title: {
        IT: "Fermata Bus",
        EN: "Bus Stop",
        DE: "Bushaltestelle",
        FR: "Arrêt de Bus",
        ES: "Parada de Autobús",
        BG: "Автобусна спирка",
        HU: "Buszmegálló",
        PL: "Przystanek autobusowy"
      },
      description: {
        IT: "Da Aeroporto a Dimora Sorriso\nBus: Linea 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||Da Stazione Centrale a Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        EN: "From Airport to Dimora Sorriso\nBus: Line 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||From Central Station to Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        DE: "Vom Flughafen nach Dimora Sorriso\nBus: Linie 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||Vom Hauptbahnhof nach Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        FR: "De l'Aéroport à Dimora Sorriso\nBus : Ligne 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||De la Gare Centrale à Dimora Sorriso\nBus : 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        ES: "Del Aeropuerto a Dimora Sorriso\nAutobús: Línea 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||De la Estación Central a Dimora Sorriso\nAutobús: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        BG: "От летището до Dimora Sorriso\nАвтобус: Линия 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||От централната гара до Dimora Sorriso\nАвтобус: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        HU: "A repülőtérről a Dimora Sorriso-ba\nBusz: 16-os vonal (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||A központi pályaudvarról a Dimora Sorriso-ba\nBusz: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        PL: "Z lotniska do Dimora Sorriso\nAutobus: Linia 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||Z dworca głównego do Dimora Sorriso\nAutobus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7"
      }
    },
    {
      id: "transport_tickets",
      category: "local",
      icon: "ticket",
      title: {
        IT: "Biglietti & Trasporti",
        EN: "Tickets & Transport",
        DE: "Tickets & Verkehrsmittel",
        FR: "Billets & Transports",
        ES: "Billetes y Transporte",
        BG: "Билети и транспорт",
        HU: "Jegyek és közlekedés",
        PL: "Bilety i transport"
      },
      description: {
        IT: "BUS (AMTAB):\n• Dove acquistare: Tabaccai (insegna \"T\") o app MUVT.\n• Costo: ~1,00€ (corsa singola).\n• Convalida: Appena saliti a bordo.\n\nTRENI (Trenitalia / FAL / Ferrotramviaria):\n• Dove acquistare: Macchinette in stazione o online (sito/app Trenitalia).\n• Convalida: Alle macchinette verdi in stazione PRIMA di salire (se cartaceo).",
        EN: "BUS (AMTAB):\n• Where to buy: Tobacconists (\"T\" sign) or MUVT app.\n• Cost: ~€1.00 (single ride).\n• Validation: Immediately upon boarding.\n\nTRAINS (Trenitalia / FAL / Ferrotramviaria):\n• Where to buy: Station machines or online (Trenitalia app/site).\n• Validation: At green machines in the station BEFORE boarding (if paper ticket).",
        DE: "BUS (AMTAB):\n• Wo kaufen: Tabakläden (Zeichen \"T\") oder MUVT-App.\n• Kosten: ~1,00€ (Einzelfahrt).\n• Entwertung: Sofort nach dem Einsteigen.\n\nZÜGE (Trenitalia / FAL / Ferrotramviaria):\n• Wo kaufen: Automaten am Bahnhof oder online (Trenitalia App/Website).\n• Entwertung: An den grünen Automaten im Bahnhof VOR dem Einsteigen (bei Papiertickets).",
        FR: "BUS (AMTAB) :\n• Où acheter : Tabacs (enseigne \"T\") ou application MUVT.\n• Coût : ~1,00€ (trajet simple).\n• Validation : Immédiatement à la montée.\n\nTRAINS (Trenitalia / FAL / Ferrotramviaria) :\n• Où acheter : Distributeurs en gare ou en ligne (appli/site Trenitalia).\n• Validation : Aux machines vertes en gare AVANT de monter (si billet papier).",
        ES: "AUTOBÚS (AMTAB):\n• Dónde comprar: Estancos (letrero \"T\") o app MUVT.\n• Coste: ~1,00€ (viaje sencillo).\n• Validación: Inmediatamente al subir.\n\nTRENES (Trenitalia / FAL / Ferrotramviaria):\n• Dónde comprar: Máquinas en la estación o en línea (app/sitio Trenitalia).\n• Validación: En las máquinas verdes de la estación ANTES de subir (si es billete de papel).",
        BG: "АВТОБУС (AMTAB):\n• Къде да купите: Тютюневи магазини (знак \"T\") или приложение MUVT.\n• Цена: ~1,00€ (еднократно пътуване).\n• Валидиране: Веднага след качване.\n\nВЛАКОВЕ (Trenitalia / FAL / Ferrotramviaria):\n• Къде да купите: Машини на гарата или онлайн (приложение/сайт Trenitalia).\n• Валидиране: На зелените машини на гарата ПРЕДИ качване (ако е хартиен билет).",
        HU: "BUSZ (AMTAB):\n• Hol kapható: Dohányboltok (\"T\" jelzés) vagy MUVT alkalmazás.\n• Ár: ~1,00€ (egy út).\n• Érvényesítés: Felszállás után azonnal.\n\nVONATOK (Trenitalia / FAL / Ferrotramviaria):\n• Hol kapható: Jegyautomaták az állomáson vagy online (Trenitalia alkalmazás/weboldal).\n• Érvényesítés: Az állomáson lévő zöld automatáknál felszállás ELŐTT (papírjegy esetén).",
        PL: "AUTOBUS (AMTAB):\n• Gdzie kupić: Kioski (znak \"T\") lub aplikacja MUVT.\n• Koszt: ~1,00€ (jeden przejazd).\n• Kasowanie: Natychmiast po wejściu do pojazdu.\n\nPOCIĄGI (Trenitalia / FAL / Ferrotramviaria):\n• Gdzie kupić: Automaty na stacji lub online (aplikacja/strona Trenitalia).\n• Kasowanie: W zielonych automatach na stacji PRZED wejściem do pociągu (jeśli bilet papierowy)."
      }
    },
    {
      id: "taxi",
      category: "local",
      icon: "taxi",
      title: {
        IT: "Taxi",
        EN: "Taxi",
        DE: "Taxi",
        FR: "Taxi",
        ES: "Taxi",
        BG: "Такси",
        HU: "Taxi",
        PL: "Taxi"
      },
      description: {
        IT: "Chiama un taxi",
        EN: "Call a taxi",
        DE: "Taxi rufen",
        FR: "Appeler un taxi",
        ES: "Llamar a un taxi",
        BG: "Повикайте такси",
        HU: "Hívjon taxit",
        PL: "Zadzwoń po taksówkę"
      }
    },
    {
      id: "emergency",
      category: "local",
      icon: "siren",
      title: {
        IT: "Emergenza",
        EN: "Emergency",
        DE: "Notfall",
        FR: "Urgence",
        ES: "Emergencia",
        BG: "Спешни случаи",
        HU: "Vészhelyzet",
        PL: "Nagłe wypadki"
      },
      description: {
        IT: "Numero di emergenza",
        EN: "Emergency number",
        DE: "Notrufnummer",
        FR: "Numéro d'urgence",
        ES: "Número de emergencia",
        BG: "Спешен телефон",
        HU: "Segélyhívó szám",
        PL: "Numer alarmowy"
      }
    }
  ]
};