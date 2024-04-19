import { useContext } from "react";
import { Link } from "react-router-dom";
import { buttonStyle, containerStyle, inputField } from "../styles/buildBlocks";
import { projectContext } from "../contexts/ProjectsProvider";

export default function ProjectCreation() {
  const { setProjects } = useContext(projectContext);

  function handleSave(e) {
    e.preventDefault();
    setProjects((prev) => [
      ...prev,
      {
        title: e.target.title.value,
        description: e.target.description.value,
        date: e.target.date.value,
      },
    ]);
  }

  return (
    <form
      className={containerStyle}
      onSubmit={(e) => {
        handleSave(e);
      }}
    >
      <label className="flex flex-col">
        Title
        <input className={inputField} name="title" type="text" required />
      </label>
      <label className="flex flex-col">
        Description
        <textarea
          className={`${inputField} resize-none h-40`}
          name="description"
          required
        />
      </label>
      <label className="flex flex-col">
        Due date
        <input className={inputField} type="date" name="date" required />
      </label>
      <div className="flex">
        <button
          className={`${buttonStyle} bg-slate-950 text-white`}
          type="submit"
        >
          Save
        </button>
        <Link className={`${buttonStyle} bg-white text-slate-950`} to="/">
          Cancel
        </Link>
      </div>
    </form>
  );
}
