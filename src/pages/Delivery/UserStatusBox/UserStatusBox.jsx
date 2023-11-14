import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer = styled.div`

    width: 100%;
    

    background-color: ${props => props.theme.colorMainBlueDark};

    padding: 2rem;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    border-top: solid 2px ${props => props.theme.colorMainBeigeDark};
    
    border-bottom: solid 1px ${props => props.theme.colorMainBeigeDark};
`;

const StyledBox = styled.div`

    width: 50rem;
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

    font-size: 1.8rem;

`;


const StyledLogoutIcon = styled.span`
    
    font-size: 1.8rem;
    color: ${props => props.theme.colorBrownDark}; 

    &:hover {
        
        color: ${props => props.theme.colorMainOrangeDark}; 
        cursor: pointer;

    }

`;

const StyledCartIcon = styled.span`

    font-size: 1.8rem;
    color: ${props => props.theme.colorBrownDark}; 

    &:hover {
        
        color: ${props => props.theme.colorMainOrangeDark}; 
        cursor: pointer;
        
    }

`;

const StyledProfileIcon = styled.span`

    font-size: 1.8rem;
    color: ${props => props.theme.colorBrownDark}; 

    &:hover {
        
        color: ${props => props.theme.colorMainOrangeDark}; 
        cursor: pointer;
        
    }


`;

function UserStatusBox({ user, handleLogoutButtonClick, handleCartButtonClick, cartVisible, handleProfileButtonClick }) {
    
       
    return (
        <StyledContainer>
            <StyledBox>
                <StyledFullName>Hello, { user.fullname }</StyledFullName>
                <StyledLogoutIcon onClick={(e) => handleLogoutButtonClick()}><FontAwesomeIcon icon="sign-out-alt" size="lg" /></StyledLogoutIcon>
                <StyledProfileIcon onClick={(e) => handleProfileButtonClick()}><FontAwesomeIcon icon="user-shield" size="lg" /></StyledProfileIcon>
                { cartVisible ? <StyledCartIcon onClick={(e) => handleCartButtonClick()}><FontAwesomeIcon icon="shopping-cart" size="lg" /></StyledCartIcon> : null }
            </StyledBox>
        </StyledContainer>
    );
}

export default UserStatusBox;
