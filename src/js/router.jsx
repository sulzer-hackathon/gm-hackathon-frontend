import App from './views/App';
import Login from './views/Login';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={Login} />
    </Route>
  </Router>
)

export default routes;
