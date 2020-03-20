import React from 'react';
import './DeliveryContent.scss';
import { useQuery, useMutation } from '@apollo/client';

import UserStatusBox from '../UserStatusBox/UserStatusBox';

import * as localQueries from '../../../local-state/queries';
import * as localMutations from '../../../local-state/mutations';

import DeliveryGroups from '../DeliveryGroups/DeliveryGroups';




function DeliveryContent({ refDiv }) {

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




    };

    return (
        <div className="delivery-content-container" ref={refDiv}>
            <UserStatusBox user={loggedUser} handleLogoutButton={handleLogOut} handleCartButton={handleCart} />
            <DeliveryGroups />                            
        </div>
    );
}

export default DeliveryContent;
