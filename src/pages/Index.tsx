import { useEffect } from "react";
import Iconify from "@/components/Iconify";
import dbLogoAsset from "@/assets/logo-digitalbuilders.webp.asset.json";
import plazaMemoriaAsset from "@/assets/plaza-museo-memoria.jpg.asset.json";

declare global {
  interface Window {
    AOS: any;
  }
}

const Index = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ once: true });
    }

    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY >= 60) {
          header.classList.add("fixed-header");
        } else {
          header.classList.remove("fixed-header");
        }
      }
      const btn = document.getElementById("scrollToTopBtn");
      if (btn) {
        btn.style.display = document.documentElement.scrollTop > 100 ? "flex" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <header className="header position-fixed start-0 top-0 w-100">
        <div className="container">
          <div className="header-wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <a href="/" className="logo-white">
                <img src="/images/logos/logo-white.png" style={{ width: 150 }} alt="logo" className="img-fluid" />
              </a>
              <a href="/" className="logo-dark">
                <img src="/images/logos/logo-original.png" style={{ width: 150 }} alt="logo" className="img-fluid" />
              </a>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div className="btn-group">
                <button
                  className="toggle-menu round-45 d-flex align-items-center justify-content-center bg-white rounded-circle"
                  type="button"
                  style={{ width: 45, height: 45, border: 'none', cursor: 'pointer' }}
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <Iconify icon="solar:hamburger-menu-line-duotone" className="menu-icon text-dark fs-7" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-4">
                  <div className="d-flex flex-column gap-6">
                    <div className="hstack justify-content-between border-bottom pb-6">
                      <p className="mb-0 fs-5 text-dark">Menu</p>
                      <button type="button" className="btn-close opacity-75" data-bs-toggle="dropdown" aria-label="Close"></button>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <ul className="header-menu list-unstyled mb-0 d-flex flex-column gap-2">
                        <li className="header-item">
                          <a href="#inicio" className="header-link active hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Inicio
                          </a>
                        </li>
                        <li className="header-item">
                          <a href="#complejo" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Quienes Somos?
                          </a>
                        </li>
                        <li className="header-item">
                          <a href="#actividades" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Actividades
                          </a>
                        </li>
                        <li className="header-item">
                          <a href="#services" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Compromiso Social
                          </a>
                        </li>
                        <li className="header-item">
                          <a href="#propuesta" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Nuestra Propuesta
                          </a>
                        </li>
                        <li className="header-item">
                          <a href="#contacto" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Contacto
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a className="fs-8 text-dark fw-bold" href="mailto:info@leondelasierra.com">info@leondelasierra.com</a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Wrapper */}
      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section id="inicio" className="banner-section position-relative d-flex align-items-end min-vh-100">
          <div className="banner-media">
            <img src="/images/resources/competencia-deportiva.png" alt="Fútbol en El León de la Sierra" />
          </div>
          <div className="container">
            <div className="d-flex flex-column gap-4 pb-8 position-relative z-1">
              <span className="hero-chip reveal reveal-1">
                <span className="punto"></span>
                En obra · Ya en actividad
              </span>
              <p className="mb-0 text-white fs-5 text-opacity-70 reveal reveal-2" style={{ maxWidth: 640 }}>
                Fútbol, formación y <span className="text-primary">compromiso social</span> en Punta de Rieles. Un complejo que se construye mientras ya se juega.
              </p>
              <h1 className="mb-0 fs-16 text-white lh-1 reveal reveal-3">Complejo Deportivo El León de la Sierra</h1>
            </div>
          </div>
          <div className="scroll-cue reveal reveal-4">
            <span className="riel"></span>
            <span>Deslizá</span>
          </div>
        </section>

        {/* Franja de estado */}
        <section className="franja-estado">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <p className="franja-titulo">Ya estamos en actividad. El complejo, <em>en desarrollo constante</em>.</p>
              </div>
              <div className="col-lg-5">
                <p>Hoy el predio funciona con lo que ya está en pie: la escuela de formación, la competencia y los encuentros con el barrio. La obra avanza en paralelo, por etapas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* El Complejo */}
        <section id="complejo" className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-12">
                <div className="d-flex flex-column gap-9">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <span className="eyebrow">El predio</span>
                        <h2 className="mb-0">El Complejo</h2>
                        <p className="fs-5 mb-0">Un espacio deportivo, educativo y social ubicado en el corazón de Punta de Rieles, una zona con enorme potencial humano y deportivo.</p>
                        <p className="fs-5 mb-0">Hoy el predio ya está en uso: se entrena, se juega y se organizan actividades abiertas al barrio, mientras el complejo toma forma. El proyecto contempla siete canchas de fútbol 11 —cinco para adultos y dos pensadas para niños y jóvenes— que se irán habilitando por etapas.</p>
                        <p className="fs-5 mb-0">Pero más allá del deporte, el proyecto tiene una visión más profunda: convertirse en un motor de transformación comunitaria, donde el juego y el aprendizaje se encuentren, y donde cada rincón del predio esté pensado para ofrecer oportunidades reales de inclusión, formación y crecimiento.</p>
                      </div>
                    </div>
                  </div>
                  <a href="#contacto" className="btn" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <span className="btn-text">Hablemos</span>
                    <Iconify icon="lucide:arrow-up-right" className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etapas del proyecto */}
        <section className="etapas">
          <div className="container">
            <div className="d-flex flex-column gap-3" data-aos="fade-up" data-aos-duration="1000">
              <span className="eyebrow">Dónde estamos parados</span>
              <h2 className="mb-0">Etapas del proyecto</h2>
              <p className="fs-5 mb-0" style={{ maxWidth: 720 }}>El complejo se construye por partes. Esto es lo que ya está en pie, lo que se está levantando ahora y lo que viene después.</p>
            </div>
            <div className="etapas-riel">
              {etapasData.map((et, i) => (
                <div key={i} className={`etapa ${et.estado}`} data-aos="fade-up" data-aos-delay={100 * (i + 1)} data-aos-duration="1000">
                  <span className="marca"></span>
                  <span className="etapa-estado">{et.rotulo}</span>
                  <h4>{et.title}</h4>
                  <p>{et.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestra Propuesta */}
        <section id="propuesta" className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9">
                <div className="d-flex flex-column gap-6 mb-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <span className="eyebrow">Cómo trabajamos</span>
                  <h2 className="mb-0">Nuestra Propuesta</h2>
                  <p className="fs-5 mb-0">Somos diferentes al resto. Trabajamos con un equipo de entrenadores con Licencia PRO, y nuestro foco está puesto en el proceso de aprendizaje antes que en el resultado inmediato.</p>
                  <p className="fs-5 mb-0">Recibimos a cada jugador y jugadora desde el punto en que está, sin discriminación de ningún tipo, y lo acompañamos para que mejore. Desde la escuelita hasta adolescentes y mayores.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {propuestaData.map((item, i) => (
                <div key={i} className="col-md-6 col-xl-3 mb-6">
                  <div className="pilar" data-aos="fade-up" data-aos-delay={100 * (i + 1)} data-aos-duration="1000">
                    <span className="pilar-num">0{i + 1}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Actividades */}
        <section id="actividades" className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 mb-7">
                <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <span className="eyebrow">Qué pasa en el predio</span>
                  <h2 className="mb-0">Actividades</h2>
                  <p className="fs-5 mb-0">Esto es lo que ya está funcionando, y lo que viene en camino a medida que el complejo se desarrolla.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="grupo-actividades" data-aos="fade-up" data-aos-duration="1000">
                  <h3>En funcionamiento</h3>
                  <p className="grupo-nota">Lo que ya se puede hacer hoy en el predio</p>
                </div>
              </div>
              {actividadesData.filter((a) => a.estado === "activo").map((act, i) => (
                <div key={i} className="col-lg-6 mb-7">
                  <div className="resources d-flex flex-column gap-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div className="resources-img resources-img-blog position-relative overflow-hidden d-block">
                      <img src={act.img} alt={act.title} className="img-fluid" />
                    </div>
                    <div className="resources-details">
                      <span className="badge-estado badge-activo mb-3">Funcionando</span>
                      <h4 style={{ marginBottom: 10 }}>{act.title}</h4>
                      <p className="mb-0">{act.desc}</p>
                      {act.desc2 && <><br /><p className="mb-0">{act.desc2}</p></>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-6">
              <div className="col-12">
                <div className="grupo-actividades" data-aos="fade-up" data-aos-duration="1000">
                  <h3>En desarrollo</h3>
                  <p className="grupo-nota">Etapas previstas del proyecto, todavía en obra</p>
                </div>
              </div>
              {actividadesData.filter((a) => a.estado === "desarrollo").map((act, i) => (
                <div key={i} className="col-lg-6 mb-7">
                  <div className="resources resources-pendiente d-flex flex-column gap-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div>
                      <div className="resources-img resources-img-blog position-relative overflow-hidden d-block">
                        <img src={act.img} alt={act.title} className="img-fluid" />
                      </div>
                      <p className="pie-imagen mb-0">Imagen de referencia del proyecto</p>
                    </div>
                    <div className="resources-details">
                      <span className="badge-estado badge-obra mb-3">Todavía en obra</span>
                      <h4 style={{ marginBottom: 10 }}>{act.title}</h4>
                      <p className="mb-0">{act.desc}</p>
                      {act.desc2 && <><br /><p className="mb-0">{act.desc2}</p></>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <br />

        {/* Compromiso Social */}
        <section className="services py-5 py-lg-11 py-xl-12 bg-dark" id="services">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <span className="eyebrow eyebrow-light">Por qué existe el proyecto</span>
                        <h2 className="mb-0 text-white">Compromiso Social y Comunitario</h2>
                        <p className="fs-5 mb-0 text-white text-opacity-70">El León de la Sierra nace como un punto de encuentro donde el deporte, la educación, la conciencia ambiental y la inclusión social conviven en equilibrio, generando oportunidades reales para la comunidad de Punta de Rieles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-tab">
                <div className="row gap-5 gap-xl-0">
                  <div className="col-xl-12">
                    <div className="d-flex flex-column gap-5">
                      <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        {compromisoData.map((item, i) => (
                          <li key={i} className="nav-item py-4 py-lg-8 border-top border-white border-opacity-10 d-flex align-items-center w-100" role="presentation">
                            <div className="row w-100 align-items-center gx-3">
                              <div className="col-lg-4">
                                <img src={item.img} style={{ width: "100%", borderRadius: 12 }} alt={item.title} />
                              </div>
                              <div className="col-lg-4">
                                <h4 style={{ color: "white", textAlign: "center" }}>{item.title}</h4>
                              </div>
                              <div className="col-lg-4">
                                <p className="text-white text-opacity-70 mb-0" style={{ textAlign: "center" }}>{item.desc}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hablemos */}
        <section id="contacto" className="get-in-touch py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <span className="eyebrow">Contacto</span>
                        <h2 className="mb-0">Hablemos</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between gap-7 gap-xl-0">
                <div className="col-xl-3">
                  <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    ¿Querés sumar a un chico o una chica a la escuela, hacer una consulta o conocer más sobre el proyecto?<br /><br />
                    Estamos a disposición para conversar, coordinar una visita o avanzar con cualquier propuesta. Contactanos por los medios que te dejamos abajo.
                  </p>
                </div>
                <div className="col-xl-8">
                  <form className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    const cuerpo = `Nombre: ${fd.get("nombre") || ""}\nEmail: ${fd.get("email") || ""}\n\n${fd.get("asunto") || ""}`;
                    window.location.href = `mailto:info@leondelasierra.com?subject=${encodeURIComponent("Consulta desde la web")}&body=${encodeURIComponent(cuerpo)}`;
                  }}>
                    <div>
                      <input type="text" name="nombre" required className="form-control border-bottom border-dark" placeholder="Nombre" />
                    </div>
                    <div>
                      <input type="email" name="email" required className="form-control border-bottom border-dark" placeholder="Email" />
                    </div>
                    <div>
                      <textarea name="asunto" required className="form-control border-bottom border-dark" placeholder="Asunto" rows={3}></textarea>
                    </div>
                    <button type="submit" className="btn w-100 justify-content-center">
                      <span className="btn-text">Enviar Mensaje</span>
                      <Iconify icon="lucide:arrow-up-right" className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 mb-8 mb-xl-0">
              <div className="d-flex flex-column gap-8 pe-xl-5">
                <h2 className="mb-0 text-white">Forma parte de nuestra comunidad.</h2>
                <div className="d-flex flex-column gap-2">
                  <a href="mailto:info@leondelasierra.com" className="link-hover hstack gap-3 text-white fs-5">
                    <Iconify icon="lucide:map-pin" className="fs-7 text-primary" />
                    info@leondelasierra.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
              <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a className="link-hover fs-5 text-white" href="#propuesta">Nuestra Propuesta</a></li>
                <li><a className="link-hover fs-5 text-white" href="#actividades">Actividades</a></li>
                <li><a className="link-hover fs-5 text-white" href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
              <p className="mb-0 text-white text-opacity-70 text-md-end">© Leones de Punta Rieles 2026</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="firma-db">
            <p className="firma-rotulo">Sitio desarrollado por</p>
            <a href="https://www.digitalbuilders.net" target="_blank" rel="noreferrer" aria-label="Digital Builders - Desarrollo y diseño web">
              <img
                src={dbLogoAsset.url}
                alt="Digital Builders - Desarrollo y diseño web"
                className="db-marca"
                style={{ width: 140, height: 'auto' }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <div className="get-template hstack gap-2">
        <button
          className="btn bg-primary p-2 round-52 rounded-circle hstack justify-content-center flex-shrink-0"
          id="scrollToTopBtn"
          onClick={scrollToTop}
        >
          <Iconify icon="lucide:arrow-up" className="fs-7 text-dark" />
        </button>
      </div>
    </>
  );
};

const LeafIcon = () => (
  <span className="ball-icon" style={{ flexShrink: 0, display: 'inline-flex' }}>
    <svg width="18" height="18" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="white" stroke="#222" strokeWidth="3"/>
      <path d="M50 2 L40 20 L25 15 Z" fill="#222"/>
      <path d="M50 2 L60 20 L75 15 Z" fill="#222"/>
      <path d="M98 50 L80 40 L85 25 Z" fill="#222"/>
      <path d="M98 50 L80 60 L85 75 Z" fill="#222"/>
      <path d="M50 98 L60 80 L75 85 Z" fill="#222"/>
      <path d="M50 98 L40 80 L25 85 Z" fill="#222"/>
      <path d="M2 50 L20 40 L15 25 Z" fill="#222"/>
      <path d="M2 50 L20 60 L15 75 Z" fill="#222"/>
      <polygon points="50,22 61,35 55,50 45,50 39,35" fill="#222"/>
      <polygon points="78,38 78,55 63,58 55,45 62,32" fill="#222"/>
      <polygon points="68,75 55,80 44,68 50,55 63,55" fill="#222"/>
      <polygon points="32,75 45,80 56,68 50,55 37,55" fill="#222"/>
      <polygon points="22,38 22,55 37,58 45,45 38,32" fill="#222"/>
    </svg>
  </span>
);

const etapasData = [
  {
    estado: "hecha",
    rotulo: "Listo",
    title: "El predio",
    desc: "Terreno, accesos y el ingreso señalizado. El espacio ya está abierto y en uso.",
  },
  {
    estado: "hecha",
    rotulo: "Listo",
    title: "Actividad deportiva",
    desc: "La escuela de formación y la competencia ya funcionan, con el equipo de entrenadores trabajando.",
  },
  {
    estado: "ahora",
    rotulo: "En obra",
    title: "Las canchas",
    desc: "Siete canchas de fútbol 11 en construcción, que se van a habilitar de a una a medida que estén.",
  },
  {
    estado: "futura",
    rotulo: "Proyectado",
    title: "Salón y huerta",
    desc: "Salón multipropósito para eventos y la huerta didáctica abierta a escuelas y organizaciones.",
  },
];

const propuestaData = [
  {
    icon: "lucide:graduation-cap",
    title: "Entrenadores con Licencia PRO",
    desc: "Un equipo formado y habilitado, con la preparación necesaria para acompañar cada etapa del desarrollo deportivo.",
  },
  {
    icon: "lucide:trending-up",
    title: "El proceso antes que el resultado",
    desc: "Priorizamos el aprendizaje sostenido por encima del resultado inmediato. Se juega para crecer.",
  },
  {
    icon: "lucide:users",
    title: "Sin discriminación",
    desc: "Las puertas están abiertas a todos, sin distinción de origen, nivel ni condición. El deporte como derecho.",
  },
  {
    icon: "lucide:heart-handshake",
    title: "Desde donde estés",
    desc: "Cada jugador arranca desde su punto de partida real. De la escuelita a adolescentes y mayores.",
  },
];

const actividadesData = [
  {
    estado: "activo",
    img: "/images/resources/escuela-y-formacion.png",
    title: "Escuela de Formación y Captación",
    desc: "Programa formativo en marcha, dirigido a jugadores y jugadoras de todas las edades, desde categorías iniciales hasta mayores.",
    desc2: "Trabajamos el desarrollo técnico y humano de cada participante, e integramos a escuelas, entes u organizaciones con las que se establecen acuerdos, incluida la cesión de horarios sin costo para instituciones que lo necesiten.",
  },
  {
    estado: "activo",
    img: "/images/resources/competencia-deportiva.png",
    title: "Competencia Deportiva",
    desc: "Participamos y damos apoyo a competencias en todas las categorías: niños, divisiones formativas y adultos. El objetivo es sostener la participación activa en el deporte, en un espacio competitivo sano y accesible para toda la comunidad.",
  },
  {
    estado: "activo",
    img: "/images/about/about-img.jpg",
    title: "Encuentros con el Barrio",
    desc: "Organizamos jornadas abiertas para las familias de Punta de Rieles, con juegos, merienda y actividades para los más chicos. El predio ya funciona como punto de encuentro de la zona.",
  },
  {
    estado: "desarrollo",
    img: "/images/resources/campeonato.png",
    title: "Campeonatos y Torneos",
    desc: "Realización de campeonatos y torneos con alcance interclubes, interescolar e interligas. Estos encuentros permitirán el crecimiento competitivo de jugadores y equipos de la zona, fortaleciendo el vínculo con otras instituciones deportivas y educativas.",
  },
  {
    estado: "desarrollo",
    img: "/images/resources/alquiler-canchas.png",
    title: "Alquiler de Canchas",
    desc: "A medida que se habiliten, las canchas estarán disponibles para particulares y ligas que deseen organizar partidos, entrenamientos o torneos, con horarios flexibles y condiciones accesibles.",
  },
  {
    estado: "desarrollo",
    img: "/images/resources/salon.png",
    title: "Alquiler del Predio y Salón",
    desc: "El complejo contará con un salón multipropósito y espacios adecuados para eventos sociales, encuentros institucionales, talleres, celebraciones y actividades recreativas.",
  },
  {
    estado: "desarrollo",
    img: "/images/resources/huerta.png",
    title: "Paseos y Huerta Didáctica",
    desc: "Creación de una huerta educativa abierta a visitas guiadas, orientada a centros deportivos, escuelas y organizaciones sociales, para enseñar el cultivo de alimentos y promover el cuidado del medio ambiente.",
  },
];

const compromisoData = [
  {
    img: "/images/resources/cesiones-gratuitas.png",
    title: "Cesión gratuita de canchas",
    desc: "El complejo ofrecerá horarios sin costo para escuelas, entes u organizaciones sociales con las que se formen acuerdos. Esta iniciativa busca garantizar el acceso igualitario al deporte para niños, niñas y jóvenes de distintos contextos.",
  },
  {
    img: "/images/resources/entorno.png",
    title: "Mejora del entorno urbano",
    desc: "Se propone colaborar activamente con el desarrollo de la zona, gestionando el pavimentado e iluminación del acceso al predio y su área de influencia, generando así un entorno más seguro, accesible y digno para todos.",
  },
  {
    img: "/images/resources/empleo.png",
    title: "Generación de empleo local",
    desc: "El funcionamiento del complejo permitirá crear oportunidades laborales para entrenadores, personal de mantenimiento, empresas de maquinaria y muchas otras personas que formarán parte del día a día del proyecto.",
  },
  {
    img: "/images/resources/educacion.png",
    title: "Espacio educativo y de recreación",
    desc: "Además del deporte, se generarán espacios orientados a la educación, la contención social y el disfrute comunitario, fortaleciendo el tejido social de la zona a través de actividades organizadas y abiertas a todos.",
  },
  {
    img: "/images/resources/sustentabilidad.png",
    title: "Autosustentabilidad energética y ambiental",
    desc: "El predio estará orientado al uso de energía solar y la recolección de agua, incorporando prácticas sustentables que reduzcan el impacto ambiental y sirvan como ejemplo para la comunidad.",
  },
  {
    img: "/images/resources/conciencia-alimentaria.png",
    title: "Conciencia alimentaria y cuidado del entorno",
    desc: "Se impulsará la plantación de árboles frutales y vegetales, fomentando el cultivo propio, la alimentación saludable y el uso consciente de los recursos naturales como parte del aprendizaje diario.",
  },
];

export default Index;
