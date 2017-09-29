class WebService {

  constructor(){
    this.baseUrl = 'http://bmwbookingtoolservicetoronto.eu-central-1.elasticbeanstalk.com';
  }

  handleLogin(username, password){
    return axios.get(`${this.baseUrl}/v1/frontend/vehicles`, {
      params: {
        username: username,
        password: password
      }
    });
  }

  stringToBlob(wavString){
    var len = wavString.length;
    var buf = new ArrayBuffer(len);
    var view = new Uint8Array(buf);
    for (var i = 0; i < len; i++) {
      view[i] = wavString.charCodeAt(i) & 0xff;
    }
    return new Blob([view], {type: "audio/wav"});
  }


  getResults(fileContents){
    var formData = new FormData();
    formData.append("lat", 40.71278370);
    formData.append("lng", -74.00594130);
    formData.append("heading", "NorthEast");
    formData.append("speed", 100);
    formData.append("audio", this.stringToBlob(fileContents));
    return axios.post("http://172.17.64.125:8080/v1/command", formData);
  }
}

var webService = new WebService();
