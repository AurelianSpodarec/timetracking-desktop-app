const dataProjects = [
  {
    name: "CuratedUI",
    projectName: "Curated UI",
  },
  {
    name: "Tailbuilder",
  },
  {
    name: "Walking",
  }
]

function ProjectExcerpt({ item }) {
  return (
    <div>
      {item.name}
    </div>
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


function App() {
  return (
    <div>
      <ProjectList />
    </div>
  )
}

export default App
