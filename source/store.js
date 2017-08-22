import { applyMiddleware, createStore, combineReducers } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';


const initialUserState = {
  users: []
}

const mainReducer = function(state = initialUserState, action) {
  	switch(action.type) {
		case 'GET_DATA': {

	  		// return Object.assign({},{users: formattedUseraArr});
	  		return Object.assign({},{users: action.payload});
	  		break;
		}
	    
	  }
  	return state;
}

// Combine Reducers
// const reducers = combineReducers({
//   userState: 		userReducer
// });

const middleware = applyMiddleware(thunk);
export const store = createStore(mainReducer, middleware, window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION___());


