import { gql } from '@apollo/client';


export const GET_ALL_MENU_GROUPS = gql`
	query GetAllMenuGroups {
		getAllMenuGroups {
			id
			name
			description
		}
	}



`;

export const GET_MENU_ITEMS_SHOW_AT_HOME = gql`
	query GetMenuItemsShowAtHome {
		getMenuItemsShowAtHome {
			id
			name
			description
			price
			image
			imageURL @client		
		}
	}
`;

export const GET_MENU_ITEMS_BY_GROUP = gql`
	query GetMenuItemsByGroup($groupId: ID!, $first: Int, $last: Int, $after: String, $before: String) {
		getMenuItemsByGroup(groupId: $groupId, first: $first, last:$last, after:$after, before:$before) {
			nodes {
				id
				name
				description				
				price
				image
				imageURL @client		
			}
		}
	}
`;

