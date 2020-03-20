import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer = styled.div`

    width: 100%;
    height: 6rem;

    background-color: ${props => props.theme.colorMainBlueDark};

    padding: 0 2rem;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    border-top: solid 1px ${props => props.theme.colorMainBeigeDark};
    

`;

const StyledBox = styled.div`

    width: 30rem;
    background-color: ${props => props.theme.colorMainBeigeDark};  
    border-radius: 5px;
    padding: 10px;
    color: ${props => props.theme.colorMainBlueDark}; 
    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const StyledFullName = styled.span`


`;


const StyledLogoutIcon = styled.span`
    
   
    color: ${props => props.theme.colorBrownDark}; 

    &:hover {
        
        color: ${props => props.theme.colorMainOrangeDark}; 
        cursor: pointer;

    }

`;

const StyledCartIcon = styled.span`

    
    color: ${props => props.theme.colorBrownDark}; 

    &:hover {
        
        color: ${props => props.theme.colorMainOrangeDark}; 
        cursor: pointer;
        
    }

`;

function UserStatusBox({ user, handleLogoutButton, handleCartButton }) {
    
   
    return (
        <StyledContainer>
            <StyledBox>
                <StyledFullName>Hello, { user.fullname }</StyledFullName>
                <StyledLogoutIcon onClick={handleLogoutButton}><FontAwesomeIcon icon="sign-out-alt" size="lg" /></StyledLogoutIcon>
                <StyledCartIcon onClick={handleCartButton}><FontAwesomeIcon icon="shopping-cart" size="lg" /></StyledCartIcon>
            </StyledBox>
        </StyledContainer>
    );
}

export default UserStatusBox;
