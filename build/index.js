(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["bobra-calculator"] = factory(require("prop-types"), require("react"));
	else
		root["bobra-calculator"] = factory(root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Calculator/Calculator.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Calculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _CalculatorProps = __webpack_require__("./src/Calculator/CalculatorProps.ts");

var _CalculatorContext = __webpack_require__("./src/Calculator/CalculatorContext.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = exports.Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.handleAmountChange = function (nextAmount) {
            nextAmount = Math.max(_this.props.amount.min, nextAmount);
            nextAmount = Math.min(_this.props.amount.max, nextAmount);
            _this.setState({ amount: nextAmount });
            return nextAmount;
        };
        _this.handleTermChange = function (nextTerm) {
            if (_this.props.term === undefined) {
                return;
            }
            nextTerm = Math.max(_this.props.term.min, nextTerm);
            nextTerm = Math.min(_this.props.term.max, nextTerm);
            _this.setState({ term: nextTerm });
            return nextTerm;
        };
        _this.initialAmount = props.amount.initial || Math.round((props.amount.min + props.amount.max) / 2);
        _this.initialTerm = !!props.term ? props.term.initial || Math.round((props.term.min + props.term.max) / 2) : 0;
        _this.state = {
            amount: _this.initialAmount,
            term: _this.initialTerm
        };
        return _this;
    }

    _createClass(Calculator, [{
        key: "getChildContext",
        value: function getChildContext() {
            var term = this.props.term && {
                max: this.props.term.max,
                min: this.props.term.min,
                step: this.props.term.step || 1,
                initial: this.initialTerm
            } || { max: 0, min: 0, step: 1, initial: 0 };
            return {
                Conditions: {
                    Term: term,
                    Amount: {
                        min: this.props.amount.min,
                        max: this.props.amount.max,
                        step: 50,
                        initial: this.initialAmount
                    }
                },
                Credit: {
                    term: this.term,
                    amount: this.amount,
                    interest: this.interest
                },
                onAmountChange: this.handleAmountChange,
                onTermChange: this.handleTermChange
            };
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.children;
        }
    }, {
        key: "term",
        get: function get() {
            return this.state.term;
        }
    }, {
        key: "amount",
        get: function get() {
            return this.state.amount;
        }
    }, {
        key: "interest",
        get: function get() {
            return Math.round(this.state.term * this.props.interest * this.state.amount);
        }
    }]);

    return Calculator;
}(React.Component);

Calculator.propTypes = _CalculatorProps.CalculatorPropTypes;
Calculator.childContextTypes = _CalculatorContext.CalculatorContextTypes;

/***/ }),

/***/ "./src/Calculator/CalculatorContext.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorContextTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorContextTypes = exports.CalculatorContextTypes = {
    Credit: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        term: PropTypes.number.isRequired,
        interest: PropTypes.number.isRequired
    }).isRequired,
    Conditions: PropTypes.shape({
        Term: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
            initial: PropTypes.number.isRequired,
            step: PropTypes.number.isRequired
        }).isRequired,
        Amount: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
            initial: PropTypes.number.isRequired,
            step: PropTypes.number.isRequired
        }).isRequired
    }),
    onAmountChange: PropTypes.func.isRequired,
    onTermChange: PropTypes.func.isRequired
};

/***/ }),

/***/ "./src/Calculator/CalculatorProps.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorPropTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorPropTypes = exports.CalculatorPropTypes = {
    interest: PropTypes.number.isRequired,
    amount: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        initial: PropTypes.number,
        step: PropTypes.number
    }).isRequired,
    term: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        initial: PropTypes.number,
        step: PropTypes.number
    }),
    onAmountChange: PropTypes.func,
    onTermChange: PropTypes.func,
    children: PropTypes.element.isRequired
};

/***/ }),

/***/ "./src/Calculator/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Calculator = __webpack_require__("./src/Calculator/Calculator.tsx");

Object.keys(_Calculator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Calculator[key];
    }
  });
});

var _CalculatorContext = __webpack_require__("./src/Calculator/CalculatorContext.ts");

Object.keys(_CalculatorContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorContext[key];
    }
  });
});

