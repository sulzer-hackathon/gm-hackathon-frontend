class Register extends React.Component {
  constructor (props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.save = this.save.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount(){
    componentHandler.upgradeDom();
  }

  goBack(){
    ReactRouter.hashHistory.push('login');
  }

  save(){
    if(!this.refs.username.value || !this.refs.password.value || !this.refs.address.value || !this.refs.city.value || !this.refs.state.value || !this.refs.zip.value){
      showSnackbar("All fields are required.");
    } else {
      this.handleSave();
    }
  }

  handleSave(){
    store.dispatch({ type: 'LOADER_STATE', payload: true });
    webService.handleLogin(this.refs.username.value, this.refs.password.value).then((res)=>{
      store.dispatch({ type: 'LOADER_STATE', payload: false });
      ReactRouter.hashHistory.push('dashboard');
    }).catch((err)=>{
      store.dispatch({ type: 'LOADER_STATE', payload: false });
      showSnackbar(err.message);
    });
  }

  render() {
    return (
      <div className="register fx-column fx-center">
        <div>
          <h2>Registration</h2>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="username" />
          <label className="mdl-textfield__label">Username</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="password" />
          <label className="mdl-textfield__label">Password</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="address" />
          <label className="mdl-textfield__label">Address</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="city" />
          <label className="mdl-textfield__label">City</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="state" />
          <label className="mdl-textfield__label">State</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" ref="zip" />
          <label className="mdl-textfield__label">Zip</label>
        </div>
        <button type="submit" className="full-width mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.save}>
          Save
        </button>
        <button type="submit" className="full-width mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" onClick={this.goBack}>
          Back
        </button>
      </div>
    );
  }
}
