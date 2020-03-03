import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function SuccessModal(props) {

    const {
        image,
        title,
        content,
        buttonTitle,
        linkPath
    } = props;

    const StyledContainer = styled.div`
        
        background-color: white;
        position: fixed;
        width: 40rem;
        margin-left: -20rem;
        margin-top: -20rem;
        padding: 20px 10px;
        
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        z-index: 2000;
    
    `;

    const StyledImage = styled.img`
    
        max-width: 40px;
    
    `;

    const StyledTitle = styled.h6`
    

    
    `;

    const StyledContent = styled.p`
    
    
    
    `;


    const StyledButton = styled.button`
    
    
    
    
    `;


    return (
        <StyledContainer>
            <StyledImage src={image} />
            <StyledTitle>{ title }</StyledTitle>
            <StyledContent>{ content }</StyledContent>
            <Link to={linkPath}><StyledButton type="button">Done!</StyledButton></Link>
        </StyledContainer>
    );
}

export default SuccessModal;
