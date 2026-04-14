import SectionEyebrow from "../components/SectionEyebrow";
import ContactPill from "../components/ContactPill";

function ContactSection() {
  return (
    <section className="contact section" id="contacto">
      <div className="container contact__panel">
        <div className="contact__copy">
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2>Si el proyecto necesita nivel visual y ejecución limpia, podemos hablar.</h2>
          <p>
            Disponible para colaboraciones, producto digital, landings de alto impacto y
            evolución de marca personal.
          </p>
        </div>

        <div className="contact__links">
          <ContactPill label="Email" value="nick@portfolio.dev" href="mailto:nick@portfolio.dev" />
          <ContactPill label="LinkedIn" value="linkedin.com/in/nick" href="https://linkedin.com" />
          <ContactPill label="Instagram" value="@nick.codes" href="https://instagram.com" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
