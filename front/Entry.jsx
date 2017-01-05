//Import REACT Modules
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import Redux Provider & Store

//Import CSS

//Import Components
import Main from './components/Main.js';
import Home from './components/home/Home.js';;

//Build Router Component
const router = (
	<Router history={ browserHistory }>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);

//Render Component
render(router, document.getElementById('root'));
