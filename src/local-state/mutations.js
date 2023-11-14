import { gql } from '@apollo/client';


export const SET_LOGIN_USER = gql`

    mutation SetLoginUser($input: inputUser!) {
        setLogInUser(input: $input) @client
    }
`;

export const SET_LOGOUT_USER = gql`
    mutation SetLogOutUser {
        setLogOutUser @client
    }
`;

export const SET_SIGNUP_MODAL_OPEN = gql`
    mutation SignUpModalOpen {
        signUpModalOpen @client
    }
`;

export const SET_SIGNUP_MODAL_CLOSE = gql`
    mutation SignUpModalClose {
        signUpModalClose @client
    }
`;

export const SET_LOGIN_MODAL_OPEN = gql`
    mutation LogInModalOpen {
        logInModalOpen @client
    }
`;

export const SET_LOGIN_MODAL_CLOSE = gql`
    mutation LogInModalClose {
        logInModalClose @client
    }
`;




