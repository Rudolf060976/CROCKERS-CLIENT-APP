import React, { useEffect, useRef } from 'react';
import './Menu.scss';
import Header from '../../components/layout/Header/Header';
import menuImage from '../../assets/images/menu2.jpg';
import Hero from './Hero';
import Footer from '../../components/layout/Footer/Footer';
import MenuGroup from './MenuGroup';


function Menu() {

    const scrollToRef = useRef();

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const handleBannerButtonClick = () => {
        
        const scrollPosY = scrollToRef.current.getBoundingClientRect().top;

        window.scrollTo(0,scrollPosY);

    };


    const bannerProps = {
		title: "OUR MENU",
		subtitle: "More of Everything you want",
		buttonTitle: "SEE THE MENU",
		handleButtonClick: handleBannerButtonClick
	};

    return (
        <main className="menu-container">
            <Header />
            <Hero imageObject={menuImage} animate bannerProps={bannerProps} bottomBorderColor='#163237' />
            <MenuGroup refDiv={scrollToRef} />            
            <Footer />
        </main>
    );
}

export default Menu;