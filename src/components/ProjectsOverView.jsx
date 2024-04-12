import ProjectItem from "./ProjectItem";
import { mockProjects } from "../static/mockProjects";

export default function ProjectsOverview() {
  return (
    <>
      {mockProjects.length === 0 ? (
        <div>
          <h2>No Projects Available</h2>
          <p>Get started with a new project.</p>
          <button>Create project</button>
        </div>
      ) : (
        <ul>
          {mockProjects.map((project) => (
            <ProjectItem project={project} />
          ))}
        </ul>
      )}
    </>
  );
}
