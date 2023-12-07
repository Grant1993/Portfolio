import Brief from "./Brief";
import Links from "./Links";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Links />
      <Brief />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}

export default App;
