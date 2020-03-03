import { gql } from '@apollo/client';


export const SIGN_UP = gql`
    mutation SignUp($input: signUpInput!) {
        signUp(input: $input) {
            token
        }
    }
`;


export const LOG_IN = gql`
    mutation LogIn($login: String!, $password: String!) {
        logIn(login: $login, password: $password) {
            token
        }
    }
`;

