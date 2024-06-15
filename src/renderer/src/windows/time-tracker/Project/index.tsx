import ProjectList from "./_components/ProjectList"

function ProjectIndex() {

  function openSettingsWindow() {
    window.electron.ipcRenderer.send('open-settings-window');
  }
  
  return (
    <div>
      ProjectsIndex
      <ProjectList />

      <button onClick={() => openSettingsWindow()}>Open Settings</button>
    </div>
  )
}

export default ProjectIndex
