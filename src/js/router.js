'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./views/App');

var _App2 = _interopRequireDefault(_App);

var _Login = require('./views/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(
    Route,
    { path: '/', component: _App2.default },
    React.createElement(Route, { path: 'login', component: _Login2.default })
  )
);

exports.default = routes;
