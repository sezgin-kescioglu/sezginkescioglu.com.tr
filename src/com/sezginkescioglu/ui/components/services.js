import React from 'react';

function Services(props) {
    return (
        <section className="services-area ptb-110" id={"solutions-products"}>
            <div className="container">
                <div className="section-title">
                    <div className="content">
                        <span>Our Services</span>
                        <h2>We Offer Professional IT Solutions For Business</h2>
                        <p>
                            We add value to your business with our comprehensive technological services. In our digital solution range,
                            we provide support for the entire technology infrastructure, from service infrastructure to architectural design and interface applications.
                        </p>
                    </div>
                    <div className="image">
                        <img src="https://www.trigital.in/images/digital-solution.png" alt="image" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-plugin"></i>
                            </div>
                            <h3>
                                <a href="#">Product Engineering</a>
                            </h3>
                            <p>With 8 years of product design experience, we help you develop excellent digital products.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-computer-graphic"></i>
                            </div>
                            <h3>
                                <a href="#">UX/UI Design</a>
                            </h3>
                            <p>We offer a unique user experience to your users with React Js technology and more.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-analysis"></i>
                            </div>
                            <h3>
                                <a href="#">Big Data & Reporting Systems</a>
                            </h3>
                            <p>We offer fast and understandable reporting systems with ELK technology.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-code"></i>
                            </div>
                            <h3>
                                <a href="#">Web Applications</a>
                            </h3>
                            <p>We develop modular web applications and services using Spring framework.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-application"></i>
                            </div>
                            <h3>
                                <a href="#">Service Architecture</a>
                            </h3>
                            <p>With our microservices architectural designs, we enable you to build flexible and extensible structures.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-cyber-security"></i>
                            </div>
                            <h3>
                                <a href="#">Cyber Security</a>
                            </h3>
                            <p>We build secure service infrastructures with our ISO information security certified expertise.</p>
                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape13">
                <img src="assets/img/shape/13.svg" alt="image" />
            </div>
            <div className="shape14">
                <img src="assets/img/shape/13.svg" alt="image" />
            </div>
        </section>
    );
}

export default Services;