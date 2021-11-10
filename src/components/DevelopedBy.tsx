import logo from '../assets/logo.svg';
import cg_logo from '../assets/cg_logo.webp';

function DevelopedBy() {
    return (
      <div className="bg-body rounded border-bottom">
          <h3 className="display-6 text-center mb-5">Developed by</h3>
          <div className="d-flex flex-row justify-content-center">
          <img src={logo}  width="200" alt="JKU Visual Data Science Lab Logo" className="text-center mb-5 me-4"/>
          <img src={cg_logo}  alt="JKU Visual Data Science Lab Logo" className="text-center mb-5 ms-4"/>
          </div>
      </div>
    );
  }
  
  export default DevelopedBy;
  