import { createContext, useState, useReducer } from "react";

export const projectContext = createContext({
  projects: [],
  projectsDispatch: null,
});

function projectsReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  }
}

export default function ProjectsProvider({ projectValues, children }) {
  const [projects, projectsDispatch] = useReducer(projectsReducer, [
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
    <projectContext.Provider
      value={{ projects, projectsDispatch, tasks, setTasks }}
    >
      {children}
    </projectContext.Provider>
  );
}
