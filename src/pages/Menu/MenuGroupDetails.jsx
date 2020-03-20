import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import * as queries from '../../graphql/queries';

import MenuItem from './MenuItem';

import Loading from '../../components/layout/Loading/Loading';

import FetchError from '../../components/layout/FetchError/FetchError';


const StyledContainer = styled.div`
    width:70%;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
    "item item item item";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(1, auto);
    grid-auto-flow: row;
    gap: 5rem;
    justify-items: center;
    justify-content: center;
    padding:0 2rem 5rem 2rem;
    

    @media (max-width:1100px) {

        width:90%;

    }

    @media (max-width:800px) {

        width:100%;

    }

    @media (max-width:750px) {

        width:90%;
        grid-template-areas: 
        "item item item";
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(1, auto);

    }

`;




function MenuGroupDetails({ groupId, ...itemProps }) {


    const {loading, error, data} = useQuery(queries.GET_MENU_ITEMS_BY_GROUP, {
        variables: {
            groupId
        }
    });

    if (loading) return <Loading />;
    if (error) return <FetchError />;
    
    const { getMenuItemsByGroup: { nodes: itemsArray } } = data;


    const itemsContent = itemsArray.map(item => {

        return (
            <MenuItem key={item.id} item={item} { ...itemProps } />
        );

    });


    
    return (
        <StyledContainer>
          { itemsContent }  
        </StyledContainer>
    );
}

export default MenuGroupDetails;
