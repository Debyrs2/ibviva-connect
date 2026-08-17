import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en" | "es";

export const dictionaries = {
  pt: {
    "nav.about": "Sobre",
    "nav.gallery": "Mural",
    "nav.location": "Localização",
    "nav.contact": "Contato",
    "nav.social": "Redes",
    "nav.menu": "Menu",
    "theme.toggle": "Alternar tema",
    "lang.label": "Idioma",

    "hero.badge": "Você é bem-vindo aqui",
    "hero.title": "Igreja Batista Viva em Piedade",
    "hero.subtitle":
      "Um lugar simples e caloroso para encontrar fé, amizade e um novo começo. Venha do jeito que você está.",
    "hero.cta1": "Conheça-nos",
    "hero.cta2": "Como chegar",
    "hero.scroll": "Role para descobrir",

    "about.tag": "Sobre nós",
    "about.title": "Uma família que caminha junto",
    "about.p1":
      "Somos uma comunidade cristã em Piedade, Jaboatão dos Guararapes. Nos reunimos para adorar a Deus, ouvir a Bíblia e cuidar uns dos outros com carinho.",
    "about.p2":
      "Aqui não existe roupa certa nem história perfeita. Se você está buscando acolhimento, oração ou simplesmente um café e uma boa conversa, temos um lugar guardado para você.",
    "about.v1.title": "Fé simples",
    "about.v1.text": "A mensagem da Bíblia contada de um jeito claro, para todas as idades.",
    "about.v2.title": "Gente que acolhe",
    "about.v2.text": "Visitantes, famílias e crianças são recebidos com alegria.",
    "about.v3.title": "Amor em ação",
    "about.v3.text": "Servimos nossa vizinhança com projetos, oração e presença.",
    "about.editable": "Texto editável — envie o texto oficial da igreja para substituirmos.",

    "gallery.tag": "Mural de fotos",
    "gallery.title": "Momentos da nossa comunidade",
    "gallery.subtitle": "Cultos, crianças, música e encontros que enchem nossa casa de vida.",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Próxima foto",
    "gallery.close": "Fechar",
    "photo1": "Palavra que aquece o coração.",
    "photo2": "As crianças têm o melhor lugar aqui.",
    "photo3": "Coragem e sabedoria desde pequenos.",
    "photo4": "Aprender brincando, crescer juntos.",
    "photo5": "Cada domingo, um novo começo.",
    "photo6": "Fortes na fé, leves no coração.",
    "photo7": "Louvor também acontece na praia.",

    "location.tag": "Localização",
    "location.title": "Venha nos visitar",
    "location.address": "Endereço",
    "location.open": "Abrir no Google Maps",
    "location.schedule": "Horários",
    "location.sunday": "Domingo — Culto",
    "location.week": "Quarta — Estudo bíblico",
    "location.kids": "Domingo — Crianças",
    "location.tbd": "horário a confirmar",
    "location.editable": "Horários editáveis — confirme com a igreja para atualizarmos.",

    "contact.tag": "Contato",
    "contact.title": "Fale com a gente",
    "contact.subtitle": "Estamos por aqui para ouvir você, orar e responder suas dúvidas.",
    "contact.email": "E-mail",
    "contact.emailAction": "Enviar e-mail",
    "contact.whats": "WhatsApp",
    "contact.whatsAction": "Abrir conversa",
    "contact.waMessage": "Olá! Vim pelo site da igreja",

    "social.tag": "Redes sociais",
    "social.title": "Acompanhe o dia a dia",
    "social.subtitle": "Mensagens, avisos e transmissões dos nossos cultos.",
    "social.follow": "Seguir",
    "social.watch": "Assistir",

    "footer.rights": "Todos os direitos reservados.",
    "footer.made": "Feito com carinho para nossa comunidade.",
  },
  en: {
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.social": "Social",
    "nav.menu": "Menu",
    "theme.toggle": "Toggle theme",
    "lang.label": "Language",

    "hero.badge": "You are welcome here",
    "hero.title": "Igreja Batista Viva em Piedade",
    "hero.subtitle":
      "A simple, warm place to find faith, friendship and a fresh start. Come just as you are.",
    "hero.cta1": "Get to know us",
    "hero.cta2": "How to get here",
    "hero.scroll": "Scroll to explore",

    "about.tag": "About us",
    "about.title": "A family walking together",
    "about.p1":
      "We are a Christian community in Piedade, Jaboatão dos Guararapes. We gather to worship God, listen to the Bible and care for one another.",
    "about.p2":
      "There is no right outfit and no perfect story here. If you are looking for welcome, prayer, or simply a coffee and a good chat, we saved a seat for you.",
    "about.v1.title": "Simple faith",
    "about.v1.text": "The Bible shared in a clear way, for every age.",
    "about.v2.title": "Warm people",
    "about.v2.text": "Visitors, families and children are welcomed with joy.",
    "about.v3.title": "Love in action",
    "about.v3.text": "We serve our neighborhood with projects, prayer and presence.",
    "about.editable": "Editable text — send us the church's official wording to replace it.",

    "gallery.tag": "Photo gallery",
    "gallery.title": "Moments from our community",
    "gallery.subtitle": "Services, children, music and gatherings that fill our house with life.",
    "gallery.prev": "Previous photo",
    "gallery.next": "Next photo",
    "gallery.close": "Close",
    "photo1": "A word that warms the heart.",
    "photo2": "Kids get the best seats here.",
    "photo3": "Courage and wisdom from an early age.",
    "photo4": "Learning through play, growing together.",
    "photo5": "Every Sunday, a fresh start.",
    "photo6": "Strong in faith, light in heart.",
    "photo7": "Praise happens on the beach too.",

    "location.tag": "Location",
    "location.title": "Come visit us",
    "location.address": "Address",
    "location.open": "Open in Google Maps",
    "location.schedule": "Service times",
    "location.sunday": "Sunday — Service",
    "location.week": "Wednesday — Bible study",
    "location.kids": "Sunday — Kids",
    "location.tbd": "time to be confirmed",
    "location.editable": "Editable times — confirm with the church so we can update them.",

    "contact.tag": "Contact",
    "contact.title": "Talk to us",
    "contact.subtitle": "We are here to listen, to pray and to answer your questions.",
    "contact.email": "Email",
    "contact.emailAction": "Send email",
    "contact.whats": "WhatsApp",
    "contact.whatsAction": "Open chat",
    "contact.waMessage": "Hello! I found you through the church website",

    "social.tag": "Social media",
    "social.title": "Follow our everyday life",
    "social.subtitle": "Messages, announcements and live streams of our services.",
    "social.follow": "Follow",
    "social.watch": "Watch",

    "footer.rights": "All rights reserved.",
    "footer.made": "Made with care for our community.",
  },
  es: {
    "nav.about": "Nosotros",
    "nav.gallery": "Galería",
    "nav.location": "Ubicación",
    "nav.contact": "Contacto",
    "nav.social": "Redes",
    "nav.menu": "Menú",
    "theme.toggle": "Cambiar tema",
    "lang.label": "Idioma",

    "hero.badge": "Aquí eres bienvenido",
    "hero.title": "Igreja Batista Viva em Piedade",
    "hero.subtitle":
      "Un lugar sencillo y cálido para encontrar fe, amistad y un nuevo comienzo. Ven tal como eres.",
    "hero.cta1": "Conócenos",
    "hero.cta2": "Cómo llegar",
    "hero.scroll": "Desliza para explorar",

    "about.tag": "Sobre nosotros",
    "about.title": "Una familia que camina junta",
    "about.p1":
      "Somos una comunidad cristiana en Piedade, Jaboatão dos Guararapes. Nos reunimos para adorar a Dios, escuchar la Biblia y cuidarnos unos a otros.",
    "about.p2":
      "Aquí no hay ropa correcta ni historia perfecta. Si buscas acogida, oración o simplemente un café y una buena charla, tenemos un lugar para ti.",
    "about.v1.title": "Fe sencilla",
    "about.v1.text": "La Biblia contada de forma clara, para todas las edades.",
    "about.v2.title": "Gente que acoge",
    "about.v2.text": "Visitantes, familias y niños son recibidos con alegría.",
    "about.v3.title": "Amor en acción",
    "about.v3.text": "Servimos a nuestro barrio con proyectos, oración y presencia.",
    "about.editable": "Texto editable — envíanos el texto oficial de la iglesia para reemplazarlo.",

    "gallery.tag": "Galería de fotos",
    "gallery.title": "Momentos de nuestra comunidad",
    "gallery.subtitle": "Cultos, niños, música y encuentros que llenan de vida nuestra casa.",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Foto siguiente",
    "gallery.close": "Cerrar",
    "photo1": "Una palabra que abriga el corazón.",
    "photo2": "Los niños tienen el mejor lugar aquí.",
    "photo3": "Valentía y sabiduría desde pequeños.",
    "photo4": "Aprender jugando, crecer juntos.",
    "photo5": "Cada domingo, un nuevo comienzo.",
    "photo6": "Fuertes en la fe, ligeros de corazón.",
    "photo7": "La alabanza también ocurre en la playa.",

    "location.tag": "Ubicación",
    "location.title": "Ven a visitarnos",
    "location.address": "Dirección",
    "location.open": "Abrir en Google Maps",
    "location.schedule": "Horarios",
    "location.sunday": "Domingo — Culto",
    "location.week": "Miércoles — Estudio bíblico",
    "location.kids": "Domingo — Niños",
    "location.tbd": "horario por confirmar",
    "location.editable": "Horarios editables — confírmalos con la iglesia para actualizarlos.",

    "contact.tag": "Contacto",
    "contact.title": "Habla con nosotros",
    "contact.subtitle": "Estamos aquí para escucharte, orar y responder tus dudas.",
    "contact.email": "Correo",
    "contact.emailAction": "Enviar correo",
    "contact.whats": "WhatsApp",
    "contact.whatsAction": "Abrir chat",
    "contact.waMessage": "¡Hola! Los encontré a través del sitio web de la iglesia",

    "social.tag": "Redes sociales",
    "social.title": "Acompaña nuestro día a día",
    "social.subtitle": "Mensajes, avisos y transmisiones de nuestros cultos.",
    "social.follow": "Seguir",
    "social.watch": "Ver",

    "footer.rights": "Todos los derechos reservados.",
    "footer.made": "Hecho con cariño para nuestra comunidad.",
  },
} as const;

export type TKey = keyof (typeof dictionaries)["pt"];

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "ibviva-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: (key) => dictionaries[lang][key] ?? key }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
