import './App.css'
import Homepage from './components/homepage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRef } from 'react'
import { Routes,Route } from 'react-router-dom'
function App() {



  const projectsRef = useRef(null); // Create a ref for the Projects section

  // Function to scroll to a section smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>


    <Homepage></Homepage>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Experience></Experience>
    <Skills></Skills>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>

      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>

    {/* <Homepage></Homepage>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Experience></Experience>
    <Skills></Skills>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer> */}

    </>
  )
}

export default App
