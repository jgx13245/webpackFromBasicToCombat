(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n// Tree Shaking只支持ESModule，不支持require方式引用\n// import {add} from './math.js';\n// add(1,2);\n// import '@babel/polyfill'\n// 同步代码分割\n // console.log(_.join(['a','b','c'],'***'));\n//这种方式可以实现懒加载\n\nfunction getComponent() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lodash */ \"./node_modules/lodash/lodash.js\", 7)).then(({\n    default: _\n  }) => {\n    var element = document.createElement('div');\n    element.innerHTML = _.join(['Dell', 'Lee'], '-');\n    return element;\n  });\n}\n\nconsole.log('jjj'); // document.body.addEventListener('click', function(){\n//     console.log('click')\n//     getComponent().then(element => {\n//         document.body.appendChild(element)\n//     })\n// })\n\ngetComponent().then(element => {\n  document.body.appendChild(element);\n}); // import './test.js';\n// console.log(test.name);\n// import _ from 'lodash';\n// var element = document.createElement('div');\n// element.innerHTML = _.join('[Dell, Lee]','-');\n// document.body.appendChild(element);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUcmVlIFNoYWtpbmflj6rmlK/mjIFFU01vZHVsZe+8jOS4jeaUr+aMgXJlcXVpcmXmlrnlvI/lvJXnlKhcbi8vIGltcG9ydCB7YWRkfSBmcm9tICcuL21hdGguanMnO1xuLy8gYWRkKDEsMik7XG4vLyBpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcblxuLy8g5ZCM5q2l5Luj56CB5YiG5YmyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gY29uc29sZS5sb2coXy5qb2luKFsnYScsJ2InLCdjJ10sJyoqKicpKTtcblxuXG4vL+i/meenjeaWueW8j+WPr+S7peWunueOsOaHkuWKoOi9vVxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTpcImxvZGFzaFwiICovJ2xvZGFzaCcpLnRoZW4oKHtkZWZhdWx0OiBffSkgPT4ge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0RlbGwnLCAnTGVlJ10sICctJyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0pXG59XG5jb25zb2xlLmxvZygnampqJylcbi8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4vLyAgICAgZ2V0Q29tcG9uZW50KCkudGhlbihlbGVtZW50ID0+IHtcbi8vICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuLy8gICAgIH0pXG4gICAgXG4vLyB9KVxuXG5nZXRDb21wb25lbnQoKS50aGVuKGVsZW1lbnQgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59KVxuXG5cbi8vIGltcG9ydCAnLi90ZXN0LmpzJztcbi8vIGNvbnNvbGUubG9nKHRlc3QubmFtZSk7XG5cbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oJ1tEZWxsLCBMZWVdJywnLScpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0Esb0lBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

}]);