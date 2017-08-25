import { composeWithDevTools }                    from 'redux-devtools-extension';
import { applyMiddleware, createStore }           from 'redux';
import { Router, Route, hashHistory, IndexRoute}  from 'react-router';
import { syncHistoryWithStore }                   from 'react-router-redux';

import ReactDOM   from 'react-dom';
import {Provider} from 'react-redux';
import thunk      from 'redux-thunk';
import axios      from 'axios';


import reducer    from './reducers';
import {Overview}        from './components';

const store   = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

axios.get('')
  .then((response) => {
    
    // store.dispatch({type: "GET_USERS_DATA", payload: usersArr});
  })
  .catch(function (err) {
    console.log(err);
  });


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Overview}>
        <Route path="/"           component={Overview}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

