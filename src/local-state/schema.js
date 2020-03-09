import { gql } from '@apollo/client';

const schema = gql`

	extend type Query {
		userState: UserState!
		iuState: IUState!
	}

	extend type Mutation {
		setLogInUser(input: inputUser!): Boolean!
		setLogOutUser: Boolean	
		signUpModalOpen: Boolean
		signUpModalClose: Boolean
		logInModalOpen: Boolean
		logInModalClose: Boolean	
	}

	extend type UserState {
		isLoggedIn: Boolean!
		loggedUser: LocalUser
	}

	extend input inputUser {
		id: ID!
		fullname: String!
		username: String!
		email: String!
	}

	extend type LocalUser {
		id: ID!
		fullname: String!
		username: String!
		email: String!
	}

	extend type IUState {
		signUpModalOpen: Boolean!
		logInModalOpen: Boolean!
	}
	

`;


export default schema;