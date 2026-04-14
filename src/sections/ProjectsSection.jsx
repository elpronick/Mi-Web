import SectionEyebrow from "../components/SectionEyebrow";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio premium para marca personal",
    summary:
      "Dirección visual oscura, narrativa editorial y arquitectura preparada para crecer con nuevos casos, contenido y servicios.",
    year: "2026",
    services: "Branding UI / Frontend",
  },
  {
    title: "Landing de producto con enfoque conversión",
    summary:
      "Jerarquía clara, bloques modulares y un sistema visual capaz de soportar evolución comercial sin perder consistencia.",
    year: "2025",
    services: "UX / Performance",
  },
  {
    title: "Sistema base para proyectos escalables",
    summary:
      "Estructura de componentes y SCSS modular para pasar de una web de presentación a un ecosistema digital más completo.",
    year: "2025",
    services: "Architecture / UI System",
  },
];

function ProjectsSection() {
  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <div className="section-heading">
          <SectionEyebrow>Selección</SectionEyebrow>
          <h2>Una base pensada para enseñar criterio, no solo para estar online.</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
