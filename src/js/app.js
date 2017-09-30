"use strict";

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var hashHistory = ReactRouter.hashHistory;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var render = function render() {
  return ReactDOM.render(React.createElement(
    Router,
    { history: hashHistory },
    React.createElement(
      Route,
      { name: "main", path: "/", component: Main },
      React.createElement(Route, { name: "menu", path: "menu", component: Menu }),
      React.createElement(Route, { name: "login", path: "login", component: Login }),
      React.createElement(Route, { name: "register", path: "register", component: Register }),
      React.createElement(Route, { name: "dashboard", path: "dashboard", component: Dashboard }),
      React.createElement(Route, { name: "restaurants", path: "restaurants", component: Restaurants }),
      React.createElement(Route, { name: "order", path: "order", component: Order })
    )
  ), document.getElementById('root'));
};

render();
store.subscribe(render);

var snackbarContainer;
var showSnackbar = function showSnackbar(msg) {
  // var handler = function (event) {
  //   showSnackbarButton.style.backgroundColor = '';
  // };
  // var data = {
  //   message: msg,
  //   timeout: 2000,
  //   // actionHandler: handler,
  //   // actionText: 'Undo'
  // };
  // snackbarContainer.MaterialSnackbar.showSnackbar(data);
  gm.ui.showAlert(null, null, { alertTitle: 'Alert', alertDetail: msg, primaryButtonText: 'Ok', primaryAction: primaryAction });
};

var primaryAction = function actionCallback() {

};

