import { useContext } from "react";
import { projectContext } from "../contexts/ProjectsProvider";

export default function TasksSection({ projectId }) {
  const { tasks, setTasks } = useContext(projectContext);
  return (
    <section>
      {tasks.length > 0 ? (
        <ul>
          {tasks.get(projectId).map((task) => (
            <h2 key={task}>{task}</h2>
          ))}
        </ul>
      ) : (
        <h2>No tasks!</h2>
      )}
    </section>
  );
}
