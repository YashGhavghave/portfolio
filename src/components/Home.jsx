import React from 'react'
import Profile from "./Profile"
import TypingEffect from "./TypingEffect"
import Icon from "./Icon"
import Social from "./Social"
import Footer from "./Design"
import Blog from "./Blog"
import Navbar from './Navbar'

function Home() {
  return (
    <div>
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
export default Home