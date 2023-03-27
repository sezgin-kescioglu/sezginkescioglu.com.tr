import React from 'react';

function Footer(props) {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="subscribe-area">
                    <h3>Subscribe To Our Newsletter</h3>
                    <form className="newsletter-form" data-toggle="validator">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <input type="text" className="form-control" placeholder="Your Name" name="name"
                                       id="name" />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <input type="email" className="form-control" placeholder="Your Email" name="EMAIL"
                                       required autoComplete="off" />
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <button type="submit">Subscribe Now <i className="flaticon-paper-plane"></i>
                                </button>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div id="validator-newsletter" className="form-result"></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href="#">
                                    <img src="/assets/img/logo/logo-green.PNG" alt="image" style={{height:"50px"}} />
                                </a>
                                <p>Your partner in technology</p>
                            </div>
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-facebook-letter-logo"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-twitter-black-shape"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-instagram-logo"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Services</h3>
                            <ul className="footer-services-list">
                                <li>
                                    <a href="#">Product Engineering</a>
                                </li>
                                <li>
                                    <a href="#">UX/UI Design</a>
                                </li>
                                <li>
                                    <a href="#">Big Data & Reporting Systems</a>
                                </li>
                                <li>
                                    <a href="#">Web Applications</a>
                                </li>
                                <li>
                                    <a href="#">Software Architecture</a>
                                </li>
                                <li>
                                    <a href="#">Cyber Security</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Quick Links</h3>
                            <ul className="quick-links-list">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#">Applications</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contacts</h3>
                            <ul className="footer-contact-list">
                                <li>
                                    <span>Address:</span> 4132 Uğur Mumcu Karabağlar - İZMİR, TURKEY
                                </li>
                                <li>
                                    <span>Email:</span>
                                    <a href="#">
                                        <a className="__cf_email__"
                                              href={"mailto:sezginkescioglu@outlook.com"}>sezginkescioglu@outlook.com</a>
                                    </a>
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <a href="#">+90 544 859 2210</a>
                                </li>
                                <li>
                                    <span>Fax:</span>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <p>© Proudly Owned by <a href="https://sezginkescioglu.com.tr/"
                                                               target="_blank">sezginkescioglu.com.tr</a>
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-map">
                <img src="assets/img/circle-map.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;