import React, { useRef, useEffect } from 'react';
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
    /* border: solid 2px ${props => props.theme.colorMainBeigeDark}; */
    border: solid 1px ${props => props.theme.colorMainGreenDark };
	box-shadow: 0px 0px 8px ${props => props.theme.colorMainGreenDark };
    
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

    const outerDiv = useRef();

    useEffect(() => {
        
        document.addEventListener('click', handleClick, false);

        return () => {

            document.removeEventListener('click', handleClick, false);

        };

    }, []);


    const handleClick = (e) => {

        if (outerDiv.current.contains(e.target)) {

            return;

        }

        handleClickOutside();

    };

    const handleClickOutside = (e) => {

        handleCloseZoom();

    };


    return (
        <StyledContainer ref={outerDiv}>
            <StyledImage src={item.imageURL} />
            <StyledClose onClick={() => handleCloseZoom()} ><FontAwesomeIcon icon="window-close" size="lg" /></StyledClose>            
        </StyledContainer>
    );
}

export default ZoomView;
;