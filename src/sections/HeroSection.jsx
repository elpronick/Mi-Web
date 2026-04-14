import portrait from "../assets/portrait.jpg";

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__kicker">Full stack / Producto digital / Arquitectura web</span>
          <h1>
            Desarrollo soluciones web completas,
            <span> del frontend al backend.</span>
          </h1>
          <p className="hero__lead">
            Soy programador full stack y construyo productos sólidos, escalables y bien
            resueltos tanto en experiencia de usuario como en lógica, datos y despliegue.
          </p>
          <p className="hero__body">
            Trabajo con tecnologías modernas para convertir una idea en una aplicación real:
            arquitectura, interfaz, APIs, bases de datos, rendimiento y posicionamiento.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button--ghost" href="#contacto">
              Reservar una conversación
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>Enfoque</dt>
              <dd>Frontend + Backend</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Web apps y APIs</dd>
            </div>
            <div>
              <dt>Objetivo</dt>
              <dd>Escalar con criterio</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <div className="hero__orbit hero__orbit--one" />
            <div className="hero__orbit hero__orbit--two" />
            <img src={portrait} alt="Retrato profesional de Nick" />
          </div>

          <aside className="hero__note">
            <span>Perfil técnico</span>
            <p>
              Python, JavaScript, TypeScript, React, Django, Node.js, SQL, Astro,
              Angular, Vue, Java, Rust, Golang y más para construir soluciones completas.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
