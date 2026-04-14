import SectionEyebrow from "../components/SectionEyebrow";

function AboutSection() {
  return (
    <section className="about section" id="sobre-mi">
      <div className="container about__grid">
        <div className="about__intro">
          <SectionEyebrow>Sobre mí</SectionEyebrow>
          <h2>Diseño frontend con mentalidad de producto y mirada de marca.</h2>
        </div>

        <div className="about__content">
          <p>
            Trabajo con una idea clara: una web personal bien construida no debe parecer
            un escaparate improvisado. Debe transmitir nivel, intención y dirección.
          </p>
          <p>
            Me interesa crear interfaces limpias, sólidas y visualmente memorables, con
            una base técnica ordenada para poder crecer hacia nuevas secciones, blog o
            integraciones futuras sin rehacerlo todo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
