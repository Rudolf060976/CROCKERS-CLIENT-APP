import * as localQueries from './queries';
import * as fetchFunctions from '../Utilities/fetchFunctions';

import * as queries from './queries';


const resolvers = {
	Query: {

	},
	Mutation: {
		setLogInUser: (parent, { input }, { cache }) => {

			const { id, fullname, username, email } = input;
		
			const newState = {
				__typename: 'UserState',
				isLoggedIn: true,
				loggedUser: {
					__typename: 'LocalUser',
					id,
					fullname,
					username,
					email
				}
			};

			cache.writeQuery({
				query: queries.GET_USER_STATE,
				data: { userState: newState }
			});

		},
		setLogOutUser: (parent, args, { cache }) => {

			cache.writeQuery({
				query: queries.GET_USER_STATE,
				data: { userState: {
					__typename: 'UserState',
					isLoggedIn: false,
					loggedUser: null
				}}
			});

		},
		signUpModalOpen: (parent, args, { cache }) => {

			const { iuState } = cache.readQuery({ query: queries.GET_IU_STATE });


			cache.writeQuery({
				query: queries.GET_IU_STATE,
				data: {
					iuState: {
						...iuState,
						signUpModalOpen: true,
						logInModalOpen: false

					}
				}

			});

		},
		signUpModalClose: (parent, args, { cache }) => {

			const { iuState } = cache.readQuery({ query: queries.GET_IU_STATE });


			cache.writeQuery({
				query: queries.GET_IU_STATE,
				data: {
					iuState: {
						...iuState,
						signUpModalOpen: false
					}
				}

			});

		},
		logInModalOpen: (parent, args, { cache }) => {

			const { iuState } = cache.readQuery({ query: queries.GET_IU_STATE });


			cache.writeQuery({
				query: queries.GET_IU_STATE,
				data: {
					iuState: {
						...iuState,
						logInModalOpen: true,
						signUpModalOpen: false
					}
				}

			});

		},
		logInModalClose: (parent, args, { cache }) => {

			const { iuState } = cache.readQuery({ query: queries.GET_IU_STATE });


			cache.writeQuery({
				query: queries.GET_IU_STATE,
				data: {
					iuState: {
						...iuState,
						logInModalOpen: false
					}
				}

			});

		},
	
	},
	MenuItem: {
		imageURL: async (menuItem, args, { cache }) => {

			try {
				
				const imageObject = await fetchFunctions.fetchGetImageFile(menuItem.image);
								
				return imageObject.imageURL;

			} catch (error) {
			
				return null;

			}
			
		}
	},
	MenuGroup: {
		imageURL: async (menuGroup, args, { cache }) => {

			try {

				const imageObject = await fetchFunctions.fetchGetImageFile(menuGroup.image);

				return imageObject.imageURL;

			} catch (error) {

				return null;

			}

		}

	}

};

export default resolvers;