import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import WorkExp from "./components/WorkExp"
import AboutMe  from "./components/AboutMe"
import Projects from "./components/Projects"
import Fun from "./components/Fun"


const App = () => {


  return (
    <main className="bg-black">
      <Navbar /> 
      <Hero />
      <WorkExp />
      <Projects />
      <AboutMe />
      <Fun />

    </main>

  )
}

export default App
