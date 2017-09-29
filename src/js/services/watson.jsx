class WatsonService {

  constructor(){
    this.token = '12312412123123';
    this.websocket;
    this.audio;
    this.callback;
  }

  getToken(){
    return axios.get('https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api', {
      headers: { 'Authorization': 'Basic MDU0OWNlNzMtNDJkYi00NjAyLTg3M2UtMDFiNGIyMmIxMGViOlRGWHczQ3FrT3J6VA==' }
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

  initSpeechToText(fileContents, token, callback){
    this.token = token;
    this.callback = callback;
    this.audio = this.stringToBlob(fileContents);
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
      'interim_results': true
    };
    this.websocket.send(JSON.stringify(message));
    this.websocket.send(this.audio);
    this.websocket.send(JSON.stringify({action: 'stop'}));
  }

  onMessage(evt) {
    this.callback(evt);
  }

  onError(evt){
    console.log('websocket error', evt);
  }

  onClose(evt){
    console.log('websocket closed', evt);
  }

}

var watsonService = new WatsonService();
