import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const StyledContainer = styled.div`
    height: 200px;
    background-color: ${props => props.theme.colorMainGreenDark};
    border-top: solid 2px ${props => props.theme.colorMainBeigeDark};
    border-bottom: solid 2px ${props => props.theme.colorMainBeigeDark};
    padding: 30px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const StyledTitle = styled.h4`

    color: ${props => props.theme.colorMainBeigeDark};
    letter-spacing: 2px;
    word-spacing: 5px;

    text-shadow: 0px 4px 3px ${rgba('black',0.4)}, 0px 8px 13px ${rgba('black',0.1)},0px 18px 23px ${rgba('black',0.1)};

`;

const StyledButton = styled.button`

    width: 10rem;
    font-size: 1.5rem;
    padding: 5px 2px;
    border-radius: 5px;
    background-color: ${props => props.theme.colorMainOrangeDark};
    border: none;
    color: ${props => props.theme.colorMainBlueDark};
    transition: ${props => props.theme.mainTransition};
    margin-left: 40px;
    
    &:focus {
        outline: none;
    }

    &:hover {
        color: ${props => props.theme.colorMainOrangeDark};
        background-color: ${props => props.theme.colorMainBlueDark};
        font-size: 1.6rem;	
        box-shadow: ${props => props.theme.whiteBoxShadow};
	
    }

`;


function Redefining() {
    return (
        <StyledContainer>
            <StyledTitle>Redefining the way the World eats Burgers</StyledTitle>            
            <StyledButton>Order Now</StyledButton>
        </StyledContainer>
    );
}

export default Redefining;
