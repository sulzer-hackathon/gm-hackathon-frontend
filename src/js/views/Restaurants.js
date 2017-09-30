'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Restaurants = function (_React$Component) {
    _inherits(Restaurants, _React$Component);

    function Restaurants(props) {
        _classCallCheck(this, Restaurants);

        var _this = _possibleConstructorReturn(this, (Restaurants.__proto__ || Object.getPrototypeOf(Restaurants)).call(this, props));

        console.log(_this.props);
        console.log(_this.props.restaurants);

        _this.onClick = _this.onClick.bind(_this);
        _this.onTranscript = _this.onTranscript.bind(_this);

        return _this;
    }

    _createClass(Restaurants, [{
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
            // var __object = { "user": null, "menuItems": [{ "apiKey": "6362137", "name": "Regular Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 2.75 }, { "apiKey": "6362138", "name": "Regular Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 20.0 }, { "apiKey": "6362139", "name": "Sicilian Pizza - Slice", "description": "  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362140", "name": "Sicilian Pizza - Whole Pie", "description": "  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362141", "name": "Nonna Maria Pizza - Slice", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362142", "name": "Nonna Maria Pizza - Whole Pie", "description": "Our signature pizza from our old family recipe. Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362143", "name": "Grandma Pizza - Slice", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362144", "name": "Grandma Pizza - Whole Pie", "description": "Our homemade marinara sauce, mozzarella, Parmesan, olive oil and fresh garlic on a thick old-world crust.  Choice of slice or whole pie.", "basePrice": 23.0 }, { "apiKey": "6362145", "name": "White Pie - Slice", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 3.5 }, { "apiKey": "6362146", "name": "White Pie - Whole Pie", "description": "Mozzarella and ricotta cheese with fresh basil. No sauce.  Choice of slice or whole pie.", "basePrice": 24.0 }] };
            // this.props.updateMenu(__object.menuItems);
            voiceService.startSpeechToText(this.onTranscript, 'Please choose a restaurant by number!');
        }
    }, {
        key: 'onTranscript',
        value: function onTranscript(command) {
            var _this3 = this;

            console.log(command);
            webService.executeCommand(command).then(function (res) {
                if (res.data.cancellation) {
                    _this3.props.cancelSelection();
                } else {
                    _this3.props.updateMenu(res.data.menuItems);
                }
            }).catch(function (res) {
                voiceService.startSpeechToText(_this3.onTranscript, 'Sorry, I did not understand. Please choose a restaurant by number!');
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
            this.props.restaurants.forEach(function (item, index) {
                items.push(React.createElement(Restaurant, { onClick: _this4.onClick, key: index, item: item, index: index + 1 }));
            });
            return React.createElement(
                'div',
                { className: 'full-width app-restaurant' },
                React.createElement(
                    'h3',
                    null,
                    'Restaurants'
                ),
                React.createElement(
                    'div',
                    { className: 'fx-row full-width app-restaurant-list' },
                    items
                )
            );
        }
    }]);

    return Restaurants;
}(React.Component);
