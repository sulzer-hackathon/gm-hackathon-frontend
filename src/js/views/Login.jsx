class Login extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.refs.username.value || !this.refs.password.value){
      showSnackbar("Username or password blank");
    } else {
      this.handleLogin();
    }
  }

  handleLogin(){
    store.dispatch({ type: 'LOADER_STATE', payload: true });
    webService.handleLogin(this.refs.username.value, this.refs.password.value).then((res)=>{
      store.dispatch({ type: 'LOADER_STATE', payload: false });
      ReactRouter.hashHistory.push('dashboard');
    }).catch((err)=>{
      store.dispatch({ type: 'LOADER_STATE', payload: false });
      showSnackbar(err.message);
    });
  }

  componentDidMount(){
    componentHandler.upgradeDom();
  }

  render() {
    return (
      <div className="login">

        <MaterialTextfield
          onChange={() => {}}
          label="Text..."
          floatingLabel
          style={{width: '200px'}}
      />

        <div className="fx-row fx-justify-content-center">
          <div className="logo relative">
            <i className="material-icons menu">restaurant_menu</i>
            <i className="material-icons search">search</i>
          </div>
        </div>
        <div className="logo-name fx-row fx-justify-content-center">
          FoodFinder
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" ref="username" />
            <label className="mdl-textfield__label" htmlFor="sample3"><i className="material-icons">mail_outline</i>Username</label>
          </div>
          <br/>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" ref="password" />
            <label className="mdl-textfield__label" htmlFor="sample3"><i className="material-icons">lock_outline</i>Password</label>
          </div>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            LOG IN
          </button>
          <div className="additional">
            <Link to="/register">Don't have an account?</Link>
          </div>
        </form>
      </div>
    );
  }
}
