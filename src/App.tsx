import { useEffect, useState } from "react"

const images = {
  hero: "/projetos/emily-lima-retrato.jpg",
  commercial: "/projetos/bar-fachada.jpg",
  residential: "/projetos/cozinha.jpg",
  suite: "/projetos/quarto-terracota.jpg",
  detail: "/projetos/bar-corredor.jpg",
  neutralSuite: "/projetos/quarto-neutro.jpg",
  commercialInterior: "/projetos/bar-interior.jpg",
}

const whatsappUrl =
  "https://wa.me/558396798477?text=Ol%C3%A1%2C%20Emily!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."

const projects = [
  {
    title: "Bar do Joca",
    meta: "Arquitetura comercial · João Pessoa",
    image: images.commercial,
    alt: "Fachada do projeto comercial Bar do Joca",
    className: "project-card project-card--wide",
  },
  {
    title: "Interiores residenciais",
    meta: "Apartamento · João Pessoa",
    image: images.residential,
    alt: "Cozinha planejada em tons claros",
    className: "project-card",
  },
  {
    title: "Suíte Terracota",
    meta: "Interiores · João Pessoa",
    image: images.suite,
    alt: "Suíte em tons terracota com marcenaria planejada",
    className: "project-card",
  },
  {
    title: "Cozinha ampla",
    meta: "Interiores · João Pessoa",
    image: images.neutralSuite,
    alt: "Suíte clara com marcenaria planejada e iluminação natural",
    className: "project-card",
  },
  {
    title: "Experiência comercial",
    meta: "Bar do Joca · João Pessoa",
    image: images.commercialInterior,
    alt: "Interior do Bar do Joca com balcão e espaço infantil",
    className: "project-card",
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "icon icon--diagonal" : "icon"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="whatsapp-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
      <path d="M9 8.5c.3 2.8 1.8 4.3 4.6 5l1.2-1.1 1.8.8c.2.1.3.3.2.6-.4 1.2-1.3 1.8-2.5 1.7-3.7-.5-6.2-2.9-6.7-6.6-.1-1.1.5-2 1.6-2.4.3-.1.5 0 .6.3l.7 1.7L9 9.7" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Emily Lima — início"
        >
          <span className="brand__mark brand__mark--editor-effect">EL</span>
          <span className="brand__name brand__name--editor-effect">Emily Lima</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "menu-button--open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`nav ${menuOpen ? "nav--open" : ""}`}
          aria-label="Navegação principal"
        >
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a
            className="nav__contact"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Fale comigo
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero__image"
          src={images.hero}
          alt="Retrato profissional da arquiteta Emily Lima"
        />
        <div className="hero__veil" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">
            Arquitetura & interiores · João Pessoa, PB
          </p>
          <h1>
            Espaços pensados
            <br />
            <span className="fg-inline-italic">para a sua vida.</span>
          </h1>
          <a className="text-link text-link--light" href="#projetos">
            Conheça os projetos <Arrow />
          </a>
        </div>
        <p className="hero__index">01 — 04</p>
        <a
          className="hero__scroll"
          href="#manifesto"
          aria-label="Descer para conhecer o estúdio"
        >
          <span>Explore</span>
          <span className="hero__scroll-line" />
        </a>
      </section>

      <section className="manifesto section" id="manifesto">
        <p className="section-number">01 / Essência</p>
        <div className="manifesto__content">
          <p className="eyebrow">Um olhar sensível sobre o morar</p>
          <h2>
            Projetamos para a vida
            <br />
            que acontece <em>dentro.</em>
          </h2>
          <p className="body-copy">
            Cada projeto nasce de uma escuta atenta e ganha forma no encontro
            entre luz, matéria e afeto. Criamos espaços simples, duradouros e
            profundamente conectados a quem os habita.
          </p>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <div>
            <p className="section-number">02 / Selecionados</p>
            <h2>
              Projetos em
              <br />
              <em>destaque</em>
            </h2>
          </div>
          <a className="text-link" href="#contato">
            Solicite seu projeto <Arrow />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={project.className} key={project.title}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Conversar sobre ${project.title}`}
              >
                <div className="project-card__image-wrap">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-card__image"
                  />
                  <span className="project-card__number">0{index + 1}</span>
                  <span className="project-card__arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <div className="project-card__copy">
                  <h3>{project.title}</h3>
                  <p>{project.meta}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about__portrait-wrap">
          <img
            className="about__portrait"
            src={images.detail}
            alt="Detalhe do projeto comercial Bar do Joca"
          />
          <p className="about__caption">
            Projeto comercial · João Pessoa, Paraíba
          </p>
        </div>
        <div className="about__content">
          <p className="section-number">03 / O estúdio</p>
          <p className="eyebrow">Arquitetura feita de encontros</p>
          <h2>
            Técnica para construir.
            <br />
            <em>Sensibilidade para sentir.</em>
          </h2>
          <p className="body-copy">
            Emily Lima é arquiteta em João Pessoa, Paraíba, e desenvolve
            projetos residenciais e comerciais com atenção à rotina, à
            identidade e aos desejos de cada cliente. Uma arquitetura próxima,
            funcional e feita para transformar espaços em experiências.
          </p>
          <a
            className="text-link"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Converse com a Emily <Arrow />
          </a>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="services__intro">
          <p className="section-number">04 / Como posso ajudar</p>
          <h2>
            Do primeiro esboço
            <br />
            ao espaço <em>vivido.</em>
          </h2>
        </div>
        <div className="services__list">
          {[
            [
              "01",
              "Interiores residenciais",
              "Ambientes funcionais, acolhedores e conectados à sua rotina.",
            ],
            [
              "02",
              "Arquitetura comercial",
              "Espaços que fortalecem a identidade e a experiência da sua marca.",
            ],
            [
              "03",
              "Consultoria e projeto",
              "Orientação profissional do conceito às escolhas finais.",
            ],
          ].map(([number, title, description]) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Arrow diagonal />
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <p className="eyebrow eyebrow--light">Tem um projeto em mente?</p>
        <h2>
          Vamos dar forma
          <br />
          ao seu <em>lugar.</em>
        </h2>
        <a
          className="contact__email"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com Emily Lima pelo WhatsApp"
        >
          WhatsApp: +55 83 9679-8477 <Arrow diagonal />
        </a>
      </section>

      <footer>
        <a
          className="brand brand--footer"
          href="#inicio"
          aria-label="Voltar ao início"
        >
          <span className="brand__mark">EL</span>
          <span className="brand__name">Emily Lima</span>
        </a>
        <p>
          Arquitetura & interiores
          <br />
          João Pessoa, Paraíba
        </p>
        <div className="footer__links">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
        </div>
        <div className="footer__social">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <p>© {new Date().getFullYear()} · Todos os direitos reservados</p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Emily Lima pelo WhatsApp"
      >
        <WhatsAppIcon />
        <span>Vamos conversar</span>
      </a>
    </main>
  )
}
