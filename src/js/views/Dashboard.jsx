class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.gps = '';
  }

  componentDidMount(){
    this.gps = infoService.getInfo();
  }

  render() {
    return (
      <div className="dashboard fx fx-center">
        Dashboard
        <br/>Lat: {this.gps.lat}
        <br/>Lng: {this.gps.lng}
        <br/>Heading: {this.gps.heading}
      </div>
    );
  }
}
