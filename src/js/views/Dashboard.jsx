class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.gps = '';
    this.beginRecording = this.beginRecording.bind(this);
    this.onTranscript = this.onTranscript.bind(this);
    // this.handleFileContent = this.handleFileContent.bind(this);
  }

  componentDidMount() {
    this.gps = infoService.getInfo();
    componentHandler.upgradeDom();
  }

  logout() {
    ReactRouter.hashHistory.push('login');
  }

  beginRecording() {
    voiceService.startSpeechToText(this.onTranscript, 'Please tell us what you would like!');
  }

  onTranscript(command) {
    webService.executeCommand(command).then((res) => {
      this.props.updateRestaurants(res.data.restaurants);
    }).catch((res) => {
      debugger;
    });
  }

  // readFile(filePath){
  //   console.log('gofilepath',filePath.replace(/^.*[\\\/]/, ''));  //removes unneedd file path because it only needs filename
  //   ioService.readFile(filePath.replace(/^.*[\\\/]/, ''), this.handleFileContent);
  // }
  //
  // handleFileContent(fileContents){
  //   // send contents with watson service
  //   webService.getResults(fileContents).then((res)=>{
  //     debugger;
  //   }).catch((res)=>{
  //     debugger;
  //   });
  // }

  handleWatsonResult(result) {
    console.log('result', result.data);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" onClick={this.logout}>Logout</a>
          </nav>
        </div>
        <main className="dashboard mdl-layout__content fx-column fx-center">
          <div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.beginRecording}>Start</button>
          </div>
          <div className="recording">
            <img src="/assets/images/recording.gif" />
          </div>
          <div className="page-content">
            Begin Recording
            <br />Lat: {this.gps.lat}
            <br />Lng: {this.gps.lng}
            <br />Heading: {this.gps.heading}
          </div>
        </main>
      </div>
    );
  }
}
