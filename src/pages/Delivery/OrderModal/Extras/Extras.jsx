import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@apollo/client';

import * as queries from '../../../../graphql/queries';
import Loading from '../../../../components/layout/Loading/Loading';
import FetchError from '../../../../components/layout/FetchError/FetchError';
import { lighten } from 'polished';



const openEffect = keyframes`

    from {

        /* transform: scaleY(0); */
        height: 0;

    }

    to {

        /* transform: scaleY(1); */
        height: 20rem;

    }

`;


const closeEffect = keyframes`

    from {

        /* transform: scaleY(1); */
        height: 20rem;

    }

    to {

        /* transform: scaleY(0); */
        height: 0;

    }

`;



const StyledContainer = styled.div`

    width: 100%;
    
    padding: 20px 10px 20px 10px;
   
   

`;

const StyledHeader = styled.div`

    display: flex;

    align-items: center;


`;

const StyledHeaderTitle = styled.span`

    font-size: 1.3rem;

    color: ${props => lighten(.2, 'black') };

    font-weight: bold;

`;

const StyledHeaderButton = styled.span`

    margin-left: 20px;

    color: ${props => props.theme.colorMainOrangeDark};

  

    &:hover {
        cursor: pointer;
       
    }
   

`;

const StyledContentContainer = styled.div`

    width: 100%;
    
    background-color: ${props => lighten(.16,'lightgray')};

    /* transform: scaleY(0); */

    height: 0;

    overflow: hidden;

    transform-origin: top;

    animation-name: ${props => props.play && props.open ? openEffect : (props.play && !props.open ? closeEffect : 'none')};

    animation-duration: 0.5s;

    animation-fill-mode: both;

`;

const StyledContent = styled.div`

    display: grid;

    width: 100%;

    padding: 10px;
    

    grid-template-areas: "extra extra";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(1, auto);
    grid-auto-flow: row;
    gap: 5px 0;
    
    @media (max-width: 1650px) {

        padding: 5px;

    }


`;

const StyledExtraItemContainer = styled.p`

    grid-row: auto;
    grid-column: auto;    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;

`;

const StyledInput = styled.input`



`;

const StyledLabel = styled.label`

    padding: 5px 0 0 10px;

    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;

    color: ${props => props.theme.colorBrownDark};

    letter-spacing: 1px;

    @media (max-width:1650px) {

        padding-left: 5px;
        
    }

    @media (max-width:1050px) {

        font-size: 1rem;
        letter-spacing: 0;
        padding-top: 3px;
       
    }

`;

const StyledPrice = styled.span`

    padding: 3px 0 5px 10px;

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

    @media (max-width:1650px) {

        padding-left: 0;
    }
    

`;



function Extras({ itemId, handleSelectedExtra }) {

  
    const [play, setPlay] = useState(false);
    const [open, setOpen] = useState(false);

    const {loading, error, data } = useQuery(queries.GET_EXTRAS_BY_ITEM, {
        variables: {
            itemId
        }
    });
   
    if (loading) return <Loading height="0" />

    if (error) return <FetchError />

    const extrasArray = data.getExtrasByItem;

    const handleSelected = (extra, e) => {

        handleSelectedExtra(extra, e.target.checked);

    };       

    const handleClick = (e) => {

        if (open) {
            setPlay(false);
            setOpen(false);
            setPlay(true);            

        } else {
            
            setPlay(false);
            setOpen(true);
            setPlay(true);
           
        }

    };

    const content = extrasArray.map(extra => {

        return (
            <StyledExtraItemContainer key={extra.id} >
                <StyledInput type="checkbox" onChange={(e) => handleSelected(extra, e)}/>
                <StyledLabel>{extra.name}</StyledLabel>
                <StyledPrice>[ + $ {extra.price} ]</StyledPrice>
            </StyledExtraItemContainer>            
        );

    });    
    
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledHeaderTitle>Select your Extras:</StyledHeaderTitle>
                <StyledHeaderButton onClick={handleClick}><FontAwesomeIcon icon={ open ? "angle-up" : "angle-down"} size="lg" /></StyledHeaderButton>
            </StyledHeader> 
            <StyledContentContainer open={open} play={play}>
                <StyledContent>
                    { content }
                </StyledContent>
            </StyledContentContainer>     
        </StyledContainer>
    );
}

export default Extras;
