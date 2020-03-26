import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';

const StyledContainer = styled.div`

    width: 100%;
    height: 12rem;
    background-color: white;
    padding: 0;

`;

const StyledList = styled.ul`

    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 30px 0 10px 0

`;


const StyledListItem = styled.li`

    flex: 0 0 25%;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const StyledName = styled.span`

    padding: 10px 0;
    
    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;

    font-size: 2rem;

    color: ${props => props.theme.colorMainBrownSand};
`;

const StyledIcon = styled.span`

    color: ${props => props.selected ? lighten(0.2,props.theme.colorMainGreenDark) : props.theme.colorMainBeigeDark };

`;

const StyledSeparator = styled.div`

    height: 3px;
    width: 60%;
    margin: 0 auto;
    background-color: black;
`;


function ProcessHeader({ step }) {

    
    return (
        <StyledContainer>
            <StyledList>
                <StyledListItem>
                    <StyledName>Cart</StyledName>
                    <StyledIcon selected={step===1}><FontAwesomeIcon icon="arrow-circle-right" size="lg" /></StyledIcon>
                </StyledListItem>

                <StyledListItem>
                    <StyledName>Shipping</StyledName>
                    <StyledIcon selected={step===2}><FontAwesomeIcon icon="arrow-circle-right" size="lg" /></StyledIcon>
                </StyledListItem>

                <StyledListItem>
                    <StyledName>Payment</StyledName>
                    <StyledIcon selected={step===3}><FontAwesomeIcon icon="arrow-circle-right" size="lg" /></StyledIcon>
                </StyledListItem>

                <StyledListItem>
                    <StyledName>Completed</StyledName>
                    <StyledIcon selected={step===4}><FontAwesomeIcon icon="arrow-circle-right" size="lg" /></StyledIcon>
                </StyledListItem>
            </StyledList>
            <StyledSeparator />
        </StyledContainer>
    );
}

export default ProcessHeader;
