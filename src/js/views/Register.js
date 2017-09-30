'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.goBack = _this.goBack.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      componentHandler.upgradeDom();
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      ReactRouter.hashHistory.push('login');
    }
  }, {
    key: 'save',
    value: function save() {
      if (!this.refs.username.value || !this.refs.password.value || !this.refs.address.value || !this.refs.city.value || !this.refs.state.value || !this.refs.zip.value) {
        showSnackbar("All fields are required.");
      } else {
        this.handleSave();
      }
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      store.dispatch({ type: 'LOADER_STATE', payload: true });
      webService.handleLogin(this.refs.username.value, this.refs.password.value).then(function (res) {
        store.dispatch({ type: 'LOADER_STATE', payload: false });
        ReactRouter.hashHistory.push('dashboard');
      }).catch(function (err) {
        store.dispatch({ type: 'LOADER_STATE', payload: false });
        showSnackbar(err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'register fx-column fx-center' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            'Registration'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'username' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'Username'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'password' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'Password'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'address' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'Address'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'city' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'City'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'state' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'State'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
          React.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'zip' }),
          React.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            'Zip'
          )
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'full-width mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect', onClick: this.save },
          'Save'
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'full-width mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect', onClick: this.goBack },
          'Back'
        )
      );
    }
  }]);

  return Register;
}(React.Component);
