export type Locale = 'ca' | 'en' | 'es';

export const defaultLocale: Locale = 'ca';

export const ui = {
  ca: {
    'nav.about': '01_SOBRE',
    'nav.cfp': '02_CFP',
    'nav.speakers': '03_PONENTS',
    'nav.agenda': '04_AGENDA',
    'nav.sponsors': '05_PATROCINADORS',
    'nav.tickets': '>_ ENTRADES',
    'nav.aria': 'Navegació principal',

    'hero.badge': '[ INIT_SYSTEM_ROOT ]',
    'hero.tagline': 'La conferència de geeks per a geeks de Catalunya',
    'hero.date': '[ TBA ]',
    'hero.venue': '[ TBA ]',
    'hero.cta.ticket': '>_ RESERVAR TICKET',
    'hero.cta.agenda': '[ VEURE_AGENDA ]',

    'tba.status': 'PROPERAMENT',
    'tba.placeholder': '[ TBA ]',
    'tba.pending': 'STATUS: PENDING',

    'footer.code-of-conduct': 'Codi de Conducta',
    'footer.volunteers': 'Voluntaris',
    'footer.contact': 'Contacte',
    'footer.archive': 'Arxiu',
    'footer.legal': 'Avís Legal',

    'lang.ca': 'CA',
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.switcher.aria': 'Canviar idioma',

    'theme.toggle.aria': 'Canviar tema clar/fosc',
    'theme.light': 'LIGHT_MODE',
    'theme.dark': 'DARK_MODE',

    'cfp.title': '02_CFP',
    'cfp.headline': 'SYSCALL PONENTS',
    'cfp.deadline': '[ 31_AGOST_2026 ]',
    'cfp.cta': 'SUBMIT_TALK',

    'speakers.title': '03_PONENTS',
    'speakers.cfp-open': 'CFP_STATUS: [ OPEN ]',

    'agenda.title': '04_AGENDA',
    'agenda.empty': 'AGENDA EN PREPARACIÓ. STATUS: COMPILING…',

    'sponsors.title': '05_PATROCINADORS',
    'sponsors.cta.contact': '[ CONTACTA AMB NOSALTRES ]',
    'sponsors.cta.dossier': '[ DESCARREGA EL DOSSIER PDF ]',
    'sponsors.become': 'VOLS SER PATROCINADOR?',
    'sponsors.collaborators': 'COL·LABORADORS',
  },
  en: {
    'nav.about': '01_ABOUT',
    'nav.cfp': '02_CFP',
    'nav.speakers': '03_SPEAKERS',
    'nav.agenda': '04_AGENDA',
    'nav.sponsors': '05_SPONSORS',
    'nav.tickets': '>_ TICKETS',
    'nav.aria': 'Main navigation',

    'hero.badge': '[ INIT_SYSTEM_ROOT ]',
    'hero.tagline': "The geeks' conference for geeks in Catalonia",
    'hero.date': '[ TBA ]',
    'hero.venue': '[ TBA ]',
    'hero.cta.ticket': '>_ GET TICKET',
    'hero.cta.agenda': '[ VIEW_AGENDA ]',

    'tba.status': 'COMING SOON',
    'tba.placeholder': '[ TBA ]',
    'tba.pending': 'STATUS: PENDING',

    'footer.code-of-conduct': 'Code of Conduct',
    'footer.volunteers': 'Volunteers',
    'footer.contact': 'Contact',
    'footer.archive': 'Archive',
    'footer.legal': 'Legal Notice',

    'lang.ca': 'CA',
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.switcher.aria': 'Switch language',

    'theme.toggle.aria': 'Toggle light/dark theme',
    'theme.light': 'LIGHT_MODE',
    'theme.dark': 'DARK_MODE',

    'cfp.title': '02_CFP',
    'cfp.headline': 'SYSCALL SPEAKERS',
    'cfp.deadline': '[ 31_AUGUST_2026 ]',
    'cfp.cta': 'SUBMIT_TALK',

    'speakers.title': '03_SPEAKERS',
    'speakers.cfp-open': 'CFP_STATUS: [ OPEN ]',

    'agenda.title': '04_AGENDA',
    'agenda.empty': 'AGENDA IN PROGRESS. STATUS: COMPILING…',

    'sponsors.title': '05_SPONSORS',
    'sponsors.cta.contact': '[ CONTACT US ]',
    'sponsors.cta.dossier': '[ DOWNLOAD DOSSIER PDF ]',
    'sponsors.become': 'WANT TO BE A SPONSOR?',
    'sponsors.collaborators': 'COLLABORATORS',
  },
  es: {
    'nav.about': '01_SOBRE',
    'nav.cfp': '02_CFP',
    'nav.speakers': '03_PONENTES',
    'nav.agenda': '04_AGENDA',
    'nav.sponsors': '05_PATROCINADORES',
    'nav.tickets': '>_ ENTRADAS',
    'nav.aria': 'Navegación principal',

    'hero.badge': '[ INIT_SYSTEM_ROOT ]',
    'hero.tagline': 'La conferencia de geeks para geeks de Cataluña',
    'hero.date': '[ TBA ]',
    'hero.venue': '[ TBA ]',
    'hero.cta.ticket': '>_ RESERVAR ENTRADA',
    'hero.cta.agenda': '[ VER_AGENDA ]',

    'tba.status': 'PRÓXIMAMENTE',
    'tba.placeholder': '[ TBA ]',
    'tba.pending': 'STATUS: PENDIENTE',

    'footer.code-of-conduct': 'Código de Conducta',
    'footer.volunteers': 'Voluntarios',
    'footer.contact': 'Contacto',
    'footer.archive': 'Archivo',
    'footer.legal': 'Aviso Legal',

    'lang.ca': 'CA',
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.switcher.aria': 'Cambiar idioma',

    'theme.toggle.aria': 'Cambiar tema claro/oscuro',
    'theme.light': 'LIGHT_MODE',
    'theme.dark': 'DARK_MODE',

    'cfp.title': '02_CFP',
    'cfp.headline': 'SYSCALL PONENTES',
    'cfp.deadline': '[ 31_AGOSTO_2026 ]',
    'cfp.cta': 'SUBMIT_TALK',

    'speakers.title': '03_PONENTES',
    'speakers.cfp-open': 'CFP_STATUS: [ OPEN ]',

    'agenda.title': '04_AGENDA',
    'agenda.empty': 'AGENDA EN PREPARACIÓN. STATUS: COMPILANDO…',

    'sponsors.title': '05_PATROCINADORES',
    'sponsors.cta.contact': '[ CONTACTA CON NOSOTROS ]',
    'sponsors.cta.dossier': '[ DESCARGA EL DOSSIER PDF ]',
    'sponsors.become': '¿QUIERES SER PATROCINADOR?',
    'sponsors.collaborators': 'COLABORADORES',
  },
} as const;

export type UIKey = keyof (typeof ui)['ca'];
