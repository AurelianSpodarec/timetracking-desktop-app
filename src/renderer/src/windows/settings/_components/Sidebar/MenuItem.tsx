import { Link } from "react-router-dom"

function SettingsMenuItem({item, isActive}) {
  return (
    <Link to={item.slug} className={`block ${isActive ? "bg-red-500" : ""} `}>
      {item.name}
    </Link>
  )
}

export default SettingsMenuItem
