import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

const translations = {
  fr: {
    nav: {
      services: 'Nos services',
      approach: 'Notre approche',
      about: 'Qui sommes-nous',
      contact: 'Contact',
      cta: 'Consultation gratuite',
      menu: 'Menu',
      close: 'Fermer',
    },
    hero: {
      eyebrow: 'Gestion de cliniques dentaires — Québec',
      titleA: 'Retrouvez le plaisir',
      titleB: 'd’être dentiste propriétaire',
      subtitle:
        'Gestion Incisive règle les trois problèmes que vivent les cliniques dentaires : les plans de traitement qui attendent, les téléphones qui sonnent dans le vide et les rappels qui prennent du retard. Une équipe humaine d’abord, augmentée par l’IA — au service de votre pratique.',
      ctaPrimary: 'Contactez nous',
      ctaSecondary: 'Découvrir nos services',
      experience: '20+',
      experienceLabel: 'ans d’expérience en gestion dentaire',
      bilingual: 'FR · EN',
      bilingualLabel: 'service bilingue, d’ici',
      imageAlt: 'Une membre de l’équipe Gestion Incisive répond au téléphone avec le sourire',
      caption: 'Réponse en moins d’une minute — par un humain.',
    },
    trusted: {
      label: 'Des cliniques que nous gérons avec succès',
    },
    services: {
      eyebrow: 'Nos services',
      title: 'Les trois problèmes qu’on règle pour vous',
      subtitle:
        'Chaque clinique dentaire connaît ces trois phrases. Nous les transformons en services concrets et mesurables.',
      items: [
        {
          label: '01',
          title: 'Plans de traitement',
          description:
            '« On n’a pas eu le temps pour le plan de traitement… » Plus maintenant. Vos plans sont préparés, envoyés — et suivis jusqu’à la décision.',
          details: [
            'Préparation et envoi des plans de traitement aux assurances — incluant le RCSD',
            'Envoi des plans de traitement directement aux patients',
            'Suivis auprès des patients, jusqu’à leur décision',
            'Estimés produits en dedans de 3 jours, avec deux suivis',
          ],
        },
        {
          label: '02',
          title: 'Réponse téléphonique',
          description:
            '« Clinique dentaire, un moment s’il vous plaît… » Plus jamais. Vos patients obtiennent l’aide dont ils ont besoin en moins d’une minute.',
          details: [
            'Appels répondus en moins d’une minute par un humain',
            'Messages vocaux retournés en dedans de 24 h',
            'Courriels répondus en dedans de 2 jours ouvrables',
            'Prise de rendez-vous et gestion de votre liste d’attente',
            'Résolution des problèmes d’assurance',
          ],
        },
        {
          label: '03',
          title: 'Appels de rappel',
          description:
            'Les fameux recalls que les cliniques repoussent faute de temps — nous les faisons, systématiquement, sans exception.',
          details: [
            'Rappels de rendez-vous et d’hygiène, faits par un humain',
            'Réactivation de vos patients inactifs',
            'Appels de suivi post-opératoire',
            'Appels de rétroaction après chaque visite',
          ],
        },
      ],
    },
    approach: {
      eyebrow: 'Notre approche',
      title: 'Humains d’abord, augmentés par l’IA',
      statement: 'L’IA nous rend rapides. L’humain nous rend dignes de confiance.',
      description:
        'Chez Gestion Incisive, l’intelligence artificielle travaille en coulisses : elle accélère la préparation des plans, repère les rappels à faire et ne laisse rien passer. Mais chaque appel, chaque suivi et chaque décision passe par un humain qui connaît la réalité des cliniques d’ici.',
      principles: [
        {
          title: 'Humain d’abord',
          text: 'Vos patients parlent à des humains, augmentés par l’IA — jamais remplacés par elle.',
        },
        {
          title: 'La précision de l’IA',
          text: 'Rien ne se perd : chaque plan, rappel et message est suivi, mesuré et relancé au bon moment.',
        },
        {
          title: 'Bilingue et local',
          text: 'Une équipe d’ici, à l’aise en français et en anglais, qui connaît le Québec et le RCSD.',
        },
        {
          title: 'Rigueur mesurable',
          text: 'Des engagements chiffrés et suivis, pas de promesses vagues.',
        },
      ],
    },
    about: {
      eyebrow: 'Qui sommes-nous',
      title: 'Des professionnels de la gestion dentaire, depuis plus de 20 ans',
      p1: 'Gestion Incisive est née d’un constat simple : les cliniques dentaires du Québec ne manquent pas de patients — elles manquent de temps.',
      p2: 'Notre équipe réunit des professionnels cumulant plus de 20 ans d’expérience en gestion dentaire. Nous connaissons la réalité des cliniques d’ici, leurs logiciels, leurs assureurs et leurs patients — en français comme en anglais.',
      imageAlt: 'L’équipe Gestion Incisive en pleine collaboration',
      badge: '20+ ans d’expérience',
    },
    standards: {
      eyebrow: 'Nos engagements',
      title: 'Des promesses mesurables, pas des intentions',
      items: [
        { value: '< 1 min', label: 'pour répondre à chaque appel — par un humain, jamais un robot' },
        { value: '24 h', label: 'pour retourner chaque message vocal' },
        { value: '2 jours', label: 'ouvrables pour traiter chaque courriel' },
        { value: '3 jours', label: 'pour préparer et envoyer chaque plan de traitement, avec suivis' },
      ],
    },
    process: {
      eyebrow: 'Comment ça marche',
      title: 'Une transition simple, en quatre étapes',
      software: 'On se branche à vos outils et à votre logiciel dentaire existant — sans perturber vos opérations.',
      steps: [
        {
          title: 'Appel découverte',
          text: 'On prend le temps de comprendre votre clinique, vos défis et vos priorités — sans engagement.',
        },
        {
          title: 'Plan sur mesure',
          text: 'On vous propose un mandat adapté à votre réalité : un seul service ou les trois.',
        },
        {
          title: 'Intégration en douceur',
          text: 'On se connecte à vos outils et à votre logiciel dentaire, sans rien changer pour votre équipe.',
        },
        {
          title: 'Vous respirez',
          text: 'On s’occupe du reste — et vous, vous vous occupez de vous et de vos patients.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre clinique',
      subtitle:
        'Réservez une consultation gratuite et sans engagement. On vous répond en dedans d’un jour ouvrable — évidemment, par un humain.',
      form: {
        name: 'Votre nom',
        clinic: 'Nom de la clinique',
        email: 'Courriel',
        phone: 'Téléphone',
        message: 'Parlez-nous de vos besoins',
        submit: 'Envoyer ma demande',
        sending: 'Envoi en cours…',
        successTitle: 'Message envoyé',
        success: 'Merci! Votre demande a bien été envoyée. On vous recontacte très rapidement.',
        another: 'Envoyer un autre message',
        error: 'Une erreur est survenue. Réessayez ou écrivez-nous directement à',
      },
    },
    footer: {
      tagline: 'La gestion dentaire, incisivement bien faite.',
      note: 'Humains d’abord, augmentés par l’IA — au service des cliniques dentaires partout au Québec.',
      rights: 'Tous droits réservés.',
      back: 'Haut de page',
    },
  },
  en: {
    nav: {
      services: 'Our services',
      approach: 'Our approach',
      about: 'Who we are',
      contact: 'Contact',
      cta: 'Free consultation',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'Dental practice management — Quebec',
      titleA: 'Rediscover the joy',
      titleB: 'of owning your dental practice',
      subtitle:
        'Gestion Incisive solves the three problems every dental clinic faces: treatment plans that sit waiting, phones that ring unanswered, and recall calls that fall behind. A human team first, enhanced by AI — dedicated to your practice.',
      ctaPrimary: 'Request a free consultation',
      ctaSecondary: 'Explore our services',
      experience: '20+',
      experienceLabel: 'years of dental management experience',
      bilingual: 'EN · FR',
      bilingualLabel: 'bilingual service, from here',
      imageAlt: 'A Gestion Incisive team member answering the phone with a smile',
      caption: 'Answered within one minute — by a human.',
    },
    trusted: {
      label: 'Clinics we successfully manage',
    },
    services: {
      eyebrow: 'Our services',
      title: 'The three problems we solve for you',
      subtitle:
        'Every dental clinic knows these three phrases. We turn them into concrete, measurable services.',
      items: [
        {
          label: '01',
          title: 'Treatment planning',
          description:
            '“We didn’t have time for the treatment plan…” Not anymore. Your plans are prepared, sent — and followed through to a decision.',
          details: [
            'Treatment plans prepared and sent to insurers — including the CDCP',
            'Treatment plans sent directly to patients',
            'Follow-ups with patients, right through to their decision',
            'Estimates produced within 3 days, with two follow-ups',
          ],
        },
        {
          label: '02',
          title: 'Phone answering',
          description:
            '“Dental clinic, one moment please…” Never again. Your patients get the help they need within one minute.',
          details: [
            'Calls answered within one minute by a human',
            'Voicemails returned within 24 hours',
            'Emails answered within 2 business days',
            'Appointment booking and waiting list management',
            'Insurance issue resolution',
          ],
        },
        {
          label: '03',
          title: 'Recall calls',
          description:
            'The dreaded recalls clinics keep putting off for lack of time — we make them, systematically, without exception.',
          details: [
            'Appointment and hygiene reminders, made by a human',
            'Reactivation of your inactive patients',
            'Post-operative check-in calls',
            'Post-visit feedback calls',
          ],
        },
      ],
    },
    approach: {
      eyebrow: 'Our approach',
      title: 'Human first, enhanced by AI',
      statement: 'AI makes us fast. Humans make us trustworthy.',
      description:
        'At Gestion Incisive, artificial intelligence works behind the scenes: it speeds up plan preparation, flags recalls that are due and lets nothing slip. But every call, every follow-up and every decision goes through a human who knows the reality of clinics here.',
      principles: [
        {
          title: 'Human first',
          text: 'Your patients talk to humans enhanced by AI — never replaced by it.',
        },
        {
          title: 'AI precision',
          text: 'Nothing falls through the cracks: every plan, recall and message is tracked, measured and followed up at the right time.',
        },
        {
          title: 'Bilingual and local',
          text: 'A local team, fluent in French and English, that knows Quebec and the CDCP.',
        },
        {
          title: 'Measurable rigour',
          text: 'Quantified, tracked commitments — not vague promises.',
        },
      ],
    },
    about: {
      eyebrow: 'Who we are',
      title: 'Dental management professionals, for over 20 years',
      p1: 'Gestion Incisive was born from a simple observation: Quebec dental clinics don’t lack patients — they lack time.',
      p2: 'Our team brings together professionals with over 20 years of combined experience in dental management. We know the reality of clinics here — their software, their insurers and their patients — in both French and English.',
      imageAlt: 'The Gestion Incisive team collaborating',
      badge: '20+ years of experience',
    },
    standards: {
      eyebrow: 'Our commitments',
      title: 'Measurable promises, not good intentions',
      items: [
        { value: '< 1 min', label: 'to answer every call — by a human, never a robot' },
        { value: '24 h', label: 'to return every voicemail' },
        { value: '2 days', label: 'business days to handle every email' },
        { value: '3 days', label: 'to prepare and send every treatment plan, with follow-ups' },
      ],
    },
    process: {
      eyebrow: 'How it works',
      title: 'A simple transition, in four steps',
      software: 'We plug into your existing tools and dental software — without disrupting your operations.',
      steps: [
        {
          title: 'Discovery call',
          text: 'We take the time to understand your clinic, your challenges and your priorities — no strings attached.',
        },
        {
          title: 'Tailored plan',
          text: 'We propose a mandate adapted to your reality: one service or all three.',
        },
        {
          title: 'Smooth onboarding',
          text: 'We connect to your tools and your dental software, with no change for your team.',
        },
        {
          title: 'You breathe',
          text: 'We take care of the rest — and you take care of yourself and your patients.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your clinic',
      subtitle:
        'Book a free, no-obligation consultation. We reply within one business day — by a human, of course.',
      form: {
        name: 'Your name',
        clinic: 'Clinic name',
        email: 'Email',
        phone: 'Phone',
        message: 'Tell us about your needs',
        submit: 'Send my request',
        sending: 'Sending…',
        successTitle: 'Message sent',
        success: 'Thank you! Your request has been sent. We will get back to you very shortly.',
        another: 'Send another message',
        error: 'Something went wrong. Please try again or email us directly at',
      },
    },
    footer: {
      tagline: 'Dental management, incisively well done.',
      note: 'Human first, enhanced by AI — proudly serving dental clinics across Quebec.',
      rights: 'All rights reserved.',
      back: 'Back to top',
    },
  },
}

export type Translations = (typeof translations)['fr']

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
