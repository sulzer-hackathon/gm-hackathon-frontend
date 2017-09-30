'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebService = function () {
  function WebService() {
    _classCallCheck(this, WebService);

    // this.baseUrl = 'http://localhost:8080/api/';
    this.baseUrl = 'http://gmhackathon-prod.us-east-1.elasticbeanstalk.com/api/';
  }

  _createClass(WebService, [{
    key: 'handleLogin',
    value: function handleLogin(key) {
      return axios.post(this.baseUrl + 'user/login', {
        userID: key
      });
    }
  }, {
    key: 'speechToText',
    value: function speechToText(fileContents) {
      var formData = new FormData();
      formData.append('audio', new Blob([fileContents], { type: 'audio/wav' }));
      return axios.post(this.baseUrl + 'adapter/stt', formData);
    }
  }, {
    key: 'executeCommand',
    value: function executeCommand(command) {
      var commandRequest = {
        'lat': 40.71278370,
        'lng': -74.00594130,
        'heading': 'NorthEast',
        'speed': 100,
        'command': command
      };
      return axios.post(this.baseUrl + 'adapter/command', commandRequest);
    }
  }]);

  return WebService;
}();

var webService = new WebService();
