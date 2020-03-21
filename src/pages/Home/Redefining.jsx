import React from 'react';
import styled from 'styled-components';

import { lighten, rgba } from 'polished';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
    height: 200px;
    background-color: ${props => props.theme.colorMainGreenDark};
    border-top: solid 2px ${props => props.theme.colorMainBeigeDark};
    border-bottom: solid 2px ${props => props.theme.colorMainBeigeDark};
    padding: 30px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {

        flex-flow: column nowrap;        
        padding: 20px 20px;

    }

`;

const StyledTitle = styled.h4`

    color: ${props => props.theme.colorMainBeigeDark};
    letter-spacing: 2px;
    word-spacing: 5px;

    text-shadow: 0px 4px 3px ${rgba('black',0.4)}, 0px 8px 13px ${rgba('black',0.1)},0px 18px 23px ${rgba('black',0.1)};

    @media (max-width: 550px) {

       font-size: 2.2rem;
       text-align: center;
    }


`;

const StyledButton = styled.button`

    
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 10px 20px;
    border-radius: 5px;
    
    border: none;
    /* background-color: ${props => props.theme.colorMainBeigeDark};
    color: ${props => props.theme.colorMainBlueDark}; */
    transition: all .2s linear;
    margin-left: 60px;

    color: ${props => rgba(props.theme.colorMainBlueDark,0.8) };
    background-color: ${props => props.theme.colorMainOrangeDark };
    box-shadow: 1px 1px 15px white;
    
    &:focus {
        outline: none;
    }

    &:hover {
       transform: scale(1.2);       
       
	
    }

    @media (max-width: 800px) {

        margin: 25px 0 0 0;

    }

`;


function Redefining() {
    return (
        <StyledContainer>
            <StyledTitle>Redefining the way the World eats Burgers</StyledTitle>            
            <Link to="/delivery"><StyledButton>ORDER NOW</StyledButton></Link>
        </StyledContainer>
    );
}

export default Redefining;
