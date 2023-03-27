import React from 'react';

function UnderConstruction(props) {

    function addNewSubscriber(event) {
        event.preventDefault();
        console.log("Add new subscriber function activated:", event);
    }

    return (
        <section className="coming-soon-area">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="coming-soon-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="logo black-logo">
                                        <img src="assets/img/logo/logo-green.PNG" alt="logo" style={{height: "75px"}}/>
                                    </div>
                                    <div className="logo white-logo">
                                        <img src="assets/img/logo/logo-green.PNG" alt="logo" style={{height: "75px"}}/>
                                    </div>

                                    <h3>Our website is Coming Soon, follow us for update now!</h3>

                                    <form onSubmit={addNewSubscriber}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name"
                                                   placeholder="Your Name"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Your Email Address"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Subscribe</button>

                                        <p>For getting latest technology news, subscribe to us.</p>
                                    </form>

                                    <div className="social">
                                        <ul>
                                            <li>
                                                <a href="https://www.linkedin.com/in/sezginkescioglu" rel="noreferrer" target="_blank" className="twitter"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/sezginkescioglu" rel="noreferrer" target="_blank" className="youtube"><i className="fab fa-youtube"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/sezginkescioglu" rel="noreferrer" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/sezginkescioglu" rel="noreferrer" target="_blank" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/sezginkescioglu" rel="noreferrer" target="_blank" className="instagram"><i className="fab fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="coming-soon-time">
                            <img src="https://rare-gallery.com/mocahbig/1373753-cpu-circuit-board-technology-4k-pc-wallpaper.jpg" alt="we-will-be-ready-coming-soon"/>

                            <div id="timer">
                                <div id="days"></div>
                                <div id="hours"></div>
                                <div id="minutes"></div>
                                <div id="seconds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UnderConstruction;