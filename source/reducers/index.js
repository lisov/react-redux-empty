import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Overview	from './overview';


export default combineReducers({
    Overview,
    routing: routerReducer
});