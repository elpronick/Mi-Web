import SectionEyebrow from "../components/SectionEyebrow";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Aplicación web full stack para negocio digital",
    summary:
      "Frontend moderno, backend sólido, persistencia de datos y despliegue preparado para soportar crecimiento real.",
    year: "2026",
    services: "React / Node.js / SQL",
  },
  {
    title: "Panel interno para automatizar operaciones",
    summary:
      "Herramienta pensada para centralizar flujos, reducir tareas manuales y conectar negocio, datos y usuarios.",
    year: "2025",
    services: "Python / Django / APIs",
  },
  {
    title: "Base técnica para proyectos escalables",
    summary:
      "Arquitectura mantenible para evolucionar una web en producto completo con SEO, rendimiento y despliegue controlado.",
    year: "2025",
    services: "Architecture / DevOps / SEO",
  },
];

function ProjectsSection() {
  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <div className="section-heading">
          <SectionEyebrow>Selección</SectionEyebrow>
          <h2>Proyectos pensados para resolver problemas reales, no solo para verse bien.</h2>
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
