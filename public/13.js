(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./resources/js/components/src/components/layout/CustomSnackbar.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/src/components/layout/CustomSnackbar.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomSnackbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Alert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  };
});
function CustomSnackbar(_ref) {
  var open = _ref.open,
      message = _ref.message,
      handleClose = _ref.handleClose;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    onClose: handleClose,
    severity: "success"
  }, message)));
}

/***/ }),

/***/ "./resources/js/components/src/containers/Admin/Subjects/Add.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Subjects/Add.js ***!
  \**********************************************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Inputs/MultiSelect */ "./resources/js/components/src/components/Inputs/MultiSelect.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Forms_Basic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Forms/Basic */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Basic.js");
/* harmony import */ var _Forms_Media__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Forms/Media */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Media.js");
/* harmony import */ var _Forms_Seo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Forms/Seo */ "./resources/js/components/src/containers/Admin/Subjects/Forms/Seo.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_layout_CustomSnackbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/layout/CustomSnackbar */ "./resources/js/components/src/components/layout/CustomSnackbar.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _api_subjectClient__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../api/subjectClient */ "./resources/js/components/src/api/subjectClient.js");
/* harmony import */ var _api_curricullumClient__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../api/curricullumClient */ "./resources/js/components/src/api/curricullumClient.js");
/* harmony import */ var _api_classroomClient__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../api/classroomClient */ "./resources/js/components/src/api/classroomClient.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_27__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["makeStyles"])(function (theme) {
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
      marginBottom: theme.spacing(2)
    }
  };
});
var steps = ["Basic", "Media", "Seo"];

var SubjectAdd = function SubjectAdd() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_20__["useHistory"])();
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isSuccess = _React$useState4[0],
      setIsSuccess = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      message = _React$useState6[0],
      setMessage = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isSubmitted = _React$useState8[0],
      setSubmitted = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isLoading = _React$useState10[0],
      setLoading = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      curricullums = _React$useState12[0],
      setCurricullums = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      classrooms = _React$useState14[0],
      setClassrooms = _React$useState14[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    display_name: "",
    short_description: "",
    description: "",
    classroom_id: undefined,
    curricullum_id: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      basicForm = _useState2[0],
      setBasicForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    preview_url: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      mediaForm = _useState4[0],
      setMediaForm = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    meta_tags: [],
    meta_description: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      seoForm = _useState6[0],
      setSeoForm = _useState6[1];

  var handleNext = function handleNext() {
    if (activeStep == steps.length - 1) {
      setMessage("Subject added successfully!");
      setIsSuccess(true);
    }

    setActiveStep(activeStep + 1);
  };

  var handleBack = function handleBack() {
    setActiveStep(activeStep - 1);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    function getInitialData() {
      return _getInitialData.apply(this, arguments);
    }

    function _getInitialData() {
      _getInitialData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var curricullumResponse, classroomResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api_curricullumClient__WEBPACK_IMPORTED_MODULE_25__["default"].getCurricullums();

              case 3:
                curricullumResponse = _context.sent;
                _context.next = 6;
                return _api_classroomClient__WEBPACK_IMPORTED_MODULE_26__["default"].getClassrooms();

              case 6:
                classroomResponse = _context.sent;
                setCurricullums(curricullumResponse.data.data);
                setClassrooms(classroomResponse.data.data);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
                setLoading(false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));
      return _getInitialData.apply(this, arguments);
    }

    getInitialData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Add Subject",
    disableAction: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elevation: 2,
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h4",
    align: "center"
  }, "Add New Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    activeStep: activeStep,
    className: classes.stepper
  }, steps.map(function (label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__["default"], null, label));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxWidth: "md"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CircularProgress"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, activeStep == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
    initialValues: basicForm,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_23__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_23__["string"]().max(200).required(),
      display_name: yup__WEBPACK_IMPORTED_MODULE_23__["string"]().max(200).required(),
      short_description: yup__WEBPACK_IMPORTED_MODULE_23__["string"]().max(255),
      description: yup__WEBPACK_IMPORTED_MODULE_23__["string"]().max(2000),
      curricullum_id: yup__WEBPACK_IMPORTED_MODULE_23__["number"]().required(),
      classroom_id: yup__WEBPACK_IMPORTED_MODULE_23__["number"]().required()
    }),
    onSubmit: function onSubmit(values, formik) {
      console.log({
        values: values
      });
      setBasicForm(values);
      handleNext();
    }
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Basic__WEBPACK_IMPORTED_MODULE_17__["default"], {
      classrooms: classrooms,
      curricullums: curricullums,
      formik: formik
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.buttons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Inputs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary" // onClick={handleNext}
      ,
      className: classes.button
    }, "Next")));
  }), activeStep == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
    initialValues: mediaForm,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_23__["object"]({
      preview_url: yup__WEBPACK_IMPORTED_MODULE_23__["string"]()
    }),
    onSubmit: function onSubmit(values, formik) {
      console.log({
        values: values
      });
      setMediaForm(values);
      handleNext();
    }
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Media__WEBPACK_IMPORTED_MODULE_18__["default"], {
      formik: formik
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.buttons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: handleBack,
      className: classes.button
    }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Inputs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary" // onClick={handleNext}
      ,
      className: classes.button
    }, "Next")));
  }), activeStep == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
    initialValues: seoForm,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_23__["object"]({
      meta_tags: yup__WEBPACK_IMPORTED_MODULE_23__["array"](),
      meta_description: yup__WEBPACK_IMPORTED_MODULE_23__["string"]()
    }),
    onSubmit: /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, formik) {
        var submitValues, formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setSeoForm(values);
                submitValues = _objectSpread(_objectSpread(_objectSpread({}, mediaForm), values), basicForm);
                console.log({
                  values: submitValues
                });
                setSubmitted(true);
                formData = new FormData();
                Object.keys(submitValues).forEach(function (key) {
                  formData.append(key, submitValues[key]);
                });
                _context2.prev = 6;
                _context2.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_27___default.a.post("/api/subjects", formData, {
                  headers: {
                    "Content-Type": "multipart/formdata"
                  }
                });

              case 9:
                response = _context2.sent;
                console.log({
                  response: response.data
                });
                history.push("/admin/subjects/" + response.data.data.id);
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](6);
                console.log({
                  err: _context2.t0
                });

              case 17:
                setSubmitted(false);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[6, 14]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_Seo__WEBPACK_IMPORTED_MODULE_19__["default"], {
      formik: formik
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.buttons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: handleBack,
      className: classes.button
    }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Inputs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      disabled: isSubmitted // onClick={handleNext}
      ,
      className: classes.button
    }, "Submit", " ", isSubmitted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CircularProgress"], {
      size: 15,
      color: "primary"
    }))));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_CustomSnackbar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: isSuccess,
    message: message,
    handleClose: function handleClose() {
      return setIsSuccess(false);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubjectAdd);

/***/ })

}]);