import { useNavigate } from 'react-router-dom'

function ProjectShow() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      ProjectsShow
    </div>
  )
}

export default ProjectShow
