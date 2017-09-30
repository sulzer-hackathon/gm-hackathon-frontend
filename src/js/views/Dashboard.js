'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.gps = '';
    _this.beginRecording = _this.beginRecording.bind(_this);
    _this.onTranscript = _this.onTranscript.bind(_this);
    // this.handleFileContent = this.handleFileContent.bind(this);
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.gps = infoService.getInfo();
      // componentHandler.upgradeDom();
    }
  }, {
    key: 'logout',
    value: function logout() {
      ReactRouter.hashHistory.push('login');
    }
  }, {
    key: 'beginRecording',
    value: function beginRecording() {
      store.dispatch({ type: UPDATE_SESSION, payload: { recording: true, searchString: '', searchNotFound: false } });
      // var __object = { "user": null, "restaurants": [{ "apiKey": "831648df8695e587144247b91fbcb2f3d548bfb0fbc2a739", "name": "Big Al's Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-als-pizza-21407_1407868358668.png", "latitude": 40.708958, "longitude": -74.011858 }, { "apiKey": "831648df8695e587fe2bbabe6b94d9a6ca2d8b721b5ea143", "name": "Bleecker Street Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/bleecker-street-pizza-8433_1429825758252.png", "latitude": 40.732184, "longitude": -74.003442 }, { "apiKey": "831648df8695e587884225aec137a02a945357f5e0c10306", "name": "Cafe Amore's Pizzeria Ristorante", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/cafe-amores-pizzeria-ristorante-17057_1403807111709.png", "latitude": 40.715726, "longitude": -74.009698 }, { "apiKey": "831648df8695e587fe2bbabe6b94d9a653f6cb07fa20c520", "name": "Chelsea Ristorante", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/chelsea-ristorante-8536_1392768035995.png", "latitude": 40.740646, "longitude": -74.00166 }, { "apiKey": "831648df8695e587884225aec137a02aae4b68948f9c5f8c", "name": "Clinton Square Pizza", "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/clinton-square-pizza-16694_1403128417086.png", "latitude": 40.713946, "longitude": -73.98722 }] };
      // this.props.updateRestaurants(__object.restaurants);
      voiceService.startSpeechToText(this.onTranscript, 'Please tell us what you would like!');
    }
  }, {
    key: 'onTranscript',
    value: function onTranscript(command) {
      var _this2 = this;

      if (command == null) {
        store.dispatch({ type: UPDATE_SESSION, payload: { recording: false, searchNotFound: true } });
      } else {
        store.dispatch({ type: UPDATE_SESSION, payload: { searchString: command } });
        webService.executeCommand(command).then(function (res) {
          setTimeout(function () {
            _this2.props.updateRestaurants(res.data.restaurants);
            store.dispatch({ type: UPDATE_SESSION, payload: { recording: false } });
          }, 1500);
        }).catch(function (res) {
          store.dispatch({ type: UPDATE_SESSION, payload: { recording: false, searchNotFound: true } });
        });
      }
    }
  }, {
    key: 'handleWatsonResult',
    value: function handleWatsonResult(result) {
      console.log('result', result.data);
    }
  }, {
    key: 'render',
    value: function render() {
      var disabled = store.getState().app.recording ? true : false;
      return React.createElement(
        'div',
        { className: 'dashboard mdl-layout__content fx-column fx-center' },
        React.createElement(
          'div',
          { className: store.getState().app.searchNotFound ? 'show' : 'hidden' },
          'Search not found'
        ),
        React.createElement(
          'div',
          { className: store.getState().app.searchString && !store.getState().app.searchNotFound ? 'show' : 'hidden' },
          'Searhing: ',
          store.getState().app.searchString
        ),
        React.createElement(
          'div',
          { className: "recording " + (store.getState().app.searchString && !store.getState().app.searchNotFound ? 'hidden' : 'show') },
          React.createElement('img', { src: '/assets/images/recording.gif' }),
          React.createElement('img', { src: '/assets/images/recording.png', className: "still " + (store.getState().app.recording ? 'hidden' : 'show') })
        ),
        React.createElement(
          'div',
          { className: store.getState().app.searchString && !store.getState().app.searchNotFound ? 'hidden' : 'show' },
          React.createElement(
            'button',
            { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect', onClick: this.beginRecording, disabled: disabled },
            'Start'
          )
        ),
        React.createElement(
          'div',
          { className: "loader-wrap " + (store.getState().app.searchString && !store.getState().app.searchNotFound ? 'show' : 'hidden') },
          React.createElement('div', { className: 'loader' })
        )
      );
    }
  }]);

  return Dashboard;
}(React.Component);
