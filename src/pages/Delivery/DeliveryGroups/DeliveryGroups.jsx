import React, { useState } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import DeliveryGroupSelection from '../DeliveryGroupSelection/DeliveryGroupSelection';
import DeliveryGroupDetails from '../DeliveryGroupDetails/DeliveryGroupDetails';

import * as queries from '../../../graphql/queries';

import * as localQueries from '../../../local-state/queries';

import ZoomView from '../../Menu/ZoomView';

import Loading from '../../../components/layout/Loading/Loading';

import FetchError from '../../../components/layout/FetchError/FetchError';

import MiniCart from '../MiniCart/MiniCart';

import OrderModal from '../OrderModal/OrderModal';



const StyledContainer = styled.div`

    width: 100%;
    position: relative;

`;

const StyledSplitContainer = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;


function DeliveryGroups() {

    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const [zoomViewActive, setZoomViewActive] = useState(false);

    const [zoomViewItem, setZoomViewItem] = useState(null);

    const [orderItemModalOpen, setOrderItemModalOpen] = useState(false);
    
    const [orderItem, setOrderItem] = useState(null);

    const {data: { userState:{ loggedUser } }} = useQuery(localQueries.GET_USER_STATE);

    const {loading, error, data} = useQuery(queries.GET_ALL_MENU_GROUPS);

   

    if (loading) return <Loading />;
	if (error) return <FetchError />;

    const { getAllMenuGroups: groupsArray } = data;

    const handleCloseZoomView = () => {

        setZoomViewActive(false);

    };

    const handleSelectedGroup = groupId => {

        setSelectedGroupId(groupId);

    };

    const handleOpenZoomView = (item) => {

        setZoomViewItem(item);

        setZoomViewActive(true);

    };

    const handleOrderButtonClick = (item) => {

        setOrderItem(item);

        setOrderItemModalOpen(true);

    };

    const handleCloseOrder = () => {

        setOrderItem(null);

        setOrderItemModalOpen(false);

    };


    return (
        <StyledContainer>
            { orderItemModalOpen ? <OrderModal item={orderItem} handleClose={handleCloseOrder} /> : null }
            { zoomViewActive ? <ZoomView item={zoomViewItem} handleCloseZoom={handleCloseZoomView} /> : null }
            <DeliveryGroupSelection groups={groupsArray} handleSelected={handleSelectedGroup} />
            { selectedGroupId ?
                (
                    <StyledSplitContainer>
                        <DeliveryGroupDetails groupId={selectedGroupId} handleOpenZoom={handleOpenZoomView} handleOrderButtonClick={handleOrderButtonClick} /> 
                        <MiniCart user={loggedUser} />
                    </StyledSplitContainer>
                ) : null
            }        
        </StyledContainer>
    );
}

export default DeliveryGroups;
