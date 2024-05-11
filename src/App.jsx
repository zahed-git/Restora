import { Outlet } from "react-router-dom"
import Footer from "./Component/Shared/Footer"
import Nav from "./Component/Shared/Nav"


function App() {

  return (
    <>
      <div className="">
        <Nav></Nav>
        <div className="flex">
        <div className="mx-auto space-y-10 mt-6">
        {
          <Outlet></Outlet>
        }
        </div>
        </div>
        
       
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
