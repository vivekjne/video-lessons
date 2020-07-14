(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@material-ui/icons/Add.js":
/*!************************************************!*\
  !*** ./node_modules/@material-ui/icons/Add.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.default = _default;

/***/ }),

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

/***/ "./resources/js/components/src/api/classroomClient.js":
/*!************************************************************!*\
  !*** ./resources/js/components/src/api/classroomClient.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./resources/js/components/src/api/apiClient.js");

var client = new _apiClient__WEBPACK_IMPORTED_MODULE_0__["ApiClient"]();
var SECTION_URL = "/classrooms";
/* harmony default export */ __webpack_exports__["default"] = ({
  getClassrooms: function getClassrooms() {
    return client.get(SECTION_URL);
  },
  addClassroom: function addClassroom(data) {
    return client.post(SECTION_URL, data);
  }
});

/***/ }),

/***/ "./resources/js/components/src/api/curricullumClient.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/src/api/curricullumClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./resources/js/components/src/api/apiClient.js");

var client = new _apiClient__WEBPACK_IMPORTED_MODULE_0__["ApiClient"]();
var SECTION_URL = "/curricullums";
/* harmony default export */ __webpack_exports__["default"] = ({
  getCurricullums: function getCurricullums() {
    return client.get(SECTION_URL);
  },
  addCurricullum: function addCurricullum(data) {
    return client.post(SECTION_URL, data);
  }
});

/***/ }),

/***/ "./resources/js/components/src/components/Inputs/Button.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/src/components/Inputs/Button.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");




var CustomButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    root: {
      color: theme.palette.getContrastText(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["teal"][500]),
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["teal"][500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["teal"][700]
      }
    }
  };
})(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (CustomButton);

/***/ }),

/***/ "./resources/js/components/src/components/Inputs/MultiSelect.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/src/components/Inputs/MultiSelect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultipleSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    formControl: {
      // margin: theme.spacing(1),
      width: "100%" // minWidth: 120
      // maxWidth: 300

    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2,
      background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__["teal"][100],
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__["teal"][900]
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  };
});
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP // width: 250

    }
  }
};

function getStyles(data, selected, theme) {
  return {
    fontWeight: selected.findIndex(function (s) {
      return s.id === data.id;
    }) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    backgroundColor: selected.findIndex(function (s) {
      return s.id === data.id;
    }) === -1 ? "white" : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__["teal"][100]
  };
}

function MultipleSelect(_ref) {
  var label = _ref.label,
      data = _ref.data,
      selected = _ref.selected,
      handleChange = _ref.handleChange,
      handleChangeMultiple = _ref.handleChangeMultiple,
      error = _ref.error;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  console.log({
    selected: selected
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    error: error,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "demo-mutiple-chip-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    labelId: "demo-mutiple-chip-label",
    id: "demo-mutiple-chip",
    multiple: true,
    value: selected,
    onChange: handleChange,
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "select-multiple-chip"
    }),
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.chips
      }, selected.map(function (value) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: value.id // onDelete={e => e.stopPropagation()}
          ,
          label: value.name,
          className: classes.chip
        });
      }));
    },
    MenuProps: MenuProps
  }, data.map(function (d) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: d.id,
      value: d,
      style: getStyles(d, selected, theme)
    }, d.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__["default"], null, error)));
}

/***/ }),

/***/ "./resources/js/components/src/components/Inputs/TextField.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/src/components/Inputs/TextField.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");





var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    "& label.Mui-focused": {
      color: "teal"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "teal"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "teal"
      }
    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (CssTextField);

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

/***/ "./resources/js/components/src/containers/Admin/Classroom/Add.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Classroom/Add.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Inputs/TextField */ "./resources/js/components/src/components/Inputs/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_layout_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout/Heading */ "./resources/js/components/src/components/layout/Heading.js");
/* harmony import */ var _components_Inputs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Inputs/Button */ "./resources/js/components/src/components/Inputs/Button.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Inputs/MultiSelect */ "./resources/js/components/src/components/Inputs/MultiSelect.js");
/* harmony import */ var _api_curricullumClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../api/curricullumClient */ "./resources/js/components/src/api/curricullumClient.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _api_classroomClient__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../api/classroomClient */ "./resources/js/components/src/api/classroomClient.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var ClassroomAdd = function ClassroomAdd() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      curricullums = _React$useState2[0],
      setCurricullums = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selected = _React$useState4[0],
      setSelected = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isLoading = _React$useState6[0],
      setIsLoading = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isSubmitting = _React$useState8[0],
      setSubmitting = _React$useState8[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();

  var handleChange = function handleChange(event, formik) {
    var value = event.target.value;
    setSelected(value);
    formik.setFieldValue("curricullum_ids", value);
  };

  var handleChangeMultiple = function handleChangeMultiple(event) {
    var options = event.target.options;
    var value = [];

    var _loop = function _loop(i, l) {
      if (options[i].selected) {
        var curricullumIndex = curricullums.findIndex(function (c) {
          return c.id === options[i].value;
        });

        if (curricullumIndex !== -1) {
          value.push(curricullums[curricullumIndex]);
        }
      }
    };

    for (var i = 0, l = options.length; i < l; i += 1) {
      _loop(i, l);
    }

    setSelected(value);
  };

  function fetchCurricullums() {
    return _fetchCurricullums.apply(this, arguments);
  }

  function _fetchCurricullums() {
    _fetchCurricullums = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api_curricullumClient__WEBPACK_IMPORTED_MODULE_13__["default"].getCurricullums();

            case 3:
              response = _context.sent;
              console.log({
                response: response.data
              });
              setCurricullums(response.data.data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);

            case 11:
              setIsLoading(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _fetchCurricullums.apply(this, arguments);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    fetchCurricullums();
  }, []);

  function createClassroom(_x, _x2) {
    return _createClassroom.apply(this, arguments);
  }

  function _createClassroom() {
    _createClassroom = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, formik) {
      var curricullum_ids, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(data);
              _context2.prev = 1;
              curricullum_ids = selected.map(function (s) {
                return s.id;
              });
              data.curricullum_ids = curricullum_ids;
              _context2.next = 6;
              return _api_classroomClient__WEBPACK_IMPORTED_MODULE_16__["default"].addClassroom(data);

            case 6:
              response = _context2.sent;
              console.log(response.data);
              history.push("/admin/classrooms");
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              console.log("response", _context2.t0.response);

              if (_context2.t0.response.data.errors) {
                if (_context2.t0.response.data.errors.name) {
                  formik.setFieldError("name", _context2.t0.response.data.errors.name[0]);
                }

                if (_context2.t0.response.data.errors.curricullum_ids) {
                  formik.setFieldError("curricullum_ids", _context2.t0.response.data.errors.curricullum_ids[0]);
                }
              }

            case 15:
              setSubmitting(false);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));
    return _createClassroom.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Add Classroom",
    disableAction: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_14__["Formik"], {
    initialValues: {
      name: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_15__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().max(200).required() // curricullum_ids: Yup.array().required()

    }),
    onSubmit: function onSubmit(values, formik) {
      setSubmitting(true);
      createClassroom(values, formik);
    }
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit,
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      elevation: 2
    }, !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
      maxWidth: "sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      container: true,
      direction: "column",
      spacing: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      fullWidth: true,
      variant: "standard",
      label: "Classroom Title",
      name: "name",
      helperText: formik.errors.name
    }, formik.getFieldProps("name"), {
      error: formik.touched.name && formik.errors.name // helperText="Incorrect entry."

    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Inputs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      size: "large",
      variant: "contained"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Submit")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: "primary"
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassroomAdd);

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