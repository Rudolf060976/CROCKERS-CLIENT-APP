import React, { useEffect } from 'react';

import './LocationHours.scss';

import Header from '../../components/layout/Header/Header';

import Hero from './Hero';

import locationImage from '../../assets/images/location.jpg';

import SEO from '../../components/SEO/seo';



function LocationHours() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const bannerProps = {
		title: "LOCATION & HOURS",
		subtitle: "Waiting for you 6 days a week",
		buttonTitle: "OUR  FOOD",
		linkTo: "/menu"
	};

    return (
        <main className="location-container">
            <SEO title="Location &amp; Hours" description="Where and When to visit us" />
            <Header />
            <Hero imageObject={locationImage} animate bannerProps={bannerProps} />
            <div id="location-div-helper"></div>
        </main>
    );
}

export default LocationHours;
