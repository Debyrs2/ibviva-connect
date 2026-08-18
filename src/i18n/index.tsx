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
      "Um lugar de portas abertas para encontrar fé, pertencimento e recomeços genuínos. Venha do jeito que você está.",
    "hero.cta1": "Conheça-nos",
    "hero.cta2": "Como chegar",
    "hero.scroll": "Role para descobrir",

    "about.tag": "Sobre nós",
    "about.title": "Onde ninguém caminha sozinho",
    "about.p1":
      "Somos uma comunidade cristã em Piedade, Jaboatão dos Guararapes. Nos reunimos para adorar a Deus, ouvir a Bíblia e caminhar ao lado uns dos outros nas alegrias e nas dificuldades da vida.",
    "about.p2":
      "Não existe um jeito certo de chegar até aqui. Seja qual for a sua história, o seu momento ou a sua dúvida, há espaço reservado para você — para orar, para ouvir, falar da palavra de Deus em comunhão.",
    "about.v1.title": "Mensagem clara",
    "about.v1.text": "A mensagem da Bíblia contada de um jeito claro, para todas as idades.",
    "about.v2.title": "Gente que acolhe",
    "about.v2.text": "Visitantes, famílias e crianças são recebidos com alegria.",
    "about.v3.title": "Amor em ação",
    "about.v3.text":
      "Servimos nossa vizinhança com projetos, gestos concretos e uma presença que permanece.",

    "gallery.tag": "Mural de fotos",
    "gallery.title": "Momentos da nossa comunidade",
    "gallery.subtitle": "Cultos, crianças, música e encontros que enchem nossa casa de vida.",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Próxima foto",
    "gallery.close": "Fechar",

    "location.tag": "Localização",
    "location.title": "Venha nos visitar",
    "location.address": "Endereço",
    "location.open": "Abrir no Google Maps",
    "location.schedule": "Horários",
    "schedule.tue": "Terça-feira",
    "schedule.wed": "Quarta-feira",
    "schedule.thu": "Quinta-feira",
    "schedule.sat": "Sábado",
    "schedule.sun": "Domingo",
    "schedule.women": "Pequeno Grupo das Mulheres",
    "schedule.prayer": "Culto de Oração",
    "schedule.mixed": "Pequeno Grupo Misto",
    "schedule.ambassadors": "Embaixadores do Rei",
    "schedule.youth": "Pequeno Grupo Jovem",
    "schedule.couples": "Pequeno Grupo de Casais",
    "schedule.school": "Escola Bíblica",
    "schedule.service": "Culto Oficial",

    "contact.tag": "Contato",
    "contact.title": "Fale com a gente",
    "contact.subtitle": "Estamos por aqui para ouvir você, orar e responder suas dúvidas.",
    "contact.email": "E-mail",
    "contact.emailAction": "Enviar e-mail",

    "social.tag": "Redes sociais",
    "social.title": "Acompanhe o dia a dia",
    "social.subtitle": "Mensagens, avisos e transmissões dos nossos cultos.",
    "social.follow": "Seguir",
    "social.watch": "Assistir",

    "footer.rights": "Todos os direitos reservados.",
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
      "A place with open doors to find faith, belonging and genuine new beginnings. Come just as you are.",
    "hero.cta1": "Get to know us",
    "hero.cta2": "How to get here",
    "hero.scroll": "Scroll to explore",

    "about.tag": "About us",
    "about.title": "Where no one walks alone",
    "about.p1":
      "We are a Christian community in Piedade, Jaboatão dos Guararapes. We gather to worship God, listen to the Bible and walk beside one another through the joys and the hardships of life.",
    "about.p2":
      "There is no right way to arrive here. Whatever your story, your season or your question, there is space saved for you — to pray, to listen, to share the word of God in fellowship.",
    "about.v1.title": "A clear message, without detours",
    "about.v1.text": "The Bible shared in a clear way, for every age.",
    "about.v2.title": "Warm people",
    "about.v2.text": "Visitors, families and children are welcomed with joy.",
    "about.v3.title": "Love in action",
    "about.v3.text":
      "We serve our neighborhood with projects, concrete gestures and a presence that stays.",

    "gallery.tag": "Photo gallery",
    "gallery.title": "Moments from our community",
    "gallery.subtitle": "Services, children, music and gatherings that fill our house with life.",
    "gallery.prev": "Previous photo",
    "gallery.next": "Next photo",
    "gallery.close": "Close",

    "location.tag": "Location",
    "location.title": "Come visit us",
    "location.address": "Address",
    "location.open": "Open in Google Maps",
    "location.schedule": "Service times",
    "schedule.tue": "Tuesday",
    "schedule.wed": "Wednesday",
    "schedule.thu": "Thursday",
    "schedule.sat": "Saturday",
    "schedule.sun": "Sunday",
    "schedule.women": "Women's Small Group",
    "schedule.prayer": "Prayer Service",
    "schedule.mixed": "Mixed Small Group",
    "schedule.ambassadors": "King's Ambassadors",
    "schedule.youth": "Youth Small Group",
    "schedule.couples": "Couples' Small Group",
    "schedule.school": "Bible School",
    "schedule.service": "Main Service",

    "contact.tag": "Contact",
    "contact.title": "Talk to us",
    "contact.subtitle": "We are here to listen, to pray and to answer your questions.",
    "contact.email": "Email",
    "contact.emailAction": "Send email",

    "social.tag": "Social media",
    "social.title": "Follow our everyday life",
    "social.subtitle": "Messages, announcements and live streams of our services.",
    "social.follow": "Follow",
    "social.watch": "Watch",

    "footer.rights": "All rights reserved.",
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
      "Un lugar de puertas abiertas para encontrar fe, pertenencia y recomienzos genuinos. Ven tal como eres.",
    "hero.cta1": "Conócenos",
    "hero.cta2": "Cómo llegar",
    "hero.scroll": "Desliza para explorar",

    "about.tag": "Sobre nosotros",
    "about.title": "Donde nadie camina solo",
    "about.p1":
      "Somos una comunidad cristiana en Piedade, Jaboatão dos Guararapes. Nos reunimos para adorar a Dios, escuchar la Biblia y caminar al lado unos de otros en las alegrías y en las dificultades de la vida.",
    "about.p2":
      "No existe una forma correcta de llegar hasta aquí. Sea cual sea tu historia, tu momento o tu duda, hay un espacio reservado para ti — para orar, para escuchar, hablar de la palabra de Dios en comunión.",
    "about.v1.title": "Mensaje claro sin rodeos",
    "about.v1.text": "La Biblia contada de forma clara, para todas las edades.",
    "about.v2.title": "Gente que acoge",
    "about.v2.text": "Visitantes, familias y niños son recibidos con alegría.",
    "about.v3.title": "Amor en acción",
    "about.v3.text":
      "Servimos a nuestro barrio con proyectos, gestos concretos y una presencia que permanece.",

    "gallery.tag": "Galería de fotos",
    "gallery.title": "Momentos de nuestra comunidad",
    "gallery.subtitle": "Cultos, niños, música y encuentros que llenan de vida nuestra casa.",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Foto siguiente",
    "gallery.close": "Cerrar",

    "location.tag": "Ubicación",
    "location.title": "Ven a visitarnos",
    "location.address": "Dirección",
    "location.open": "Abrir en Google Maps",
    "location.schedule": "Horarios",
    "schedule.tue": "Martes",
    "schedule.wed": "Miércoles",
    "schedule.thu": "Jueves",
    "schedule.sat": "Sábado",
    "schedule.sun": "Domingo",
    "schedule.women": "Pequeño Grupo de Mujeres",
    "schedule.prayer": "Culto de Oración",
    "schedule.mixed": "Pequeño Grupo Mixto",
    "schedule.ambassadors": "Embajadores del Rey",
    "schedule.youth": "Pequeño Grupo Juvenil",
    "schedule.couples": "Pequeño Grupo de Parejas",
    "schedule.school": "Escuela Bíblica",
    "schedule.service": "Culto Oficial",

    "contact.tag": "Contacto",
    "contact.title": "Habla con nosotros",
    "contact.subtitle": "Estamos aquí para escucharte, orar y responder tus dudas.",
    "contact.email": "Correo",
    "contact.emailAction": "Enviar correo",

    "social.tag": "Redes sociales",
    "social.title": "Acompaña nuestro día a día",
    "social.subtitle": "Mensajes, avisos y transmisiones de nuestros cultos.",
    "social.follow": "Seguir",
    "social.watch": "Ver",

    "footer.rights": "Todos los derechos reservados.",
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
