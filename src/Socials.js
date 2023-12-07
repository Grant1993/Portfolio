import "./Socials.css";
import linkedIn from "./linkedin.png";
import github from "./github.png";
import download from "./download.png";
import CV from "./GrantPritchardCV.pdf";

function Socials() {
  return (
    <div class="wrapper">
      <div class="one">
        <a href="https://www.linkedin.com/in/grant-pritchard-00401b199">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
      <div class="two">
        <a href="https://github.com/Grant1993">
          <img src={github} alt="Github" />
        </a>
      </div>
      <div>
        <a href={CV} download>
          <img src={download} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
