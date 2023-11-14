import React, { useState, useRef } from 'react';
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


function DeliveryGroups({ handleCartButtonClick }) {

    const refDiv = useRef();

    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const [zoomViewActive, setZoomViewActive] = useState(false);

    const [zoomViewItem, setZoomViewItem] = useState(null);

    const [zoomPositionY, setZoomPositionY] = useState(0);

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

          // itemPosY ES LA POSICION VERTICAL EN PIXELS DEL MENU ITEM RESPECTO DEL LIMITE SUPERIOR DEL VIEWPORT
        // NOSOTROS DESEAMOS UBICAR EL COMPONENTE ZoomView EN LA MISMA POSICION VERTICAL DEL MENU ITEM
        // PARA LOGRAR ESO, RESTAMOS LA POSICION DEL MENU ITEM DE LA POSICION DEL DIV MenuGroup PARA QUE NOS DE LA POSICION DEL ITEM RESPECTO A SU PADRE MenuGroup, Y ASIGNAR ESA POSICION A LA PROPIEDAD CSS top, PARA UBICAR EL ZoomView ADECUADAMENTE

        const parentTop = refDiv.current.getBoundingClientRect().top;

        const parentBottom = refDiv.current.getBoundingClientRect().bottom;

        const parentHeight = parentBottom - parentTop;

        setZoomPositionY(Number.parseFloat(parentHeight / 4));

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
        <StyledContainer ref={refDiv}>
            { orderItemModalOpen && orderItem ? <OrderModal item={orderItem} handleClose={handleCloseOrder} /> : null }
            { zoomViewActive ? <ZoomView item={zoomViewItem} handleCloseZoom={handleCloseZoomView} positionY={zoomPositionY} /> : null }
            <DeliveryGroupSelection groups={groupsArray} handleSelected={handleSelectedGroup} />
            { selectedGroupId ?
                (
                    <StyledSplitContainer>
                        <DeliveryGroupDetails groupId={selectedGroupId} handleOpenZoom={handleOpenZoomView} handleOrderButtonClick={handleOrderButtonClick} /> 
                        <MiniCart user={loggedUser} handleCartButtonClick={handleCartButtonClick} />
                    </StyledSplitContainer>
                ) : null
            }        
        </StyledContainer>
    );
}

export default DeliveryGroups;
