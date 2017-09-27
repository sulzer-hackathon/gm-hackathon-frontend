class Login extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch({ type: 'LOADER_STATE', payload: true });
    adapterService.handleLogin(this.refs.username.value, this.refs.password.value).then((res)=>{
      store.dispatch({ type: 'LOADER_STATE', payload: false });
    }).catch((err)=>{
      debugger;
    });
    // ReactRouter.hashHistory.push('login');
  }

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div className="login">
        <div className="fx-row fx-justify-content-center">
          <div className="logo relative">
            <i className="material-icons menu">restaurant_menu</i>
            <i className="material-icons search">search</i>
          </div>
        </div>
        <div className="logo-name fx-row fx-justify-content-center">
          <strong>F</strong>ood<strong>F</strong>inder
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
            Don't have an account?
          </div>
        </form>
      </div>
    );
  }
}
