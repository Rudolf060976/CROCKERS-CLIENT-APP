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



function Comments({ handleChangeComments, commentsValue }) {

    const handleChange = (e) => {

        handleChangeComments(e.target.value);

    };

    return (
        <StyledContainer>
            <StyledLabel>Comments :</StyledLabel>
            <StyledTextArea onChange={handleChange} value={commentsValue} placeholder="Please leave us your comments here!"></StyledTextArea>
        </StyledContainer>
    );
}

export default Comments;
