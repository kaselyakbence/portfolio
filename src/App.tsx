
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar/Index"

const App = () => {

  return <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/skills" element={<p>Skills</p>} />
        <Route path="/projects" element={<p>Projects</p>} />

      </Routes>
    </div>
  </>


}

export default App
