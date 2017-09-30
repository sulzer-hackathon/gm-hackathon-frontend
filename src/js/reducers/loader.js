'use strict';

var LOADER_STATE = 'LOADER_STATE';
var loader = function loader() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case LOADER_STATE:
      state = action.payload;
    default:
      return state;
  }
};
