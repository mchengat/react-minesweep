"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react["default"].createElement(Header, null, /*#__PURE__*/_react["default"].createElement("p", null, "Edit ", /*#__PURE__*/_react["default"].createElement("code", null, "src/App.tsx"), "and save to reload"), /*#__PURE__*/_react["default"].createElement(Link, {
    href: "https://reactjs.org"
  }, "Learn React")));
}

var Header = function Header(_ref) {
  var children = _ref.children,
      logo = _ref.logo;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "App-header"
  }, logo ? /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }) : 'There is no any logo', children);
};

var Link = function Link(_ref2) {
  var children = _ref2.children,
      resProps = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    className: "App-link"
  }, resProps), children);
};

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
};
var _default = App;
exports["default"] = _default;