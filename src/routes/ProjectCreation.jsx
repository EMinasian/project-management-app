import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buttonStyle, containerStyle, inputField } from "../styles/buildBlocks";
import { projectContext } from "../contexts/ProjectsProvider";
import generateProjectId from "../utils/generateProjectId";

export default function ProjectCreation() {
  const { projectsDispatch } = useContext(projectContext);
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave(e) {
    e.preventDefault();
    const projectId = generateProjectId(titleRef.current.value);
    projectsDispatch({
      type: "ADD_ITEM",
      payload: {
        id: projectId,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        date: dateRef.current.value,
      },
    });
    navigate(`/${projectId}`);
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
        <input
          ref={titleRef}
          className={inputField}
          name="title"
          type="text"
          required
        />
      </label>
      <label className="flex flex-col">
        Description
        <textarea
          ref={descriptionRef}
          className={`${inputField} resize-none h-40`}
          name="description"
          required
        />
      </label>
      <label className="flex flex-col">
        Due date
        <input
          ref={dateRef}
          className={inputField}
          type="date"
          name="date"
          required
        />
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
