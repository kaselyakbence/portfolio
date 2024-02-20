
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar/Index"
import Home from "./components/pages/home/Index"

const App = () => {

  return <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/skills" element={<p>Skills</p>} />
        <Route path="/projects" element={<p>Projects</p>} />

      </Routes>
    </div>
  </>


}

export default App
