import React, { useEffect, useRef } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import './DeliveryHome.scss';

import Header from '../../components/layout/Header/Header';
import SpecialHero from './SpecialHero';
import Hero from './Hero';


import DeliveryContent from './DeliveryContent/DeliveryContent';

import * as queries from '../../graphql/queries';
import * as localQueries from '../../local-state/queries';
import * as localMutations from '../../local-state/mutations';
import * as queryFunctions from '../../Utilities/queryFunctions';

import deliveryImage from '../../assets/images/Delivery_Main.jpg';
import Footer from '../../components/layout/Footer/Footer';

function DeliveryHome() {

    const scrollToRef = useRef();

    const client = useApolloClient();
    
    const { data: userStateData } = useQuery(localQueries.GET_USER_STATE);

    const [openLogin] = useMutation(localMutations.SET_LOGIN_MODAL_OPEN);

    const [openSignUp] = useMutation(localMutations.SET_SIGNUP_MODAL_OPEN);

    const { userState: {
        isLoggedIn,
        loggedUser
    }} = userStateData;

  
    useEffect(() => {
        // ENVIAMOS UN ME AL SERVIDOR PARA VERIFICAR SI ESTAMOS AUTENTICADOS Y ACTUALIZAMOS EL LOCAL STATE

        queryFunctions.CALL_ME_AND_UPDATE_LOCAL_STATE(client);
        
        window.scrollTo(0,0);
        
    }, []);  // SOLO SE EJECUTA AL MONTAR EL COMPONENTE


    const handleSpecialBannerButtonClick = () => {

        openLogin();

    };

    const handleSpecialBannerButton2Click = () => {

        openSignUp();

    };

    const handleBannerButtonClick = () => {
        
        const scrollPosY = scrollToRef.current.getBoundingClientRect().top;

        window.scrollTo(0,scrollPosY);

    };

    const specialBannerProps = {
        title: "DELIVERY AREA",
		subtitle: "Please Login to your Account to enjoy our services",
		buttonTitle: "LOGIN",
        handleButtonClick: handleSpecialBannerButtonClick,
        handleButton2Click: handleSpecialBannerButton2Click
    };

    let bannerProps = {};

    if(isLoggedIn) {

        bannerProps = {
            title: "DELIVERY AREA",
            subtitle: "Welcome back " + loggedUser.fullname + "!",
            buttonTitle: "START NOW",
            handleButtonClick: handleBannerButtonClick
        };

    }

   


    return (
        <main className="delivery-container">
            <Header />            
            { isLoggedIn ? <Hero imageObject={deliveryImage} animate bannerProps={bannerProps} /> :
            <SpecialHero imageObject={deliveryImage} animate bannerProps={specialBannerProps} bottomBorderColor='#163237' /> }
            { isLoggedIn ? <DeliveryContent refDiv={scrollToRef} /> : null }    
            <Footer />             
        </main>
    );



}

export default DeliveryHome;
