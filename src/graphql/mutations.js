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

