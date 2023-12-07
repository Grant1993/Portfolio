import "bootstrap/dist/css/bootstrap.css";

function Links() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#Projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Certifications">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Links;
