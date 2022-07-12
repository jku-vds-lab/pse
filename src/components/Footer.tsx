import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGem, faHome, faEnvelope, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section
        className="d-flex justify-content-center border-bottom"
      >

      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} /> JKU Visual Data Science Lab
              </h6>
              <p>
                We are part of the Institute of Computer Graphics at the Johannes Kepler University Linz in Austria. Our research focuses on developing novel visual analysis methods and tools that enable users to make sense of complex and heterogeneous data.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link to='/datasets/all'>
                  Datasets
                </Link>
              </p>
              <p>
                <Link to='/publications'>
                  Publications
                </Link>
              </p>
              <p>
                <a href='https://github.com/jku-vds-lab/projection-space-explorer'>
                  Github Repository
                </a>
              </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><FontAwesomeIcon icon={faHome} /> <a href="https://www.google.com/maps/place/Science+Park+3/@48.3348119,14.322509,17z/data=!4m12!1m6!3m5!1s0x477398434ec8e84d:0xe0d1670c08989881!2sJohannes+Kepler+Universit%C3%A4t+Linz+-+JKU!8m2!3d48.336614!4d14.319305!3m4!1s0x4773991d5880f437:0xc58d7ca1cdc2b04!8m2!3d48.3351119!4d14.3242242">Altenberger Str. 66, 4040 Linz</a></p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@jku-vds-lab.at">contact@jku-vds-lab.at</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center">
        <a href="https://github.com/jku-vds-lab" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://twitter.com/marc_streit" className="me-4 text-reset">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://www.youtube.com/channel/UCH0ztMDNtQuIx0-ZWIavG0Q" className="me-4 text-reset">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a href="https://www.jku.at/" className="me-4 text-reset">
          <FontAwesomeIcon icon={faUniversity} size="lg" />
        </a>
      </div>
      <div className="text-center p-4 bg-light">
        Copyright © 2022 <a className="text-dark" href="https://jku-vds-lab.at/">JKU Visual Data Science Lab</a>.
      </div>
    </footer>
  );
}

export default Footer;
