import "./Socials.css";
import linkedIn from "./linkedin.png";
import github from "./github.png";

function Socials() {
  return (
    <div class="wrapper">
      <div class="one">
        <a
          href="https://www.linkedin.com/in/grant-pritchard-00401b199"
          target="_blank"
        >
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
      <div class="two">
        <a href="https://github.com/Grant1993" target="_blank">
          <img src={github} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
