class VoiceService {

  constructor(){
    this.session;
    this.recordingConfig = {
      intro: 'I COMMAND THEE TO SPEAK!',
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 60000,
      noiseSuppression: 0
    }
  }

  startSpeechRecSession(){
    this.session = gm.voice.startSpeechRecSession(this.beginRecording);
  }

  beginRecording(){
    recordingHandle = gm.voice.startRecording((filePath)=>{
      this.endRecording(filePath);
    }, this.recordingConfig);
  }

  endRecording(filePath){
    gm.voice.stopSpeechRecSession(this.session);
    recordingPath = filePath;
  }


}

var voiceService = new VoiceService();
