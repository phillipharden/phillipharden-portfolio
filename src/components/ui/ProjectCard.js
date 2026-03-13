const ProjectCard = ({ title, description, tech, image, live, github }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
      <div className="project-card">

        <img
          src={image}
          alt={title}
          className="img-fluid mb-3 rounded shadow"
        />

        <h3 className="mb-2">{title}</h3>

        <p className="mb-3">{description}</p>

        <div className="mb-3 project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag mr-2">
              {item}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Live Site
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-outline"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;