class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { restaurants: [], menuItems: [] };

    // var vinElem = document.getElementById('vin');
    // gm.info.getVehicleConfiguration(function(data) {
    //   console.log(data);
    //   vinElem.innerHTML = gm.info.getVIN();
    // });
    //
    // function showSpeed(data) {
    //   var speed = data;
    //   if (speed !== undefined) {
    //     var speedText = document.getElementById('speed');
    //     speedText.innerHTML = speed;
    //   }
    // }
    //
    // gm.info.watchVehicleData(function(data){
    //   console.log(data);
    //   var speedText = document.getElementById('speed');
    //   speedText.innerHTML = data.average_speed;
    // }, ['average_speed']);

    this.updateRestaurants = this.updateRestaurants.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
  }

  updateRestaurants(restaurants) {
    console.log('updateRestaurants', restaurants);
    this.setState({ restaurants: restaurants });
    ReactRouter.hashHistory.push('restaurants');
  }

  updateMenu(menuItems) {
    console.log('updateMenu', menuItems);
    this.setState({ menuItems: menuItems });
    ReactRouter.hashHistory.push('menu');
  }

  cancelSelection() {
    ReactRouter.hashHistory.push('dashboard');
  }

  finalizeOrder() {
    ReactRouter.hashHistory.push('dashboard');
  }

  componentDidMount() {
    snackbarContainer = document.querySelector('#snackbar');
    ReactRouter.hashHistory.push('dashboard');
  }

  render() {
    var loader = (store.getState().loader) ?
      <div className="loaderWrap">
        <div className="loader"></div>
      </div>
    : '';
    var children = this.props.children ? React.cloneElement(this.props.children, Object.assign({}, this.state, {
        /*handleLogin: this.handleLogin,*/
        updateRestaurants: this.updateRestaurants,
        updateMenu: this.updateMenu,
        cancelSelection: this.cancelSelection,
        finalizeOrder: this.finalizeOrder
      }
    )) : '';
    return (
      <div className="main full-width fx-column fx-center">
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          {loader}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          {children}
        </ReactCSSTransitionGroup>
        <div id="snackbar" className="mdl-js-snackbar mdl-snackbar">
          <div className="mdl-snackbar__text"></div>
          <button className="mdl-snackbar__action" type="button"></button>
        </div>
      </div >
    );
  }
}
