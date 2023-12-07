import Brief from "./Brief";
import Links from "./Links";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import "./App.css";
import ScrollToTheTop from "./ScrollToTheTop";

function App() {
  return (
    <div className="App">
      <ScrollToTheTop />
      <Links />
      <Brief />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}

export default App;
