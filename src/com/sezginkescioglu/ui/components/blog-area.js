import React from 'react';

function BlogArea(props) {
    return (
        <section className="blog-area extra-pb ptb-110" id={"latest-news"}>
            <div className="container">
                <div className="section-title">
                    <div className="content">
                        <span>Latest News</span>
                        <h2>Our Latest Insights Are On Top All Times</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra
                            maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className="image">
                        <img src="assets/img/section-title/5.png" alt="image" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post sticky">
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>August 16, 2021</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">Making the Cloud More Sustainable</a>
                                </h3>
                            </div>
                        </div>
                        <div className="single-blog-post">
                            <div className="entry-thumbnail">
                                <a href="#">
                                    <img src="https://www.sentia.ca/Portals/0/EasyDNNNews/170/600600p1133EDNmainimg-article171.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>March 15, 2023</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">Secure Access Service Edge (SASE)</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="entry-thumbnail">
                                <a href="#">
                                    <img src="https://i.morioh.com/2021/10/04/1bc3be10.webp" alt="image" />
                                </a>
                            </div>
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>August 18, 2021</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">Kubernetes and Blockchain</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="single-blog-post link">
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>August 01, 2021</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">Cloud Workload Analysis, How to Determine the Configuration</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post quote">
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>August 08, 2021</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">More Emphasis on Cloud Security</a>
                                </h3>
                            </div>
                        </div>
                        <div className="single-blog-post">
                            <div className="entry-thumbnail">
                                <a href="#">
                                    <img src="https://www.cloudtern.com/wp-content/uploads/2021/06/why-is-cloud-native-app-development-the-future-of-it.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>August 15, 2021</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="#">Cloud Native Architecture, The Future of Development</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
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
            <div className="shape14">
                <img src="assets/img/shape/13.svg" alt="image" />
            </div>
        </section>
    );
}

export default BlogArea;