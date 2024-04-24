import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectCreation from "./routes/ProjectCreation";
import ProjectsOverview from "./routes/ProjectsOverView";
import ProjectDisplay from "./routes/ProjectDisplay";
import ProjectsProvider from "./contexts/ProjectsProvider";

const router = createBrowserRouter([
  { path: "/", element: <ProjectsOverview /> },
  { path: "/create-project", element: <ProjectCreation /> },
  { path: "/:projectId", element: <ProjectDisplay /> },
]);

function App() {
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
    <div className="flex bg-gray-300 h-full">
      <ProjectsProvider
        projectValues={{ projects, setProjects, tasks, setTasks }}
      >
        <Sidebar />
        <main className="p-4 w-full flex flex-col justify-center">
          <RouterProvider router={router} />
        </main>
      </ProjectsProvider>
    </div>
  );
}

export default App;
