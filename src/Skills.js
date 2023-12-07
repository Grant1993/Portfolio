import "./Skills.css";
import aws from "./aws.png";
import javascript from "./javascript.png";
import html from "./html.png";
import css from "./css.png";
import react from "./React.png";
import typescript from "./Typescript.png";
import mysql from "./mysql.png";
import sass from "./sass.png";
import git from "./git.png";
import next from "./next-js.png";
import sql from "./SQL.png";
import node from "./node.png";

function Skills() {
  return (
    <div className="ssection">
      <h1 id="Skills">Skills</h1>
      <div className="stable">
        <div class="swrapper">
          <div class="sone">
            <img src={aws} alt="AWS Icon" />
            <p>AWS</p>
          </div>
          <div class="stwo">
            <img src={javascript} alt="Javascript Icon" />
            <p>JavaScript</p>
          </div>
          <div class="sthree">
            <img src={html} alt="HTML Icon" />
            <p>HTML</p>
          </div>
          <div class="sfour">
            <img src={css} alt="CSS Icon" />
            <p>CSS</p>
          </div>
          <div class="sfive">
            <img src={react} alt="React Icon" />
            <p>React</p>
          </div>
          <div class="ssix">
            <img src={typescript} alt="Typescript Icon" />
            <p>TypesSript</p>
          </div>
          <div class="sseven">
            <img src={mysql} alt="MySQL Icon" />
            <p>MySQL</p>
          </div>
          <div class="seight">
            <img src={sass} alt="SASS Icon" />
            <p>SASS</p>
          </div>
          <div class="snine">
            <img src={git} alt="GIT Icon" />
            <p>GIT</p>
          </div>
          <div class="sten">
            <img src={next} alt="NextJS Icon" />
            <p>Next</p>
          </div>
          <div class="selven">
            <img src={sql} alt="SQL Icon" />
            <p>SQL</p>
          </div>
          <div class="stwelve">
            <img src={node} alt="Node Icon" />
            <p>Node</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
