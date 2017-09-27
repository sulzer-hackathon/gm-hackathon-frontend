class Main extends React.Component {

  constructor(props){
    super(props);
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
  }

  componentDidMount(){
    ReactRouter.hashHistory.push('login');
  }

  render() {
    return (
      <div className="main full-width full-height fx-column fx-center">
        {
          this.props.children ? React.cloneElement(
            this.props.children,
            Object.assign({}, this.state, {
              /*handleLogin: this.handleLogin,*/
            })
          ) : ''
        }
      </div>
    );
  }
}
