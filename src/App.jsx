import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectCreation from "./components/ProjectCreation";
import ProjectsOverview from "./components/ProjectsOverView";

const router = createBrowserRouter([
  { path: "/", element: <ProjectsOverview /> },
  { path: "/create-project", element: <ProjectCreation /> },
]);

function App() {
  return (
    <div className="flex bg-gray-300">
      <Sidebar />
      <main className="p-4 w-full">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
