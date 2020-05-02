
const configDEV = {

	URL: {

		apiURL: 'http://localhost:8000'

	}	
	
};


const configPROD = {

	URL: {

		apiURL: 'https://infinite-ravine-44036.herokuapp.com'

	}
};


const Config = {
	URL: (process.env.NODE_ENV === 'production' ? configPROD.URL : configDEV.URL),
	SITE_METADATA: {
		title: 'Crockers Restaurant',
		description: "Crocker Restaurant Home Page offering our main food services."
	},
	ROUTES: {
		MENU_ITEMS: {
			GET_Image: imageId => {
				return `/api/menuitems/images/${imageId}`;
			},
			GET_Many_Images: qs => {
				return `/api/menuitems/images/many?${qs}`;
			},
			POST_Image: itemId => {
				return `/api/menuitems/${itemId}/image`
			}
		}
	}



};


export default Config;