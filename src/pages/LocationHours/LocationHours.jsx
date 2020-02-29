import React from 'react';

import './LocationHours.scss';

import Header from '../../components/layout/Header/Header';

import Hero from './Hero';

import locationImage from '../../assets/images/location.jpg';


function LocationHours() {

    const bannerProps = {
		title: "LOCATION & HOURS",
		subtitle: "Waiting for you 6 days a week",
		buttonTitle: "OUR  FOOD",
		linkTo: "/menu"
	};

    return (
        <main className="location-container">
            <Header />
            <Hero imageObject={locationImage} animate bannerProps={bannerProps} />
        </main>
    );
}

export default LocationHours;
