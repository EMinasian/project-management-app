import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TasksSection from "../components/TasksSection";
import { projectContext } from "../contexts/ProjectsProvider";

export default function ProjectDisplay({ id }) {
  const navigate = useNavigate();
  const { projects, projectsDispatch } = useContext(projectContext);
  const { projectId } = useParams();
  const { title, description, date } = projects.find(
    ({ id }) => id === projectId
  );

  function handleDelete() {
    projectsDispatch({
      type: "DELETE_ITEM",
      payload: projectId,
    });
    navigate("/");
  }

  return (
    <>
      <div>{id}</div>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
        <button onClick={handleDelete}>Delete</button>
      </section>
      <TasksSection projectId={projectId} />
    </>
  );
}
