class InfoService {

  constructor(){
    this.lat = 0;
    this.lng = 0;
    this.heading = 0;
    this.subscription = gm.info.watchPosition((data)=>{
      this.processInfo(data);
    }, true);
  }

  processInfo(data){
    this.lat = data.latitude;
    this.lng = data.longitude;
    this.heading = data.heading;
  }

  getInfo(){
    return {
      lat: this.lat,
      lng: this.lng,
      heading: this.heading
    };
  }

}

var infoService = new InfoService();
