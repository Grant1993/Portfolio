import "./Certifications.css";
import awscert from "./AWSCert.png";
import jscert from "./JavascriptCourseCert.jpg";

function Certifications() {
  return (
    <div className="csection">
      <h1 id="Certifications">Certifications</h1>
      <div className="ctable">
        <div class="cwrapper">
          <div class="cone">
            <a href="https://www.udemy.com/certificate/UC-923ce058-09a2-434a-87a9-a777c3a2d663/">
              <img
                src={jscert}
                alt="The Modern Javascript Bootcamp Course (2022) Certificate"
              />
            </a>
          </div>
          <div class="ctwo">
            <a href="https://www.youracclaim.com/badges/abc4c764-d093-4cee-b7f7-005caec6292d?source=linked_in_profile">
              <img
                src={awscert}
                alt="AWS Certified Cloud Practitioner Certificate"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
