import { useRoutes } from "react-router-dom"

import ProjectIndex from "@renderer/windows/time-tracker/Project"
import ProjectShow from "@renderer/windows/time-tracker/Project/show"

function CustomRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <ProjectIndex />
    },
    {
      path: "/project/:id",
      element: <ProjectShow />
    }
  ]);

  return routes;
}

export default CustomRoutes
