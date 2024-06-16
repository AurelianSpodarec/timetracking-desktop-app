import { useLocation } from "react-router-dom"
import dataMenu from "../../data-menu"
import SettingsMenuItem from "./MenuItem"

function SettingsMenu() {
  const location = useLocation();
  const activeURL = location.pathname

  return (
    
      <nav className="h-full">
        {dataMenu.map((item: any) => {
          const isActive = item.slug === activeURL
          return <SettingsMenuItem key={item.slug} item={item} isActive={isActive} />
        })}
      </nav>
  )
}

export default SettingsMenu
