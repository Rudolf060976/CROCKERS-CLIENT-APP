import * as localMutations from '../local-state/mutations.js';
import * as queries from '../graphql/queries';


// ESTA FUNCION LO QUE HACE ES HACER UNA CONSULTA ME AL SERVIDOR Y ACTUALIZA EL LOCAL STATE CON EL ME, YA SEA NULL O EL USUARIO EN CUESTION. PERMITE MANTENER EL LOCAL STATE ACTUALIZADO. TODO COMPONENTE QUE DEPENDA DEL LOCAL STATE SERA ACTUALIZADO CUANDO EL MISMO CAMBIE.

export const CALL_ME_AND_UPDATE_LOCAL_STATE = async (client) => {

	const data = await client.query({
		query: queries.ME,
		fetchPolicy: "no-cache"		
	});

	const {
		data: {
			me
		}
	} = data;
	console.log('DATA :', data);
	if (!me) {
		console.log('ESTOY AQUI!!!');
		await client.mutate({

			mutation: localMutations.SET_LOGOUT_USER

		});

		localStorage.removeItem('x-token');

	} else {

		const {
			id,
			username,
			email,
			firstname,
			lastname,
			role
		} = me;


		await client.mutate({
			mutation: localMutations.SET_LOGIN_USER,
			variables: {
				input: {
					id,
					fullname: firstname + ' ' + lastname,
					username,
					email
				}
			}
		});
	}

};

