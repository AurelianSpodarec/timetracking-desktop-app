import ProjectIndex from "@renderer/views/pages/Project"
import ProjectShow from "@renderer/views/pages/Project/show"
import { useRoutes } from "react-router-dom"

function CustomRoutes() {
  let routes = useRoutes([
    // {
    //     path: "*",
    //     element: <NotFound />
    // },
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
