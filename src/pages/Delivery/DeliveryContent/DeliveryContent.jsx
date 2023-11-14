import React, { useState } from 'react';
import './DeliveryContent.scss';
import { useQuery, useMutation } from '@apollo/client';

import UserStatusBox from '../UserStatusBox/UserStatusBox';

import * as localQueries from '../../../local-state/queries';
import * as localMutations from '../../../local-state/mutations';

import DeliveryGroups from '../DeliveryGroups/DeliveryGroups';

import { Redirect } from 'react-router-dom';




function DeliveryContent() {

    const [redirectToProcess, setRedirectToProcess] = useState(false);

    const {data: { userState }} = useQuery(localQueries.GET_USER_STATE);

    const [logOut] = useMutation(localMutations.SET_LOGOUT_USER);

    const {
        isLoggedIn,
        loggedUser
    } = userState;

    const handleLogOut = () => {

       
        logOut();

        localStorage.removeItem('x-token');

    };

    const handleCart = () => {

        setRedirectToProcess(true);

    };

    const handleProfile = () => {



    };

    return (
        <>
            { redirectToProcess ? (<Redirect to="/process_order" push={true} />) : (
                <div className="delivery-content-container" id="delivery-scroll-point">
                    <UserStatusBox user={loggedUser} handleLogoutButtonClick={handleLogOut} handleCartButtonClick={handleCart} cartVisible handleProfileButtonClick={handleProfile} />
                    <DeliveryGroups handleCartButtonClick={handleCart} />                            
                </div>
            )
            }        
        </>
    );
}

export default DeliveryContent;
