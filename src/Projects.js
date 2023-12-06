import "./Projects.css";
import DogApp from "./DogApp.png";
import DadJokes from "./DadJokes.png";
import Yahtzee from "./Yahtzee.png";
import TodoList from "./TodoList.png";
import Lightsout from "./Lightsout.png";

function Projects() {
  return (
    <div className="psection">
      <h1 id="Projects">Projects</h1>
      <div className="ptable">
        <div class="pwrapper">
          <div class="pone">
            <a href="https://grantsdogshelter.netlify.app/dogs" target="_blank">
              <img src={DogApp} alt="DogApp" />
            </a>
          </div>
          <div class="ptwo">
            <p>Dog App</p>
          </div>
          <div class="pthree">
            <a href="https://grantsdadjokes.netlify.app/" target="_blank">
              <img src={DadJokes} alt="DadJokes" />
            </a>
          </div>
          <div class="pfour">
            <p>DadJokes</p>
          </div>
          <div class="pfive">
            <a href="https://grantsyahtzee.netlify.app/" target="_blank">
              <img src={Yahtzee} alt="Yahtzee" />
            </a>
          </div>
          <div class="psix">
            <p>Yahtzee</p>
          </div>
          <div class="pseven">
            <a href="https://grantsreacttodolist.netlify.app/" target="_blank">
              <img src={TodoList} alt="TodoList" />
            </a>
          </div>
          <div class="peight">
            <p>TodoList</p>
          </div>
          <div class="pnine">
            <a href="https://grantslightsout.netlify.app/" target="_blank">
              <img src={Lightsout} alt="Lightsout" />
            </a>
          </div>
          <div class="pten">
            <p>Lightsout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
