(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/src/api/apiClient.js":
/*!******************************************************!*\
  !*** ./resources/js/components/src/api/apiClient.js ***!
  \******************************************************/
/*! exports provided: ApiClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClient", function() { return ApiClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./resources/js/components/src/index.js");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/configureStore */ "./resources/js/components/src/redux/configureStore.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var getClient = function getClient(url) {
  var options = {
    baseURL: "/api"
  };
  var client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(options); // Add a request interceptor

  client.interceptors.request.use(function (requestConfig) {
    var token = localStorage.getItem("token");

    if (token) {
      requestConfig.headers.Authorization = "Bearer ".concat(token);
    }

    return requestConfig;
  }, function (requestError) {
    return Promise.reject(requestError);
  }); // Add a response interceptor

  client.interceptors.response.use(function (response) {
    if (response.data.status === 401) {
      //if 401 - unauthorised comes redirect to login page.
      if (_redux_configureStore__WEBPACK_IMPORTED_MODULE_3__["history"].location.pathname !== "/login") {
        localStorage.removeItem("token");
        _index_js__WEBPACK_IMPORTED_MODULE_2__["store"].dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["push"])("/login", {
          state: _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__["history"].location.pathname
        }));
      }
    }

    return Promise.resolve(response);
  }, function (error) {
    return Promise.reject(error);
  });
  return client;
};

var ApiClient = /*#__PURE__*/function () {
  function ApiClient() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, ApiClient);

    this.client = getClient(url);
  }

  _createClass(ApiClient, [{
    key: "get",
    value: function get(url) {
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.get(url, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client["delete"](url, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "head",
    value: function head(url) {
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.head(url, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "options",
    value: function options(url) {
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.options(url, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "post",
    value: function post(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.client.post(url, data, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "put",
    value: function put(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.client.put(url, data, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "patch",
    value: function patch(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.client.patch(url, data, conf).then(function (response) {
        return Promise.resolve(response);
      })["catch"](function (error) {
        return Promise.reject(error);
      });
    }
  }]);

  return ApiClient;
}();


/**
 * Base HTTP Client
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  // Provide request methods with the default base_url
  get: function get(url) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getClient().get(url, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  "delete": function _delete(url) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getClient()["delete"](url, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  head: function head(url) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getClient().head(url, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  options: function options(url) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getClient().options(url, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  post: function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return getClient().post(url, data, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  put: function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return getClient().put(url, data, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  },
  patch: function patch(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return getClient().patch(url, data, conf).then(function (response) {
      return Promise.resolve(response);
    })["catch"](function (error) {
      return Promise.reject(error);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/src/components/layout/Heading.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/src/components/layout/Heading.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
});
var ActionButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(function (theme) {
  return {
    root: {
      color: theme.palette.getContrastText(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["teal"][500]),
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["teal"][500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["teal"][700]
      }
    }
  };
})(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"]);

var Heading = function Heading(_ref) {
  var title = _ref.title,
      action = _ref.action,
      actionLabel = _ref.actionLabel,
      disableAction = _ref.disableAction;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    elevation: 2,
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    alignItems: "center",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    color: "textSecondary"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, !disableAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionButton, {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: action,
    variant: "contained",
    disableElevation: true,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, actionLabel)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./resources/js/components/src/index.js":
/*!**********************************************!*\
  !*** ./resources/js/components/src/index.js ***!
  \**********************************************/
/*! exports provided: store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./resources/js/components/src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/configureStore */ "./resources/js/components/src/redux/configureStore.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");








var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["teal"]
  }
});
var store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"])({});

function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
console.log("store=", store);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Index, null), document.getElementById("app")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ })

}]);