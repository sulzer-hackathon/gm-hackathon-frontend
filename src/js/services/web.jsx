class WebService {

  constructor() {
    // this.baseUrl = 'http://localhost:8080/api/';
    this.baseUrl = 'http://gmhackathon-prod.us-east-1.elasticbeanstalk.com/api/';
  }

  handleLogin(key) {
    return axios.post(`${this.baseUrl}user/login`, {
      userID: key,
    });
  }

  speechToText(fileContents) {
    var formData = new FormData();
    formData.append('audio', new Blob([fileContents], { type: 'audio/wav' }));
    return axios.post(this.baseUrl + 'adapter/stt', formData);
  }

  executeCommand(command) {
    var commandRequest = {
      'lat': 40.71278370,
      'lng': -74.00594130,
      'heading': 'NorthEast',
      'speed': 100,
      'command': command
    };
    return axios.post(this.baseUrl + 'adapter/command', commandRequest);
  }
}

var webService = new WebService();
