import React from 'react';
import styled, { keyframes } from 'styled-components';


const bannerEffect = keyframes`

	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}

`;

const SeparatorEffect = keyframes`

	from {
		width: 0;
	}

	to {
		width: 15rem;
	}

`;

const StyledContainer = styled.div`
	background-color: rgba(0,0,0,0.5);
	color: white;
	text-align: center;
	text-transform: capitalize;
	width: 60rem;
	height: 30rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);	
	
	
	/* box-shadow: ${props => props.theme.whiteBoxShadow}; */


	padding: 30px 0;
	border-radius: 10px;


	animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
	animation-fill-mode: forwards;

	box-shadow: ${props => props.theme.glassBoxShadow};
`;


const StyledTitle = styled.h1`

	font-size: 4rem;
	word-spacing: 5px;
`;

const StyledSeparator = styled.div`
	width: 15rem;
	height: 5px;
	margin: 1.7rem auto;
	background-color: ${props => props.theme.colorMainOrangeDark};
	
	animation-name: ${props => props.animate ? SeparatorEffect : "none" };
	animation-duration: 1s;
	
	animation-fill-mode: forwards;

`;

const StyledSubtitle = styled.p`

	padding: 20px 0;
	font-size: 2rem;
	

`;

const StyledButton = styled.button`

	width: 10rem;
	font-size: 1.5rem;
	padding: 5px 2px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainBeigeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
	margin-top: 20px;

	&:focus {
		outline: none;
	}

	&:hover {
		color: ${props => props.theme.colorMainBeigeDark};
		background-color: transparent;
		border: solid 1px ${props => props.theme.colorMainBeigeDark};
		
	}
`;

const StyledSignUpContainer = styled.div`

	background-color: transparent;


	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px 0;
	

`;

const StyledSpan = styled.span`

	font-size: 1.6rem;

`;

const StyledSignUpButton = styled.button`
	
	width: 7rem;
	font-size: 1.3rem;
	padding: 5px 2px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainOrangeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
	margin-left: 30px;

	&:focus {
		outline: none;
	}

	&:hover {
		color: ${props => props.theme.colorMainOrangeDark};
		background-color: transparent;
		border: solid 1px ${props => props.theme.colorMainOrangeDark};
		
	}


`;


function SpecialBanner({ title, subtitle, buttonTitle, handleButtonClick, animate }) {
	return (
		<StyledContainer animate={animate}>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSeparator animate={animate} />
			<StyledSubtitle>{ subtitle }</StyledSubtitle>
			<StyledButton onClick={(e) => handleButtonClick()}>{buttonTitle}</StyledButton>
			<StyledSignUpContainer>
				<StyledSpan>Don't you have an Account?</StyledSpan>
				<StyledSignUpButton>Sign Up</StyledSignUpButton>
			</StyledSignUpContainer>
		</StyledContainer>
	)
}



export default SpecialBanner;
