import ProjectItem from "./ProjectItem";
import { mockProjects } from "../static/mockProjects";
import { buttonStyle } from "../styles/buildBlocks";

export default function ProjectsOverview() {
  return (
    <>
      {mockProjects.length === 0 ? (
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">No Projects Available</h2>
          <p>Get started with a new project.</p>
          <button className={`${buttonStyle}  text-white bg-slate-950`}>
            Create project
          </button>
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