var _CalculatorProps = __webpack_require__("./src/Calculator/CalculatorProps.ts");

Object.keys(_CalculatorProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorProps[key];
    }
  });
});

/***/ }),

/***/ "./src/CalculatorButton/CalculatorButton.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _CalculatorControlWrapperContext = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperContext.ts");

var _CalculatorButtonProps = __webpack_require__("./src/CalculatorButton/CalculatorButtonProps.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorButton = exports.CalculatorButton = function (_React$Component) {
    _inherits(CalculatorButton, _React$Component);

    function CalculatorButton() {
        _classCallCheck(this, CalculatorButton);

        var _this = _possibleConstructorReturn(this, (CalculatorButton.__proto__ || Object.getPrototypeOf(CalculatorButton)).apply(this, arguments));

        _this.handleClick = function () {
            if (_this.isDisabled) {
                return;
            }
            var delta = _this.props.increase ? 1 : -1;
            _this.context.onCalculationChange(_this.context.calculationValue + delta * _this.context.Conditions.step);
        };
        return _this;
    }

    _createClass(CalculatorButton, [{
        key: "render",
        value: function render() {
            return React.createElement("button", Object.assign({}, this.props, { disabled: this.isDisabled, onClick: this.handleClick }), this.props.children);
        }
    }, {
        key: "isDisabled",
        get: function get() {
            return this.context.calculationValue >= this.context.Conditions.max || this.context.calculationValue <= this.context.Conditions.min;
        }
    }]);

    return CalculatorButton;
}(React.Component);

CalculatorButton.contextTypes = _CalculatorControlWrapperContext.CalculatorControlWrapperContextTypes;
CalculatorButton.propTypes = _CalculatorButtonProps.CalculatorButtonPropTypes;

/***/ }),

/***/ "./src/CalculatorButton/CalculatorButtonProps.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorButtonPropTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorButtonPropTypes = exports.CalculatorButtonPropTypes = {
    increase: PropTypes.bool.isRequired
};

/***/ }),

/***/ "./src/CalculatorButton/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CalculatorButton = __webpack_require__("./src/CalculatorButton/CalculatorButton.tsx");

Object.keys(_CalculatorButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorButton[key];
    }
  });
});

var _CalculatorButtonProps = __webpack_require__("./src/CalculatorButton/CalculatorButtonProps.ts");

Object.keys(_CalculatorButtonProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorButtonProps[key];
    }
  });
});

/***/ }),

/***/ "./src/CalculatorControlWrapper/CalculatorControlWrapper.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorControlWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _CalculatorControlWrapperProps = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperProps.ts");

var _CalculatorControlWrapperContext = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperContext.ts");

var _CalculatorContext = __webpack_require__("./src/Calculator/CalculatorContext.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorControlWrapper = exports.CalculatorControlWrapper = function (_React$Component) {
    _inherits(CalculatorControlWrapper, _React$Component);

    function CalculatorControlWrapper() {
        _classCallCheck(this, CalculatorControlWrapper);

        return _possibleConstructorReturn(this, (CalculatorControlWrapper.__proto__ || Object.getPrototypeOf(CalculatorControlWrapper)).apply(this, arguments));
    }

    _createClass(CalculatorControlWrapper, [{
        key: "getChildContext",
        value: function getChildContext() {
            return {
                calculationValue: this.context.Credit[this.props.type.toLowerCase()],
                onCalculationChange: this.handleCalculationChange,
                Conditions: Object.assign({}, this.context.Conditions[this.props.type])
            };
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.children;
        }
    }, {
        key: "handleCalculationChange",
        get: function get() {
            switch (this.props.type) {
                case _CalculatorControlWrapperProps.CalculatorControlTypes.amount:
                    return this.context.onAmountChange;
                case _CalculatorControlWrapperProps.CalculatorControlTypes.term:
                    return this.context.onTermChange;
                default:
                    return function () {
                        return undefined;
                    };
            }
        }
    }]);

    return CalculatorControlWrapper;
}(React.Component);

