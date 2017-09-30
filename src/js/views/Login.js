'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      if (!this.refs.key.value) {
        showSnackbar("Key blank");
      } else {
        this.handleLogin();
      }
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin() {
      store.dispatch({ type: 'LOADER_STATE', payload: true });
      webService.handleLogin(this.refs.key.value).then(function (res) {
        setTimeout(function () {
          store.dispatch({ type: 'LOADER_STATE', payload: false });
          ReactRouter.hashHistory.push('dashboard');
        }, 1000);
      }).catch(function (err) {
        store.dispatch({ type: 'LOADER_STATE', payload: false });
        showSnackbar(err.message);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // componentHandler.upgradeDom();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'login' },
        React.createElement(
          'div',
          { className: 'fx-row fx-justify-content-center' },
          React.createElement(
            'div',
            { className: 'logo relative' },
            React.createElement(
              'i',
              { className: 'material-icons menu' },
              'restaurant_menu'
            ),
            React.createElement(
              'i',
              { className: 'material-icons search' },
              'search'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'logo-name fx-row fx-justify-content-center' },
          'FoodFinder'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
            React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'key', placeholder: 'Enter your key' })
          ),
          React.createElement(
            'button',
            { type: 'submit', className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect' },
            'LOG IN'
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);
