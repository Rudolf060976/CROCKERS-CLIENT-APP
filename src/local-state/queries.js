import { gql } from '@apollo/client';

export const GET_USER_STATE = gql`
	query GetUserState {
		userState @client {
			isLoggedIn
			loggedUser {
				fullname
				username
				email
			}
		}
	}
`;

