import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

    height: 30rem;
    width: 100%;
    background-color: ${props => props.theme.colorMainGreenDark};
    border-top: solid 3px ${props => props.theme.colorMainBeigeDark};
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


function Footer() {
    return (
        <StyledContainer>
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
        </StyledContainer>
    );
}

export default Footer;