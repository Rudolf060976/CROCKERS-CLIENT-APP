/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import initialState from './local-state/initial-state';
import schema from './local-state/schema';
import resolvers from './local-state/resolvers';

import theme from './styledComponents/theme';
import { ThemeProvider } from 'styled-components';
import './mainStyles/bootstrapStyles.scss';
import './mainStyles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const cache = new InMemoryCache();

const link = createUploadLink({
      uri: 'http://localhost:8000/graphql',
      credentials: 'same-origin'
});
 
const client = new ApolloClient({
	cache,
	link,
	typeDefs: schema,
	resolvers
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