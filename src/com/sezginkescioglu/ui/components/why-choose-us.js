import React from 'react';

function WhyChooseUs(props) {
    return (
        <section className="why-choose-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <div className="content">
                        <span>Why choose us</span>
                        <h2>We Different From Others Should Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra
                            maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="image">
                        <img src="assets/img/section-title/2.png" alt="image" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-choose-box">
                            <img src="https://zacharybernard.com/wp-content/uploads/2022/08/shutterstock_511909429-1.jpg" style={{height:"300px"}} alt="Industry Expertise" />

                                <div className="title">
                                    <h3>Industry Expertise</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Industry Expertise</a></h3>
                                        <p>We are with you with our vast experience in telecom, banking and insurance industry channels</p>
                                        <a href="#" className="read-more-btn">Read More <i
                                            className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-choose-box">
                            <img src="https://attensi.com/wp-content/uploads/2022/04/shutterstock_1498583432.jpg" style={{height:"300px"}} alt="Expertise & Leadership" />

                                <div className="title">
                                    <h3>Expertise & Leadership</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Expertise & Leadership</a></h3>
                                        <p>Our sectoral leadership is growing day by day with our dominance in many cloud technologies.</p>
                                        <a href="#" className="read-more-btn">Read More <i
                                            className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-choose-box">
                            <img src="https://1fe2wfpdmleq9.cdn.shift8web.ca/wp-content/uploads/2020/10/IT-Solutions-Company.jpg" style={{height:"300px"}} alt="Dedicated IT Solution" />

                                <div className="title">
                                    <h3>Dedicated IT Solution</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Dedicated IT Solution</a></h3>
                                        <p>Our expert staff always provides convenience in your projects.</p>
                                        <a href="#" className="read-more-btn">Read More <i
                                            className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape14"><img src="assets/img/shape/13.svg" alt="image" /></div>
            <div className="shape15"><img src="assets/img/shape/13.svg" alt="image" /></div>
        </section>
    );
}

export default WhyChooseUs;