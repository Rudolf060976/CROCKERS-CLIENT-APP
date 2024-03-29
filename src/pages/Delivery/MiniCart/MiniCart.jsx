import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/client';
import { lighten, rgba } from 'polished';

import * as queries from '../../../graphql/queries';

import * as mutations from '../../../graphql/mutations';

import imageCart from '../../../assets/images/shopping-cart.svg';

import MiniCartDetails from './MiniCartDetails';

import Loading from '../../../components/layout/Loading/Loading';

import FetchError from '../../../components/layout/FetchError/FetchError';


const StyledContainer = styled.div`

    flex: 1 1 40%;
    
  
    display: flex;
    justify-content: center;
    align-items: center;
   
    padding-top: 3rem;
    
`;

const StyledCart = styled.div`

    width: 70%;
    padding: 25px;
    min-width: 170px;

    border-radius: 5px;

    border: solid 1px ${props => props.theme.colorMainGreenDark };
    box-shadow: 0px 0px 8px ${props => props.theme.colorMainGreenDark };
    
    background-color: ${props => lighten(0.16, 'lightgray') };

    @media (max-width:1300px) {

        padding: 20px 10px;
        width: 80%;

    }

    @media (max-width:950px) {

        padding: 20px 10px 10px 10px;
        width: 85%;
        
    }

`;

const StyledHeader = styled.div`

    width: 100%;

    display: flex;
    align-items: center;
    

`;

const StyledImage = styled.img`
    
    max-width: 40px;
    
`;

const StyledTitle = styled.span`

    flex: 1 0 80%;

    text-align: center;

    font-size: 1.8rem;

    font-family: "Lilita One", Verdana, Geneva, Tahoma, sans-serif;

    color: ${props => props.theme.colorBrownDark};

`;

const StyledFooter = styled.div`

    width: 100%;
    border-top: 2px solid ${props => lighten(.6, 'black')};

`;

const StyledSubTotal = styled.p`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;

    padding: 20px 20px;

    font-family: "Montserrat", Verdana, Geneva, Tahoma, sans-serif;

    color: ${props => props.theme.colorBrownDark};

    font-weight: bold;

`;


const StyledSubTotalTitle= styled.span`



`;

const StyledSubTotalAmount = styled.span`



`;

const StyledButtonContainer = styled.div`

    display: flex;

    justify-content: center;

    padding: 20px 0;


`;

const StyledButton = styled.button`

    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    background-color: ${props => lighten(.10, props.theme.colorMainGreenDark) };

    color: ${props => props.theme.colorMainBeigeDark };

    font-size: 1.8rem;

    font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

    transition: ${props => props.theme.mainTransition};

    &:focus {
        outline: 0;
    }

    &:hover {

        background-color: ${props => props.theme.colorMainOrangeDark };

        color: ${props => props.theme.colorBrownDark };

    }

    @media (max-width:950px) {

       font-size: 1.4rem;
       padding: 8px 10px;

    }


`;

const StyledEmptyTitle = styled.p`

    padding: 30px 20px;
    text-align: center;

    font-size: 1.8rem;

    font-weight: bold;

    color: ${ rgba('black', 0.6)};
    

`;

const StyledErrorTitle = styled.p`

    padding: 30px 20px;

    color: ${props => props.theme.errorColor};

    text-align: center;

    font-size: 1.8rem;

    font-weight: bold;

`;

function MiniCart({ user, handleCartButtonClick }) {

    const [errorMessage, setErrorMessage] = useState(null);
   

    const { loading, error, data } = useQuery(queries.GET_CART, {
        variables: {
            userId: user.id
        },
        fetchPolicy: "no-cache"
    });

    const { loading: loading2, error: error2, data: data2 } = useQuery(queries.GET_CART_TOTALS, {
        variables: {
            userId: user.id
        },
        fetchPolicy: "no-cache"
    });

    const [deleteItem, { data: mutationData }] = useMutation(mutations.DELETE_CART_LINE, {
        refetchQueries: ["GetCart","GetCartTotals"]
    });

    if (loading || loading2) return <Loading />;
    if (error || error2) return <FetchError />;
    
    const cart = data.getCart;

    const totals = data2.getCartTotals;

    const handleDeleteClick = (id) => {
        
        deleteItem({
            variables: {
                lineId: id
            }
        });

    };

    const cartContent = () => {

        if (errorMessage) {

            return (<StyledErrorTitle>{errorMessage}</StyledErrorTitle>)

        }

        if (totals.count > 0) {

            return (<MiniCartDetails cart={cart} handleDeleteButtonClick={handleDeleteClick} />);
    
        }
        
        return (<StyledEmptyTitle>( Empty )</StyledEmptyTitle>);


    };

    const handleGotoCartClick = (e) => {

        if (totals.count <= 0) {

            setErrorMessage('Your Cart is Empty!');

            setTimeout(() => {
    
                setErrorMessage(null);
    
            }, 1000);

        } else {

            handleCartButtonClick();

        }       

    };


    return (  
                <StyledContainer>
                    <StyledCart>
                        <StyledHeader>
                            <StyledImage src={imageCart} />
                            <StyledTitle>YOUR CART ( { totals.count } ITEMS )</StyledTitle>
                        </StyledHeader>
                        { cartContent() }                                
                        <StyledFooter>
                            <StyledSubTotal>
                                <StyledSubTotalTitle>SubTotal:</StyledSubTotalTitle>
                                <StyledSubTotalAmount>$ { totals.subtotal.toFixed(2) }</StyledSubTotalAmount>
                            </StyledSubTotal>
                            <StyledButtonContainer>
                                <StyledButton onClick={handleGotoCartClick}>GO TO CART</StyledButton>
                            </StyledButtonContainer>
                        </StyledFooter>
                    </StyledCart>
                </StyledContainer>
    );
}

export default MiniCart;
