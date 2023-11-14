import { gql } from '@apollo/client';


export const GET_USER_STATE = gql`
	query GetUserState {
		userState @client {
			isLoggedIn
			loggedUser {
				id
				fullname
				username
				email
			}
		}
	}
`;

export const GET_IU_STATE = gql`
	query GetIUState {
		iuState @client {
			signUpModalOpen
			logInModalOpen
		}
	}
`;

