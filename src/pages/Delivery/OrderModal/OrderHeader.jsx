import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';


const StyledContainer = styled.div`

    width: 100%;
    padding: 20px 10px 10px 10px;

    display: grid;

    grid-template-areas:
    "image image title       price"
    "image image description description";

    grid-template-columns: .5fr .5fr 2fr 1fr;

    grid-template-rows: repeat(2, auto);

    gap: 0 10px;

`;

const StyledImage = styled.img`

    grid-area: image;

    max-width: 120px;

    width: 100%;

    min-width: 50px;

    border-radius: 5px;

`;

const StyledTitle = styled.h6`

    grid-area: title;

    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;

    letter-spacing: 1px;

    color: ${props => props.theme.colorBrownDark};

`;


const StyledDescription = styled.p`

    grid-area: description;

    font-size: 1.2rem;

    font-weight: bold;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;

    color: ${props => lighten(.2, 'black') };

`;

const StyledPrice = styled.h6`

    grid-area: price;

    font-size: 1.4rem;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
   
    font-weight: bold;

    color: ${props => props.theme.colorBrownDark};

`;


function OrderHeader({ item }) {
    return (
        <StyledContainer>
            <StyledImage src={item.imageURL} />
            <StyledTitle>{ item.name }</StyledTitle>
            <StyledDescription>{ item.description }</StyledDescription>
            <StyledPrice>Price: $ { item.price.toFixed(2) }</StyledPrice>
        </StyledContainer>
    )
}

export default OrderHeader;
