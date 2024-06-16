import { useRoutes } from "react-router-dom"

import DashboardProjects from "./pages/Projects"

function CustomRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <DashboardProjects />
    },
    // {
    //   path: "/project/:id",
    //   element: <ProjectShow />
    // }
  ]);

  return routes;
}

export default CustomRoutes
