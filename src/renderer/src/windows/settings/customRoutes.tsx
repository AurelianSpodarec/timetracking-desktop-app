import { useRoutes } from "react-router-dom"
import SettingsTheming from "@renderer/windows/settings/Theming"

function CustomRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <SettingsTheming />
    },
  ]);

  return routes;
}

export default CustomRoutes
