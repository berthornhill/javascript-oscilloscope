/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/tone */ "./src/scripts/tone.js");



document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello World");
  Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"])(); // debugger;

  var helloWorld = document.createElement("h1");
  helloWorld.innerText = "Sound ON!";
  document.body.append(helloWorld);
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  window.Tone = _scripts_tone__WEBPACK_IMPORTED_MODULE_2__["default"];
  var nodeContainer = document.getElementById("node-container");
  var newNodeButton = document.createElement("button");
  newNodeButton.innerHTML = "New Node";
  newNodeButton.addEventListener("click", function () {
    debugger;
    new _scripts_tone__WEBPACK_IMPORTED_MODULE_2__["default"](audioCtx);
    console.log("Generating tone node. beep boop beep.");
  });
  nodeContainer.append(newNodeButton);
});

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var canvasDraw = function canvasDraw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#8becdfc9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

/* harmony default export */ __webpack_exports__["default"] = (canvasDraw);

/***/ }),

/***/ "./src/scripts/tone.js":
/*!*****************************!*\
  !*** ./src/scripts/tone.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tone = /*#__PURE__*/function () {
  function Tone(context) {
    _classCallCheck(this, Tone);

    debugger;
    this.context = context;
    this.playing = false;
    this.nodeEle = this.generateToneControllers();
  }

  _createClass(Tone, [{
    key: "initialize",
    value: function initialize() {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.gainNode.value = 0.002;
      this.oscillator.type = "sine";
      this.oscillator.frequency.setValueAtTime(440, this.context.currentTime);
      this.oscillator.detune.value = 100;
    }
  }, {
    key: "detune",
    value: function detune(x) {
      this.oscillator.frequency.value = x;
    }
  }, {
    key: "play",
    value: function play() {
      this.initialize();
      this.oscillator.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, 1);
      this.oscillator.stop(1.5);
      this.nodeEle.remove();
    }
  }, {
    key: "generateToneControllers",
    value: function generateToneControllers() {
      var _this = this;

      debugger;
      var toneList = document.getElementById("toneList");
      var toneLi = document.createElement("li");
      toneList.append(toneLi); // play/stop button

      var playButton = document.createElement("button");
      playButton.innerHTML = "Play Tone";
      playButton.addEventListener("click", function () {
        if (!_this.playing) {
          _this.play();

          _this.playing = true;
          playButton.innerHTML = "Remove Node";
        } else {
          _this.stop();
        }
      }); // tone range-slider

      var pitchBar = document.createElement("input");
      pitchBar.type = "range";
      pitchBar.min = 20;
      pitchBar.max = 8000;
      pitchBar.value = 440;
      pitchBar.classname = "pitch-bar";
      pitchBar.addEventListener("change", function (event) {
        debugger;

        _this.detune(event.target.value);
      });
      toneLi.append(playButton);
      toneLi.append(pitchBar);
      return toneLi;
    }
  }]);

  return Tone;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tone);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzRHJhdyIsImhlbGxvV29ybGQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYm9keSIsImFwcGVuZCIsImF1ZGlvQ3R4Iiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiVG9uZSIsIm5vZGVDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm5ld05vZGVCdXR0b24iLCJpbm5lckhUTUwiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJwbGF5aW5nIiwibm9kZUVsZSIsImdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzIiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJ2YWx1ZSIsInR5cGUiLCJmcmVxdWVuY3kiLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwiZGV0dW5lIiwieCIsImluaXRpYWxpemUiLCJzdGFydCIsImdhaW4iLCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lIiwic3RvcCIsInJlbW92ZSIsInRvbmVMaXN0IiwidG9uZUxpIiwicGxheUJ1dHRvbiIsInBsYXkiLCJwaXRjaEJhciIsIm1pbiIsIm1heCIsImNsYXNzbmFtZSIsImV2ZW50IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO1FB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O0FBQ0FpQyxnQkFBVSxDQUFDbEQsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QyxZQUFJLENBQUMsS0FBSSxDQUFDMEIsT0FBVixFQUFtQjtBQUNqQixlQUFJLENBQUN5QixJQUFMOztBQUNBLGVBQUksQ0FBQ3pCLE9BQUwsR0FBZSxJQUFmO0FBQ0F3QixvQkFBVSxDQUFDakMsU0FBWCxHQUF1QixhQUF2QjtBQUNELFNBSkQsTUFJTztBQUNMLGVBQUksQ0FBQzZCLElBQUw7QUFDRDtBQUNGLE9BUkQsRUFUd0IsQ0FtQnhCOztBQUNBLFVBQU1NLFFBQVEsR0FBR3JELFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBK0MsY0FBUSxDQUFDaEIsSUFBVCxHQUFnQixPQUFoQjtBQUNBZ0IsY0FBUSxDQUFDQyxHQUFULEdBQWUsRUFBZjtBQUNBRCxjQUFRLENBQUNFLEdBQVQsR0FBZSxJQUFmO0FBQ0FGLGNBQVEsQ0FBQ2pCLEtBQVQsR0FBaUIsR0FBakI7QUFDQWlCLGNBQVEsQ0FBQ0csU0FBVCxHQUFxQixXQUFyQjtBQUVBSCxjQUFRLENBQUNwRCxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFDd0QsS0FBRCxFQUFXO0FBQzdDOztBQUNBLGFBQUksQ0FBQ2hCLE1BQUwsQ0FBWWdCLEtBQUssQ0FBQ0MsTUFBTixDQUFhdEIsS0FBekI7QUFDRCxPQUhEO0FBS0FjLFlBQU0sQ0FBQ3pDLE1BQVAsQ0FBYzBDLFVBQWQ7QUFDQUQsWUFBTSxDQUFDekMsTUFBUCxDQUFjNEMsUUFBZDtBQUNBLGFBQU9ILE1BQVA7QUFDRDs7Ozs7O0FBR1lwQyxtRUFBZixFOzs7Ozs7Ozs7OztBQ3pFQSx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjYW52YXNEcmF3IGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgVG9uZSBmcm9tIFwiLi9zY3JpcHRzL3RvbmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuXG4gIGNhbnZhc0RyYXcoKTtcblxuICAvLyBkZWJ1Z2dlcjtcbiAgY29uc3QgaGVsbG9Xb3JsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVsbG9Xb3JsZC5pbm5lclRleHQgPSBcIlNvdW5kIE9OIVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxsb1dvcmxkKTtcblxuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICB3aW5kb3cuVG9uZSA9IFRvbmU7XG5cbiAgY29uc3Qgbm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG5ld05vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb2RlQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IE5vZGVcIjtcbiAgbmV3Tm9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIG5ldyBUb25lKGF1ZGlvQ3R4KTtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgdG9uZSBub2RlLiBiZWVwIGJvb3AgYmVlcC5cIik7XG4gIH0pO1xuXG4gIG5vZGVDb250YWluZXIuYXBwZW5kKG5ld05vZGVCdXR0b24pO1xufSk7XG4iLCJjb25zdCBjYW52YXNEcmF3ID0gKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjOGJlY2RmYzlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNEcmF3O1xuIiwiY2xhc3MgVG9uZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMubm9kZUVsZSA9IHRoaXMuZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmdhaW5Ob2RlLnZhbHVlID0gMC4wMDI7XG5cbiAgICB0aGlzLm9zY2lsbGF0b3IudHlwZSA9IFwic2luZVwiO1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNDQwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuICAgIHRoaXMub3NjaWxsYXRvci5kZXR1bmUudmFsdWUgPSAxMDA7XG4gIH1cblxuICBkZXR1bmUoeCkge1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSB4O1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIDEpO1xuICAgIHRoaXMub3NjaWxsYXRvci5zdG9wKDEuNSk7XG4gICAgdGhpcy5ub2RlRWxlLnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgdG9uZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvbmVMaXN0XCIpO1xuICAgIGNvbnN0IHRvbmVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b25lTGlzdC5hcHBlbmQodG9uZUxpKTtcblxuICAgIC8vIHBsYXkvc3RvcCBidXR0b25cbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUGxheSBUb25lXCI7XG4gICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJSZW1vdmUgTm9kZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b25lIHJhbmdlLXNsaWRlclxuICAgIGNvbnN0IHBpdGNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBpdGNoQmFyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcGl0Y2hCYXIubWluID0gMjA7XG4gICAgcGl0Y2hCYXIubWF4ID0gODAwMDtcbiAgICBwaXRjaEJhci52YWx1ZSA9IDQ0MDtcbiAgICBwaXRjaEJhci5jbGFzc25hbWUgPSBcInBpdGNoLWJhclwiO1xuXG4gICAgcGl0Y2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5kZXR1bmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRvbmVMaS5hcHBlbmQocGxheUJ1dHRvbik7XG4gICAgdG9uZUxpLmFwcGVuZChwaXRjaEJhcik7XG4gICAgcmV0dXJuIHRvbmVMaTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb25lO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==