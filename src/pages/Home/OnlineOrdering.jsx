import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../assets/images/DELIVERY1.png';
import {darken, lighten} from 'polished';


const imageEffect = keyframes`

    from {
        transform: translateX(-100rem);

    }

    to {

        transform: translateX(0);
    }

`;

const StyledContainer = styled.div`

    width: 100%;
    background-color: white;
    padding: 10rem 0;

`;

const StyledGridContainer = styled.div`

    width: 60%;
    margin: 0 auto;
    display: grid;

    grid-template-areas:
    "image title"
    "image content"
    "button button";

    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(3, auto);
    
    gap: 10px;

`;

const StyledImage = styled.img`

    grid-area: image;
    max-width: 300px;
    transform: translateX(-100rem);

    animation-name: ${props => props.play ? imageEffect : 'none'};
    animation-duration: 1s;
    animation-fill-mode: forwards;   
    
`;

const StyledTitle = styled.h4`

    grid-area: title;

    color: ${props => darken(0.1, props.theme.colorMainOrangeDark)};

`;

const StyledContent = styled.p`

    grid-area: content;

    color: ${props => props.theme.colorBrownDark};

    font-size: 1.8rem;
    font-family: Roboto;
    font-weight: bold;
`;

const StyledButton = styled.button`

    grid-area: button;
    justify-self: center;
    
    width: 12rem;
    font-size: 1.5rem;
	padding: 8px 5px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    transition: ${props => props.theme.mainTransition};
    background-color: ${props => props.theme.colorMainBlueDark};
    color: ${props => props.theme.colorMainOrangeDark};
    
    &:focus {
		outline: none;
    }
    
    &:hover {
		color: ${props => props.theme.colorMainBlueDark};
		background-color: ${props => props.theme.colorMainOrangeDark};
		border: solid 1px ${props => props.theme.colorMainBlueDark};
		transform: scale(1.1);
    }

`;

function OnlineOrdering() {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

    const handleScroll = () => {
     
        
        const introPosition = containerElement.current.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (introPosition < screenHeight/1.5) {
            setPlay(true);
        } else if (introPosition > screenHeight) {
            setPlay(false);
        }

    };

    useEffect(() => {

            window.addEventListener('scroll', handleScroll);

        return () => {
            
            window.removeEventListener('scroll', handleScroll);

        };
    }, [])
 

    return (
        <StyledContainer ref={containerElement}>
            <StyledGridContainer>
                <StyledImage src={image} play={play} />
                <StyledTitle>ONLINE ORDERING</StyledTitle>                  
                <StyledContent>Now Delivering! Order online and we'll be there in a few minutes with your favourite burgers!</StyledContent>
                <StyledButton>ORDER AHEAD</StyledButton>
            </StyledGridContainer>
        </StyledContainer>
    );
}

export default OnlineOrdering;
