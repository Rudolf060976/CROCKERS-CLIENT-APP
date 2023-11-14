import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer = styled.ul`

    padding: 20px 20px;

`;

const StyledLine = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;

    padding: 5px 0;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

`;

const StyledDeleteButton = styled.span`

    color: ${props => props.theme.colorMainOrangeDark};
    cursor: pointer;
    flex: 0 0 10%;
    transition: ${props => props.theme.mainTransition};

    &:hover {
        transform: scale(1.1);
        color: red;
    }

`;

const StyledDescription = styled.span`

    flex: 1 1 80%;
   
    text-align: left;


`;

const StyledLineTotal = styled.span`

    flex: 0 0 20%;
    text-align: right;

`;


function MiniCartDetails({ cart, handleDeleteButtonClick }) {

    const handleDeleteClick = (id) => {

        handleDeleteButtonClick(id);

    };

    const content = cart.map(item => {

        return (
            <StyledLine key={item.id}>
                <StyledDeleteButton onClick={(e) => handleDeleteClick(item.id)}><FontAwesomeIcon icon="times-circle" size="lg" /></StyledDeleteButton>
                <StyledDescription>{item.quantity} x {item.menuItem.name}</StyledDescription>
                <StyledLineTotal>$ {item.itemTotal.toFixed(2)}</StyledLineTotal>
            </StyledLine>
        );
    });


    return (
        <StyledContainer>
            { content }
        </StyledContainer>
    );
}

export default MiniCartDetails;
