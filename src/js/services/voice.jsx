class VoiceService {

  constructor() {
    this.session;
    this.recordingConfig = {
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 5000,
      noiseSuppression: 0
    }
    this.recordingHandle;
    this.beginRecording = this.beginRecording.bind(this);
    this.callback;
  }

  startSpeechToText(callback, intro) {
    this.callback = callback;
    this.recordingConfig.intro = intro;
    this.session = gm.voice.startSpeechRecSession(this.beginRecording);
  }

  beginRecording() {
    this.recordingHandle = gm.voice.startRecording((filePath) => {
      this.endRecording(filePath);
    }, this.recordingConfig);
  }

  endRecording(filePath) {
    gm.voice.stopSpeechRecSession(this.session);

    var fileContents = gm.filesystem.readFile(filePath.replace(/^.*[\\\/]/, ''), { encoding: null });
    webService.speechToText(fileContents).then((res) => {
      if (this.callback)
        this.callback(res.data.command);
    }).catch((res) => {
      this.callback(null);
    });
  }

  fullPathSuccess(filePath) {
    this.callback(filePath);
  }

  fullPathFail(err) {
    debugger;
  }

}

var voiceService = new VoiceService();
