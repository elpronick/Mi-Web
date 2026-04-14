function ProjectCard({ title, summary, year, services }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{year}</span>
        <span>{services}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <button className="project-card__link" type="button">
        Ver caso
      </button>
    </article>
  );
}

export default ProjectCard;
