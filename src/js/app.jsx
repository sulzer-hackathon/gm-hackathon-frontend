var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="main" path="/" component={Main}>
      <Route name="login" path="login" component={Login}/>
      <Route name="dashboard" path="dashboard" component={Dashboard}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
