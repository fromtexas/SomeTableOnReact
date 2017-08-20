import * as redux from 'redux'
import thunk from 'redux-thunk'

import {ticketsReducer, currentFilterReducer, searchTextReducer, currentDateReducer, currentStatusReducer, datesArrReducer} from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    tickets: ticketsReducer,
    currentFilter: currentFilterReducer,
    searchText: searchTextReducer,
    currentDate: currentDateReducer,
    currentStatus: currentStatusReducer,
    datesArr: datesArrReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
