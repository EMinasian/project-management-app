import { createContext, useState } from "react";

export const projectContext = createContext({
  projects: [],
  setProjects: null,
});

export default function ProjectsProvider({ projectValues, children }) {
  const [projects, setProjects] = useState([
    {
      title: "Default Project",
      id: "p-default-project",
      description: "Some description",
      date: String(new Date()),
    },
  ]);

  const [tasks, setTasks] = useState(
    new Map([["p-default-project", ["Task 1", "Task 2"]]])
  );

  return (
    <projectContext.Provider value={{ projects, setProjects, tasks, setTasks }}>
      {children}
    </projectContext.Provider>
  );
}
