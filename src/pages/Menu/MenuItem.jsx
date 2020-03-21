import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';


const StyledContainer = styled.div`
    width: 100%;
    max-width: 20rem;
    grid-row: auto;
    grid-column: auto;
      

`;

const StyledImageContainer = styled.div`

    width: 100%;
    max-height: 20rem;
    position: relative;
    overflow: hidden;


`;

const StyledImage = styled.img`
    
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 5px;
    opacity: 1;

    div:hover > & {
        opacity: 0.6;
    }
   

`;

const StyledTitle = styled.h6`
    text-align: center;
    padding: 20px 0;

    font-size: 1.8rem;
    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;
    color: ${props => props.theme.colorBrownDark};
    letter-spacing: 1px;

    @media (max-width:750px) {

        padding: 10px 0;

    }

`;

const StyledDescription = styled.p`

    font-size: 1.4rem;
    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;

    color: ${props => lighten(.2, 'black') };


`;

const StyledPriceSpan = styled.span`

    background-color: transparent;
    position: absolute;
    top: 86%;
    left: -2px;
    font-size: 2rem;  
    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
   
`;

const StyledZoomSpan = styled.span`
    
    background-color: transparent;
    position: absolute;
    width: 4rem;
    height: 4rem;
    left: 50%;
	margin-left: -2rem;	
	top: 50%;
	margin-top: -2rem;
    color: white;
    font-size: 1.8rem;
    visibility: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${props => props.theme.mainTransition};
    
    div:hover > & {

        visibility: visible;
        cursor: pointer;
        transform: scale(1.1);
    }

`;


function MenuItem({ item, handleOpenZoom }) {

   
    const handleZoomClick = (e) => {

        handleOpenZoom(item);

    };


    return (
        <StyledContainer>
            <StyledImageContainer>
                <StyledImage src={item.imageURL}/>
                <StyledPriceSpan><Badge variant="warning">$ {item.price.toFixed(2)}</Badge> </StyledPriceSpan>
                <StyledZoomSpan onClick={handleZoomClick}><FontAwesomeIcon icon="search-plus" size="lg" /></StyledZoomSpan>                
            </StyledImageContainer>            
            <StyledTitle>{ item.name }</StyledTitle>
            <StyledDescription>{ item.description }</StyledDescription>            
        </StyledContainer>
    );
}

export default MenuItem;
