import { Link } from "react-router-dom"
import dataProjects from "../data-projects"

function ProjectExcerpt({ item }) {
  return (
    <Link to={`project/${item.slug}`}>
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
