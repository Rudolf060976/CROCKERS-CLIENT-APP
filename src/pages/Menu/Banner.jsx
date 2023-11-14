import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

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
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);	
	
	
	/* box-shadow: ${props => props.theme.whiteBoxShadow}; */


	padding: 30px 0;
	border-radius: 10px;


	animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
	animation-fill-mode: forwards;

	box-shadow: ${props => props.theme.glassBoxShadow};

	

	@media (max-width: 1500px) {

		top: 40%;
		transform: translate(-50%, -60%);	

	}

	@media (max-width: 1000px) {

		
		width: 50rem;
		height: 25rem;
		transform: translate(-50%, -50%);	
		padding-top: 20px;

	}

	@media (max-width: 500px) {

		padding-top: 10px;
		width: 45rem;
		height: 23rem;

	}

	@media (max-width: 400px) {

		top: 42%;
		padding-top: 10px;
		width: 40rem;
		height: 22rem;

	}

	@media (max-width: 350px) {

		top: 43%;		
		width: 38rem;
		height: 20rem;

	}

	

`;


const StyledTitle = styled.h1`

	font-size: 4rem;
	word-spacing: 5px;

	@media (max-width: 1000px) {

		font-size: 3.8rem;
		word-spacing: 3px;

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

	@media (max-width: 500px) {

		margin: 1rem auto;

	}

`;

const StyledSubtitle = styled.p`

	padding: 20px 0;
	font-size: 2rem;
	
	@media (max-width: 1950px) {

		padding: 10px 0;

	}	

	@media (max-width: 350px) {

		padding: 5px 0;

	}	

`;

const StyledButton = styled.button`

	font-size: 1.8rem;
	padding: 5px 30px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainBeigeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
	margin-top: 20px;
	font-weight: bold;

	&:focus {
		outline: none;
	}

	&:hover {
		color: ${props => props.theme.colorMainBeigeDark};
		background-color: transparent;
		border: solid 1px ${props => props.theme.colorMainBeigeDark};
		
	}

	@media (max-width: 1300px) {

		margin-top: 10px;

	}	

	@media (max-width: 700px) {

		font-size: 1.6rem;
		padding: 5px 20px;

	}	

	@media (max-width: 500px) {

		margin-top: 5px;

	}	

	@media (max-width: 350px) {

		margin-top: 0;

	}	

	
`;

const StyledLink = styled(Link)`



`;


function Banner({ title, subtitle, buttonTitle, animate }) {
	return (
		<StyledContainer animate={animate}>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSeparator animate={animate} />
			<StyledSubtitle>{ subtitle }</StyledSubtitle>
			<StyledButton><StyledLink to="menu-scroll-point" smooth={true} duration={1000}>{buttonTitle}</StyledLink></StyledButton>
		</StyledContainer>
	)
}

Banner.defaultProps = {
	children: <></>,
	subtitle: ''
};


export default Banner;
