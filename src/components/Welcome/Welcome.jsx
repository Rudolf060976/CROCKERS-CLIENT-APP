import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	background-color: ${props => props.theme.colorMainBeigeDark};
	color: ${props => props.theme.colorMainGreenDark};
	padding: 50px 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;
	transform: translateZ(1px); //PARA QUE LA IMAGEN EN MOVIMIENTO SE MANTENGA DETRAS DE LOS DIVS
	border-top: solid 2px ${props => props.theme.colorMainGreenDark};

	@media (max-width: 1500px) {

		padding: 40px 0;

	}

	@media (max-width: 900px) {

		padding: 30px 0;

	}
`;

const StyledTitle = styled.h3`

	padding: 20px 0;

	font-family: "Lilita One", Verdana, Geneva, Tahoma, sans-serif;
	letter-spacing: 2px;
	
`;

const StyledMessage = styled.p`

	width: 50%;
	
	font-size: 2rem;
	text-indent: 40px;
	font-weight: bold;

	@media (max-width: 1650px) {

		width: 60%;

	}
	@media (max-width: 900px) {

		width: 70%;

	}
`;


function Welcome() {
	return (
		<StyledContainer>
			<StyledTitle>Welcome!</StyledTitle>
			<StyledMessage>It’s not by chance so many people call a Crockers Burger the best burger they’ve ever had. Whether you’re looking for an enjoyable casual dining experience, a new favorite happy hour spot, or unique event catering, Crockers will positively surprise your taste buds.
			</StyledMessage>
		</StyledContainer>
	);
}

export default Welcome;