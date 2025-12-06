import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
// import GitStats from './gitStats/gitStats'
import GitStats from './gitStats/GitStats.jsx'
import ContactMe from './Contact/ContactMe'
import Footer from './Footer/Footer.jsx'
import Experience from './Experience/Experience.jsx'

const Portfolio = () => {
  return (
<>
<Navbar/>
<Home/>
<About/>
<Experience/>
<Skills/>
<Projects/>
{/* <GitStats/> */}
<ContactMe/>
<Footer/>
</>

  )
}

export default Portfolio
