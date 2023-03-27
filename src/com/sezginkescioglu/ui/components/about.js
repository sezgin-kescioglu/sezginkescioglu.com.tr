import React from 'react';

function About(props) {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="https://bmmagazine.co.uk/wp-content/uploads/2015/04/online-trading.jpg"  style={{borderRadius:"20px"}}  alt="about us" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span>About Us</span>
                            <h2>We have been growing in the field of technology since 2015</h2>
                            <p>We offer excellent experiences to your company by following the latest technological developments.</p>
                            <a href="#" className="btn btn-primary">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;