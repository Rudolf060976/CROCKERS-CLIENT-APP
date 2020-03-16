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
            cartLine
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

export const ADD_MANY_EXTRAS_TO_CART = gql`
    mutation AddManyExtrasToCart($cartLineId: ID!, $extrasIdArray: [ID!]!) {
        addManyExtrasToCart(cartLineId: $cartLineId, extrasIdArray: $extrasIdArray) {
            code
            success
            message
        }
    }

`;

export const REMOVE_MANY_EXTRAS_FROM_CART = gql`
    mutation RemoveManyExtrasFromCart($cartLineId: ID!, $extrasIdArray: [ID!]!) {
        removeManyExtrasFromCart(cartLineId: $cartLineId, extrasIdArray: $extrasIdArray) {
            code
            success
            message
        }
    }

`;

export const REMOVE_ALL_EXTRAS_FROM_CART = gql`
    mutation RemoveAllExtrasFromCart($cartLineId: ID!) {
        removeAllExtrasFromCart(cartLineId: $cartLineId) {
            code
            success
            message
        }
    }

`;