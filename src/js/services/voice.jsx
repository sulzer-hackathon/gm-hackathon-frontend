class VoiceService {

  constructor(){
    this.session;
  }

  startSpeechRecSession(){
    this.session = gm.voice.startSpeechRecSession(this.beginRecording);
  }

  beginRecording(){
    var recordingConfig = {
      intro: 'I COMMAND THEE TO SPEAK!',
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 60000,
      noiseSuppression: 0
    }

    recordingHandle = gm.voice.startRecording(function finished(filePath){
      recordingPath = filePath;
      gm.voice.stopSpeechRecSession(this.session);
    }, recordingConfig);
  }

  topRecording() {
    gm.voice.stopRecording(function(){}, function stopped() {
      document.getElementById('play-recording').removeAttribute('disabled');
    }, recordingHandle);
  }


}

var voiceService = new VoiceService();
