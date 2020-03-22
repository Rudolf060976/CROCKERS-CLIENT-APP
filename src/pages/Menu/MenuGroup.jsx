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
    z-index: 300;
    background-color: white;
    border-top: solid 2px ${props => props.theme.colorMainGreenDark};
    margin-top: -120px;
    transform: translateZ(1px);
    position: relative;
        
`;



function MenuGroup({ refDiv }) {

    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const [zoomViewActive, setZoomViewActive] = useState(false);

    const [zoomViewItem, setZoomViewItem] = useState(null);

    const [zoomPositionY, setZoomPositionY] = useState(0);


    const {loading, error, data} = useQuery(queries.GET_ALL_MENU_GROUPS);

    
    
    if (loading) return <Loading />;
	if (error) return <FetchError />;

    const { getAllMenuGroups: groupsArray } = data;
    
    
    const handleSelectedGroup = groupId => {

        setSelectedGroupId(groupId);

    };

    const handleOpenZoomView = (item, itemPosY) => {

        // itemPosY ES LA POSICION VERTICAL EN PIXELS DEL MENU ITEM RESPECTO DEL LIMITE SUPERIOR DEL VIEWPORT
        // NOSOTROS DESEAMOS UBICAR EL COMPONENTE ZoomView EN LA MISMA POSICION VERTICAL DEL MENU ITEM
        // PARA LOGRAR ESO, RESTAMOS LA POSICION DEL MENU ITEM DE LA POSICION DEL DIV MenuGroup PARA QUE NOS DE LA POSICION DEL ITEM RESPECTO A SU PADRE MenuGroup, Y ASIGNAR ESA POSICION A LA PROPIEDAD CSS top, PARA UBICAR EL ZoomView ADECUADAMENTE

        const parentPosY = refDiv.current.getBoundingClientRect().top;

        setZoomPositionY(Number.parseFloat(itemPosY) - Number.parseFloat(parentPosY));

        setZoomViewItem(item);

        setZoomViewActive(true);

    };

    const handleCloseZoomView = () => {

        setZoomViewActive(false);

    };

    return (
        <StyledContainer ref={refDiv}>
            { zoomViewActive ? <ZoomView item={zoomViewItem} handleCloseZoom={handleCloseZoomView} positionY={zoomPositionY} /> : null }            
            <MenuGroupSelection groups={groupsArray} handleSelected={handleSelectedGroup} />
            { selectedGroupId ? <MenuGroupDetails groupId={selectedGroupId} handleOpenZoom={handleOpenZoomView} /> : null }            
        </StyledContainer>
    );
}

export default MenuGroup;
