import { useContext } from "react";
import { useParams } from "react-router-dom";
import TasksSection from "../components/TasksSection";
import { projectContext } from "../contexts/ProjectsProvider";

export default function ProjectDisplay({ id }) {
  const { projects } = useContext(projectContext);
  const { projectId } = useParams();
  const { title, description, date } = projects.find(({ id }) => id === projectId);

  return (
    <>
      <div>{id}</div>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
        <button>Delete</button>
      </section>
      <TasksSection />
    </>
  );
}
