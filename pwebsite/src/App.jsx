import Headersection from "./components/Headersection";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/Contactme";

const App = () => {
  return(
    <div>
      <Headersection />
      <MainBody />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App;