import { Link } from "react-router-dom"
import dataProjects from "../../../data-projects"

function ProjectExcerpt({ item }) {
  return (
    <Link to={`project/${item.slug}`} className="block py-20 bg-green-500">
      {item.name}
    </Link>
  )
}

function ProjectList() {
  return (
    <div>
      {dataProjects.map((project: any) => {
        return <ProjectExcerpt key={project.slug} item={project} />
      })}
    </div>
  )
}

export default ProjectList
