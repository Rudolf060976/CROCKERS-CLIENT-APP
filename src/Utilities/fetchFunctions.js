import axios from 'axios';

import Config from '../config';

const { apiURL } = Config.URL;

export const fetchGetImageFile = async imageId => {

	const path = Config.ROUTES.MENU_ITEMS.GET_Image(imageId);

	const options = {
		url: apiURL + path,
		method: 'GET',
		responseType: 'blob',
		withCredentials: true
	};

	const response = await axios(options);
	
	const output = {
		_id: imageId,
		id: imageId,
		imageURL: URL.createObjectURL(response.data)
	};
	
	return output;

};

export const fetchManyImages = async ids => {

	const query = {

		filter: JSON.stringify({ ids })

	};

	const qs = new URLSearchParams(query).toString();

	const path = Config.ROUTES.MENU_ITEMS.GET_Many_Images(qs);

	const options = {
		url: apiURL + path,
		method: 'GET',
		responseType: 'json',
		withCredentials: true
	}

	const response = await axios(options);

	const { data } = response;

		/* NOTA: EN LA API VIENE data, QUE ES UN ARRAY CONVERTIDO A JSON  */
		/* ESE ARRAY ES DE DOCUMENTOS DE LA FORMA { _id: xxx, image: xxxx }  */
		/* image es un Buffer de Node.js, pero que fué convertido en JSON  */
		/* Por lo tanto hay que convertirlo DE NUEVO a Buffer, con Buffer.from */
		/* Luego, debemos crear un Blob para poder usar URL.createObjectURL */
		/* ya que ese método solo usa Blobs o Files */
		/* Por último, URL.createObjectURL nos da el url de la imágen */

	const output = data.map(item => {

		return {
			_id: item._id,
			id: item._id,
			imageURL: URL.createObjectURL(new Blob([Buffer.from(item.image)]))
		};

	});

	return output;

};