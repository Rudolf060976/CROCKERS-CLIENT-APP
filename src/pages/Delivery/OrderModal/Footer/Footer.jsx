import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';


const StyledContainer = styled.div`

    width: 100%;
    
`

const StyledPriceQuantityContainer= styled.div`

    width: 100%;

    padding: 20px 10px 10px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledPrice = styled.span`

    font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

    color: ${props => props.theme.colorBrownDark};



`;

const StyledQuantity = styled.form`

    margin-right: 4.5rem;

    @media (max-width: 1800px) {

        margin-right: 4rem;
    }

    

    @media (max-width: 600px) {

        margin-right: 3.5rem;
    }

`;

const StyledLabel = styled.label`

    font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;

    font-weight: bold;

    color: ${props => props.theme.colorBrownDark};

`;

const StyledSelect = styled.select`

    margin-left: 10px;

    padding: 3px;

    border-radius: 5px;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
    }

`;

const StyledButtonContainer = styled.div`

    width: 100%;

    padding: 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledButton = styled.button`

    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    background-color: ${props => lighten(.10, props.theme.colorMainGreenDark) };

    color: ${props => props.theme.colorMainBeigeDark };

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



`;



function Footer({ total, quantity, handleChangeQuantity, handleOrderClick }) {

    const handleQtyChange = (e) => {

        handleChangeQuantity(e.target.value);

    };

    const createSelectOptions = stk => {
		
		const stockInt = Number.parseInt(stk, 10);

		if (Number.isNaN(stockInt)) {

			return null;
		}

		const controlArray = [];

		for (let i = 0; i < stockInt; i++) {

			controlArray.push(i + 1);
			
		}

		if (controlArray.length === 0) {
			controlArray.push(0);
		} 

		const output = controlArray.map(item => {

			return ( 
				<option key={item.toString()} value={item}>{item}</option>				
			);

		});

		return output;

	};


    return (
        <StyledContainer>
            <StyledPriceQuantityContainer>
                <StyledPrice>Price + Extras: $ {total.toFixed(2)}</StyledPrice>
                <StyledQuantity>
                    <StyledLabel>Qty: <StyledSelect value={quantity} onChange={handleQtyChange}>
                            { createSelectOptions(10) }
                        </StyledSelect>
                    </StyledLabel>                    
                </StyledQuantity>
            </StyledPriceQuantityContainer>
            <StyledButtonContainer>
                <StyledButton onClick={(e) => handleOrderClick()}>ORDER</StyledButton>
            </StyledButtonContainer>
        </StyledContainer>
    );
}

export default Footer;
