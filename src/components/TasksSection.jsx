import { useContext } from "react";
import { projectContext } from "../contexts/ProjectsProvider";

export default function TasksSection({ projectId }) {
  const { tasks, setTasks } = useContext(projectContext);
  return (
    <section>
      <ul>
        {tasks.get(projectId).map((task) => (
          <h2>{task}</h2>
        ))}
      </ul>
    </section>
  );
}
