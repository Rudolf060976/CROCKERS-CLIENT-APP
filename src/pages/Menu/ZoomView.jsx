import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledContainer = styled.div`
    
    position: fixed;

    max-width: 700px;
    height: auto;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 300;
    
    
`;

const StyledImage = styled.img`

    max-width: 100%;
    border-radius: 5px;
    border: solid 2px ${props => props.theme.colorMainBeigeDark};
    
`;

const StyledClose = styled.span`

    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 3%;
    right: 3%;
    background-color: transparent;
    color: ${props => props.theme.colorMainBeigeDark};
    font-size: 3rem;
    transition: ${props => props.theme.mainTransition};
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;



function ZoomView({ item, handleCloseZoom }) {
    return (
        <StyledContainer>
            <StyledImage src={item.imageURL} />
            <StyledClose onClick={() => handleCloseZoom()} ><FontAwesomeIcon icon="window-close" size="lg" /></StyledClose>
        </StyledContainer>
    );
}

export default ZoomView;
;