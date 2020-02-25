import * as localQueries from './queries';
import * as fetchFunctions from '../Utilities/fetchFunctions';


const resolvers = {
	Query: {

	},
	Mutation: {
		
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
	}

};

export default resolvers;