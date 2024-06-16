import CustomRoutes from "../customRoutes"

function RootLayout() {
   
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="">
        
      </header>
      <main className="overflow-y-auto">
        <CustomRoutes />
      </main>
      <footer className="">
      
      </footer>
    </div>
  )
}

export default RootLayout
