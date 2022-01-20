import React from 'react';
import { Link } from 'react-router-dom';
import screenshot from '../assets/screenshot.png';
import '../styles/Hero.css';

function Hero() {
    const [imageBig, setImageBig] = React.useState(false);

    // Expand Hero image on click
    const toggleImage = () => {
        if (imageBig) {
            setImageBig(false);
            document.getElementById('hero-image')?.setAttribute("style", "transform:scale(1);");
            document.getElementById('hero-image-wrapper')?.setAttribute("style", "overflow:hidden;");
        } else {
            setImageBig(true);
            document.getElementById('hero-image')?.setAttribute("style", "transform:scale(1.5);");
            document.getElementById('hero-image-wrapper')?.setAttribute("style", "overflow:visible;");
        }
    }

    // This function is needed to control the modal video when closed, since Bootstrap cannot handle it alone.
    // See also: https://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
    const toggleVideo = (state: string) => {
        // if state == 'hide', hide. Else: show video
        const div = document.getElementById("hero-video-iframe-wrapper");
        const iframe = div?.getElementsByTagName("iframe")[0].contentWindow;
        const newState = state === 'hide' ? 'none' : '';
        if (div) {
            div.style.display = newState;
        }
        const func = state === 'hide' ? 'pauseVideo' : 'playVideo';
        iframe?.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    }


    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom shadow-sm mb-5 bg-body rounded">
            <h1 className="display-4 fw-bold">Projection Space Explorer</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    The Projection Space Explorer visualization prototype is an interactive approach for the exploration and formation of structural relationships in embeddings of high-dimensional data.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" type="button" href="https://jku-vds-lab.at/projection-space-explorer/?set=neural">Start Application</a>
                    <Link to='/datasets/all' className="btn btn-outline-warning btn-lg px-4 me-sm-3">
                        Datasets
                    </Link >

                    <button id="hero-video-button" className="btn btn-outline-danger btn-lg px-4" data-bs-toggle="modal" data-tagvideo="https://www.youtube.com/embed/0svaUdXNUCg?enablejsapi=1" data-bs-target="#videoModal" onClick={() => toggleVideo('')}>Video</button>

                    <div className="modal fade" id="videoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">ProjectionSpaceExplorer Video</h5>
                                    <button id="hero-video-close-button" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => toggleVideo('hide')}></button>
                                </div>
                                <div className="modal-body">
                                    <div id="hero-video-iframe-wrapper" className="ratio ratio-16x9">
                                        <iframe title="video modal" src="https://www.youtube.com/embed/0svaUdXNUCg?enablejsapi=1" allow="autoplay;" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="hero-image-wrapper">
                <div className="container px-5">
                    <img 
                    id="hero-image"
                    src={screenshot} 
                    className="img-fluid border rounded-3 shadow-lg mb-4" 
                    alt="ProjectionPathExplorer Screenshot" 
                    width="700" 
                    height="500" 
                    loading="lazy" 
                    onClick={() => toggleImage()}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
