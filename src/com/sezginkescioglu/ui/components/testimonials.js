import React, {Component} from 'react';

class Testimonials extends Component {

    componentDidMount() {
        window.WebsiteUtil.initTestimonialOwlCarousel();
    }

    render() {
        return (
            <section className="testimonials-area">
                <div className="container-fluid p-0">
                    <div className="testimonials-inner-area jarallax" data-jarallax='{"speed": 0.3}'>
                        <div className="testimonials-inner-content">
                            <div className="testimonials-slides owl-carousel owl-theme">
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra.</p>
                                    <div className="client-info">
                                        <img src="https://i1.rgstatic.net/ii/profile.image/1038292254474242-1624559572316_Q128/Oezguer-Armagan.jpg" alt="image" />
                                        <h3>Özgür ARMAĞAN</h3>
                                        <span>Director of Information Technologies | Digital Transformation Leader | Senior Software Engineering Manager & Technology Strategist</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra.</p>
                                    <div className="client-info">
                                        <img src="https://media.licdn.com/dms/image/C4D03AQFKUcM-DtwK9w/profile-displayphoto-shrink_200_200/0/1578219503797?e=1684368000&v=beta&t=xLgu0dz08R7DIRto0u7bv4mkee_v3RjViisPoteEeUA" alt="image" />
                                        <h3>Korhan Taşkın REYŞAN</h3>
                                        <span>Solutions Architect</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra.</p>
                                    <div className="client-info">
                                        <img src="https://media.licdn.com/dms/image/C5603AQH1mOat7CbdtQ/profile-displayphoto-shrink_200_200/0/1517060642254?e=1684368000&v=beta&t=GY5Wkrji4NWzOP-R0pUU_smMWb39ZebD1niUj0MfkLw" alt="image" />
                                        <h3>Togan ÇAKMAK</h3>
                                        <span>Information Technology Manager</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra.</p>
                                    <div className="client-info">
                                        <img src="https://media.licdn.com/dms/image/C5103AQGv2EeLQ2-Utg/profile-displayphoto-shrink_200_200/0/1516288127297?e=1684368000&v=beta&t=Buam2u1epQO9FZHZthH3D8V-f57utA3OlXe1ZbyHg3I" alt="image" />
                                        <h3>Mehmet Mert İLKİN</h3>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                        Risus commodo viverra.</p>
                                    <div className="client-info">
                                        <img src="https://media.licdn.com/dms/image/C4D03AQFJHGXq0SO3gQ/profile-displayphoto-shrink_200_200/0/1589022175164?e=1684368000&v=beta&t=wLVOV3HL_-l-uptvslzuwmOEVgOM0XAfOun5lGU6wxw" alt="image" />
                                        <h3>Funda Kübra CİMİLLİ</h3>
                                        <span>Senior Software Engineer | Software Architect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-map">
                                <img src="assets/img/circle-map3.png" alt="image" />
                            </div>
                        </div>
                        <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="video-btn popup-youtube">
                            <i className="flaticon-play-button"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;