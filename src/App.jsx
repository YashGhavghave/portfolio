import React,{Suspense} from "react"
import Navbar from "./components/Navbar"
// import Profile from "./components/Profile"
// import TypingEffect from "./components/TypingEffect"
// import Icon from "./components/Icon"
// import Social from "./components/Social"
// import Footer from "./components/Design"
// import Blog from "./components/Blog"
import Projects from "./components/Projects"
const Contacts=React.lazy(() =>import ("./components/Contacts"))
import Home from "./components/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
<div >
  <Suspense fallback={<h1>Loading....</h1>}/>
</div>
const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/Projects",
    element:<><Navbar/><Projects/></>
  },
  {
    path:"/Contacts",
    element:<><Navbar/><Contacts/></>
  }
])

function App(){
  return(
    <div className="bg-black h-[20vh] w-full ">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App