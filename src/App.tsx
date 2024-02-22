
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar/Index"
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Skills from "./components/pages/skills/Skills"
import Projects from "./components/pages/projects/Projects"

const App = () => {

  return <>
    <NavBar />
    <div className="container">
      <div className="video" >
        <video autoPlay muted loop>
          <source src='/music_background.mp4' type='video/mp4' />
        </video>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </div>
  </>


}

export default App
