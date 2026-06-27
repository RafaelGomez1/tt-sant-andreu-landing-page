export type Lang = 'es' | 'ca' | 'en';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'ca', label: 'Català', flag: 'CA' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'en', label: 'English', flag: 'EN' },
];

export type ScheduleRow = {
  time: string;
  label: string;
  tone: 'members' | 'kids-beginner' | 'kids-intermediate' | 'adults';
};

export type ScheduleDay = {
  day: string;
  rows: ScheduleRow[];
};

export type Translation = {
  nav: {
    home: string;
    history: string;
    academy: string;
    competition: string;
    schedule: string;
    membership: string;
    contact: string;
    join: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    joinCta: string;
    contactCta: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  history: {
    eyebrow: string;
    title: string;
    body: string;
    milestone1: string;
    milestone1Label: string;
    milestone2: string;
    milestone2Label: string;
    milestone3: string;
    milestone3Label: string;
  };
  academy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    kids: {
      title: string;
      levels: { name: string; desc: string }[];
    };
    adults: {
      title: string;
      desc: string;
      note: string;
    };
  };
  competition: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    future: string;
  };
  schedule: {
    eyebrow: string;
    title: string;
    subtitle: string;
    legend: {
      members: string;
      kidsBeginner: string;
      kidsIntermediate: string;
      adults: string;
    };
    filters: {
      all: string;
      members: string;
      kidsBeginner: string;
      kidsIntermediate: string;
      adults: string;
    };
    cta: string;
    days: ScheduleDay[];
  };
  membership: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: {
      type: 'kids-beginner' | 'kids-intermediate' | 'casual' | 'team';
      label: string;
      description: string;
      plans: {
        name: string;
        price: string;
        period: string;
        tagline: string;
        features: string[];
        cta: string;
      }[];
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
      addressLabel: string;
      address: string;
    };
    mapAlt: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    followUs: string;
    copyright: string;
    madeWith: string;
  };
};

