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
	
	
	/* box-shadow: ${props => props.theme.whiteBoxShadow}; */


	padding: 30px 0;
	border-radius: 10px;


	animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
	animation-fill-mode: forwards;

	box-shadow: ${props => props.theme.glassBoxShadow};


	@media (max-width: 900px) {
		top: 35%;
		height: 25rem;
		padding: 20px 0;
		width: 50rem;

	}

	@media (max-width: 600px) {
		height: 23rem;
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

	@media (max-width: 900px) {

		height: 3px;
		margin: 1.2rem auto;
	}

	@media (max-width: 600px) {
		
		margin: 1rem auto;
	}

`;

const StyledSubtitle = styled.p`

	padding: 20px 0;
	font-size: 2rem;
	
	@media (max-width: 900px) {
		
		padding: 10px 0;
		font-size: 1.8rem;
		
	}

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

	@media (max-width: 600px) {
		
		margin-top: 10px;
		
	}
`;


function Banner({ title, subtitle, buttonTitle, handleButtonClick, animate }) {
	return (
		<StyledContainer animate={animate}>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSeparator animate={animate} />
			<StyledSubtitle>{ subtitle }</StyledSubtitle>
			<StyledButton onClick={(e) => handleButtonClick()}>{buttonTitle}</StyledButton>
		</StyledContainer>
	)
}

Banner.defaultProps = {
	children: <></>,
	subtitle: ''
};


export default Banner;
