import React, { useEffect } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import './DeliveryHome.scss';

import Header from '../../components/layout/Header/Header';
import SpecialHero from './SpecialHero';
import Hero from '../../components/layout/Hero/Hero';

import DeliveryContent from './DeliveryContent/DeliveryContent';

import * as queries from '../../graphql/queries';
import * as localQueries from '../../local-state/queries';
import * as localMutations from '../../local-state/mutations';
import * as queryFunctions from '../../Utilities/queryFunctions';

import deliveryImage from '../../assets/images/Delivery_Main.jpg';

function DeliveryHome() {

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
   
        
    }, []);  // SOLO SE EJECUTA AL MONTAR EL COMPONENTE


    const handleSpecialBannerButtonClick = () => {

        openLogin();

    };

    const handleSpecialBannerButton2Click = () => {

        openSignUp();

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
            buttonTitle: "ORDER NOW",
            linkTo: "#content-point"
        };

    }

   


    return (
        <main className="delivery-container">
            <Header />            
            { isLoggedIn ? <Hero imageObject={deliveryImage} animate bannerProps={bannerProps} /> :
            <SpecialHero imageObject={deliveryImage} animate bannerProps={specialBannerProps} bottomBorderColor='#163237' /> }
            { isLoggedIn ? <DeliveryContent /> : null }                 
        </main>
    );



}

export default DeliveryHome;
