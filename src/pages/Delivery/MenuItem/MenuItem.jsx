import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';


const StyledContainer = styled.li`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 0;
    
`;

const StyledImageContainer = styled.div`

    position: relative;    

    flex: 0 0 100px;

`;

const StyledImage = styled.img`

    max-width: 100px;

    border-radius: 5px;

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


const StyledDescription = styled.div`

    flex: 1 1 40%;
    
    padding: 0 15px;

`;

const StyledName = styled.p`

    font-size: 1.6rem;
    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;
    color: ${props => props.theme.colorBrownDark};
    letter-spacing: 1px;
    /* font-weight: bold; */
    
`;

const StyledDetails = styled.p`

    font-size: 1.2rem;
    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;

    color: ${props => lighten(.2, 'black') };

`;


const StyledPrice = styled.p`

    flex: 0 0 auto;

    font-size: 1.2rem;

    padding: 0 20px;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;

    color: ${props => props.theme.colorBrownDark};
`;


const StyledButton = styled.button`

    flex: 0 0 40px;

    background-color: ${props => lighten(.10, props.theme.colorMainGreenDark) };

    color: ${props => props.theme.colorMainBeigeDark };

    border: 0;

    border-radius: 5px;

    font-size: 1.2rem;

    padding: 5px 10px;

    transition: ${props => props.theme.mainTransition};

    font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;
    
    font-weight: bold;

    &:focus {

        outline: 0;

    }

    &:hover {

        background-color: ${props => props.theme.colorMainOrangeDark };

        color: ${props => props.theme.colorBrownDark };

    }



`;


function MenuItem({ item, handleOpenZoom, handleOrderButtonClick }) {


    const handleZoomClick = (e) => {

        handleOpenZoom(item);

    };

    return (
        <StyledContainer>
            <StyledImageContainer>
                <StyledImage src={item.imageURL} />
                <StyledZoomSpan onClick={handleZoomClick}><FontAwesomeIcon icon="search-plus" size="sm" /></StyledZoomSpan>  
            </StyledImageContainer>           
            <StyledDescription>
                <StyledName>{item.name}</StyledName>
                <StyledDetails>{item.description}</StyledDetails>
            </StyledDescription>
            <StyledPrice>Price: $ {item.price.toFixed(2)}</StyledPrice>
            <StyledButton onClick={(e) => handleOrderButtonClick(item)}>ORDER</StyledButton>
        </StyledContainer>
    );
}

export default MenuItem;
