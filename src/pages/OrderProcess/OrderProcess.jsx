import React,{ useState, useEffect } from 'react';
import { useApolloClient, useQuery, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import './OrderProcess.scss';
import Header from '../../components/layout/Header/Header';
import UserStatusBox from '../Delivery/UserStatusBox/UserStatusBox';

import * as queryFunctions from '../../Utilities/queryFunctions';

import * as localQueries from '../../local-state/queries';
import * as localMutations from '../../local-state/mutations';
import ProcessHeader from './ProcessHeader/ProcessHeader';
import ProcessContent from './ProcessContent/ProcessContent';



function OrderProcess() {

    const client = useApolloClient();

    const [step, setStep] = useState(1); // 1: Cart 2: Shipping 3:Payment 4: Completed

    const { data: { userState } } = useQuery(localQueries.GET_USER_STATE);

    const [logOut] = useMutation(localMutations.SET_LOGOUT_USER);

    const {
        isLoggedIn,
        loggedUser
    } = userState;

    useEffect(() => {
        
        queryFunctions.CALL_ME_AND_UPDATE_LOCAL_STATE(client);

    }, []);


    const handleLogout = () => {

        logOut();

        localStorage.removeItem('x-token');

    };
    
    const handleProfile = () => {
    
    
    
    };

    const content = () => {

        return(
            <main className="order-process-container">
                <Header />
                <UserStatusBox user={loggedUser} handleLogoutButtonClick={handleLogout} handleProfileButtonClick={handleProfile} />
                <ProcessHeader step={step} />
                <ProcessContent step={step} />
            </main>
        );
    };

    return (
        <>
            { isLoggedIn ? content() : <Redirect to="/delivery" push={true} /> }
        </>
        
    );
}

export default OrderProcess;
