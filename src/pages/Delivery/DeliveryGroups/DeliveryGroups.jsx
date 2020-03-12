import React, { useState } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import DeliveryGroupSelection from '../DeliveryGroupSelection/DeliveryGroupSelection';
import DeliveryGroupDetails from '../DeliveryGroupDetails/DeliveryGroupDetails';

import * as queries from '../../../graphql/queries';

import ZoomView from '../../Menu/ZoomView';

import Loading from '../../../components/layout/Loading/Loading';

import FetchError from '../../../components/layout/FetchError/FetchError';




const StyledContainer = styled.div`

    width: 100%;
    position: relative;

`;


function DeliveryGroups() {

    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const [zoomViewActive, setZoomViewActive] = useState(false);

    const [zoomViewItem, setZoomViewItem] = useState(null);

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


    return (
        <StyledContainer>
            { zoomViewActive ? <ZoomView item={zoomViewItem} handleCloseZoom={handleCloseZoomView} /> : null }
            <DeliveryGroupSelection groups={groupsArray} handleSelected={handleSelectedGroup} />
            { selectedGroupId ? <DeliveryGroupDetails groupId={selectedGroupId} handleOpenZoom={handleOpenZoomView} /> : null }  
        </StyledContainer>
    );
}

export default DeliveryGroups;
