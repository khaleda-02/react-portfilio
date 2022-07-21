import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
