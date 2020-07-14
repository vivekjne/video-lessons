(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/components/src/api/lessonClient.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/src/api/lessonClient.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./resources/js/components/src/api/apiClient.js");

var client = new _apiClient__WEBPACK_IMPORTED_MODULE_0__["ApiClient"]();
var SECTION_URL = "/lessons";
/* harmony default export */ __webpack_exports__["default"] = ({
  getLessons: function getLessons() {
    return client.get(SECTION_URL);
  },
  addLesson: function addLesson(data) {
    return client.post(SECTION_URL, data);
  },
  getLesson: function getLesson(id) {
    return client.get("".concat(SECTION_URL, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/components/src/api/sectionClient.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/src/api/sectionClient.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./resources/js/components/src/api/apiClient.js");

var client = new _apiClient__WEBPACK_IMPORTED_MODULE_0__["ApiClient"]();
var SECTION_URL = "/sections";
/* harmony default export */ __webpack_exports__["default"] = ({
  getSections: function getSections() {
    return client.get(SECTION_URL);
  },
  addSections: function addSections(data) {
    return client.post(SECTION_URL, data);
  },
  getSection: function getSection(id) {
    return client.get("".concat(SECTION_URL, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/components/src/api/subjectClient.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/src/api/subjectClient.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./resources/js/components/src/api/apiClient.js");

var client = new _apiClient__WEBPACK_IMPORTED_MODULE_0__["ApiClient"]();
var SECTION_URL = "/subjects";
/* harmony default export */ __webpack_exports__["default"] = ({
  getSubjects: function getSubjects() {
    return client.get(SECTION_URL);
  },
  addCurricullum: function addCurricullum(data) {
    return client.post(SECTION_URL, data);
  },
  getSubject: function getSubject(id) {
    return client.get("".concat(SECTION_URL, "/").concat(id));
  }
});

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

/***/ "./resources/js/components/src/components/layout/ThumbnailCard.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/src/components/layout/ThumbnailCard.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThumbnailCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
function ThumbnailCard(_ref) {
  var onClick = _ref.onClick,
      src = _ref.src;
  var classes = useStyles();
  console.log({
    src: src
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.media,
    image: src || "https://via.placeholder.com/600",
    title: "Contemplative Reptile"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onClick,
    size: "small",
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center"
  }, "Select a thumbnail"))));
}

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Forms/Basic.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Forms/Basic.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Inputs/TextField */ "./resources/js/components/src/components/Inputs/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Inputs/MultiSelect */ "./resources/js/components/src/components/Inputs/MultiSelect.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    appBar: {
      position: "relative"
    },
    layout: _defineProperty({
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(2) * 2), {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }),
    paper: _defineProperty({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(3) * 2), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }),
    stepper: {
      padding: theme.spacing(3, 0, 5)
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1)
    },
    inputSpacer: {
      marginBottom: theme.spacing(4)
    },
    formControl: {
      margin: theme.spacing(1)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
var steps = ["Basic", "Media", "Finish"];
var subjectOptions = ["Physics", "Chemistry", "Maths"];

function BasicForm(_ref) {
  var formik = _ref.formik,
      classrooms = _ref.classrooms,
      curricullums = _ref.curricullums;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1]; // const [curricullums, setCurricullums] = useState("");
  // const [classrooms, setClassrooms] = useState("");


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedClassrooms = _useState6[0],
      setSelectedClassrooms = _useState6[1];

  var handleChange = function handleChange(value) {
    console.log(value);
    setText(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "combo-box-demo",
    options: subjectOptions,
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    onChange: function onChange(e, newValue) {
      console.log(newValue);
      formik.setFieldValue("name", newValue);
    },
    fullWidth: true,
    freeSolo: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        fullWidth: true
      }, formik.getFieldProps("name"), params, {
        label: "Subject Title",
        variant: "standard",
        helperText: formik.touched.name && formik.errors.name || "*Choose from a list of available subjects or type to add a new one.",
        error: formik.touched.name && formik.errors.name
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    fullWidth: true,
    label: "Subject display name",
    variant: "standard"
  }, formik.getFieldProps("display_name"), {
    helperText: formik.touched.display_name && formik.errors.display_name || "*Choose from a list of available subjects or type to add a new one.",
    error: formik.touched.display_name && formik.errors.display_name
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    fullWidth: true,
    label: "Short description",
    variant: "filled",
    multiline: true,
    rows: 3
  }, formik.getFieldProps("short_description"), {
    helperText: formik.touched.short_description && formik.errors.short_description,
    error: formik.touched.short_description && formik.errors.short_description
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_13___default.a, _extends({
    style: {
      height: 150
    } // value={text}
    // onChange={handleChange}

  }, formik.getFieldProps("description"), {
    onChange: function onChange(text) {
      return formik.setFieldValue("description", text);
    },
    helperText: formik.touched.description && formik.errors.description,
    error: formik.touched.description && formik.errors.description
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    alignItems: "center",
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    error: formik.touched.curricullum_id && formik.errors.curricullum_id,
    id: "demo-simple-select-label"
  }, "Curricullum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({
    fullWidth: true,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    name: "curricullums" // onChange={handleSelectChange}

  }, formik.getFieldProps("curricullum_id"), {
    helperText: formik.touched.curricullum_id && formik.errors.curricullum_id,
    error: formik.touched.curricullum_id && formik.errors.curricullum_id
  }), curricullums && curricullums.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: c.id,
      value: c.id
    }, c.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_16__["default"], {
    error: formik.touched.curricullum_id && formik.errors.curricullum_id
  }, formik.touched.curricullum_id && formik.errors.curricullum_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    error: formik.touched.classroom_id && formik.errors.classroom_id,
    id: "demo-simple-select-label"
  }, "Classroom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({
    fullWidth: true,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    name: "classrooms" // onChange={handleSelectChange}

  }, formik.getFieldProps("classroom_id"), {
    helperText: formik.touched.description && formik.errors.classroom_id,
    error: formik.touched.description && formik.errors.classroom_id
  }), classrooms && classrooms.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: c.id,
      value: c.id
    }, c.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_16__["default"], {
    error: formik.touched.classroom_id && formik.errors.classroom_id
  }, formik.touched.classroom_id && formik.errors.classroom_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      marginRight: 8
    }
  }, selectedClassrooms.map(function (classroom, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_19__["default"], {
      style: {
        marginRight: 16
      },
      color: "primary",
      key: classroom + index,
      variant: "outlined",
      label: classroom,
      onDelete: function (_onDelete) {
        function onDelete() {
          return _onDelete.apply(this, arguments);
        }

        onDelete.toString = function () {
          return _onDelete.toString();
        };

        return onDelete;
      }(function () {
        return onDelete(index);
      })
    });
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (BasicForm);

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Forms/Media.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Forms/Media.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Inputs/TextField */ "./resources/js/components/src/components/Inputs/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Inputs/MultiSelect */ "./resources/js/components/src/components/Inputs/MultiSelect.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _components_layout_ThumbnailCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/layout/ThumbnailCard */ "./resources/js/components/src/components/layout/ThumbnailCard.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    appBar: {
      position: "relative"
    },
    layout: _defineProperty({
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(2) * 2), {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }),
    paper: _defineProperty({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(3) * 2), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }),
    stepper: {
      padding: theme.spacing(3, 0, 5)
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1)
    },
    inputSpacer: {
      marginBottom: theme.spacing(4)
    },
    formControl: {
      margin: theme.spacing(1)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
var steps = ["Basic", "Media", "Finish"]; // const subjectOptions = ["Physics", "Chemistry", "Maths"];

function MediaForm(_ref) {
  var formik = _ref.formik;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      previewUrl = _useState4[0],
      setPreviewUrl = _useState4[1];

  var thumbnailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    fullWidth: true,
    label: "Preview Url",
    variant: "standard"
  }, formik.getFieldProps("preview_url"), {
    helperText: formik.touched.preview_url && formik.errors.preview_url || "Provide a preview url link for the subject from youtube,vimeo,etc...",
    error: formik.touched.preview_url && formik.errors.preview_url
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "textSecondary"
  }, "Choose Thumbnail Image")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: thumbnailRef,
    type: "file",
    style: {
      display: "none"
    },
    onChange: function onChange(e) {
      return formik.setFieldValue("thumbnail", e.target.files[0]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_ThumbnailCard__WEBPACK_IMPORTED_MODULE_21__["default"], {
    src: formik.values.thumbnail && URL.createObjectURL(formik.values.thumbnail),
    onClick: function onClick() {
      return thumbnailRef.current.click();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MediaForm);

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Forms/Seo.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Forms/Seo.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Inputs/TextField */ "./resources/js/components/src/components/Inputs/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Inputs/MultiSelect */ "./resources/js/components/src/components/Inputs/MultiSelect.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! material-ui-chip-input */ "./node_modules/material-ui-chip-input/lib/ChipInput.js");
/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_18__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    appBar: {
      position: "relative"
    },
    layout: _defineProperty({
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(2) * 2), {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }),
    paper: _defineProperty({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2)
    }, theme.breakpoints.up(600 + theme.spacing(3) * 2), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }),
    stepper: {
      padding: theme.spacing(3, 0, 5)
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1)
    },
    inputSpacer: {
      marginBottom: theme.spacing(4)
    },
    formControl: {
      margin: theme.spacing(1)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
var steps = ["Basic", "Media", "Finish"]; // const subjectOptions = ["Physics", "Chemistry", "Maths"];

function SeoForm(_ref) {
  var formik = _ref.formik;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      chips = _useState4[0],
      setChips = _useState4[1];

  var thumbnailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  function handleAddChip(chip, formik) {
    var newChips = _toConsumableArray(chips);

    newChips.push(chip);
    setChips(newChips);
    formik.setFieldValue("meta_tags", newChips);
  }

  function handleDeleteChip(chip, index, formik) {
    var newChips = _toConsumableArray(chips);

    newChips.splice(index, 1);
    setChips(newChips);
    formik.setFieldValue("meta_tags", newChips);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_18___default.a, {
    fullWidth: true,
    label: "meta tags",
    value: chips,
    onAdd: function onAdd(chip) {
      return handleAddChip(chip, formik);
    },
    onDelete: function onDelete(chip, index) {
      return handleDeleteChip(chip, index, formik);
    } // {...formik.getFieldProps("meta_tags")}
    ,
    helperText: formik.touched.meta_tags && formik.errors.meta_tags || "Write a keyword and press enter",
    error: formik.touched.meta_tags && formik.errors.meta_tags
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.inputSpacer,
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inputs_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    fullWidth: true,
    label: "meta description",
    variant: "filled",
    multiline: true,
    rows: 3
  }, formik.getFieldProps("meta_description"), {
    helperText: formik.touched.meta_description && formik.errors.meta_description || "Write a keyword and press enter",
    error: formik.touched.meta_description && formik.errors.meta_description
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SeoForm);

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Modals/Lesson.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Modals/Lesson.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LessonModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    disableTypography: true,
    className: classes.root
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, children), onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, null)) : null);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"]);
function LessonModal(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      subject_id = _ref.subject_id,
      sections = _ref.sections,
      onSubmitAction = _ref.onSubmitAction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isSubmitted = _React$useState2[0],
      setIsSubmitted = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_17__["Formik"], {
    initialValues: {
      name: "",
      summary: "",
      subject_id: subject_id,
      section_id: null,
      video_url: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_18__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_18__["string"]().max(200).required(),
      summary: yup__WEBPACK_IMPORTED_MODULE_18__["string"]().max(255),
      section_id: yup__WEBPACK_IMPORTED_MODULE_18__["number"]("Please select a section").required(),
      video_url: yup__WEBPACK_IMPORTED_MODULE_18__["string"]().url().required()
    }),
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, formik) {
        var isSuccess;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log({
                  values: values
                });
                setIsSubmitted(true);
                _context.next = 4;
                return onSubmitAction(values);

              case 4:
                isSuccess = _context.sent;

                if (isSuccess) {
                  formik.resetForm();
                }

                setIsSubmitted(false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, function (formik) {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      maxWidth: "xs",
      fullWidth: true,
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogTitle, {
      id: "customized-dialog-title",
      onClose: handleClose
    }, "Add New Lesson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogContent, {
      dividers: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      container: true,
      direction: "column",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      item: true,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], _extends({
      fullWidth: true,
      variant: "standard",
      color: "primary",
      label: "Lesson title"
    }, formik.getFieldProps("name"), {
      helperText: formik.touched.name && formik.errors.name || "provide a title for the lesson",
      error: formik.touched.name && formik.errors.name
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      item: true,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], _extends({
      multiline: true,
      rows: 2,
      fullWidth: true,
      variant: "filled",
      color: "primary",
      label: "Lesson summary"
    }, formik.getFieldProps("summary"), {
      helperText: formik.touched.summary && formik.errors.summary || "provide a summary of the lesson",
      error: formik.touched.summary && formik.errors.summary
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], (_React$createElement = {
      item: true
    }, _defineProperty(_React$createElement, "item", true), _defineProperty(_React$createElement, "style", {
      marginBottom: 16
    }), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__["default"], {
      fullWidth: true,
      variant: "standard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "demo-simple-select-outlined-label"
    }, "Select Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
      fullWidth: true,
      labelId: "demo-simple-select-outlined-label",
      id: "demo-simple-select-outlined"
    }, formik.getFieldProps("section_id"), {
      error: formik.touched.section_id && formik.errors.section_id,
      label: "Age"
    }), sections.map(function (section) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: section.id
      }, section.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_14__["default"], null, formik.touched.section_id && formik.errors.section_id || "Please select a section to attach the lesson."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      item: true,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], _extends({
      fullWidth: true,
      variant: "filled",
      color: "primary",
      label: "Video URL"
    }, formik.getFieldProps("video_url"), {
      helperText: formik.touched.video_url && formik.errors.video_url || "Provide the video url from vimeo,youtube etc...",
      error: formik.touched.video_url && formik.errors.video_url
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      onClick: formik.handleSubmit,
      disableElevation: true,
      variant: "contained",
      color: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], null, "Add Lesson")))));
  }));
}

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Modals/Section.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Modals/Section.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    disableTypography: true,
    className: classes.root
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, children), onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, null)) : null);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"]);
function CustomizedDialogs(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      subject_id = _ref.subject_id,
      onSubmitAction = _ref.onSubmitAction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isSubmitted = _React$useState2[0],
      setIsSubmitted = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
    initialValues: {
      name: "",
      summary: "",
      subject_id: subject_id
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_13__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().max(200).required(),
      summary: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().max(255)
    }),
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, formik) {
        var isSuccess;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log({
                  values: values
                });
                setIsSubmitted(true);
                _context.next = 4;
                return onSubmitAction(values);

              case 4:
                isSuccess = _context.sent;

                if (isSuccess) {
                  formik.resetForm();
                }

                setIsSubmitted(false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      maxWidth: "xs",
      fullWidth: true,
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogTitle, {
      id: "customized-dialog-title",
      onClose: handleClose
    }, "Add New Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogContent, {
      dividers: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      container: true,
      direction: "column",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      item: true,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], _extends({
      fullWidth: true,
      variant: "standard",
      color: "primary",
      label: "Section title"
    }, formik.getFieldProps("name"), {
      helperText: formik.touched.name && formik.errors.name || "provide a title for the section",
      error: formik.touched.name && formik.errors.name
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      item: true,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], _extends({
      multiline: true,
      rows: 2,
      fullWidth: true,
      variant: "filled",
      color: "primary",
      label: "Section summary"
    }, formik.getFieldProps("summary"), {
      helperText: formik.touched.summary && formik.errors.summary || "provide a summary",
      error: formik.touched.summary && formik.errors.summary
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: isSubmitted,
      type: "submit",
      disableElevation: true,
      variant: "contained",
      color: "primary",
      onClick: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], null, "Add Section"), isSubmitted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["CircularProgress"], {
      color: "primary",
      size: 12
    })))));
  }));
}

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/View.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/View.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredTabs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _components_layout_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/layout/Heading */ "./resources/js/components/src/components/layout/Heading.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Modals_Section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Modals/Section */ "./resources/js/components/src/containers/Admin/Subjects/Modals/Section.js");
/* harmony import */ var _Modals_Lesson__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Modals/Lesson */ "./resources/js/components/src/containers/Admin/Subjects/Modals/Lesson.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Forms_Basic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Forms/Basic */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Basic.js");
/* harmony import */ var _Forms_Media__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Forms/Media */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Media.js");
/* harmony import */ var _Forms_Seo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Forms/Seo */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Seo.js");
/* harmony import */ var _api_subjectClient__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../api/subjectClient */ "./resources/js/components/src/api/subjectClient.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _api_sectionClient__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../api/sectionClient */ "./resources/js/components/src/api/sectionClient.js");
/* harmony import */ var _api_lessonClient__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../api/lessonClient */ "./resources/js/components/src/api/lessonClient.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















 // import Icon from "@material-ui/core/Button";









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
      paddingBottom: theme.spacing(2)
    },
    lessonContainer: {
      marginTop: theme.spacing(4)
    }
  };
});
function CenteredTabs() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isOpenSection = _React$useState4[0],
      setOpenSection = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isOpenLesson = _React$useState6[0],
      setOpenLesson = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      data = _React$useState8[0],
      setData = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      loading = _React$useState10[0],
      setLoading = _React$useState10[1];

  var bottomRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_22__["useParams"])(),
      id = _useParams.id;

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  function createSection(_x) {
    return _createSection.apply(this, arguments);
  }

  function _createSection() {
    _createSection = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      var response, newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _api_sectionClient__WEBPACK_IMPORTED_MODULE_29__["default"].addSections(values);

            case 3:
              response = _context2.sent;
              newData = _objectSpread({}, data);
              newData.sections.push(response.data.data);
              console.log(newData);
              setData(newData);
              setOpenSection(false);
              setTimeout(function () {
                bottomRef.current.scrollIntoView({
                  behavior: "smooth"
                });
              }, 500);
              return _context2.abrupt("return", true);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 16:
              return _context2.abrupt("return", false);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return _createSection.apply(this, arguments);
  }

  function createLesson(_x2) {
    return _createLesson.apply(this, arguments);
  }

  function _createLesson() {
    _createLesson = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
      var response, newData, lessonData, sectionIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _api_lessonClient__WEBPACK_IMPORTED_MODULE_30__["default"].addLesson(values);

            case 3:
              response = _context3.sent;
              newData = _objectSpread({}, data);
              lessonData = response.data.data;
              sectionIndex = newData.sections.findIndex(function (s) {
                return s.id === lessonData.section_id;
              });

              if (sectionIndex !== -1) {
                newData.sections[sectionIndex].lessons.push(lessonData);
              }

              console.log(newData);
              setData(newData);
              setOpenLesson(false);
              return _context3.abrupt("return", true);

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 17:
              return _context3.abrupt("return", false);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return _createLesson.apply(this, arguments);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    function getInitialData() {
      return _getInitialData.apply(this, arguments);
    }

    function _getInitialData() {
      _getInitialData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api_subjectClient__WEBPACK_IMPORTED_MODULE_26__["default"].getSubject(id);

              case 3:
                response = _context.sent;
                setData(response.data.data);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
                setLoading(false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _getInitialData.apply(this, arguments);
    }

    getInitialData();
  }, []);

  function TabPanel(props) {
    var classes = useStyles();

    var children = props.children,
        value = props.value,
        index = props.index,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
      role: "tabpanel",
      hidden: value !== index,
      id: "simple-tabpanel-".concat(index),
      "aria-labelledby": "simple-tab-".concat(index)
    }, other), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
      p: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span"
    }, children)));
  }

  var lessonCount = 0;
  return !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: data.name,
    disableAction: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Lessons"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Basic"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Media"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Seo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPanel, {
    value: value,
    index: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    maxWidth: "md",
    className: classes.lessonContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    alignItems: "center",
    justify: "center",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: function onClick() {
      return setOpenSection(true);
    },
    style: {
      borderRadius: 30
    },
    variant: "outlined",
    color: "primary",
    className: classes.button,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19___default.a, null)
  }, "Add Section")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: function onClick() {
      return setOpenLesson(true);
    },
    style: {
      borderRadius: 30
    },
    variant: "outlined",
    color: "primary",
    className: classes.button,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19___default.a, null)
  }, "Add Lesson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      borderRadius: 30
    },
    variant: "outlined",
    color: "primary",
    className: classes.button,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_19___default.a, null)
  }, "Sort Sections"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.lessonContainer
  }, data.sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: section.id,
      maxWidth: "md",
      style: {
        marginBottom: 48
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      elevation: 0 // variant="outlined"
      ,
      style: {
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__["teal"][50],
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
        padding: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      container: true,
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      container: true,
      alignItems: "center",
      justify: "space-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h6",
      color: "textSecondary"
    }, "Section", " ", index + 1, ":", section.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "default"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_16___default.a, null))))), section.lessons && section.lessons.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__["default"], {
      style: {
        margin: "0 16px"
      }
    }, section.lessons.map(function (lesson, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: lesson.id,
        style: {
          background: "#fff",
          marginBottom: 16
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__["default"], {
        primary: "Lesson ".concat(lessonCount = lessonCount + 1, ": ").concat(lesson.name) // secondary={secondary ? 'Secondary text' : null}

      }));
    }))))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPanel, {
    value: value,
    index: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Basic__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPanel, {
    value: value,
    index: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Media__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPanel, {
    value: value,
    index: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Seo__WEBPACK_IMPORTED_MODULE_25__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
    subject_id: id,
    open: isOpenSection,
    onSubmitAction: createSection,
    handleClose: function handleClose() {
      return setOpenSection(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_Lesson__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: isOpenLesson,
    subject_id: id,
    onSubmitAction: createLesson,
    sections: data && data.sections && data.sections || [],
    handleClose: function handleClose() {
      return setOpenLesson(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: bottomRef
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CircularProgress"], {
    color: "primary"
  }));
}

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/index.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./View */ "./resources/js/components/src/containers/Admin/Subjects/View.js");









 // import SubjectAdd from "./Add";
// import SubjectEdit from "./Edit";

var SubjectList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./List */ "./resources/js/components/src/containers/Admin/Subjects/List.js"));
});
var SubjectAdd = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(29), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./Add */ "./resources/js/components/src/containers/Admin/Subjects/Add.js"));
});

var Subject = function Subject() {
  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  console.log({
    path: path
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubjectList, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "".concat(path, "/add")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubjectAdd, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(path, "/:id/edit")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(path, "/:id")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Subject);

/***/ })

}]);