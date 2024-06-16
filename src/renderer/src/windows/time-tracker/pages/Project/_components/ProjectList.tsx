import { Link } from "react-router-dom"
import dataProjects from "../../../data-projects"

function ProjectTask({ item }) {
  return (
    <li>
      {item.name}
      {item.totalTime}
    </li>
  )
}

function ProjectTaskList({ item }) {
  return (
    <ol className="pl-10">
      {item.tasks.map((task) => {
        return <ProjectTask item={task} />
      })}
    </ol>
  )
}

function ProjectExcerpt({ item }) {
  console.log(item)
  return (
    <div className="block py-20 bg-green-500">
      <span>{item.name}</span>
      <ProjectTaskList item={item} />
    </div>
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
