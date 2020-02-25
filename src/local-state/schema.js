import { gql } from '@apollo/client';

const schema = gql`

	extend type Query {
		userState: UserState!
		
	}

	extend type Mutation {
		setLogInUser(input: inputUser): Boolean!
		setLogOutUser: Boolean!
		
	}

	extend type UserState {
		isLoggedIn: Boolean!
		loggedUser: LocalUser!
	}

	extend input inputUser {
		fullname: String!
		username: String!
		email: String!
	}

	extend type LocalUser {
		fullname: String!
		username: String!
		email: String!
	}
	

`;


export default schema;