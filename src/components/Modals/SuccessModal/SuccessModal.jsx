import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

const StyledContainer = styled.div`
        
    background-color: white;
    position: fixed;
    width: 40rem;

    top: 50%;
    left: 50%;

    margin-left: -20rem;
    margin-top: -20rem;
    padding: 20px 10px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    z-index: 2000;

    border: solid 1px ${props => props.theme.colorMainGreenDark};
    box-shadow: 0px 0px 8px ${props => props.theme.colorMainGreenDark};
    border-radius: 5px;
`;

const StyledImage = styled.img`

    max-width: 40px;
    margin-bottom: 10px;

`;

const StyledTitle = styled.h6`

    padding: 10px 0;
    font-size: 1.7rem;

`;

const StyledContent = styled.p`

    padding: 15px 0;
    font-size: 1.3rem;

`;


const StyledButton = styled.button`

        margin: 10px 0;

        font-size: 1.4rem;
		padding: 5px 20px;
		border-radius: 5px;
		border: none;
		background-color: ${props => props.theme.colorMainOrangeDark};
		color: ${props => props.theme.colorMainBlueDark};
		transition: ${ props => props.theme.mainTransition};

		&:focus {
			outline: 0;
		}

		&:hover {

			color: ${props => props.theme.colorMainOrangeDark};
			background-color: ${props => lighten(0.1, props.theme.colorMainGreenDark)};
			

		}



`;


function SuccessModal(props) {

    
    const {
        image,
        title,
        content,
        buttonTitle,
        linkPath,
        handleButtonClick
    } = props;

   

    return (
        <StyledContainer>
            <StyledImage src={image} />
            <StyledTitle>{ title }</StyledTitle>
            <StyledContent>{ content }</StyledContent>
            <Link to={linkPath}><StyledButton type="button" onClick={handleButtonClick}>{buttonTitle}</StyledButton></Link>
        </StyledContainer>
    );
}

export default SuccessModal;
