import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectCreation from "./routes/ProjectCreation";
import ProjectsOverview from "./routes/ProjectsOverView";

const router = createBrowserRouter([
  { path: "/", element: <ProjectsOverview /> },
  { path: "/create-project", element: <ProjectCreation /> },
]);

function App() {
  return (
    <div className="flex bg-gray-300 h-full">
      <Sidebar />
      <main className="p-4 w-full flex flex-col justify-center">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
