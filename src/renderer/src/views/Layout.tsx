import CustomRoutes from "@renderer/routes/customRoutes"
import { HashRouter } from "react-router-dom"

function Layout() {    
  return (
    <HashRouter>
      <CustomRoutes />
    </HashRouter>
    )
}

export default Layout
