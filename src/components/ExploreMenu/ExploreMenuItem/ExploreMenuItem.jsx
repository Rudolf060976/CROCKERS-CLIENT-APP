import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const descriptionEffect = keyframes`

	from {
       
		opacity: 0;
	}

	to {
       
		opacity: 1;
	}

`;

const hideEffect = keyframes`

	from {
       
		opacity: 1;
	}

	to {
       
		opacity: 0;
	}

`;


const StyledContainer = styled.div`
        
    position: relative;
    overflow: hidden;
   
      
`;

const StyledImage = styled.img`

    max-width: 350px;
    border-radius: 5px;

    width: 100%;
    
`;

const StyledDescriptionContainer = styled.div`

    position: absolute;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;      
    align-items: center;
    border-radius: 5px;

    background-color: rgba(0,0,0,0.5);
    color: white;

    top: 80%;
    left:0;
    height: 20%;
    width: 100%;
    z-index: 500; 
    transition: all .3s linear;
    padding-top: 0;

    
    div:hover > & {
        height: 100%;
        top: 0;        
    }

    @media (max-width:750px) {

        top: 70%;
        height: 30%;
    }

`;

const StyledDescriptionBody = styled.div`

    
    width: 80%;
    text-align: center;
    opacity: 0;
    


    animation-name: ${props => props.show ? descriptionEffect : 'none' };
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    
`;


const StyledName = styled.h6`

    width: 80%;
    text-align: center;
    font-size: 1.6rem;
    transition: ${props => props.theme.mainTransition};

    margin: 15px 0;

    div:hover > & {
        width: 90%;
        font-size: 2rem;
        margin: 20px;

        @media(max-width:600px) {

            margin: 5px 0;
            width: 95%;
            font-size: 1.8rem;
        }

        @media(max-width:500px) {

            margin: 15px 0;
            width: 90%;
           
        }
       
    }

   
`;

const StyledDetails = styled.p`

    font-size: 1.2rem;
    color: white;

`;

const StyledButton = styled.button`

	width: 8rem;
	font-size: 1.2rem;
	padding: 5px 2px;
	border-radius: 5px;
	background-color: ${props => props.theme.colorMainBeigeDark};
	border: none;
	color: ${props => props.theme.colorBrownDark};
	transition: ${props => props.theme.mainTransition};
    margin-top: 30px;
           

	&:focus {
		outline: none;
	}

	&:hover {
		color: ${props => props.theme.colorMainBeigeDark};
		background-color: transparent;
		border: solid 1px ${props => props.theme.colorMainBeigeDark};
		
    }

    @media(max-width:600px) {

       margin-top: 10px;

    }

    @media(max-width:500px) {

        margin-top: 30px;

    }
    

`;


function ExploreMenuItem(props) {

    const { item } = props;
            
    const [showDescrip, setShowDescrip] = useState(false);

    const handleTransitionEnd = (e) => {

        if (e.propertyName === 'height' && e.elapsedTime >= 0.3) {
            
                            
            if(!showDescrip) {

                setShowDescrip(true);

            } else {

                setShowDescrip(false);

            }           

        }       

    };
   

    return (
        <StyledContainer style={{ gridColumn: 'auto', gridRow: 'auto' }} onTransitionEnd={handleTransitionEnd}>
            <StyledDescriptionContainer >
                <StyledName>{item.name}</StyledName>
                <StyledDescriptionBody show={showDescrip}>
                    <StyledDetails>{item.description}</StyledDetails>
                    <Link to="/menu"><StyledButton >Full Menu</StyledButton></Link>
                </StyledDescriptionBody>                                           
            </StyledDescriptionContainer>
            <StyledImage src={item.imageURL} />                                   
        </StyledContainer>
    );
}

export default ExploreMenuItem;
