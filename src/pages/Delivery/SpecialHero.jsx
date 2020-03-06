import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SpecialBanner from './SpecialBanner';


const animation = keyframes`

	from {
		transform: scale(1);
	}

	to {
		transform: scale(1.1) translateY(-15%);
	}

`;

const StyledContainer = styled.div`

	width: 100%;
	overflow: hidden;
	margin-bottom: -8%;
	
`;

const StyledImage = styled.img`

	width: 100%;
	transform: scale(1);
	animation-name: ${props => props.animate ? animation : "none" };
	animation-duration: 2s;
	animation-fill-mode: forwards;
	border-bottom: solid 2px ${ props => props.bottomBorderColor };

`;





function SpecialHero(props) {
	
	const {
		imageObject,
		animate,
		bottomBorderColor,
		bannerProps
	} = props;

	const [showBanner, setShowBanner] = useState(false);

	const handleBanner = () => {

		setShowBanner(true);

	};

	const SHOWBANNER = (
		<SpecialBanner animate={animate} {...bannerProps} />
	);

	
	return (
		<StyledContainer>
			<StyledImage src={imageObject} animate={animate} onAnimationEnd={handleBanner} bottomBorderColor={bottomBorderColor} />
			{showBanner ? SHOWBANNER : null}			
		</StyledContainer>
	);
};

export default SpecialHero;