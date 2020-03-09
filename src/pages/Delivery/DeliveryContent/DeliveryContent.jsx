import React from 'react';
import './DeliveryContent.scss';
import { useQuery } from '@apollo/client';

import UserStatusBox from '../UserStatusBox/UserStatusBox';

import * as localQueries from '../../../local-state/queries';


function DeliveryContent() {

    const {data: { userState }} = useQuery(localQueries.GET_USER_STATE);

    const {
        isLoggedIn,
        loggedUser
    } = userState;

    const handleLogOut = () => {




    };

    const handleCart = () => {




    };

    return (
        <div id="content-point" className="delivery-content-container">
               <UserStatusBox user={loggedUser} handleLogoutButton={handleLogOut} handleCartButton={handleCart} />
               HELLO!!!
        </div>
    );
}

export default DeliveryContent;
