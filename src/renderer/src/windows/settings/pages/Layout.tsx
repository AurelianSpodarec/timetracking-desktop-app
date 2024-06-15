import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom';

import CustomRoutes from "../customRoutes"

import dataMenu from "../dataMenu"

function SettingsMenuItem({item, isActive}) {
  return (
    <Link to={item.slug} className={`block ${isActive ? "bg-red-500" : ""} `}>
      {item.name}
    </Link>
  )
}

function SettingsMenu() {
  const location = useLocation();
  const activeURL = location.pathname

  return (
    
      <nav className="h-full">
        {dataMenu.map((item: any) => {
          const isActive = item.slug === activeURL; // Corrected line
          return <SettingsMenuItem key={item.slug} item={item} isActive={isActive} />
        })}
      </nav>
  )
}


function SettingsSidebar() {
  return (
    <aside className="flex w-52 flex-col bg-[#1f1f1f] h-full">
      <SettingsMenu />
    </aside>
  )
}

function SettingsMain({ menu }) {
  return (
    <div>
      <h1>{menu?.name}</h1>
      <main>
        <CustomRoutes />
      </main>
    </div>
  )
}


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
