import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';

import dataMenu from "../data-menu"

import SettingsMain from "../_components/Main"
import SettingsSidebar from "../_components/Sidebar"

// TODO: Refactor
function getActiveMenuItem(slug: string) {
  return dataMenu.find((item) => item.slug === slug);
}

function RootLayout() {
  const location = useLocation();
  const activeURL = location.pathname

  const [activeMenu, setActiveMenu] = useState(getActiveMenuItem(activeURL))

  useEffect(() => {
    setActiveMenu(getActiveMenuItem(activeURL))
  }, [location])

  return (
    <div className="flex h-full">
      <SettingsSidebar menu={activeMenu} />
      <SettingsMain menu={activeMenu} />
    </div>
  )
}

export default RootLayout
