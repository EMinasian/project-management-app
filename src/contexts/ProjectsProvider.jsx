import { createContext } from "react";

export const projectContext = createContext({
  projects: [],
  setProjects: null,
});

export default function ProjectsProvider({ projectValues, children }) {
  return (
    <projectContext.Provider value={projectValues}>
      {children}
    </projectContext.Provider>
  );
}
