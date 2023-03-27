import React, {Component} from 'react';

class Menu extends Component {

    componentDidMount() {
        window.WebsiteUtil.mobileMenu();
    }

    render() {
        return (
            <div className="navbar-area">
                <div className="evolta-responsive-nav">
                    <div className="container">
                        <div className="evolta-responsive-menu">
                            <div className="logo black-logo">
                                <a href="index-2.html">
                                    {/*DARK LOGO*/}
                                    <img src="assets/img/logo/logo-green.PNG" alt="logo" />
                                </a>
                            </div>
                            <div className="logo white-logo">
                                <a href="index-2.html">
                                    {/*WHITE LOGO*/}
                                    <img src="assets/img/logo/logo-green.PNG" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evolta-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand black-logo" href="index-2.html">
                                {/*DARK LOGO*/}
                                <img src="assets/img/logo/logo-green.PNG" alt="logo" />
                            </a>
                            <a className="navbar-brand white-logo" href="index-2.html">
                                {/*WHITE LOGO*/}
                                <img src="assets/img/logo/logo-green.PNG" alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="#about-us" className="nav-link">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#solutions-products" className="nav-link">Products & Solutions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#our-projects" className="nav-link">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#technology-stack" className="nav-link">Tech Stack</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#latest-news" className="nav-link">Latest News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">Contact</a>
                                    </li>
                                </ul>
                                <div className="others-options">
                                    <a href="contact.html" className="btn btn-primary"><i className="fa fa-phone-square"></i> Get An Offer</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;