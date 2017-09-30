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
    // componentHandler.upgradeDom();
  }

  logout() {
    ReactRouter.hashHistory.push('login');
  }

  beginRecording() {
    // store.dispatch({ type: UPDATE_SESSION, payload: { recording: true, searchString: '', searchNotFound: false } });
    var __object = { "user": null, "restaurants": [{ "apiKey": "831648df8695e587144247b91fbcb2f3d548bfb0fbc2a739", "name": "Big Al's Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-als-pizza-21407_1407868358668.png", "latitude": 40.708958, "longitude": -74.011858 }, { "apiKey": "831648df8695e587fe2bbabe6b94d9a6ca2d8b721b5ea143", "name": "Bleecker Street Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/bleecker-street-pizza-8433_1429825758252.png", "latitude": 40.732184, "longitude": -74.003442 }, { "apiKey": "831648df8695e587884225aec137a02a945357f5e0c10306", "name": "Cafe Amore's Pizzeria Ristorante", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/cafe-amores-pizzeria-ristorante-17057_1403807111709.png", "latitude": 40.715726, "longitude": -74.009698 }, { "apiKey": "831648df8695e587fe2bbabe6b94d9a653f6cb07fa20c520", "name": "Chelsea Ristorante", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/chelsea-ristorante-8536_1392768035995.png", "latitude": 40.740646, "longitude": -74.00166 }, { "apiKey": "831648df8695e587884225aec137a02aae4b68948f9c5f8c", "name": "Clinton Square Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/clinton-square-pizza-16694_1403128417086.png", "latitude": 40.713946, "longitude": -73.98722 }] };
    this.props.updateRestaurants(__object.restaurants);
    // voiceService.startSpeechToText(this.onTranscript, 'Please tell us what you would like!');
  }

  onTranscript(command) {
    if(command == null){
      store.dispatch({ type: UPDATE_SESSION, payload: { recording: false, searchNotFound: true } });
    } else {
      store.dispatch({ type: UPDATE_SESSION, payload: { searchString: command } });
      webService.executeCommand(command).then((res) => {
        setTimeout(()=>{
          this.props.updateRestaurants(res.data.restaurants);
          store.dispatch({ type: UPDATE_SESSION, payload: { recording: false } });
        },1500);
      }).catch((res) => {
        store.dispatch({ type: UPDATE_SESSION, payload: { recording: false, searchNotFound: true } });
      });
    }
  }

  handleWatsonResult(result) {
    console.log('result', result.data);
  }

  render() {
    var disabled = store.getState().app.recording ? true : false;
    return (
      <div className="dashboard mdl-layout__content fx-column fx-center">
        <div className={store.getState().app.searchNotFound ? 'show' : 'hidden'}>Search not found</div>
        <div className={store.getState().app.searchString && !store.getState().app.searchNotFound ? 'show' : 'hidden'}>Searhing: {store.getState().app.searchString}</div>
        <div className={"recording " + (store.getState().app.searchString && !store.getState().app.searchNotFound ? 'hidden' : 'show')}>
          <img src="/assets/images/recording.gif" />
          <img src="/assets/images/recording.png" className={"still " + (store.getState().app.recording ? 'hidden' : 'show')}/>
        </div>
        <div className={store.getState().app.searchString && !store.getState().app.searchNotFound ? 'hidden' : 'show'}>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.beginRecording} disabled={disabled}>Start</button>
        </div>
        <div className={"loader-wrap " + (store.getState().app.searchString && !store.getState().app.searchNotFound ? 'show' : 'hidden')}>
          <div className="loader"></div>
        </div>
        {/*
        <div className="page-content">
          Begin Recording
          <br />Lat: {this.gps.lat}
          <br />Lng: {this.gps.lng}
          <br />Heading: {this.gps.heading}
        </div>
        */}
      </div>
    );
  }
}