const es: Translation = {
  nav: {
    home: 'Inicio',
    history: 'Historia',
    academy: 'Academia',
    competition: 'Competición',
    schedule: 'Horario',
    membership: 'Cuota de Socio',
    contact: 'Contacto',
    join: 'Únete',
  },
  hero: {
    badge: 'Club de Tenis de Mesa · Desde 2007',
    title: 'Bienvenido a Nuestro Club de Tenis de Mesa',
    subtitle:
      'Entrena, compite y disfruta del deporte para todos los niveles',
    joinCta: 'Únete',
    contactCta: 'Contacto',
    stat1: '17+',
    stat1Label: 'Años de historia',
    stat2: '120+',
    stat2Label: 'Miembros activos',
    stat3: '8',
    stat3Label: 'Mesas profesionales',
  },
  history: {
    eyebrow: 'Nuestra trayectoria',
    title: 'Historia',
    body: 'Nuestro club fue fundado en 2007 y ha crecido hasta convertirse en una comunidad para jugadores de todos los niveles. Lo que empezó como un pequeño grupo de aficionados hoy es un referente local del tenis de mesa, con una academia y equipos compitiendo en ligas regionales.',
    milestone1: '2007',
    milestone1Label: 'Fundación del club',
    milestone2: '2017',
    milestone2Label: 'Primer equipo en liga regional',
    milestone3: '2021',
    milestone3Label: 'Apertura de la academia infantil',
  },
  academy: {
    eyebrow: 'Formación',
    title: 'Academia',
    subtitle:
      'Programas estructurados para cada edad y nivel, con entrenadores.',
    kids: {
      title: 'Infantil',
      levels: [
        {
          name: 'Iniciación',
          desc: 'Principiantes que dan sus primeros pasos en el deporte.',
        },
        {
          name: 'Técnica',
          desc: 'Intermedios con aspiración competitiva.',
        },
      ],
    },
    adults: {
      title: 'Adultos',
      desc: 'Entrenamiento solo disponible para jugadores federados o con experiencia previa debido al nivel de la competición.',
      note: 'Plazas limitadas · Requiere federación deportiva',
    },
  },
  competition: {
    eyebrow: 'Liga y torneos',
    title: 'Competición',
    intro:
      'Nuestros jugadores adultos compiten en ligas regionales a lo largo de toda la temporada. Actualmente contamos con dos equipos competitivos, uno en 2a A y otro en 3a B regional.',
    points: [
      'Los adultos compiten en ligas regionales',
      'El entrenamiento con entrenador está incluido para jugadores federados',
      'Seguimiento técnico y material de competición disponible',
    ],
    future:
      'Estamos trabajando en la expansión de la sección competitiva con nuevos equipos y categorias.',
  },
  schedule: {
    eyebrow: 'Tu semana',
    title: 'Horario',
    subtitle: 'Consulta las franjas disponibles para cada actividad.',
    legend: {
      members: 'Socios no federados',
      kidsBeginner: 'Academia infantil (iniciación)',
      kidsIntermediate: 'Academia infantil (intermedio)',
      adults: 'Socios federados (competición)',
    },
    filters: {
      all: 'Todos',
      members: 'No federados',
      kidsBeginner: 'Iniciación',
      kidsIntermediate: 'Intermedio',
      adults: 'Federados',
    },
    cta: 'Prueba una clase',
    days: [
      {
        day: 'Lunes',
        rows: [
          { time: '16:00–17:00', label: 'No Federados', tone: 'members' },
          { time: '17:00–18:00', label: 'No Federados', tone: 'members' },
          { time: '18:00–19:00', label: 'Infantil iniciación', tone: 'kids-beginner' },
          { time: '19:00–20:00', label: 'Infantil iniciación', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Martes',
        rows: [
          { time: '16:00–17:00', label: 'No Federados', tone: 'members' },
          { time: '17:00–18:00', label: 'No Federados', tone: 'members' },
          { time: '18:00–19:00', label: 'No Federados', tone: 'members' },
          { time: '19:00–20:00', label: 'Infantil iniciación', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Miércoles',
        rows: [
          { time: '16:00–17:00', label: 'No Federados', tone: 'members' },
          { time: '17:00–18:00', label: 'No Federados', tone: 'members' },
          { time: '18:00–19:00', label: 'Infantil intermedio', tone: 'kids-intermediate' },
          { time: '19:00–20:00', label: 'Infantil intermedio', tone: 'kids-intermediate' },
        ],
      },
      {
        day: 'Jueves',
        rows: [
          { time: '16:00–17:00', label: 'No Federados', tone: 'members' },
          { time: '17:00–18:00', label: 'No Federados', tone: 'members' },
          { time: '18:00–19:00', label: 'Federados', tone: 'adults' },
          { time: '19:00–20:00', label: 'Federados', tone: 'adults' },
        ],
      },
      {
        day: 'Viernes',
        rows: [
          { time: '16:00–17:00', label: 'No Federados', tone: 'members' },
          { time: '17:00–18:00', label: 'No Federados', tone: 'members' },
          { time: '18:00–19:00', label: 'Federados', tone: 'adults' },
          { time: '19:00–20:00', label: 'Federados', tone: 'adults' },
        ],
      },
    ],
  },
  membership: {
    eyebrow: 'Únete al club',
    title: 'Cuota de Socio',
    subtitle: 'Tres tipos de socio, para que cada jugador encuentre su lugar.',
    categories: [
      {
        type: 'kids-beginner',
        label: 'Infantil iniciación',
        description: 'Primeros pasos en el tenis de mesa con entrenador.',
        plans: [
          {
            name: 'Iniciación',
            price: '18€',
            period: '/mes',
            tagline: 'Primeros pasos en el tenis de mesa',
            features: [
              'Para niños de 6 a 10 años',
              'Grupos reducidos con entrenador',
              'Horarios adaptados a escolares',
            ],
            cta: 'Apuntar a mi hijo/a',
          },
        ],
      },
      {
        type: 'kids-intermediate',
        label: 'Infantil intermedio',
        description: 'Para jóvenes con base que quieren mejorar.',
        plans: [
          {
            name: 'Tecnificación',
            price: '18€',
            period: '/mes',
            tagline: 'Para quienes ya tienen base',
            features: [
              'Para jugadores con experiencia',
              'Grupos reducidos con entrenador',
              'Entrenamiento técnico y táctico',
              'Acceso a sesiones de competición',
            ],
            cta: 'Apuntar a mi hijo/a',
          },
        ],
      },
      {
        type: 'casual',
        label: 'No federados',
        description: 'Juega por diversión en la franja libre de 16h a 18h.',
        plans: [
          {
            name: 'Socio casual',
            price: '18€',
            period: '/mes',
            tagline: 'Ven cuando quieras',
            features: [
              'Acceso a la franja libre de 16h a 18h',
              'Uso de mesas y material del club',
              'Sin compromiso de competición',
              'Ambiente tranquilo y familiar',
            ],
            cta: 'Hazte socio',
          },
        ],
      },
      {
        type: 'team',
        label: 'Federados',
        description: 'Para los que quieren entrenar y competir en liga.',
        plans: [
          {
            name: 'Jugador de equipo',
            price: 'Cuota + liga',
            period: '',
            tagline: 'Entrena y compite con el club',
            features: [
              'Entrenamiento técnico con entrenador',
              'Inscripción en liga federada',
              'Equipación oficial del club',
              'Acceso a todos los torneos del club',
            ],
            cta: 'Quiero competir',
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Hablemos',
    title: 'Contacto',
    subtitle: '¿Tienes preguntas? Escríbenos y te responderemos lo antes posible.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos en qué podemos ayudarte...',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      success: '¡Mensaje enviado! Te contactaremos pronto.',
      error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
    },
    info: {
      phoneLabel: 'Teléfono',
      phone: '+34 611 674 664',
      emailLabel: 'Email',
      email: 'rafa.gomezper@gmail.com',
      addressLabel: 'Dirección',
      address: 'Carrer Coroleu, 15 2n · Barcelona',
    },
    mapAlt: 'Mapa de ubicación del club',
  },
  footer: {
    tagline: 'Entrena, compite y disfruta del tenis de mesa para todos los niveles.',
    quickLinks: 'Enlaces rápidos',
    contactTitle: 'Contacto',
    followUs: 'Síguenos',
    copyright: 'Club de Tenis de Mesa. Todos los derechos reservados.',
    madeWith: 'Hecho con pasión por el tenis de mesa.',
  },
};

const ca: Translation = {
  nav: {
    home: 'Inici',
    history: 'Història',
    academy: 'Acadèmia',
    competition: 'Competició',
    schedule: 'Horari',
    membership: 'Quota de Soci',
    contact: 'Contacte',
    join: 'Uneix-te',
  },
  hero: {
    badge: 'Club de Tennis Taula · Des de 2007',
    title: 'Benvingut al Nostre Club de Tennis Taula',
    subtitle: "Entrena, competeix i gaudeix de l'esport per a tots els nivells",
    joinCta: 'Uneix-te',
    contactCta: 'Contacte',
    stat1: '17+',
    stat1Label: 'Anys d\'història',
    stat2: '120+',
    stat2Label: 'Membres actius',
    stat3: '8',
    stat3Label: 'Taules professionals',
  },
  history: {
    eyebrow: 'La nostra trajectòria',
    title: 'Història',
    body: 'El nostre club va ser fundat l\'any 2007 i ha crescut fins a convertir-se en una comunitat per a jugadors de tots els nivells. El que va començar com un petit grup d\'aficionats avui és un referent local del tennis taula, amb una acadèmia i equips competint en lligues regionals.',
    milestone1: '2007',
    milestone1Label: 'Fundació del club',
    milestone2: '2017',
    milestone2Label: 'Primer equip en lliga regional',
    milestone3: '2021',
    milestone3Label: 'Obertura de l\'acadèmia infantil',
  },
  academy: {
    eyebrow: 'Formació',
    title: 'Acadèmia',
    subtitle: 'Programes estructurats per a cada edat i nivell, amb entrenadors qualificats.',
    kids: {
      title: 'Infantil',
      levels: [
        {
          name: 'Iniciació',
          desc: 'Principiants que fan els primers passos en l\'esport.',
        },
        {
          name: 'Tècnica',
          desc: 'Intermedis amb aspiració competitiva.',
        },
      ],
    },
    adults: {
      title: 'Adults',
      desc: 'Entrenament només per a jugadors federats o amb experiència prèvia degut al nivell de la competició.',
      note: 'Places limitades · Requereix federació esportiva',
    },
  },
  competition: {
    eyebrow: 'Lliga i torneigs',
    title: 'Competició',
    intro:
      'Els nostres jugadors adults competeixen en lligues regionals al llarg de tota la temporada. Actualment comptem amb dos equips de competició, un a 2a A i l\'altre a 3a B regional.',
    points: [
      'Els adults competeixen en lligues regionals',
      'L\'entrenador està inclòs per a jugadors federats',
      'Suport tècnic i material de competició disponible',
    ],
    future:
      'Estem treballant en l\'expansió de la secció competitiva amb nous equips i categories.',
  },
  schedule: {
    eyebrow: 'La teva setmana',
    title: 'Horari',
    subtitle: 'Consulta les franges disponibles per a cada activitat.',
    legend: {
      members: 'Socis no federats',
      kidsBeginner: 'Acadèmia infantil (iniciació)',
      kidsIntermediate: 'Acadèmia infantil (intermedi)',
      adults: 'Socis federats',
    },
    filters: {
      all: 'Tots',
      members: 'No federats',
      kidsBeginner: 'Iniciació',
      kidsIntermediate: 'Intermedi',
      adults: 'Federats',
    },
    cta: 'Prova una classe',
    days: [
      {
        day: 'Dilluns',
        rows: [
          { time: '16:00–17:00', label: 'No federats', tone: 'members' },
          { time: '17:00–18:00', label: 'No federats', tone: 'members' },
          { time: '18:00–19:00', label: 'Infantil iniciació', tone: 'kids-beginner' },
          { time: '19:00–20:00', label: 'Infantil iniciació', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Dimarts',
        rows: [
          { time: '16:00–17:00', label: 'No federats', tone: 'members' },
          { time: '17:00–18:00', label: 'No federats', tone: 'members' },
          { time: '18:00–19:00', label: 'No federats', tone: 'members' },
          { time: '19:00–20:00', label: 'Infantil iniciació', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Dimecres',
        rows: [
          { time: '16:00–17:00', label: 'No federats', tone: 'members' },
          { time: '17:00–18:00', label: 'No federats', tone: 'members' },
          { time: '18:00–19:00', label: 'Infantil intermedi', tone: 'kids-intermediate' },
          { time: '19:00–20:00', label: 'Infantil intermedi', tone: 'kids-intermediate' },
        ],
      },
      {
        day: 'Dijous',
        rows: [
          { time: '16:00–17:00', label: 'No federats', tone: 'members' },
          { time: '17:00–18:00', label: 'No federats', tone: 'members' },
          { time: '18:00–19:00', label: 'Federats', tone: 'adults' },
          { time: '19:00–20:00', label: 'Federats', tone: 'adults' },
        ],
      },
      {
        day: 'Divendres',
        rows: [
          { time: '16:00–17:00', label: 'No federats', tone: 'members' },
          { time: '17:00–18:00', label: 'No federats', tone: 'members' },
          { time: '18:00–19:00', label: 'Federats', tone: 'adults' },
          { time: '19:00–20:00', label: 'Federats', tone: 'adults' },
        ],
      },
    ],
  },
  membership: {
    eyebrow: 'Uneix-te al club',
    title: 'Quota de Soci',
    subtitle: 'Tres tipus de soci, perquè cada jugador trobi el seu lloc.',
    categories: [
      {
        type: 'kids-beginner',
        label: 'Infantil iniciació',
        description: 'Primers passos al tennis de taula amb entrenador.',
        plans: [
          {
            name: 'Iniciació',
            price: '18€',
            period: '/mes',
            tagline: 'Primers passos al tennis taula',
            features: [
              'Per a nens de 6 a 10 anys',
              'Grups reduïts amb entrenador',
              'Materials inclosos',
              'Horaris adaptats a escolars',
            ],
            cta: 'Apuntar el meu fill/a',
          },
        ],
      },
      {
        type: 'kids-intermediate',
        label: 'Infantil intermedi',
        description: 'Per a joves amb base que volen millorar.',
        plans: [
          {
            name: 'Tecnificació',
            price: '18€',
            period: '/mes',
            tagline: 'Per als qui ja tenen base',
            features: [
              'Per a jugadors de 10 a 16 anys amb experiència',
              'Grups reduïts amb entrenador',
              'Entrenament tècnic i tàctic',
              'Accés a sessions de competició',
            ],
            cta: 'Apuntar el meu fill/a',
          },
        ],
      },
      {
        type: 'casual',
        label: 'No federats',
        description: 'Juga per diversió a la franja lliure de 16h a 18h.',
        plans: [
          {
            name: 'Soci casual',
            price: '18€',
            period: '/mes',
            tagline: 'Vine quan vulguis',
            features: [
              'Accés a la franja lliure de 16h a 18h',
              'Ús de taules i material del club',
              'Sense compromís de competició',
              'Ambient tranquil i familiar',
            ],
            cta: 'Fes-te soci',
          },
        ],
      },
      {
        type: 'team',
        label: 'Federats',
        description: 'Per als qui volen entrenar seriosament i competir en lliga.',
        plans: [
          {
            name: 'Jugador d\'equip',
            price: 'Quota + lliga',
            period: '',
            tagline: 'Entrena i competeix amb el club',
            features: [
              'Entrenament tècnic amb entrenador',
              'Inscripció a la lliga federada inclosa',
              'Equipació oficial del club',
              'Accés a tots els torneigs del club',
            ],
            cta: 'Vull competir',
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Parlem',
    title: 'Contacte',
    subtitle: 'Tens preguntes? Escriu-nos i et respondrem el més aviat possible.',
    form: {
      name: 'Nom',
      namePlaceholder: 'El teu nom',
      email: 'Correu electrònic',
      emailPlaceholder: 'el.teu@correu.com',
      message: 'Missatge',
      messagePlaceholder: 'Explica\'ns en què et podem ajudar...',
      submit: 'Enviar missatge',
      submitting: 'Enviant...',
      success: 'Missatge enviat! Et contactarem aviat.',
      error: 'No s\'ha pogut enviar el missatge. Torna-ho a provar.',
    },
    info: {
      phoneLabel: 'Telèfon',
      phone: '+34 611 674 664',
      emailLabel: 'Email',
      email: 'rafa.gomezper@gmail.com',
      addressLabel: 'Adreça',
      address: 'Carrer Coroleu, 15 2n · Barcelona',
    },
    mapAlt: 'Mapa d\'ubicació del club',
  },
  footer: {
    tagline: 'Entrena, competeix i gaudeix del tennis taula per a tots els nivells.',
    quickLinks: 'Enllaços ràpids',
    contactTitle: 'Contacte',
    followUs: 'Segueix-nos',
    copyright: 'Club de Tennis Taula. Tots els drets reservats.',
    madeWith: 'Fet amb passió pel tennis taula.',
  },
};

const en: Translation = {
  nav: {
    home: 'Home',
    history: 'History',
    academy: 'Academy',
    competition: 'Competition',
    schedule: 'Schedule',
    membership: 'Membership',
    contact: 'Contact',
    join: 'Join Us',
  },
  hero: {
    badge: 'Table Tennis Club · Since 2007',
    title: 'Welcome to Our Table Tennis Club',
    subtitle: 'Train, compete, and enjoy the sport for all levels',
    joinCta: 'Join Us',
    contactCta: 'Contact',
    stat1: '17+',
    stat1Label: 'Years of history',
    stat2: '120+',
    stat2Label: 'Active members',
    stat3: '8',
    stat3Label: 'Professional tables',
  },
  history: {
    eyebrow: 'Our journey',
    title: 'History',
    body: 'Our club was founded in 2007 and has grown into a community for players of all levels. What started as a small group of enthusiasts is now a local reference for table tennis, with a consolidated academy and teams competing in regional leagues.',
    milestone1: '2007',
    milestone1Label: 'Club founded',
    milestone2: '2017',
    milestone2Label: 'First team in regional league',
    milestone3: '2021',
    milestone3Label: 'Kids academy launched',
  },
  academy: {
    eyebrow: 'Training',
    title: 'Academy',
    subtitle: 'Structured programs for every age and level, with qualified coaches.',
    kids: {
      title: 'Kids',
      levels: [
        {
          name: 'Initiation',
          desc: 'Beginners taking their first steps in the sport.',
        },
        {
          name: 'Technique',
          desc: 'Intermediates with competitive aspirations.',
        },
      ],
    },
    adults: {
      title: 'Adults',
      desc: 'Training available only for registered competition players.',
      note: 'Limited spots · Requires sports federation membership',
    },
  },
  competition: {
    eyebrow: 'Leagues & tournaments',
    title: 'Competition',
    intro:
      'Our adult players compete in local and regional leagues throughout the season, with technical follow-up and club support at every stage.',
    points: [
      'Adults compete in local and regional leagues',
      'Training with a coach is included for registered players',
      'Technical support and competition gear available',
    ],
    future:
      'We are working on expanding the competitive section with new categories and venues soon.',
  },
  schedule: {
    eyebrow: 'Your week',
    title: 'Schedule',
    subtitle: 'Check the available time slots for each activity.',
    legend: {
      members: 'Non-competing members',
      kidsBeginner: 'Kids academy (beginner)',
      kidsIntermediate: 'Kids academy (intermediate)',
      adults: 'Adult training (competition)',
    },
    filters: {
      all: 'All',
      members: 'Non-competing',
      kidsBeginner: 'Beginner',
      kidsIntermediate: 'Intermediate',
      adults: 'Federated',
    },
    cta: 'Try a class',
    days: [
      {
        day: 'Monday',
        rows: [
          { time: '16:00–17:00', label: 'Non-competing members', tone: 'members' },
          { time: '17:00–18:00', label: 'Non-competing members', tone: 'members' },
          { time: '18:00–19:00', label: 'Kids academy (beginner)', tone: 'kids-beginner' },
          { time: '19:00–20:00', label: 'Kids academy (beginner)', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Tuesday',
        rows: [
          { time: '16:00–17:00', label: 'Non-competing members', tone: 'members' },
          { time: '17:00–18:00', label: 'Non-competing members', tone: 'members' },
          { time: '18:00–19:00', label: 'Non-competing members', tone: 'members' },
          { time: '19:00–20:00', label: 'Kids academy (beginner)', tone: 'kids-beginner' },
        ],
      },
      {
        day: 'Wednesday',
        rows: [
          { time: '16:00–17:00', label: 'Non-competing members', tone: 'members' },
          { time: '17:00–18:00', label: 'Non-competing members', tone: 'members' },
          { time: '18:00–19:00', label: 'Kids academy (intermediate)', tone: 'kids-intermediate' },
          { time: '19:00–20:00', label: 'Kids academy (intermediate)', tone: 'kids-intermediate' },
        ],
      },
      {
        day: 'Thursday',
        rows: [
          { time: '16:00–17:00', label: 'Non-competing members', tone: 'members' },
          { time: '17:00–18:00', label: 'Non-competing members', tone: 'members' },
          { time: '18:00–19:00', label: 'Adult training (competition)', tone: 'adults' },
          { time: '19:00–20:00', label: 'Adult training (competition)', tone: 'adults' },
        ],
      },
      {
        day: 'Friday',
        rows: [
          { time: '16:00–17:00', label: 'Non-competing members', tone: 'members' },
          { time: '17:00–18:00', label: 'Non-competing members', tone: 'members' },
          { time: '18:00–19:00', label: 'Adult training (competition)', tone: 'adults' },
          { time: '19:00–20:00', label: 'Adult training (competition)', tone: 'adults' },
        ],
      },
    ],
  },
  membership: {
    eyebrow: 'Join the club',
    title: 'Membership',
    subtitle: 'Three member types, so every player finds their place.',
    categories: [
      {
        type: 'kids-beginner',
        label: 'Kids beginner',
        description: 'First steps in table tennis with a coach.',
        plans: [
          {
            name: 'Beginners',
            price: '€18',
            period: '/month',
            tagline: 'First steps in table tennis',
            features: [
              'For children aged 6 to 10',
              'Small groups with a coach',
              'Equipment included',
              'School-friendly timetables',
            ],
            cta: 'Enrol my child',
          },
        ],
      },
      {
        type: 'kids-intermediate',
        label: 'Kids intermediate',
        description: 'For young players with a base who want to improve.',
        plans: [
          {
            name: 'Development',
            price: '€18',
            period: '/month',
            tagline: 'For players who already have a base',
            features: [
              'For players aged 10 to 16 with experience',
              'Technical and tactical training',
              'Participation in school tournaments',
              'Access to competitive sessions',
            ],
            cta: 'Enrol my child',
          },
        ],
      },
      {
        type: 'casual',
        label: 'Non-competing',
        description: 'Play for fun during the open slot from 4pm to 6pm.',
        plans: [
          {
            name: 'Casual member',
            price: '€18',
            period: '/month',
            tagline: 'Come whenever you like',
            features: [
              'Access to the open slot 4pm–6pm',
              'Use of club tables and equipment',
              'No competition commitment',
              'Relaxed, friendly atmosphere',
            ],
            cta: 'Become a member',
          },
        ],
      },
      {
        type: 'team',
        label: 'Federated',
        description: 'For those who want to train seriously and compete in the league.',
        plans: [
          {
            name: 'Team player',
            price: 'Fee + league',
            period: '',
            tagline: 'Train and compete with the club',
            features: [
              'Technical training with a coach',
              'Federated league registration included',
              'Official club kit',
              'Access to all club tournaments',
              'Team trips and match day travel',
            ],
            cta: 'I want to compete',
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: 'Contact',
    subtitle: 'Got questions? Write to us and we will reply as soon as possible.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help...',
      submit: 'Send message',
      submitting: 'Sending...',
      success: 'Message sent! We will contact you soon.',
      error: 'Could not send the message. Please try again.',
    },
    info: {
      phoneLabel: 'Phone',
      phone: '+34 611 674 664',
      emailLabel: 'Email',
      email: 'rafa.gomezper@gmail.com',
      addressLabel: 'Address',
      address: 'Carrer Coroleu, 15 2n · Barcelona',
    },
    mapAlt: 'Map of the club location',
  },
  footer: {
    tagline: 'Train, compete, and enjoy table tennis for all levels.',
    quickLinks: 'Quick links',
    contactTitle: 'Contact',
    followUs: 'Follow us',
    copyright: 'Table Tennis Club. All rights reserved.',
    madeWith: 'Made with passion for table tennis.',
  },
};

export const translations: Record<Lang, Translation> = { es, ca, en };
