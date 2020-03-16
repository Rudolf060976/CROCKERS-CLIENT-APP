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
			totalCount
			pageInfo {
				endCursor
        		hasNextPage
        		hasPreviousPage
        		startCursor
			}
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

export const ME = gql`
	query Me {
		me {
			id 
			username
			email
			firstname
			lastname
			role
		}
	}
`;

export const GET_USER = gql`
	query GetUser {
		getUser {
			id 
			username
			email
			firstname
			lastname
			gender
			dateOfBirth
			mainPhoneNumber
			secondaryPhoneNumber
			country
			region
			city
			zone
			mainAddress
			referencePoint
			role
		}
	}
`;

export const GET_IF_USER_EXISTS = gql`
	query GetIfUserExists($username: String!, $email: String!) {
		getIfUserExists(username: $username, email: $email) {
			username
			email
		}
	}
`;

export const GET_CART = gql`
	query GetCart($userId: ID!) {
		getCart(userId: $userId) {
			id	
			menuItem {
				id
				name
				image
			}
			quantity
			price
			tax
			itemTotal
		}
	}

`;

export const GET_CART_TOTALS = gql`
	query GetCartTotals($userId: ID!) {
		getCartTotals(userId: $userId) {
			count
			subtotal
			tax
			total
		}
	}
`;


export const GET_EXTRAS_BY_ITEM = gql`
	query GetExtrasByItem($itemId: ID!) {
		getExtrasByItem(itemId: $itemId) {
			id 
			group
			name
			price
		}
	}

`;

