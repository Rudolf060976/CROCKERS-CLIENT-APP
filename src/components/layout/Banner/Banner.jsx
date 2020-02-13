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
	left: 50%;
	margin-left: -30rem;	
	top: 50%;
	margin-top: -15rem;
	/* box-shadow: ${props => props.theme.whiteBoxShadow}; */


	padding: 30px 0;
	border-radius: 10px;


	animation-name: ${props => props.animate ? bannerEffect : "none" };
	animation-duration: 0.8s;
	animation-fill-mode: forwards;
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
