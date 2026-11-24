import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Menu,
  X,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useLang } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

const clinicLogos = [
  { src: '/images/logo-clicdentaire.png', alt: 'Clic Dentaire' },
  { src: '/images/logo-laprairie.png', alt: 'Clinique dentaire La Prairie' },
  { src: '/images/logo-ramikano.png', alt: 'Ramikano' },
  { src: '/images/logo-centres-dentaires-blanc.png', alt: 'Centres Dentaires Blanc' },
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? 'brand--light' : ''}`}>
      <img
        src={light ? '/images/logo-incisor-white.png' : '/images/logo-incisor.png'}
        alt=""
        className="brand__mark"
      />
      <span className="brand__name">Gestion Incisive</span>
    </span>
  )
}

function Header() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#approach', label: t.nav.approach },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--open' : ''}`}>
      <div className="nav-shell">
        <a href="#top" className="brand-link" aria-label="Gestion Incisive — Accueil / Home">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale / Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" aria-label="Language / Langue">
            {(['fr', 'en'] as const).map((item) => (
              <button
                key={item}
                type="button"
                className="language-switch__button"
                aria-pressed={lang === item}
                onClick={() => setLang(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="button button--small button--header desktop-cta">
            <span>{t.nav.cta}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div className="mobile-menu" id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Navigation mobile / Mobile navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-menu__number">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="button button--dark"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          {t.nav.cta}
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content page-shell">
        <p className="hero__eyebrow" data-hero-item>
          <span className="status-dot" />
          {t.hero.eyebrow}
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-line"><span>{t.hero.titleA}</span></span>
          <span className="hero__title-line hero__title-line--serif"><span>{t.hero.titleB}</span></span>
        </h1>
        <div className="hero__intro" data-hero-item>
          <p>{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a href="#contact" className="button button--dark">
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#services" className="text-link">
              <span>{t.hero.ctaSecondary}</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__footer page-shell" data-hero-item>
        <div className="hero__proof">
          <div>
            <strong>{t.hero.experience}</strong>
            <span>{t.hero.experienceLabel}</span>
          </div>
          <div>
            <strong>{t.hero.bilingual}</strong>
            <span>{t.hero.bilingualLabel}</span>
          </div>
        </div>
        <p className="hero__caption">{t.hero.caption}</p>
      </div>
    </section>
  )
}

function TrustedBy() {
  const { t } = useLang()
  return (
    <section className="trusted" aria-label={t.trusted.label}>
      <p className="trusted__label">{t.trusted.label}</p>
      <div className="trusted__viewport">
        <div className="trusted__track">
          {[0, 1].map((group) => (
            <div className="trusted__group" key={group} aria-hidden={group === 1}>
              {clinicLogos.map((logo) => (
                <div className="trusted__logo" key={`${group}-${logo.alt}`}>
                  <img src={logo.src} alt={group === 0 ? logo.alt : ''} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { t } = useLang()
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 id="services-title" className="section-title">{t.services.title}</h2>
          </div>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>
        <div className="service-stack">
          {t.services.items.map((service, index) => (
            <article
              className={`service-panel ${index === 2 ? 'service-panel--dark' : ''}`}
              style={{ '--panel-index': index } as CSSProperties}
              key={service.label}
            >
              <div className="service-panel__meta">
                <span>{service.label}</span>
                <span>Gestion Incisive</span>
              </div>
              <div className="service-panel__grid">
                <h3>{service.title}</h3>
                <div className="service-panel__content">
                  <p className="service-panel__description">{service.description}</p>
                  <ul className="service-panel__list">
                    {service.details.map((detail) => (
                      <li key={detail}>
                        <Check aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const { t } = useLang()
  return (
    <section className="section approach" id="approach" aria-labelledby="approach-title">
      <div className="approach__halo" aria-hidden="true" />
      <div className="page-shell">
        <p className="eyebrow eyebrow--light" data-reveal>{t.approach.eyebrow}</p>
        <h2 id="approach-title" className="approach__statement" data-reveal>
          {t.approach.statement}
        </h2>
        <div className="approach__grid">
          <div className="approach__intro" data-reveal>
            <p>{t.approach.description}</p>
          </div>
          <div className="approach__principles" data-reveal-group>
            {t.approach.principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useLang()
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="page-shell about__grid">
        <div className="about__media" data-image-reveal>
          <img src="/images/team-candid.webp" alt={t.about.imageAlt} loading="lazy" />
          <div className="media-reveal__curtain" aria-hidden="true" />
          <span className="about__badge">{t.about.badge}</span>
        </div>
        <div className="about__copy" data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="section-title section-title--serif">{t.about.title}</h2>
          <p className="about__lead">{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <a href="#contact" className="text-link">
            <span>{t.nav.cta}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Standards() {
  const { t } = useLang()
  return (
    <section className="section standards" aria-labelledby="standards-title">
      <div className="page-shell">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow">{t.standards.eyebrow}</p>
            <h2 id="standards-title" className="section-title">{t.standards.title}</h2>
          </div>
        </div>
        <div className="standards__grid" data-reveal-group>
          {t.standards.items.map((item, index) => (
            <article className="standard" key={item.value}>
              <span className="standard__index">0{index + 1}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const { t } = useLang()
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="page-shell process__grid">
        <div className="process__heading" data-reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 id="process-title" className="section-title section-title--serif">{t.process.title}</h2>
          <p className="section-subtitle">{t.process.software}</p>
          <a href="#contact" className="button button--dark">
            <span>{t.nav.cta}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="process__steps">
          <div className="process__progress" aria-hidden="true">
            <span className="process__progress-fill" />
          </div>
          {t.process.steps.map((step, index) => (
            <article className="process-step" key={step.title} data-reveal>
              <span className="process-step__number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLang()
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <div className="contact__heading" data-reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="contact__title">{t.contact.title}</h2>
        </div>
        <div className="contact__grid">
          <div className="contact__intro" data-reveal>
            <p>{t.contact.subtitle}</p>
            <div className="contact__availability">
              <span className="status-dot" />
              <span>Montréal · Québec · FR / EN</span>
            </div>
          </div>
          <div className="contact__form-wrap">
            <div className="contact-start">
              <h3>{t.contact.form.openTitle}</h3>
              <p>{t.contact.form.openText}</p>
              <a href="/contact.html" className="button button--primary contact-start__button">
                <span>{t.contact.form.open}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="contact-start__email" href="mailto:dan.munteanu@gmail.com">
                dan.munteanu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="page-shell footer__top">
        <Brand light />
        <a href="#top" className="back-to-top">
          <span>{t.footer.back}</span>
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className="page-shell footer__main">
        <p className="footer__tagline">{t.footer.tagline}</p>
        <nav className="footer__nav" aria-label="Pied de page / Footer">
          <a href="#services">{t.nav.services}</a>
          <a href="#approach">{t.nav.approach}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </div>
      <div className="page-shell footer__bottom">
        <span>© {new Date().getFullYear()} Gestion Incisive. {t.footer.rights}</span>
        <span>{t.footer.note}</span>
      </div>
    </footer>
  )
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null)
  const { lang } = useLang()

  useEffect(() => {
    document.documentElement.lang = lang
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(frame)
  }, [lang])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !root.current) return

    const rootElement = root.current
    rootElement.classList.add('motion-ready')
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.05,
      smoothWheel: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor || anchor.classList.contains('skip-link')) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const destination = document.querySelector(href)
      if (!destination) return
      event.preventDefault()
      lenis.scrollTo(destination as HTMLElement, { offset: -72 })
      window.history.replaceState(null, '', href)
    }
    document.addEventListener('click', onAnchorClick)

    const context = gsap.context(() => {
      gsap.from('.hero__title-line > span', {
        yPercent: 110,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.1,
      })
      gsap.from('[data-hero-item]', {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.45,
      })
      gsap.to('.hero__content', {
        yPercent: -8,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: '35% top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })
      gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
        gsap.from(group.children, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      const panels = gsap.utils.toArray<HTMLElement>('.service-panel')
      panels.forEach((panel, index) => {
        const next = panels[index + 1]
        if (!next) return
        gsap.to(panel, {
          scale: 0.965,
          opacity: 0.55,
          transformOrigin: 'center top',
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: 'top bottom',
            end: 'top 18%',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach((container) => {
        const curtain = container.querySelector('.media-reveal__curtain')
        const image = container.querySelector('img')
        if (curtain) {
          gsap.to(curtain, {
            scaleX: 0,
            duration: 1.25,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: container, start: 'top 78%', once: true },
          })
        }
        if (image) {
          gsap.fromTo(image, { scale: 1.14 }, {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: { trigger: container, start: 'top 78%', once: true },
          })
        }
      })

      gsap.fromTo('.process__progress-fill', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process__steps',
          start: 'top 65%',
          end: 'bottom 55%',
          scrub: true,
        },
      })
    }, root)

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
      document.removeEventListener('click', onAnchorClick)
      context.revert()
      rootElement.classList.remove('motion-ready')
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="site" ref={root}>
      <a className="skip-link" href="#main-content">Aller au contenu / Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Services />
        <Approach />
        <About />
        <Standards />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
