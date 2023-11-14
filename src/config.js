
const configDEV = {

	URL: {

		apiURL: 'http://localhost:8000'

	}	
	
};


const configPROD = {

	URL: {

		apiURL: 'http://ec2-54-221-156-129.compute-1.amazonaws.com:8000'

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