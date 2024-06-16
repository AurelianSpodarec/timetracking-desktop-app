import CustomRoutes from "../../customRoutes"

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

export default SettingsMain
