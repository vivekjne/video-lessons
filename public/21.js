(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./resources/js/components/src/containers/Admin/Classroom/List.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/src/containers/Admin/Classroom/List.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_layout_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/Heading */ "./resources/js/components/src/components/layout/Heading.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_classroomClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/classroomClient */ "./resources/js/components/src/api/classroomClient.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var ClassroomList = function ClassroomList() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["useHistory"])();

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["useRouteMatch"])(),
      path = _useRouteMatch.path;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function fetchClassrooms() {
    return _fetchClassrooms.apply(this, arguments);
  }

  function _fetchClassrooms() {
    _fetchClassrooms = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api_classroomClient__WEBPACK_IMPORTED_MODULE_12__["default"].getClassrooms();

            case 3:
              response = _context.sent;
              console.log({
                response: response.data
              });
              setData(response.data.data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _fetchClassrooms.apply(this, arguments);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    fetchClassrooms();
  }, []);

  var handleChange = function handleChange(e, rowData) {
    console.log(rowData);

    var newData = _toConsumableArray(data);

    var itemIndex = newData.findIndex(function (d) {
      return d.id === rowData.id;
    });
    newData[itemIndex].isActive = e.target.checked;
    setData(newData);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Classrooms",
    actionLabel: "Add Classroom",
    action: "/admin/classrooms/add"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    columns: [{
      title: "ID",
      field: "id"
    }, {
      title: "Title",
      field: "name",
      render: function render(rowData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "inherit"
        }, "Classroom ", rowData.name);
      }
    }, {
      title: "Slug",
      field: "slug"
    }, // {
    //     title: "Curricullums",
    //     field: "curricullums",
    //     render: rowData => (
    //         <Typography variant="inherit">
    //             {rowData.curricullums.map(
    //                 (c, index) =>
    //                     `${c.name}${
    //                         rowData.curricullums.length -
    //                             1 !==
    //                         index
    //                             ? ","
    //                             : ""
    //                     }`
    //             )}
    //         </Typography>
    //     )
    // },
    {
      title: "Active",
      field: "isActive",
      render: function render(rowData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onChange: function onChange(e) {
            return handleChange(e, rowData);
          },
          checked: rowData.isActive,
          color: "secondary"
        });
      }
    }, {
      title: "Created At",
      field: "created_at",
      render: function render(rowData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "inherit"
        }, moment__WEBPACK_IMPORTED_MODULE_11___default()(rowData.created_at).format("DD-MM-YYYY"));
      }
    }, {
      title: "Updated At",
      field: "updated_at",
      render: function render(rowData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "inherit"
        }, moment__WEBPACK_IMPORTED_MODULE_11___default()(rowData.updated_at).format("DD-MM-YYYY"));
      }
    }],
    data: data,
    title: "Classroom List",
    options: {
      headerStyle: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["teal"][500],
        color: "#FFF"
      },
      paging: data.length > 5 ? true : false,
      search: data.length > 5 ? true : false,
      showTitle: false,
      toolbar: false,
      actionsColumnIndex: -1
    },
    actions: [{
      icon: "edit",
      tooltip: "Edit Curricullum",
      iconProps: {
        color: "primary"
      },
      onClick: function onClick(event, rowData) {
        return history.push({
          pathname: "".concat(path, "/").concat(rowData.id, "/edit"),
          state: {
            rowData: rowData
          }
        });
      }
    }, function (rowData) {
      return {
        icon: "delete",
        tooltip: "Delete Curricullum",
        iconProps: {
          color: "secondary"
        },
        onClick: function onClick(event, rowData) {
          return confirm("You want to delete " + rowData.name);
        }
      };
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassroomList);

/***/ })

}]);