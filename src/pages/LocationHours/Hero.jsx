import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Banner from '../../components/layout/Banner/Banner';
import ContentBanner from './ContentBanner';


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
    border-bottom: solid 2px ${props => props.theme.colorMainBeigeDark};
`;



function Hero(props) {
	
	const {
		imageObject,
		animate,
		bannerProps
	} = props;

    const [showBanner, setShowBanner] = useState(false);
    const [showContentBanner, setShowContentBanner] = useState(false);

	const handleBanner = () => {

		setShowBanner(true);

        setTimeout(() => {

            setShowContentBanner(true);

        }, 1000);

	};

	const SHOWBANNER = (
		<Banner animate={animate} {...bannerProps} />
	);

    const SHOWCONTENTBANNER = (
        <ContentBanner animate={animate} />
    );
	
	return (
		<StyledContainer>
			<StyledImage src={imageObject} animate={animate} onAnimationEnd={handleBanner} />
			{showBanner ? SHOWBANNER : null}			
            {showContentBanner ? SHOWCONTENTBANNER : null}
		</StyledContainer>
	);
};

export default Hero;