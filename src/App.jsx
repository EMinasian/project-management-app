import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectCreation from "./routes/ProjectCreation";
import ProjectsOverview from "./routes/ProjectsOverView";
import ProjectsProvider from "./contexts/ProjectsProvider";

const router = createBrowserRouter([
  { path: "/", element: <ProjectsOverview /> },
  { path: "/create-project", element: <ProjectCreation /> },
]);

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="flex bg-gray-300 h-full">
      <ProjectsProvider projectValues={{ projects, setProjects }}>
        <Sidebar />
        <main className="p-4 w-full flex flex-col justify-center">
          <RouterProvider router={router} />
        </main>
      </ProjectsProvider>
    </div>
  );
}

export default App;
