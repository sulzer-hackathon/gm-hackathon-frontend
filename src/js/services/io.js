"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IOService = function () {
  function IOService() {
    _classCallCheck(this, IOService);

    this.callback;
  }

  _createClass(IOService, [{
    key: "readFile",
    value: function readFile(filePath, callback) {
      this.callback = callback;
      var contents = gm.io.readFile(filePath);
      if (contents !== null) {
        this.processContents(contents);
      }
    }
  }, {
    key: "processContents",
    value: function processContents(contents) {
      this.callback(contents);
    }
  }]);

  return IOService;
}();

var ioService = new IOService();
