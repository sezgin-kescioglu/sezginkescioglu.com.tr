import React, {Component} from 'react';

class FunFacts extends Component {

    componentDidMount() {
        window.WebsiteUtil.initCharts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <section className="funfacts-area ptb-110 bg-f2feee">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="60"></div>
                                <span>Design</span>
                                <h3>Codes</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="75"></div>
                                <span>Our happy</span>
                                <h3>Clients</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="85"></div>
                                <span>Projects</span>
                                <h3>Design</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4 offset-lg-0 offset-md-0 offset-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="95"></div>
                                <span>Completed</span>
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;
