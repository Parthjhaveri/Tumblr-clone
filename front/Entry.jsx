//Import REACT Modules
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//Import Redux Provider & Store

//Import CSS

//Import Components
import Main from 'Main';
import Home from './components/home/Home.js';
import store from 'store';
import {CreatePostContainer} from 'CreatePostContainer';
import {LoginContainer} from 'LoginContainer';

//Build Router Component
const router = (
  <Provider store={store}>
  	<Router history={ browserHistory }>
  		<Route path="/" component={Main}>
  			<IndexRoute component={Home} />
        <Route path="create" component={CreatePostContainer} />
        <Route path="login" component={LoginContainer} />
  		</Route>
  	</Router>
  </Provider>
);

//Render Component
render(router, document.getElementById('root'));
