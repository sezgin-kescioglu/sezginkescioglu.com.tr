import React, {Component} from 'react';

class BannerBig extends Component {

    componentDidMount() {
        window.WebsiteUtil.youtubePopup();
    }

    render() {
        return (
            <div className="main-banner" id={"about-us"}>
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-7 col-md-12 p-0">
                            <div className="main-banner-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h1>Solve Business Challenges With IT</h1>
                                        <p>
                                            Optimize your work with the systems we built on cloud systems. Easily scale and manage your services with
                                            our IBM Openshift and Kubernetes cloud technology solutions. Let us adapt your digital services to your needs with the pay-as-you-go method.
                                        </p>
                                        <div className="btn-box">
                                            <a href="#" className="btn btn-primary">Read More</a>
                                            <a href="#" className="btn btn-light">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 p-0">
                            <div className="main-banner-image">
                                <img src="assets/img/banner-img1.jpg" alt="image"/>
                                <a href="https://www.youtube.com/watch?v=bk7McNUjWgw"
                                   className="video-btn popup-youtube">
                                    <i className="flaticon-play-button"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="banner-inner-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-inner-box">
                                    <div className="icon">
                                        <i className="flaticon-branch"></i>
                                    </div>
                                    <h3>
                                        <a href="#">Technology Consulting <i className="flaticon-add-1"></i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-inner-box">
                                    <div className="icon">
                                        <i className="flaticon-programming-code"></i>
                                    </div>
                                    <h3>
                                        <a href="#">Cloud Services <i className="flaticon-add-1"></i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 offset-lg-0 offset-md-0 offset-sm-3">
                                <div className="single-inner-box">
                                    <div className="icon">
                                        <i className="flaticon-tools-and-utensils"></i>
                                    </div>
                                    <h3>
                                        <a href="#">Development <i className="flaticon-add-1"></i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <img src="assets/img/circle-map2.png" alt="image"/>
                        </div>
                    </div>
                </div>
                <div className="shape1">
                    <img src="assets/img/shape/1.png" alt="image"/>
                </div>
                <div className="shape2">
                    <img src="assets/img/shape/2.png" alt="image"/>
                </div>
                <div className="shape3">
                    <img src="assets/img/shape/3.png" alt="image"/>
                </div>
                <div className="shape4">
                    <img src="assets/img/shape/4.png" alt="image"/>
                </div>
                <div className="shape5">
                    <img src="assets/img/shape/5.png" alt="image"/>
                </div>
                <div className="shape6">
                    <img src="assets/img/shape/6.png" alt="image"/>
                </div>
                <div className="shape7">
                    <img src="assets/img/shape/7.png" alt="image"/>
                </div>
                <div className="shape8">
                    <img src="assets/img/shape/8.png" alt="image"/>
                </div>
                <div className="shape9">
                    <img src="assets/img/shape/9.png" alt="image"/>
                </div>
                <div className="shape10">
                    <img src="assets/img/shape/10.png" alt="image"/>
                </div>
                <div className="shape11">
                    <img src="assets/img/shape/11.png" alt="image"/>
                </div>
                <div className="shape12">
                    <img src="assets/img/shape/12.png" alt="image"/>
                </div>
            </div>
        );
    }
}

export default BannerBig;