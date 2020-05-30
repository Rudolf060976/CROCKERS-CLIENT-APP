import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

    
    background-color: ${props => props.theme.colorMainGreenDark};
    border-top: solid 3px ${props => props.theme.colorMainBeigeDark};
    
`;


const StyledFootBody = styled.div`
    
    width: 100%; 
    height: 30rem;   
    padding: 5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-start;

    @media (max-width: 350px) {

        flex-flow: column nowrap;
        align-items: center;
        height: auto;
        
    }
`;

const StyledVisitUsContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

`;

const StyledOpeningHoursContainer = styled.div`

    color: ${props => props.theme.colorMainBeigeDark};

`;

const StyledVisitUsTitle = styled.h5`
    
    padding: 20px 0;

    @media (max-width: 350px) {

        width: 100%;
        text-align: center;        
    }

`;

const StyledVisitUsContent = styled.p`

    @media (max-width: 350px) {

        width: 100%;
        text-align: center;        
    }

`;

const StyledOpeningTitle = styled.h5`

    padding: 20px 0;

    @media (max-width: 350px) {

        width: 100%;
        text-align: center;        
    }

`;

const StyledOpeningContentDays = styled.p`

    @media (max-width: 350px) {

        width: 100%;
        text-align: center;        
    }

`;

const StyledOpeningContentHours = styled.p`

    @media (max-width: 350px) {

        width: 100%;
        text-align: center;        
    }

`;

const StyledBottomLine = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colorMainBlueDark};
    color: white;
    font-size: 1.4rem;
    letter-spacing: 2px;
`;


function Footer() {
    return (
        <StyledContainer>
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
            <StyledBottomLine>This is a Personal Project created by: Rafael Urbina - email: rafaelurbinan@hotmail.com</StyledBottomLine>
        </StyledContainer>        
    );
}

export default Footer;