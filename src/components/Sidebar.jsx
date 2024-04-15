import { mockProjects } from "../static/mockProjects";
import { buttonStyle } from "../styles/buildBlocks";

export default function Sidebar() {
  return (
    <aside className="p-4 bg-slate-950 text-white mt-4 rounded-tr-lg min-w-80 flex flex-col">
      <h2 className="text-2xl font-bold my-4">Your Projects</h2>
      {mockProjects.length > 0 ? (
        <ul>
          {mockProjects.map((project) => (
            <li></li>
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
