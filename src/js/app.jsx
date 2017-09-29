const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const DefaultRoute = ReactRouter.DefaultRoute;
const Link = ReactRouter.Link;
const RouteHandler = ReactRouter.RouteHandler;
const hashHistory = ReactRouter.hashHistory;

const render = () => ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="main" path="/" component={Main}>
      <Route name="login" path="login" component={Login}/>
      <Route name="register" path="register" component={Register}/>
      <Route name="dashboard" path="dashboard" component={Dashboard}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

render();
store.subscribe(render);

var snackbarContainer;
var showSnackbar = (msg) => {
  var handler = function(event) {
    showSnackbarButton.style.backgroundColor = '';
  };
  var data = {
    message: msg,
    timeout: 2000,
    // actionHandler: handler,
    // actionText: 'Undo'
  };
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
};
