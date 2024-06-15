import { useRoutes } from "react-router-dom"
import SettingsTheming from "@renderer/windows/settings/pages/Theming"
import SettingsAdvanced from "./pages/Advanced"

function CustomRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <SettingsTheming />
    },
    {
      path: "/theming",
      element: <SettingsTheming />
    },
    {
      path: "/advanced",
      element: <SettingsAdvanced />
    }
  ]);

  return routes;
}

export default CustomRoutes
