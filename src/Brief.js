import "./Brief.css";
import Socials from "./Socials";
import img from "./grant.jpg";

function Brief() {
  return (
    <div>
      <h1 className="btitle">Junior Software Engineer</h1>
      <h2>Grant Pritchard</h2>
      <img className="profile" src={img} alt="#" />
      <div className="section">
        <Socials />
      </div>
    </div>
  );
}

export default Brief;
