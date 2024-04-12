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
    <>
      <Sidebar />
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
