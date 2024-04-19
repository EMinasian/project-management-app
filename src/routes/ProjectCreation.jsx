import { Link } from "react-router-dom";
import { buttonStyle, containerStyle, inputField } from "../styles/buildBlocks";

export default function ProjectCreation() {
  return (
    <form className={containerStyle}>
      <label className="flex flex-col">
        Title
        <input className={inputField} name="title" type="text" />
      </label>
      <label className="flex flex-col">
        Description
        <textarea className={`${inputField} resize-none h-40`} name="title" />
      </label>
      <label className="flex flex-col">
        Due date
        <input className={inputField} type="date" />
      </label>
      <div className="flex">
        <button className={`${buttonStyle} bg-slate-950 text-white`}>
          Save
        </button>
        <Link className={`${buttonStyle} bg-white text-slate-950`} to="/">
          Cancel
        </Link>
      </div>
    </form>
  );
}
