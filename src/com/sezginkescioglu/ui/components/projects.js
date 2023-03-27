import React, {Component} from 'react';

class Projects extends Component {

    componentDidMount() {
        window.WebsiteUtil.initProjectsOwlCarousel();
    }

    render() {
        return (
            <section className="projects-area ptb-110" id={"our-projects"}>
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Recent projects</span>
                            <h2>Proud Projects That Make Us Stand Out</h2>
                            <p>You can take a look at the projects for which we have completed their architectural designs and application development.</p>
                        </div>
                        <div className="image">
                            <img src="assets/img/section-title/3.png" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="projects-slides owl-carousel owl-theme">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://images.idgesg.net/images/article/2020/07/open_lock_credit_card_secuity_keyboard__by_weerapatkiatdumrong_gettyimages-522152569_cso_2400x1600-100851270-large.jpg?auto=webp&quality=85,70" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Design/Idea | On Live Product</span>
                                    <h3>
                                        <a href="#">Secure Payment (PCI-DSS)</a>
                                    </h3>
                                    <p>

                                        Secure payment gateway services
                                        <hr/>
                                        <img src={"https://www.agesa.com.tr/i/assets/images/svg/logo.svg"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://img.freepik.com/premium-photo/online-shopping-concept-extreme-closeup-shopping-cart-keyboard_476612-10423.jpg?w=2000" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Design/Development | On Live Product</span>
                                    <h3>
                                        <a href="#">VF Shopping</a>
                                    </h3>
                                    <p>

                                        E-commerce integration between 3rd party distributors and company website
                                        <hr/>
                                        <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/1200px-Vodafone_2017_logo.svg.png"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://www.hurix.com/wp-content/uploads/2019/04/Image_1-33.jpg" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Design | On Live Product</span>
                                    <h3>
                                        <a href="#">GameSquad</a>
                                    </h3>
                                    <p>

                                        Gamification web application
                                        <hr/>
                                        <img src={"https://www.agesa.com.tr/i/assets/images/svg/logo.svg"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://er.educause.edu/-/media/images/articles/2022/02/er21_1305_headerart_1600x900.jpg?hash=A7531AB8BB3F5644080540CE9ACC478F7E2D9564&la=en" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Idea | On Live Product</span>
                                    <h3>
                                        <a href="#">EduTR</a>
                                    </h3>
                                    <p>

                                        New generation learning platform
                                        <hr/>
                                        <img src={"assets/img/logo/logo-green.PNG"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://www.analyticsinsight.net/wp-content/uploads/2022/04/8-Project-Management-Tips-Every-Tech-Company-Should-Follow.jpg" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Guard | On Live Product</span>
                                    <h3>
                                        <a href="#">ProACTIVE</a>
                                    </h3>
                                    <p>

                                        Business requirements based project management web application
                                        <hr/>
                                        <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/1200px-Vodafone_2017_logo.svg.png"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://media.istockphoto.com/id/1295462037/vector/mnp-mobile-number-portability-acronym.jpg?s=170667a&w=0&k=20&c=CmS8PtnxqojpoyUWUHma3fYraVjpeHSpKJkWBvf3BSw=" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Guard | On Live Product</span>
                                    <h3>
                                        <a href="#">MNP</a>
                                    </h3>
                                    <p>

                                        Mobile number transferring service set between telecommunication companies
                                        <hr/>
                                        <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/1200px-Vodafone_2017_logo.svg.png"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#">
                                    <img src="https://www.indevconsultancy.com/images/services/ivr.jpg" style={{height:"400px"}} alt="image" />
                                </a>
                                <div className="projects-content">
                                    <span>Guard | On Live Product</span>
                                    <h3>
                                        <a href="#">IVR Service</a>
                                    </h3>
                                    <p>

                                        New generation call center web service platform
                                        <hr/>
                                        <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/1200px-Vodafone_2017_logo.svg.png"} style={{height:"60px", width:"auto"}}/>

                                    </p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13">
                    <img src="assets/img/shape/13.svg" alt="image" />
                </div>
                <div className="shape15">
                    <img src="assets/img/shape/13.svg" alt="image" />
                </div>
            </section>
        );
    }
}

export default Projects;