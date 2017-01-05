import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	return(

	)
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

//Add all state
const App = connect(mapStateToProps, mapDispatchtoProps)(Main);

export default App;