/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
//import "core-js/stable";
import "regenerator-runtime/runtime";



import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';

import initialState from './local-state/initial-state';
import schema from './local-state/schema';
import resolvers from './local-state/resolvers';

import theme from './styledComponents/theme';
import { ThemeProvider } from 'styled-components';
import './mainStyles/bootstrapStyles.scss';
import './mainStyles/index.scss';
import './assets/fontAwesome/library'; // LOADING FONTAWESOME LIBRARY

import { BrowserRouter as Router } from 'react-router-dom';

import Config from './config';

import App from './App';

const cache = new InMemoryCache();
 
const httpLink = new HttpLink({ uri: Config.URL.apiURL + '/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
	  headers: {
		'x-token': localStorage.getItem('x-token') || '',
	  }
	});
  
	return forward(operation);
  })

const client = new ApolloClient({
	cache,
	link: concat(authMiddleware, httpLink),
	typeDefs: schema,
	resolvers,
	credentials: 'include'
});

cache.writeData({

	data: initialState

});

client.onResetStore(() => client.writeData({ data: initialState }));


const destination = document.getElementById('root');

ReactDOM.render(
	<ApolloProvider client={client} >
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>			
		</ThemeProvider>		
	</ApolloProvider>,
	destination
);