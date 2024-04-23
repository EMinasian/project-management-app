import { useContext } from "react";
import { buttonStyle } from "../styles/buildBlocks";
import { projectContext } from "../contexts/ProjectsProvider";

export default function Sidebar() {
  const { projects } = useContext(projectContext);

  return (
    <aside className="p-4 bg-slate-950 text-white mt-4 rounded-tr-lg min-w-80 flex flex-col">
      <h2 className="text-2xl font-bold my-4">Your Projects</h2>
      {projects.length > 0 ? (
        <ul className="m-6 flex flex-col gap-2">
          {projects.map(({ title, id }) => (
            <li key={id}>
              <a href={`/${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <span className="self-center">No projects to display.</span>
      )}
      <button className={`${buttonStyle} bg-white text-slate-950 self-center`}>
        Add project
      </button>
    </aside>
  );
}
