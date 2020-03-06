import React from 'react';
import { useQuery } from '@apollo/client';
import './DeliveryHome.scss';

import Header from '../../components/layout/Header/Header';
import SpecialHero from './SpecialHero';

import * as queries from '../../graphql/queries';

import deliveryImage from '../../assets/images/Delivery_Main.jpg';

function DeliveryHome() {

    const { data: meData } = useQuery(queries.ME);

    let me = null;

    if (meData) {

        me = meData.me;
    
    }

    const handleSpecialBannerButtonClick = () => {

        // ABRIR FORMULARIO LOGIN

    };

    const specialBannerProps = {
        title: "DELIVERY AREA",
		subtitle: "Please Login to your Account to enjoy our services",
		buttonTitle: "LOGIN",
		handleButtonClick: "/"
    };

    const bannerProps = {
        title: "OUR MENU",
		subtitle: "More of Everything you want",
		buttonTitle: "ORDER NOW",
		linkTo: "/"
    };


    return (
        <main className="delivery-container">
            <Header />
            { !me ? <SpecialHero imageObject={deliveryImage} animate bannerProps={specialBannerProps} bottomBorderColor='#163237' /> : null }
        </main>
    );



}

export default DeliveryHome;