CalculatorControlWrapper.propTypes = _CalculatorControlWrapperProps.CalculatorControlWrapperPropTypes;
CalculatorControlWrapper.contextTypes = _CalculatorContext.CalculatorContextTypes;
CalculatorControlWrapper.childContextTypes = _CalculatorControlWrapperContext.CalculatorControlWrapperContextTypes;

/***/ }),

/***/ "./src/CalculatorControlWrapper/CalculatorControlWrapperContext.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorControlWrapperContextTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorControlWrapperContextTypes = exports.CalculatorControlWrapperContextTypes = {
    Conditions: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired
    }).isRequired,
    calculationValue: PropTypes.number.isRequired,
    onCalculationChange: PropTypes.func.isRequired
};

/***/ }),

/***/ "./src/CalculatorControlWrapper/CalculatorControlWrapperProps.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorControlWrapperPropTypes = exports.CalculatorControlTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorControlTypes = exports.CalculatorControlTypes = undefined;
(function (CalculatorControlTypes) {
    CalculatorControlTypes["term"] = "Term";
    CalculatorControlTypes["amount"] = "Amount";
})(CalculatorControlTypes || (exports.CalculatorControlTypes = CalculatorControlTypes = {}));
var CalculatorControlWrapperPropTypes = exports.CalculatorControlWrapperPropTypes = {
    type: PropTypes.oneOf(Object.values(CalculatorControlTypes)).isRequired,
    children: PropTypes.element.isRequired
};

/***/ }),

/***/ "./src/CalculatorControlWrapper/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CalculatorControlWrapper = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapper.tsx");

Object.keys(_CalculatorControlWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorControlWrapper[key];
    }
  });
});

var _CalculatorControlWrapperContext = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperContext.ts");

Object.keys(_CalculatorControlWrapperContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorControlWrapperContext[key];
    }
  });
});

var _CalculatorControlWrapperProps = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperProps.ts");

Object.keys(_CalculatorControlWrapperProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorControlWrapperProps[key];
    }
  });
});

/***/ }),

/***/ "./src/CalculatorInput/CalculatorInput.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _CalculatorControlWrapperContext = __webpack_require__("./src/CalculatorControlWrapper/CalculatorControlWrapperContext.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorInput = exports.CalculatorInput = function (_React$Component) {
    _inherits(CalculatorInput, _React$Component);

    function CalculatorInput() {
        _classCallCheck(this, CalculatorInput);

        var _this = _possibleConstructorReturn(this, (CalculatorInput.__proto__ || Object.getPrototypeOf(CalculatorInput)).apply(this, arguments));

        _this.handleBlur = function (event) {
            var nextValue = Number(event.currentTarget.value);
            nextValue = _this.context.onCalculationChange(nextValue - (nextValue - _this.context.Conditions.min) % 25);
            event.currentTarget.value = nextValue.toString();
        };
        _this.handleInput = function (event) {
            if (event.currentTarget.value.match(/\D/)) {
                event.preventDefault();
                return;
            }
        };
        _this.inputRef = function (input) {
            return _this.input = input;
        };
        return _this;
    }

    _createClass(CalculatorInput, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.input.value = this.context.calculationValue.toString();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("input", Object.assign({}, this.props, { ref: this.inputRef, defaultValue: this.context.Conditions.initial.toString(), onInput: this.handleInput, onBlur: this.handleBlur }));
        }
    }]);

    return CalculatorInput;
}(React.Component);

CalculatorInput.contextTypes = _CalculatorControlWrapperContext.CalculatorControlWrapperContextTypes;

/***/ }),

/***/ "./src/CalculatorInput/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CalculatorInput = __webpack_require__("./src/CalculatorInput/CalculatorInput.tsx");

Object.keys(_CalculatorInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorInput[key];
    }
  });
});

/***/ }),

/***/ "./src/CalculatorLabel/CalculatorLabel.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorLabel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _CalculatorLabelProps = __webpack_require__("./src/CalculatorLabel/CalculatorLabelProps.ts");

