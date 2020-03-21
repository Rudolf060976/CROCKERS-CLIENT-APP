import React, { useState } from 'react';

import styled from 'styled-components';

import * as queries from '../../graphql/queries';

import { useQuery } from '@apollo/client';

import Loading from '../../components/layout/Loading/Loading';

import FetchError from '../../components/layout/FetchError/FetchError';

import MenuGroupSelection from './MenuGroupSelection';

import MenuGroupDetails from './MenuGroupDetails';

import ZoomView from './ZoomView';




const StyledContainer = styled.div`

    width: 100%;
    position: relative;
    transform: translateZ(1px);
    background-color: white;
    border-top: solid 2px ${props => props.theme.colorMainGreenDark};
`;



function MenuGroup() {

    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const [zoomViewActive, setZoomViewActive] = useState(false);

    const [zoomViewItem, setZoomViewItem] = useState(null);


    const {loading, error, data} = useQuery(queries.GET_ALL_MENU_GROUPS);

    
    
    if (loading) return <Loading />;
	if (error) return <FetchError />;

    const { getAllMenuGroups: groupsArray } = data;
    
    
    const handleSelectedGroup = groupId => {

        setSelectedGroupId(groupId);

    };

    const handleOpenZoomView = (item) => {

        setZoomViewItem(item);

        setZoomViewActive(true);

    };

    const handleCloseZoomView = () => {

        setZoomViewActive(false);

    };

    return (
        <StyledContainer>
            { zoomViewActive ? <ZoomView item={zoomViewItem} handleCloseZoom={handleCloseZoomView} /> : null }            
            <MenuGroupSelection groups={groupsArray} handleSelected={handleSelectedGroup} />
            { selectedGroupId ? <MenuGroupDetails groupId={selectedGroupId} handleOpenZoom={handleOpenZoomView} /> : null }            
        </StyledContainer>
    );
}

export default MenuGroup;
