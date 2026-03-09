import { useEffect } from "react";
import Iconify from "@/components/Iconify";

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
                          <a href="#galeria" className="header-link hstack gap-2 fs-7 fw-bold text-dark">
                            <LeafIcon /> Galería
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
                      <a className="text-dark" href="#">+1-212-456-7890</a>
                      <br />
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
          <img src="/images/resources/competencia-deportiva.png" alt="Fútbol en El León de la Sierra" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
          <div className="container">
            <div className="d-flex flex-column gap-4 pb-8 position-relative z-1">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <p className="mb-0 text-white fs-5 text-opacity-70">
                      Fútbol, formación, eventos y <span className="text-primary">compromiso social</span> en Punta de Rieles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <h1 className="mb-0 fs-16 text-white lh-1">Complejo Deportivo El León de la Sierra</h1>
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
                        <h2 className="mb-0">El Complejo</h2>
                        <p className="fs-5 mb-0">Un espacio deportivo, educativo y social ubicado en el corazón de Punta de Rieles, una zona con enorme potencial humano y deportivo.</p>
                        <p className="fs-5 mb-0">El Complejo Deportivo El León de la Sierra cuenta con siete canchas de fútbol 11: cinco destinadas a la práctica de adultos y dos especialmente diseñadas para niños y jóvenes.</p>
                        <p className="fs-5 mb-0">Pero más allá del deporte, este proyecto nace con una visión más profunda: convertirse en un motor de transformación comunitaria, donde el juego y el aprendizaje se encuentren, y donde cada rincón del predio esté pensado para ofrecer oportunidades reales de inclusión, formación y crecimiento.</p>
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

        {/* Actividades */}
        <section id="actividades" className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 mb-7">
                <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <h2 className="mb-0">Actividades</h2>
                </div>
              </div>
              {actividadesData.map((act, i) => (
                <div key={i} className="col-lg-6 mb-7">
                  <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <a href="#" className="resources-img resources-img-blog position-relative overflow-hidden d-block">
                      <img src={act.img} alt={act.title} className="img-fluid" />
                    </a>
                    <div className="resources-details">
                      <h4 className="mb-0" style={{ marginBottom: 10 }}>{act.title}</h4>
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
                        <h2 className="mb-0">Hablemos</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between gap-7 gap-xl-0">
                <div className="col-xl-3">
                  <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    ¿Querés reservar una cancha, hacer una consulta o conocer más sobre el proyecto?<br /><br />
                    Estamos a disposición para conversar, coordinar una visita o avanzar con cualquier propuesta. Contactanos por los medios que te dejamos abajo.
                  </p>
                </div>
                <div className="col-xl-8">
                  <form className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input type="text" className="form-control border-bottom border-dark" placeholder="Nombre" />
                    </div>
                    <div>
                      <input type="email" className="form-control border-bottom border-dark" placeholder="Email" />
                    </div>
                    <div>
                      <textarea className="form-control border-bottom border-dark" placeholder="Asunto" rows={3}></textarea>
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
                <li><a className="link-hover fs-5 text-white" href="#!">Facebook</a></li>
                <li><a className="link-hover fs-5 text-white" href="#!">Instagram</a></li>
                <li><a className="link-hover fs-5 text-white" href="#!">Twitter</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
              <p className="mb-0 text-white text-opacity-70 text-md-end">© Leones de Punta Rieles copyright 2025</p>
            </div>
          </div>
        </div>
        <p className="mb-0 text-white text-opacity-70 text-md-center mt-10" style={{ textAlign: "center", marginRight: 30 }}>
          Sitio desarrollado por / <a className="text-white" href="https://www.digitalbuilders.net" target="_blank" rel="noreferrer">Digital Builders</a>
        </p>
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

const actividadesData = [
  {
    img: "/images/resources/escuela-y-formacion.png",
    title: "Escuela de Formación y Captación",
    desc: "Programa formativo dirigido a jugadores y jugadoras de todas las edades, desde categorías iniciales hasta mayores.",
    desc2: "Se enfoca en el desarrollo técnico y humano de los participantes, integrando también a escuelas, entes u organizaciones con las que se establezcan acuerdos. Se prevé, además, la cesión de horarios sin costo para instituciones que lo necesiten.",
  },
  {
    img: "/images/resources/competencia-deportiva.png",
    title: "Competencia Deportiva",
    desc: "Organización y apoyo a competencias en todas las categorías: niños, divisiones formativas y adultos. El objetivo es fomentar la participación activa y sostenida en el deporte, generando un espacio competitivo sano y accesible para toda la comunidad.",
  },
  {
    img: "/images/resources/campeonato.png",
    title: "Campeonatos y Torneos",
    desc: "Realización de campeonatos y torneos con alcance interclubes, interescolar e interligas. Estos encuentros permitirán el crecimiento competitivo de jugadores y equipos de la zona, fortaleciendo el vínculo con otras instituciones deportivas y educativas.",
  },
  {
    img: "/images/resources/alquiler-canchas.png",
    title: "Alquiler de Canchas",
    desc: "Disponibilidad de las canchas para particulares y ligas que deseen organizar partidos, entrenamientos o torneos. Las instalaciones estarán abiertas a la comunidad con horarios flexibles y condiciones accesibles para promover el uso continuo del predio.",
  },
  {
    img: "/images/resources/salon.png",
    title: "Alquiler del Predio y Salón",
    desc: "El complejo contará con un salón multipropósito y espacios adecuados para la realización de eventos sociales, encuentros institucionales, talleres, celebraciones y actividades recreativas. Todo estará disponible para alquiler según demanda.",
  },
  {
    img: "/images/resources/huerta.png",
    title: "Paseos y Huerta Didáctica",
    desc: "Creación de una huerta educativa abierta a visitas guiadas, especialmente orientada a centros deportivos, escuelas y organizaciones sociales. A través de esta propuesta se busca enseñar el cultivo de alimentos, promover el cuidado del medio ambiente y fortalecer hábitos saludables.",
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
