import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const bannerEffect = keyframes`

    from {
		width: 0;
	}

	to {
		width: 70%;
	}

`;

const appearEffect = keyframes`

     from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}


`;

const StyledContainer = styled.div`

    width: 0;
    background-color: rgba(0,0,0,0.7);
	color: white;
    height: 30rem;
    position: absolute;
	top: 40%;
    left: 50%;
    transform: translateX(-50%);	

    animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
    animation-fill-mode: forwards;
    
    border-radius: 10px;
    box-shadow: ${props => props.theme.glassBoxShadow};

    @media (max-width: 1500px) {

        
        height: 25rem;
    }

    @media (max-width: 1100px) {
        
        top: 45%;
        height: 20rem;

    }

    @media (max-width: 800px) {
        
        
        height: 18rem;

    }

    @media (max-width: 600px) {
        
        top: 38%;
        height: 30rem;

    }

    @media (max-width: 400px) {
        
        top: 36%;
        

    }

`;

const StyledFootBody = styled.div`
    
    width: 100%; 
    
    padding: 5rem 5rem 5rem 25rem;
   
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;

    opacity: 0;

    animation-name: ${props => props.appear ? appearEffect : "none" };
	animation-duration: 0.8s;
    animation-fill-mode: forwards;

    @media (max-width: 1500px) {

       padding: 3rem 1rem 3rem 20rem;

    }

    @media (max-width: 1350px) {

        padding: 3rem 1rem 3rem 17rem;

    }

    @media (max-width: 1100px) {

        padding: 1rem 1rem 2rem 15rem;

    }

    @media (max-width: 1000px) {

        padding: 1rem 1rem 2rem 12rem;

    }

    @media (max-width: 850px) {

        padding: 1rem 1rem 2rem 10rem;

    }

    @media (max-width: 750px) {

        padding: 1rem 1rem 2rem 6rem;

    }

    @media (max-width: 600px) {

        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding-top: 20px;

    }

    @media (max-width: 400px) {
        
        padding-top: 10px;

    }

`;

const StyledVisitUsContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

    flex: 0 1 50%;

     @media (max-width: 600px) {

        width: 80%;
        margin: 0 auto;

    }

`;

const StyledOpeningHoursContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

    flex: 0 1 50%;

    @media (max-width: 1100px) {

        margin-left: 20px;

    }

    @media (max-width: 600px) {

        width: 80%;
        margin: 0 auto;
                

    }

`;

const StyledVisitUsTitle = styled.h5`
    
    padding: 20px 0;
   
    
    @media (max-width:800px) {

        padding: 10px 0;
        font-size: 2rem;
    }

     @media (max-width: 600px) {

       text-align: center;
                

    }

`;

const StyledVisitUsContent = styled.p`

     @media (max-width: 600px) {

       text-align: center;
                

    }

`;

const StyledOpeningTitle = styled.h5`

    padding: 20px 0;

    @media (max-width:800px) {

        padding: 10px 0;
        font-size: 2rem;
    }

     @media (max-width: 600px) {

       text-align: center;
                

    }

`;

const StyledOpeningContentDays = styled.p`

     @media (max-width: 600px) {

       text-align: center;
                

    }

`;

const StyledOpeningContentHours = styled.p`

    @media (max-width: 600px) {

       text-align: center;
                

    }

`;



function ContentBanner({ animate }) {

    const [appear, setAppear] = useState(false);

    const handleBannerAnimationEnd = (e) => {

        setAppear(true);

    };


    return (
        <StyledContainer animate={animate} onAnimationEnd={handleBannerAnimationEnd}>
            <StyledFootBody appear={appear}>
                <StyledVisitUsContainer>
                    <StyledVisitUsTitle>Visit Us</StyledVisitUsTitle>
                    <StyledVisitUsContent>8588 NW 56TH ST DORAL DORAL, FLORIDA</StyledVisitUsContent>
                </StyledVisitUsContainer>
                <StyledOpeningHoursContainer>
                    <StyledOpeningTitle>Opening Hours</StyledOpeningTitle>
                    <StyledOpeningContentDays>Monday – Thursday & Sunday</StyledOpeningContentDays>
                    <StyledOpeningContentHours>10:00am – 10:00pm</StyledOpeningContentHours>
                    <StyledOpeningContentDays>Friday & Saturday</StyledOpeningContentDays>
                    <StyledOpeningContentHours>10:00am – 11:00pm</StyledOpeningContentHours>
                </StyledOpeningHoursContainer>
            </StyledFootBody>
        </StyledContainer>
    );
}

export default ContentBanner;
