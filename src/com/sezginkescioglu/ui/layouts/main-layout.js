import React from 'react';
import Menu from "../components/menu";
import Footer from "../components/footer";

function MainLayout(props) {
    return (
        <div>
            <Menu />
            {props.children}
            <Footer/>
        </div>
    );
}

export default MainLayout;