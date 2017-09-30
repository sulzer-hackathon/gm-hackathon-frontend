"use strict";

var store = Redux.createStore(Redux.combineReducers({
  app: app,
  loader: loader
}));
