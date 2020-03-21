import React from 'react';
import styled from 'styled-components';

import { lighten, rgba } from 'polished';

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

    @media (max-width: 800px) {

       
        padding: 30px 20px;

    }
`;

const StyledTitle = styled.h4`

    color: ${props => props.theme.colorMainBrownSand};

    font-family: "Lilita One", Verdana, Geneva, Tahoma, sans-serif;
	letter-spacing: 2px;

    @media (max-width: 650px) {

        font-size: 2.2rem;
        text-align: center;
    }

`;

const StyledButton = styled.button`
    
    font-family: "Rubik", Verdana, Geneva, Tahoma, sans-serif;    
	font-size: 1.6rem;
	font-weight: bold;   	
	padding: 10px 30px;
    border-radius: 5px;
    letter-spacing: 2px;
    background-color: ${props => rgba(props.theme.colorMainBlueDark,0.9) };
    border: none;
    color: ${props => props.theme.colorMainBeigeDark};
    transition: ${props => props.theme.mainTransition};
    margin-top: 30px;


    &:focus {
        outline: none;
    }

    &:hover {
        border: solid 1px ${props => rgba(props.theme.colorMainBlueDark,0.9)};
        color: ${props => rgba(props.theme.colorMainBlueDark,0.9)};
        background-color: ${props => props.theme.colorMainBeigeDark};
        /* background-color: ${props => props.theme.colorMainBlueDark}; */
        /* font-size: 1.6rem; */
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
