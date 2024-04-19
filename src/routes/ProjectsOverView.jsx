import { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import { projectContext } from "../contexts/ProjectsProvider";
import { buttonStyle, containerStyle } from "../styles/buildBlocks";

export default function ProjectsOverview() {
  const { projects } = useContext(projectContext);

  return (
    <>
      {projects.length === 0 ? (
        <div className={containerStyle}>
          <h2 className="text-xl font-semibold">No Projects Available</h2>
          <p>Get started with a new project.</p>
          <Link
            className={`${buttonStyle}  text-white bg-slate-950`}
            to="/create-project"
          >
            Create project
          </Link>
        </div>
      ) : (
        <ul>
          {projects.map((project) => (
            <ProjectItem project={project} />
          ))}
        </ul>
      )}
    </>
  );
}
