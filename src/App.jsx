import { Outlet } from "react-router-dom"
import Hedaer from "./Components/Hedaer"
import Footer from "./Components/Footer"

function App() {
  

  return (
    <div className="max-w-4xl mx-auto pt-16">
   <Hedaer />
   <Outlet />
   <Footer />
    </div>
  )
}

export default App
