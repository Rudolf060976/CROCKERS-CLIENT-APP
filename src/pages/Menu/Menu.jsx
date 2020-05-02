import React, { useEffect } from 'react';
import './Menu.scss';
import Header from '../../components/layout/Header/Header';
import menuImage from '../../assets/images/menu2.jpg';
import Hero from './Hero';
import Footer from '../../components/layout/Footer/Footer';
import MenuGroup from './MenuGroup';
import { Events, scrollSpy } from 'react-scroll';


function Menu() {
    
    useEffect(() => {
        
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
       
        scrollSpy.update();


        return () => {
            
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        }
    },[]);

    const bannerProps = {
		title: "OUR MENU",
		subtitle: "More of Everything you want",
		buttonTitle: "SEE THE MENU"
	};

    return (
        <main className="menu-container">
            <Header />
            <Hero imageObject={menuImage} animate bannerProps={bannerProps} bottomBorderColor='#163237' />
            <MenuGroup />            
            <Footer />
        </main>
    );
}

export default Menu;