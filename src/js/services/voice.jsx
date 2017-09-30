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

  startTextToSpeech(callback, text) {
    gm.voice.startTTS(callback, text);
  }

  startSpeechToText(callback, intro) {
    this.callback = callback;
    this.recordingConfig.intro = intro;
    this.session = gm.voice.startSpeechRecSession(this.beginRecording, (error) => {
      debugger;
    });
  }

  beginRecording() {
    this.recordingHandle = gm.voice.startRecording((filePath) => {
      this.endRecording(filePath);
    }, this.recordingConfig);
  }

  endRecording(filePath) {
    gm.voice.stopSpeechRecSession(this.session);
    
    store.dispatch({ type: 'LOADER_STATE', payload: true });

    var fileContents = gm.filesystem.readFile(filePath.replace(/^.*[\\\/]/, ''), { encoding: null });
    webService.speechToText(fileContents).then((res) => {
      store.dispatch({ type: 'LOADER_STATE', payload: false });
      if (this.callback)
        this.callback(res.data.command);
    }).catch((res) => {
      store.dispatch({ type: 'LOADER_STATE', payload: false });
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
