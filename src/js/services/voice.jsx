class VoiceService {

  constructor() {
    this.session;
    this.recordingConfig = {
      intro: 'Please steak your order!',
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 5000,
      noiseSuppression: 0
    }
    this.recordingHandle;
    this.beginRecording = this.beginRecording.bind(this);
    this.callback;
  }

  startSpeechRecSession(callback) {
    this.callback = callback;
    this.session = gm.voice.startSpeechRecSession(this.beginRecording);
  }

  beginRecording() {
    this.recordingHandle = gm.voice.startRecording((filePath) => {
      this.endRecording(filePath);
    }, this.recordingConfig);
  }

  endRecording(filePath) {
    gm.voice.stopSpeechRecSession(this.session);
    
    if (this.callback)
        this.callback(gm.filesystem.readFile(filePath.replace(/^.*[\\\/]/, ''), { encoding : null}));
    // gm.io.readFile((fileContents) => { this.callback(fileContents); }, this.fullPathFail, 'RecAudio_13.wav');//filePath.replace(/^.*[\\\/]/, ''));
    // gm.io.getResource(this.fullPathSuccess, this.fullPathFail, filePath.replace(/^.*[\\\/]/, ''));
  }

  fullPathSuccess(filePath) {
    this.callback(filePath);
  }

  fullPathFail(err) {
    debugger;
  }

}

var voiceService = new VoiceService();
