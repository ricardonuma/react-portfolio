import { useEffect } from "react";
import "./App.css";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Menu />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
