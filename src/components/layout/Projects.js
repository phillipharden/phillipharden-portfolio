import projects from "../../data/projectsData";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-6">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2>Projects</h2>
            <p>Some of the things I've built.</p>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;