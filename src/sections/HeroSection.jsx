import portrait from "../assets/portrait.jpg";

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__kicker">Portfolio / Marca personal / Producto digital</span>
          <h1>
            Construyo interfaces con presencia,
            <span> criterio visual y ambición real.</span>
          </h1>
          <p className="hero__lead">
            Desarrollo experiencias frontend que cuidan el detalle, refuerzan la marca y
            convierten una idea en una presencia digital seria.
          </p>
          <p className="hero__body">
            Esta base está pensada para crecer: portfolio, contenido, servicios y una
            identidad propia que no depende de una plantilla genérica.
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
              <dd>Frontend + UI</dd>
            </div>
            <div>
              <dt>Estilo</dt>
              <dd>Dark editorial</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Lista para escalar</dd>
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
            <span>Identidad digital</span>
            <p>
              Un portfolio no solo enseña trabajo. Posiciona, filtra oportunidades y
              deja claro el nivel de exigencia.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
