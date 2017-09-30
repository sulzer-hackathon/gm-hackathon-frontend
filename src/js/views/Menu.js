'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        console.log(_this.props);
        console.log(_this.props.menuItems);

        _this.onClick = _this.onClick.bind(_this);
        _this.onTranscript = _this.onTranscript.bind(_this);
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.setTimeout(function () {
                _this2.triggerVoiceCommand();
            }, 3000);
        }
    }, {
        key: 'triggerVoiceCommand',
        value: function triggerVoiceCommand() {
            voiceService.startSpeechToText(this.onTranscript, 'Please choose an item!');
        }
    }, {
        key: 'onTranscript',
        value: function onTranscript(command) {
            var _this3 = this;

            webService.executeCommand(command).then(function (res) {
                if (res.data.cancellation) {
                    _this3.props.cancelSelection();
                } else if (res.data.total) {
                    voiceService.startTextToSpeech(function () {}, 'Thank you for your order, your final is ' + res.data.total + ' US dollar.');
                    _this3.props.finalizeOrder();
                } else if (res.data.menuItems) {
                    voiceService.startSpeechToText(_this3.onTranscript, 'Please choose another item or say order to finish!');
                }
            }).catch(function (res) {
                voiceService.startSpeechToText(_this3.onTranscript, 'Sorry, I did not understand. Please choose an item!');
            });
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            e.preventDefault();
            console.log(e);
            console.log('The link was clicked.');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var items = [];
            this.props.menuItems.forEach(function (item, index) {
                items.push(React.createElement(MenuItem, { onClick: _this4.onClick, key: index, item: item, index: index + 1 }));
            });
            return React.createElement(
                'div',
                { className: 'full-width app-menu' },
                React.createElement(
                    'h3',
                    null,
                    'Menu Items'
                ),
                React.createElement(
                    'div',
                    { className: 'fx-row fx-wrap full-width app-menu-list' },
                    items
                )
            );
        }
    }]);

    return Menu;
}(React.Component);
