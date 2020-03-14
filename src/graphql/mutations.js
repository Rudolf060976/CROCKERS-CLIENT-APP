import { gql } from '@apollo/client';


export const SIGN_UP = gql`
    mutation SignUp($input: signUpInput!) {
        signUp(input: $input) {
            code
            success
            message
            token
        }
    }
`;


export const LOG_IN = gql`
    mutation LogIn($login: String!, $password: String!) {
        logIn(login: $login, password: $password) {
            code
            success
            message
            token
        }
    }
`;

export const ADD_CART_LINE = gql`
    mutation AddCartLine($input: cartLineInput!) {
        AddCartLine(input: $input) {
            code
            success
            message
        }
    }
`;

export const DELETE_CART_LINE = gql`
    mutation DeleteCartLine($lineId: ID!) {
        deleteCartLine(lineId: $lineId) {
            code
            success
            message
        }
    }
`;

export const DELETE_CART = gql`
    mutation DeleteCart($userId: ID!) {
        deleteCart(userId: $userId) {
            code
            success
            message
        }
    }

`;

export const UPDATE_CART_LINE = gql`
    mutation UpdateCartLine($lineId: ID!, $quantity: Int!) {
        updateCartLine(lineId: $lineId, quantity: $quantity) {
            code
            success
            message
        }
    }
    
`;