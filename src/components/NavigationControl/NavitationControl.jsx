import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer= styled.div`

    width: 100%;

    display: flex;

    justify-content: flex-start;
    align-items: center;

`;


const StyledBox = styled.div`

    width: 30rem;




`;

const StyledPrevButton = styled.span`

    cursor: ${props => props.disabled ? 'default' : 'pointer' };

    color: ${props => props.disabled ? '#DBDEE1' : props.theme.colorMainBrownSand};

    &:hover {

        color: ${props => props.disabled ? '#DBDEE1' : props.theme.colorMainOrangeDark};

    }


`;

const StyledContent = styled.span`

    padding: 0 30px;

    font-size: 1.2rem;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

`;


const StyledNextButton = styled.span`

    cursor: ${props => props.disabled ? 'default' : 'pointer' };

    color: ${props => props.disabled ? '#DBDEE1' : props.theme.colorMainBrownSand};


    &:hover {

        color: ${props => props.disabled ? '#DBDEE1' : props.theme.colorMainOrangeDark};

    }

`;



function NavitationControl({ currentPage, totalPages, handlePrevClick, handleNextClick, disablePrev, disableNext }) {

    return (
        <StyledContainer>
            <StyledBox>
                <StyledPrevButton onClick={(e) => handlePrevClick()} disabled={disablePrev}>
                    <FontAwesomeIcon icon="chevron-circle-left" size="sm" />
                </StyledPrevButton>
                <StyledContent>
                    Page {currentPage} of {totalPages}
                </StyledContent>
                <StyledNextButton onClick={(e) => handleNextClick()} disabled={disableNext}>
                <FontAwesomeIcon icon="chevron-circle-right" size="sm" />
                </StyledNextButton>
            </StyledBox>
        </StyledContainer>
    );
}

export default NavitationControl;
