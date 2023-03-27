import React from 'react';
import MainLayout from "../layouts/main-layout";
import BannerBig from "../components/banner-big";
import Services from "../components/services";
import About from "../components/about";
import WhyChooseUs from "../components/why-choose-us";
import FunFacts from "../components/fun-facts";
import Cta from "../components/cta";
import Projects from "../components/projects";
import Partners from "../components/partners";
import Testimonials from "../components/testimonials";
import BlogArea from "../components/blog-area";

function Home(props) {
    return (
        <MainLayout>
            <BannerBig/>
            <Services/>
            <About/>
            <WhyChooseUs/>
            <Cta/>
            <FunFacts/>
            <Projects/>
            <Testimonials/>
            <Partners/>
            <BlogArea/>
        </MainLayout>
    );
}

export default Home;