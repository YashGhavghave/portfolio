import React from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import TypingEffect from "./components/TypingEffect"
import Icon from "./components/Icon"
import Social from "./components/Social"
import Footer from "./components/Design"
import Blog from "./components/Blog"


function App(){
  return(
    <div className="bg-black h-[20vh] w-full sm:fixed">
      <Social/>
      <Navbar/>
      <Profile/>
      <Icon/>
      <TypingEffect/>
      <Footer/>
      <Blog/>
    </div>
  )
}

export default App