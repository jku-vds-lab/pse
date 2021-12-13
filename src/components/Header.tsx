import logo from '../assets/logo.svg';
import 'bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src={logo} alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item me-2">
              <Link to='/datasets/all' className="nav-link">
                Datasets
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link to='/publications' className="nav-link">
                Publications
              </Link>
            </li>

            <li>
              <form className="d-flex">
                <a className="btn btn-outline-success me-2" type="button" href="https://jku-vds-lab.at/projection-space-explorer/?set=neural">Start Application</a>
              </form>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
