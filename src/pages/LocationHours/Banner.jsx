import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
	top: 20%;
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

		
		height: 25rem;

	}

	@media (max-width: 1000px) {

		top: 22%;

	}

	@media (max-width: 800px) {

		height: 20rem;
		padding: 15px 0;
		width: 50rem;

	}

	@media (max-width: 600px) {

		height: 22rem;
		padding: 15px 0;
		top: 20%;
	}	

	@media (max-width: 400px) {
		top: 18%;
		width: 48rem;
		height: 23rem;
	}	

`;


const StyledTitle = styled.h1`

	font-size: 4rem;
	word-spacing: 5px;

	@media (max-width: 1000px) {

		font-size: 3rem;

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

	@media (max-width:800px) {

		margin: 1rem auto;
		height: 3px;

	}

`;

const StyledSubtitle = styled.p`

	padding: 20px 0;
	font-size: 2rem;
	
	@media (max-width: 1950px) {

		padding: 10px 0;

	}
	
	@media (max-width:800px) {

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

	@media (max-width:600px) {

		margin-top: 15px;
		font-size: 2rem;

	}	
`;


function Banner({ title, subtitle, buttonTitle, linkTo, animate }) {
	return (
		<StyledContainer animate={animate}>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSeparator animate={animate} />
			<StyledSubtitle>{ subtitle }</StyledSubtitle>
			<Link to={linkTo} ><StyledButton>{buttonTitle}</StyledButton></Link>
		</StyledContainer>
	)
}

Banner.defaultProps = {
	children: <></>,
	subtitle: ''
};


export default Banner;
