import SectionEyebrow from "../components/SectionEyebrow";
import ContactPill from "../components/ContactPill";

function ContactSection() {
  return (
    <section className="contact section" id="contacto">
      <div className="container contact__panel">
        <div className="contact__copy">
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2>Si necesitas a un perfil full stack para construir, mejorar o escalar un producto, hablemos.</h2>
          <p>
            Disponible para colaboraciones, desarrollo web a medida, aplicaciones internas,
            landing pages, backends, integraciones y optimización técnica.
          </p>
        </div>

        <div className="contact__links">
          <ContactPill
            label="Email"
            value="elpronick.dev@gmail.com"
            href="mailto:elpronick.dev@gmail.com"
          />
          <ContactPill
            label="LinkedIn"
            value="linkedin.com/in/francisco-gerardo-t"
            href="https://linkedin.com/in/francisco-gerardo-t"
          />
          <ContactPill
            label="Instagram"
            value="@elpronick_dev"
            href="https://instagram.com/elpronick_dev"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
