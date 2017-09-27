class AdapterService {

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
}

var adapterService = new AdapterService();
