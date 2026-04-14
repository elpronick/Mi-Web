import SectionEyebrow from "../components/SectionEyebrow";

const techLogos = [
  "Python",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Streamlit",
  "SQL",
  "Django",
  "WordPress",
  "SEO",
  "Astro",
  "Angular",
  "Vue",
  "Java",
  "Node.js",
  "Rust",
  "Golang",
];

function AboutSection() {
  return (
    <section className="about section" id="sobre-mi">
      <div className="container about__grid">
        <div className="about__intro">
          <SectionEyebrow>Sobre mí</SectionEyebrow>
          <h2>Construyo productos digitales completos con visión técnica y foco de negocio.</h2>
        </div>

        <div className="about__content">
          <p>
            Soy desarrollador full stack y me gusta trabajar donde el producto necesita
            una solución completa: interfaz, lógica de negocio, base de datos, despliegue
            y optimización.
          </p>
          <p>
            Controlo Python, Git y GitHub, HTML, CSS, JavaScript, React, TypeScript,
            Streamlit, SQL, Django, WordPress, despliegue, SEO, Astro, Angular, Vue,
            Java, Node.js, Rust y Golang para adaptar la solución a cada proyecto.
          </p>

          <div className="about__divider" aria-hidden="true" />

          <div className="about__marquee" aria-label="Tecnologías que domino">
            <div className="about__marquee-fade about__marquee-fade--top" aria-hidden="true" />

            <div className="about__marquee-viewport">
              <div className="about__marquee-track">
                {techLogos.map((tech) => (
                  <span key={tech} className="about__tech-card">
                    {tech}
                  </span>
                ))}

                {techLogos.map((tech) => (
                  <span key={`${tech}-duplicate`} className="about__tech-card" aria-hidden="true">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__marquee-fade about__marquee-fade--bottom" aria-hidden="true" />
          </div>

          <p>
            Mi enfoque es práctico: escribir código mantenible, preparar arquitecturas
            listas para crecer y entregar productos web que funcionen bien por dentro y
            transmitan confianza por fuera.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
