import SectionEyebrow from "../components/SectionEyebrow";
import angularLogo from "../assets/tech/angular.svg";
import astroLogo from "../assets/tech/astro.svg";
import cssLogo from "../assets/tech/css.svg";
import deploymentLogo from "../assets/tech/despliegue.svg";
import djangoLogo from "../assets/tech/Django.svg";
import gitLogo from "../assets/tech/git.svg";
import githubLogo from "../assets/tech/github.svg";
import goLogo from "../assets/tech/Golang.png";
import htmlLogo from "../assets/tech/html-5.svg";
import javaLogo from "../assets/tech/java.png";
import javascriptLogo from "../assets/tech/javascript.svg";
import nodeLogo from "../assets/tech/node-js.png";
import pythonLogo from "../assets/tech/python.png";
import reactLogo from "../assets/tech/react.png";
import rustLogo from "../assets/tech/rust.svg";
import seoLogo from "../assets/tech/seo.png";
import sqlLogo from "../assets/tech/sql.png";
import streamlitLogo from "../assets/tech/Streamlit.png";
import typescriptLogo from "../assets/tech/typeScript.svg";
import vueLogo from "../assets/tech/Vue.svg";
import wordpressLogo from "../assets/tech/WordPress.svg";

const techLogos = [
  { name: "Python", src: pythonLogo },
  { name: "Git", src: gitLogo },
  { name: "GitHub", src: githubLogo },
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "JavaScript", src: javascriptLogo },
  { name: "React", src: reactLogo },
  { name: "TypeScript", src: typescriptLogo },
  { name: "Streamlit", src: streamlitLogo },
  { name: "SQL", src: sqlLogo },
  { name: "Django", src: djangoLogo },
  { name: "WordPress", src: wordpressLogo },
  { name: "Despliegue", src: deploymentLogo },
  { name: "SEO", src: seoLogo },
  { name: "Astro", src: astroLogo },
  { name: "Angular", src: angularLogo },
  { name: "Vue", src: vueLogo },
  { name: "Java", src: javaLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Rust", src: rustLogo },
  { name: "Golang", src: goLogo },
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

          <p>
            Mi enfoque es práctico: escribir código mantenible, preparar arquitecturas
            listas para crecer y entregar productos web que funcionen bien por dentro y
            transmitan confianza por fuera.
          </p>
        </div>

        <div className="about__marquee" aria-label="Tecnologías que domino">
          <div className="about__marquee-fade about__marquee-fade--top" aria-hidden="true" />

          <div className="about__marquee-viewport">
            <div className="about__marquee-track">
              {techLogos.map((tech) => (
                <span key={tech.name} className="about__tech-card">
                  <img src={tech.src} alt={tech.name} loading="lazy" />
                </span>
              ))}

              {techLogos.map((tech) => (
                <span key={`${tech.name}-duplicate`} className="about__tech-card" aria-hidden="true">
                  <img src={tech.src} alt="" loading="lazy" />
                </span>
              ))}
            </div>
          </div>

          <div className="about__marquee-fade about__marquee-fade--bottom" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
