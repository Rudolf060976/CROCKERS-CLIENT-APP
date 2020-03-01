

const initialState = {
	userState: {
		__typename: 'UserState',
		isLoggedIn: false,
		loggedUser: {
			__typename: 'LocalUser',
			fullname: '',
			username: '',
			email: ''
		}
	},
	iuState: {
		__typename: 'IUState',
		signUpModalOpen: false,
		logInModalOpen: false
	}
	
};


export default initialState;