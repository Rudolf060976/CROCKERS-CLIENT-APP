

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
	
};


export default initialState;