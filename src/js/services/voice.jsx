class VoiceService {

  constructor(){
    this.session;
    this.recordingConfig = {
      intro: 'Please steak your order!',
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 2000,
      noiseSuppression: 0
    }
    this.recordingHandle;
    this.beginRecording = this.beginRecording.bind(this);
    this.callback;
  }

  startSpeechRecSession(callback){
    this.callback = callback;
    this.session = gm.voice.startSpeechRecSession(this.beginRecording);
  }

  beginRecording(){
    this.recordingHandle = gm.voice.startRecording((filePath)=>{
      this.endRecording(filePath);
    }, this.recordingConfig);
  }

  endRecording(filePath){
    gm.voice.stopSpeechRecSession(this.session);
    this.callback(filePath);
  }

}

var voiceService = new VoiceService();
