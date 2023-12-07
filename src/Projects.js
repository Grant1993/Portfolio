import "./Projects.css";
import DogApp from "./DogApp.png";
import DadJokes from "./DadJokes.png";
import Yahtzee from "./Yahtzee.png";
import TodoList from "./TodoList.png";
import Lightsout from "./Lightsout.png";
import github from "./github.png";

function Projects() {
  return (
    <div className="psection">
      <h1 id="Projects">Projects</h1>
      <div className="ptable">
        <div class="pwrapper">
          <div class="pone">
            <a href="https://grantsdogshelter.netlify.app/dogs">
              <img src={DogApp} alt="DogApp" />
            </a>
          </div>
          <div class="ptwo">
            <a href="https://github.com/Grant1993/dogShelter">
              <img src={github} alt="Github" />
            </a>
            <p>Dog App</p>
          </div>
          <div class="pthree">
            <a href="https://grantsdadjokes.netlify.app/">
              <img src={DadJokes} alt="DadJokes" />
            </a>
          </div>
          <div class="pfour">
            <a href="https://github.com/Grant1993/dadjokes">
              <img src={github} alt="Github" />
            </a>
            <p>DadJokes</p>
          </div>
          <div class="pfive">
            <a href="https://grantsyahtzee.netlify.app/">
              <img src={Yahtzee} alt="Yahtzee" />
            </a>
          </div>
          <div class="psix">
            <a href="https://github.com/Grant1993/yahtzee">
              <img src={github} alt="Github" />
            </a>
            <p>Yahtzee</p>
          </div>
          <div class="pseven">
            <a href="https://grantsreacttodolist.netlify.app/">
              <img src={TodoList} alt="TodoList" />
            </a>
          </div>
          <div class="peight">
            <a href="https://github.com/Grant1993/todoListReact">
              <img src={github} alt="Github" />
            </a>
            <p>TodoList</p>
          </div>
          <div class="pnine">
            <a href="https://grantslightsout.netlify.app/">
              <img src={Lightsout} alt="Lightsout" />
            </a>
          </div>
          <div class="pten">
            <a href="https://github.com/Grant1993/lightsOut">
              <img src={github} alt="Github" />
            </a>
            <p>Lightsout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
