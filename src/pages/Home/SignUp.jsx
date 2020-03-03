import React from 'react';
import styled from 'styled-components';

import { useMutation } from '@apollo/client';

import * as localMutations from '../../local-state/mutations';


const StyledContainer = styled.div`

    height: 200px;
    background-color: white;
    border-top: solid 3px ${props => props.theme.colorMainBeigeDark};
    padding: 30px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.h4`

    color: ${props => props.theme.colorMainBrownSand};

`;

const StyledButton = styled.button`

    width: 10rem;
    font-size: 1.5rem;
    padding: 5px 2px;
    border-radius: 5px;
    background-color: ${props => props.theme.colorMainOrangeDark};
    border: none;
    color: ${props => props.theme.colorMainBlueDark};
    transition: ${props => props.theme.mainTransition};
    margin-top: 30px;


    &:focus {
        outline: none;
    }

    &:hover {
        color: ${props => props.theme.colorMainOrangeDark};
        background-color: ${props => props.theme.colorMainBlueDark};
        font-size: 1.6rem;		
    }

`;


function SignUp() {

    const [openModal] = useMutation(localMutations.SET_SIGNUP_MODAL_OPEN);

    const handleClick = () => {

        openModal();
    };



    return (
        <StyledContainer>
            <StyledTitle>SIGN UP FOR EXCLUSIVE OFFERS U WON’T WANT TO MISS!</StyledTitle>
            <StyledButton onClick={handleClick}>SIGN UP</StyledButton>
        </StyledContainer>
    );
}

export default SignUp;
