import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';


const StyledContainer = styled.div`

    width: 100%;

    padding: 20px 10px 10px 10px;

`;


const StyledLabel = styled.label`

    display: block;
    width: 100%;

    font-size: 1.3rem;

    color: ${props => lighten(.2, 'black') };

    font-weight: bold;

    padding-bottom: 10px;

`;

const StyledTextArea = styled.textarea`

    width: 90%;

    height: 10rem;

    border-radius: 5px;

    box-shadow: 0px 0px 3px ${props => props.theme.colorBrownDark };

    font-size: 1.2rem;

    padding: 10px;

`;

const StyledCharCounterContainer = styled.p`

    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const StyledCharCounter = styled.span`

    flex: 0 0 35%;

    font-size: 1rem;

`;



function Comments({ handleChangeComments, commentsValue, commentsCharCount }) {

    const handleChange = (e) => {

        if (e.target.value.length <= 300) {

            handleChangeComments(e.target.value);

        }       

    };

    const charsLeft = 300 - commentsCharCount;

    return (
        <StyledContainer>
            <StyledLabel>Comments :</StyledLabel>
            <StyledTextArea onChange={handleChange} value={commentsValue} placeholder="Please leave us your comments here!"></StyledTextArea>
            <StyledCharCounterContainer>
                <StyledCharCounter>{ charsLeft } characters left</StyledCharCounter>
            </StyledCharCounterContainer>
        </StyledContainer>
    );
}

export default Comments;
