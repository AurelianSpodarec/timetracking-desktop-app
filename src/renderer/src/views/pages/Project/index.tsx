import { Link } from "react-router-dom"
import dataProjects from "./data-projects"


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
        return <ProjectExcerpt item={project} />
      })}
    </div>
  )
}


function ProjectIndex() {
  return (
    <div>
      ProjectsIndex
      <ProjectList />
    </div>
  )
}

export default ProjectIndex
