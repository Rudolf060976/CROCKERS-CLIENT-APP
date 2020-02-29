import React from 'react';
import styled, { keyframes } from 'styled-components';

const bannerEffect = keyframes`

    from {
		width: 0;
	}

	to {
		width: 70%;
	}

`;

const StyledContainer = styled.div`

    width: 0;
    background-color: rgba(0,0,0,0.7);
	color: white;
    height: 30rem;
    position: absolute;
	top: 70%;
    left: 50%;
    transform: translateX(-50%);	

    animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
    animation-fill-mode: forwards;
    
    border-radius: 10px;
    box-shadow: ${props => props.theme.glassBoxShadow};

`;

const StyledFootBody = styled.div`
    
    width: 100%; 
    height: 30rem;   
    padding: 5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const StyledVisitUsContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

`;

const StyledOpeningHoursContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

`;

const StyledVisitUsTitle = styled.h5`
    
    padding: 20px 0;

`;

const StyledVisitUsContent = styled.p`


`;

const StyledOpeningTitle = styled.h5`

    padding: 20px 0;

`;

const StyledOpeningContentDays = styled.p`

    

`;

const StyledOpeningContentHours = styled.p`


`;



function ContentBanner({ animate }) {
    return (
        <StyledContainer animate={animate}>
            <StyledFootBody>
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
