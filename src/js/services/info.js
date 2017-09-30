"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfoService = function () {
  function InfoService() {
    var _this = this;

    _classCallCheck(this, InfoService);

    this.lat = 0;
    this.lng = 0;
    this.heading = 0;
    this.subscription = gm.info.watchPosition(function (data) {
      _this.processInfo(data);
    }, true);
  }

  _createClass(InfoService, [{
    key: "processInfo",
    value: function processInfo(data) {
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.heading = data.heading;
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      return {
        lat: this.lat,
        lng: this.lng,
        heading: this.heading
      };
    }
  }]);

  return InfoService;
}();

var infoService = new InfoService();
