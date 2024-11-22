import React from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import TypingEffect from "./components/TypingEffect"
import Icon from "./components/Icon"
import Blog from "./components/Blog"
import Social from "./components/Social"


function App(){
  return(
    <div className="bg-black bg-opacity-92 text-white h-[100%] overflow-scroll">
      <Social/>
      <Navbar/>
      <Profile/>
      <Icon/>
      <TypingEffect/>
      <Blog/>
    </div>
  )
}

export default App