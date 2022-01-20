import logo from '../assets/logo.svg';
import cg_logo from '../assets/cg_logo.webp';
import jku from '../assets/JKU-Logo.jpg';
import datavisyn from '../assets/datavisyn_logo.svg';

function DevelopedBy() {
  return (
    <div className="bg-body rounded border-bottom">
      <h3 className="display-6 text-center mb-5">Developed by</h3>
      <div className="container text-center">
        <a href="https://www.jku.at/">
        <img src={jku} width="200" alt="JKU Logo" className="text-center mb-5 ms-3 me-3" />
        </a>
        <a href="https://jku-vds-lab.at/">
        <img src={logo} width="200" alt="JKU Visual Data Science Lab Logo" className="text-center mb-5 ms-3 me-3" />
        </a>
        <a href="https://www.jku.at/institut-fuer-computergrafik/">
        <img src={cg_logo} width="200" alt="Computer Graphics Logo" className="text-center mb-5 ms-3 me-3" />
        </a>
        <a href="https://www.datavisyn.io/">
        <img src={datavisyn} width="200" alt="Datavisyn Logo" className="text-center mb-5 ms-3 me-3" />
        </a>
      </div>
    </div>
  );
}

export default DevelopedBy;
