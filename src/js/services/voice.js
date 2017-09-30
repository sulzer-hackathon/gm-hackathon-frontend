'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VoiceService = function () {
  function VoiceService() {
    _classCallCheck(this, VoiceService);

    this.session;
    this.recordingConfig = {
      silenceDetection: true,
      silenceLength: 10000,
      maxRecordingWindow: 5000,
      noiseSuppression: 0
    };
    this.recordingHandle;
    this.beginRecording = this.beginRecording.bind(this);
    this.callback;
  }

  _createClass(VoiceService, [{
    key: 'startTextToSpeech',
    value: function startTextToSpeech(callback, text) {
      gm.voice.startTTS(callback, text);
    }
  }, {
    key: 'startSpeechToText',
    value: function startSpeechToText(callback, intro) {
      this.callback = callback;
      this.recordingConfig.intro = intro;
      this.session = gm.voice.startSpeechRecSession(this.beginRecording);
    }
  }, {
    key: 'beginRecording',
    value: function beginRecording() {
      var _this = this;

      this.recordingHandle = gm.voice.startRecording(function (filePath) {
        _this.endRecording(filePath);
      }, this.recordingConfig);
    }
  }, {
    key: 'endRecording',
    value: function endRecording(filePath) {
      var _this2 = this;

      gm.voice.stopSpeechRecSession(this.session);

      var fileContents = gm.filesystem.readFile(filePath.replace(/^.*[\\\/]/, ''), { encoding: null });
      webService.speechToText(fileContents).then(function (res) {
        if (_this2.callback) _this2.callback(res.data.command);
      }).catch(function (res) {
        _this2.callback(null);
      });
    }
  }, {
    key: 'fullPathSuccess',
    value: function fullPathSuccess(filePath) {
      this.callback(filePath);
    }
  }, {
    key: 'fullPathFail',
    value: function fullPathFail(err) {
      debugger;
    }
  }]);

  return VoiceService;
}();

var voiceService = new VoiceService();