var _CalculatorLabelContext = __webpack_require__("./src/CalculatorLabel/CalculatorLabelContext.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var CalculatorLabel = exports.CalculatorLabel = function (_React$Component) {
    _inherits(CalculatorLabel, _React$Component);

    function CalculatorLabel() {
        _classCallCheck(this, CalculatorLabel);

        return _possibleConstructorReturn(this, (CalculatorLabel.__proto__ || Object.getPrototypeOf(CalculatorLabel)).apply(this, arguments));
    }

    _createClass(CalculatorLabel, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                labelType = _a.labelType,
                childContext = __rest(_a, ["labelType"]);
            return React.createElement("span", Object.assign({}, childContext), this.children);
        }
    }, {
        key: "children",
        get: function get() {
            switch (this.props.labelType) {
                case _CalculatorLabelProps.CalculatorLabelTypes.amount:
                    return this.context.Credit.amount;
                case _CalculatorLabelProps.CalculatorLabelTypes.interest:
                    return this.context.Credit.interest;
                case _CalculatorLabelProps.CalculatorLabelTypes.term:
                    return this.context.Credit.term;
                case _CalculatorLabelProps.CalculatorLabelTypes.total:
                    return Math.round(this.context.Credit.amount + this.context.Credit.interest);
                default:
                    return 0;
            }
        }
    }]);

    return CalculatorLabel;
}(React.Component);

CalculatorLabel.propTypes = _CalculatorLabelProps.CalculatorLabelPropTypes;
CalculatorLabel.contextTypes = _CalculatorLabelContext.CalculatorLabelContextTypes;

/***/ }),

/***/ "./src/CalculatorLabel/CalculatorLabelContext.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorLabelContextTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorLabelContextTypes = exports.CalculatorLabelContextTypes = {
    Credit: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        term: PropTypes.number.isRequired,
        interest: PropTypes.number.isRequired
    }).isRequired
};

/***/ }),

/***/ "./src/CalculatorLabel/CalculatorLabelProps.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorLabelPropTypes = exports.CalculatorLabelTypes = undefined;

var _propTypes = __webpack_require__("prop-types");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalculatorLabelTypes = exports.CalculatorLabelTypes = undefined;
(function (CalculatorLabelTypes) {
    CalculatorLabelTypes["amount"] = "amount";
    CalculatorLabelTypes["term"] = "term";
    CalculatorLabelTypes["interest"] = "interest";
    CalculatorLabelTypes["total"] = "total";
})(CalculatorLabelTypes || (exports.CalculatorLabelTypes = CalculatorLabelTypes = {}));
var CalculatorLabelPropTypes = exports.CalculatorLabelPropTypes = {
    labelType: PropTypes.oneOf(Object.keys(CalculatorLabelTypes))
};

/***/ }),

/***/ "./src/CalculatorLabel/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CalculatorLabel = __webpack_require__("./src/CalculatorLabel/CalculatorLabel.tsx");

Object.keys(_CalculatorLabel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorLabel[key];
    }
  });
});

var _CalculatorLabelContext = __webpack_require__("./src/CalculatorLabel/CalculatorLabelContext.ts");

Object.keys(_CalculatorLabelContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorLabelContext[key];
    }
  });
});

var _CalculatorLabelProps = __webpack_require__("./src/CalculatorLabel/CalculatorLabelProps.ts");

Object.keys(_CalculatorLabelProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorLabelProps[key];
    }
  });
});

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Calculator = __webpack_require__("./src/Calculator/index.ts");

Object.keys(_Calculator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Calculator[key];
    }
  });
});

var _CalculatorButton = __webpack_require__("./src/CalculatorButton/index.ts");

Object.keys(_CalculatorButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorButton[key];
    }
  });
});

var _CalculatorInput = __webpack_require__("./src/CalculatorInput/index.ts");

Object.keys(_CalculatorInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorInput[key];
    }
  });
});

var _CalculatorLabel = __webpack_require__("./src/CalculatorLabel/index.ts");

Object.keys(_CalculatorLabel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorLabel[key];
    }
  });
});

var _CalculatorControlWrapper = __webpack_require__("./src/CalculatorControlWrapper/index.ts");

Object.keys(_CalculatorControlWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CalculatorControlWrapper[key];
    }
  });
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});