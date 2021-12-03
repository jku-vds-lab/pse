import { Link } from 'react-router-dom';
import screenshot from '../assets/screenshot.png';

function Hero() {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom shadow-sm mb-5 bg-body rounded">
            <h1 className="display-4 fw-bold">Projection Space Explorer</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    The ProjectionPathExplorer visualization prototype allows exploration of patterns in decision-making
                    paths. Multiple series of high dimensional states are visualized as trajectories through a joint embedding
                    space.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" type="button" href="https://jku-vds-lab.at/projection-space-explorer/?set=neural">Start Application</a>
                    <Link to='/datasets' className="btn btn-outline-secondary btn-lg px-4 me-sm-3">
                        Datasets
                    </Link >

                    <button className="btn btn-outline-success btn-lg px-4" data-bs-toggle="modal" data-tagVideo="https://www.youtube.com/embed/zcX7OJ-L8XQ" data-bs-target="#videoModal">Video</button>

                    <div className="modal fade" id="videoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">ProjectionSpaceExplorer Video</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="ratio ratio-16x9">
                                        <iframe title="video modal" src="https://www.youtube.com/embed/0svaUdXNUCg" allow="autoplay;" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: " 40vh" }}>
                <div className="container px-5">
                    <img src={screenshot} className="img-fluid border rounded-3 shadow-lg mb-4" alt="ProjectionPathExplorer Screenshot" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
