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
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);	
	
	padding: 30px 0;
	border-radius: 10px;


	animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
	animation-fill-mode: forwards;

	box-shadow: ${props => props.theme.glassBoxShadow};

	@media (max-width: 1450px) {

		height: 28rem;		
	}
	
	@media (max-width: 900px) {
		
		padding: 20px 0;
		width: 50rem;

	}
	@media (max-width: 650px) {
		
		height: 29rem;	

	}
`;


const StyledTitle = styled.h1`

	font-size: 4rem;
	word-spacing: 5px;

	@media (max-width: 900px) {

		font-size: 3.6rem;

	}
`;

const StyledSeparator = styled.div`
	width: 15rem;
	height: 5px;
	margin: 1.7rem auto;
	background-color: ${props => props.theme.colorMainOrangeDark};
	
	animation-name: ${props => props.animate ? SeparatorEffect : "none" };
	animation-duration: 1s;
	
	animation-fill-mode: forwards;

	@media (max-width: 1450px) {

		height: 3px;
		margin: 1rem auto;
	}

	@media (max-width: 900px) {

		height: 3px;
		margin: 1.2rem auto;
	}

`;

const StyledSubtitle = styled.p`

	padding: 20px 0;
	font-size: 2rem;

	@media (max-width: 1450px) {
		
		padding: 10px 0;
		font-size: 1.8rem;
		
	}	

`;

const StyledLoginButtonContainer = styled.div`

	background-color: transparent;

	display: flex;
	justify-content: center;
	align-items: center;
	height: 5rem;

`;

const StyledButton = styled.button`

	
	font-size: 1.8rem;
	padding: 5px 30px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainBeigeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
	font-weight: bold;

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
	height: 5rem;

`;

const StyledSpan = styled.span`

	font-size: 1.5rem;

`;

const StyledSignUpButton = styled.button`
		
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainOrangeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
	margin-left: 30px;
	font-weight: bold;

	&:focus {
		outline: none;
	}

	&:hover {
		color: ${props => props.theme.colorMainOrangeDark};
		background-color: transparent;
		border: solid 1px ${props => props.theme.colorMainOrangeDark};
		
	}


`;


function SpecialBanner({ title, subtitle, buttonTitle, handleButtonClick, handleButton2Click, animate }) {
	return (
		<StyledContainer animate={animate}>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSeparator animate={animate} />
			<StyledSubtitle>{ subtitle }</StyledSubtitle>
			<StyledLoginButtonContainer>
				<StyledButton onClick={(e) => handleButtonClick()}>{buttonTitle}</StyledButton>
			</StyledLoginButtonContainer>			
			<StyledSignUpContainer>
				<StyledSpan>Don't you have an Account?</StyledSpan>
				<StyledSignUpButton onClick={(e) => handleButton2Click()}>Sign Up</StyledSignUpButton>
			</StyledSignUpContainer>
		</StyledContainer>
	)
}



export default SpecialBanner;
