import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CulturalTrail from '../components/CulturalTrail';

import { reducer as formReducer } from 'redux-form'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const r = {
  ...reducers,
  form: formReducer
}
const reducer = combineReducers(r);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CulturalTrail />
      </Provider>
    );
  }
}
