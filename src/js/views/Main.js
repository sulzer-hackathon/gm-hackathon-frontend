'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = { restaurants: [], menuItems: [] };

    // var vinElem = document.getElementById('vin');
    // gm.info.getVehicleConfiguration(function(data) {
    //   console.log(data);
    //   vinElem.innerHTML = gm.info.getVIN();
    // });
    //
    // function showSpeed(data) {
    //   var speed = data;
    //   if (speed !== undefined) {
    //     var speedText = document.getElementById('speed');
    //     speedText.innerHTML = speed;
    //   }
    // }
    //
    // gm.info.watchVehicleData(function(data){
    //   console.log(data);
    //   var speedText = document.getElementById('speed');
    //   speedText.innerHTML = data.average_speed;
    // }, ['average_speed']);

    _this.updateRestaurants = _this.updateRestaurants.bind(_this);
    _this.updateMenu = _this.updateMenu.bind(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'updateRestaurants',
    value: function updateRestaurants(restaurants) {
      console.log('updateRestaurants', restaurants);
      this.setState({ restaurants: restaurants });
      ReactRouter.hashHistory.push('restaurants');
    }
  }, {
    key: 'updateMenu',
    value: function updateMenu(menuItems) {
      console.log('updateMenu', menuItems);
      this.setState({ menuItems: menuItems });
      ReactRouter.hashHistory.push('menu');
    }
  }, {
    key: 'cancelSelection',
    value: function cancelSelection() {
      ReactRouter.hashHistory.push('dashboard');
    }
  }, {
    key: 'finalizeOrder',
    value: function finalizeOrder() {
      ReactRouter.hashHistory.push('dashboard');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      snackbarContainer = document.querySelector('#snackbar');
      ReactRouter.hashHistory.push('login');
    }
  }, {
    key: 'render',
    value: function render() {
      var loader = store.getState().loader ? React.createElement(
        'div',
        { className: 'loaderWrap' },
        React.createElement('div', { className: 'loader' })
      ) : '';
      var children = this.props.children ? React.cloneElement(this.props.children, Object.assign({}, this.state, {
        /*handleLogin: this.handleLogin,*/
        updateRestaurants: this.updateRestaurants,
        updateMenu: this.updateMenu,
        cancelSelection: this.cancelSelection,
        finalizeOrder: this.finalizeOrder
      })) : '';
      return React.createElement(
        'div',
        { className: 'main full-width fx-column fx-center' },
        React.createElement(
          ReactCSSTransitionGroup,
          { transitionName: 'fade', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
          loader
        ),
        React.createElement(
          ReactCSSTransitionGroup,
          { transitionName: 'fade', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
          children
        ),
        React.createElement(
          'div',
          { id: 'snackbar', className: 'mdl-js-snackbar mdl-snackbar' },
          React.createElement('div', { className: 'mdl-snackbar__text' }),
          React.createElement('button', { className: 'mdl-snackbar__action', type: 'button' })
        )
      );
    }
  }]);

  return Main;
}(React.Component);
