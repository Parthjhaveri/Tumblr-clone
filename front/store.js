//Import REACT & REDUX Modules
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import Root Reducer
import rootReducer from './reducers/index';

//Create The Store
const store = createStore(rootReducer, defaultState);

//History
export const history = syncHistoryWithStore(browserHistory, store);

//Enable hot reloading of reducers

//accept the hot reload & re-require the reducer (recompire the reducer & swap it out)

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer)
	})
}

export default store;
