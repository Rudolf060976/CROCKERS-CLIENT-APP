import React from 'react';
import { Carousel } from 'react-bootstrap';
import {rgba} from 'polished';
import styled from 'styled-components';
import img1 from '../../assets/images/GALLERY/1.jpg';
import img2 from '../../assets/images/GALLERY/2.jpg';
import img3 from '../../assets/images/GALLERY/3.jpg';
import img4 from '../../assets/images/GALLERY/4.jpg';
import img5 from '../../assets/images/GALLERY/5.jpg';
import img6 from '../../assets/images/GALLERY/6.jpg';
import img7 from '../../assets/images/GALLERY/7.jpg';
import img8 from '../../assets/images/GALLERY/8.jpg';
import img9 from '../../assets/images/GALLERY/9.jpg';
import img10 from '../../assets/images/GALLERY/10.jpg';

const StyledContainer = styled.div`

    width: 100%;
    
    padding: 0;    

    background-color: ${props => props.theme.colorMainBeigeDark};

`;

const StyledTitle = styled.h4`

    color: ${props => props.theme.colorMainBeigeDark};
    width: 100%;
    text-align: center;
    
    padding: 20px 0;
    border-top: solid 2px ${props => props.theme.colorMainBeigeDark};
    border-bottom: solid 2px ${props => props.theme.colorMainBeigeDark};

    background-color: ${props => props.theme.colorMainGreenDark};
    text-shadow: 0px 4px 3px ${rgba('black',0.4)}, 0px 8px 13px ${rgba('black',0.1)},0px 18px 23px ${rgba('black',0.1)};

`;


const StyledImage = styled.img`

    width: 100%;
    max-width: 1170px;
    max-height: 780px;       
       
`;


function HomeGallery() {

    const carouselContent = [];

    const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

        
    for (let i=0; i < 10; i++) {

        const contentItem = (
            <Carousel.Item key={i} >                
                    <StyledImage src={imgArray[i]} />                              
            </Carousel.Item>
        );

        carouselContent.push(contentItem);
    }


    return (
        <StyledContainer>
            <StyledTitle>GALLERY</StyledTitle>
            <Carousel indicators={false} interval={2000} >                
                { carouselContent }
            </Carousel>
        </StyledContainer>        
    );
}

export default HomeGallery;
