import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import * as queries from '../../../graphql/queries';

import Loading from '../../../components/layout/Loading/Loading';

import FetchError from '../../../components/layout/FetchError/FetchError';

import MenuItem from '../MenuItem/MenuItem';

import NavigationControl from '../../../components/NavigationControl/NavitationControl';

const StyledContainer = styled.div`
    
    flex: 1 1 60%;
         
    display: flex;

    justify-content: center;    

`;

const StyledContainer2 = styled.div`

    flex: 0 1 80%;

`;

const StyledList = styled.ul`

    width: 100%;
   
`;


function DeliveryGroupDetails({ groupId, handleOpenZoom, handleOrderButtonClick }) {

    const [currentPage, setCurrentPage] = useState(1);
     
    useEffect(() => {
        // CADA VEZ QUE CAMBIE EL groupId SE VA A PASAR A LA PRIMERA PAGINA Y SE EJECUTA LA CONSULTA INICIAL
        setCurrentPage(1);

        refetch({
            groupId,
            first: 5,
            last: null,
            before: null,
            after: null
        });

    }, [groupId]);


    const {loading, error, data, fetchMore, refetch, networkStatus } = useQuery(queries.GET_MENU_ITEMS_BY_GROUP, {
        variables: {
            groupId,
            first: 5
        },
        notifyOnNetworkStatusChange: true
    });
   
    if (networkStatus === 3) return <Loading height="60rem" />;   
    if (loading) return <Loading height="60rem" />;
    if (error) return <FetchError />;
       
   
       
    const {
        nodes: itemsArray,
        totalCount,
        pageInfo,
    } = data.getMenuItemsByGroup;
    
    const {
        endCursor,
        hasNextPage,
        hasPreviousPage,
        startCursor
    } = pageInfo;

    const wholePart = Math.floor(totalCount / 5);

    const remainder = totalCount % 5;

    const totalPages = remainder > 0 ? wholePart + 1 : wholePart;
   
    const itemsContent = itemsArray.map(item => {

        return (
            <MenuItem key={item.id} item={item} handleOpenZoom={handleOpenZoom} handleOrderButtonClick={handleOrderButtonClick} />
        );

    });

    const handlePreviosPageClick = () => {

        if (hasPreviousPage) {

            fetchMore({
                variables: {
                    groupId,
                    first: null, // NECESARIO YA QUE AL PARECER fetchMore y refetch HACEN UN MERGE CON LAS VARIABLES INICIALES
                    last: 5,
                    before: startCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) =>{

                    const totalCount2 = previousResult.getMenuItemsByGroup.totalCount;

                    return {
                        getMenuItemsByGroup: {
                            __typename: previousResult.getMenuItemsByGroup.__typename,
                            totalCount: totalCount2,
                            pageInfo: fetchMoreResult.getMenuItemsByGroup.pageInfo,
                            nodes: [...fetchMoreResult.getMenuItemsByGroup.nodes]
                        }
                    };
                }     
            });


            setCurrentPage(currentPage - 1);

        }



    };

    const handleNextPageClick = () => {
       
       
        if (hasNextPage) {

            fetchMore({
                variables: {
                    groupId,
                    first: 5,   // NECESARIO YA QUE AL PARECER fetchMore y refetch HACEN UN MERGE CON LAS VARIABLES INICIALES
                    last: null,
                    after: endCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) =>{
                   
                   
                    const totalCount2 = previousResult.getMenuItemsByGroup.totalCount;

                    return {
                        getMenuItemsByGroup: {
                            __typename: previousResult.getMenuItemsByGroup.__typename,
                            totalCount: totalCount2,
                            pageInfo: fetchMoreResult.getMenuItemsByGroup.pageInfo,
                            nodes: [...fetchMoreResult.getMenuItemsByGroup.nodes]
                        }
                    };
                }     
            });

            setCurrentPage(currentPage + 1);

        }

    };

    return (
        <StyledContainer>  
                <StyledContainer2>
                    <StyledList>
                        { itemsContent } 
                    </StyledList>
                    <NavigationControl currentPage={currentPage} totalPages={totalPages} handlePrevClick={handlePreviosPageClick} handleNextClick={handleNextPageClick} disablePrev={!hasPreviousPage} disableNext={!hasNextPage} />           
                </StyledContainer2>                 
        </StyledContainer>
    );
}

export default DeliveryGroupDetails;
