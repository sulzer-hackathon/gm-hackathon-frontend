class WatsonService {

  constructor(){
    this.token = '12312412123123';
    this.websocket;
    this.audio;
    this.callback;
  }

  getToken(){
    axios.get('https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/text-to-speech/api', {
      headers: { 'Authorization': 'Basic NGEzODBkOTgtY2ZiYS00MDkyLWI0ZTMtN2ZjNDM2Y2M1ZTFmOnc1dklUTExnWHYwVg' }
    }).then((res)=>{
      debugger;
    }).catch((err)=>{
      debugger;
    });
  }

  initSpeechToText(fileContents, callback){
    this.callback = callback;
    this.audio = fileContents;
    this.websocket = new WebSocket(`wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=${this.token}&model=en-US_BroadbandModel`);
    this.websocket.onopen = (evt) => { this.onOpen(evt) };
    this.websocket.onclose = (evt) => { this.onClose(evt) };
    this.websocket.onmessage = (evt) => { this.onMessage(evt) };
    this.websocket.onerror = (evt) => { this.onError(evt) };
  }

  onOpen(evt) {
    var message = {
      action: 'start',
      'content-type': 'audio/wav',
      'interim_results': true,
      'max-alternatives': 3,
      keywords: ['colorado', 'tornado', 'tornadoes'],
      'keywords_threshold': 0.5
    };
    this.websocket.send(JSON.stringify(message));
    this.websocket.send(this.audio);
    this.websocket.send(JSON.stringify({action: 'stop'}));
  }

  onMessage(evt) {
    this.callback(evt.data);
  }

  onError(evt){
    console.log('websocket error', evt);
  }

  onClose(evt){
    console.log('websocket closed', evt);
  }

}

var watsonService = new WatsonService();
