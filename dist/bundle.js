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
  Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  var ctx = canvas.getContext("2d"); // ctx.fillStyle = "#8becdfc9";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.width = innerWidth;
  canvas.height = innerHeight;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  var f = 440;
  var t = 0.01;
  var j = 600;

  for (var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, canvas.height / 2 + (Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) + Math.sin(i * (2 * Math.PI * j * (t / canvas.width)))) * 200);
  }

  ctx.stroke();
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
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
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
    this.canvasDraw();
  }

  _createClass(Tone, [{
    key: "initialize",
    value: function initialize() {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.gainNode.gain.value = 0.5;
      this.oscillator.type = "sine";
      this.oscillator.frequency.setValueAtTime(440, this.context.currentTime);
      this.oscillator.detune.value = 100;
    }
  }, {
    key: "detune",
    value: function detune(hz) {
      this.oscillator.frequency.value = hz;
    }
  }, {
    key: "play",
    value: function play() {
      this.initialize();
      this.oscillator.start();
    }
  }, {
    key: "adjustGain",
    value: function adjustGain(volume) {
      debugger;
      this.gainNode.gain.value = volume;
      debugger;
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
      }); // volume control

      var volumeSlider = document.createElement("input");
      volumeSlider.type = "range";
      volumeSlider.min = 0.0;
      volumeSlider.max = 1.0;
      volumeSlider.value = 0.5;
      volumeSlider.step = 0.01;
      volumeSlider.className = "volume";
      volumeSlider.addEventListener("change", function (event) {
        debugger;

        _this.adjustGain(event.target.value);
      }); // pitchBar or tone adjustment range-slider

      var pitchBar = document.createElement("input");
      pitchBar.type = "range";
      pitchBar.min = 20;
      pitchBar.max = 4000;
      pitchBar.value = 440;
      pitchBar.className = "pitch-bar";
      pitchBar.addEventListener("change", function (event) {
        // debugger;
        _this.detune(event.target.value);
      });
      toneLi.append(playButton);
      toneLi.append(volumeSlider);
      toneLi.append(pitchBar);
      return toneLi;
    } // canvasDraw() {
    //   let canvas = document.getElementById("canvas");
    //   let ctx = canvas.getContext("2d");
    //   // ctx.fillStyle = "#8becdfc9";
    //   // ctx.fillRect(0, 0, canvas.width, canvas.height);
    //   debugger;
    //   canvas.width = innerWidth;
    //   canvas.height = innerHeight;
    //   ctx.beginPath();
    //   ctx.moveTo(0, canvas.height / 2);
    //   let f = 440;
    //   // let f = this.oscillator.frequency.value || 0;
    //   let t = 0.01;
    //   for (let i = 0; i < canvas.width; i++) {
    //     ctx.lineTo(
    //       i,
    //       canvas.height / 2 +
    //         Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) * 500
    //     );
    //   }
    //   ctx.stroke();
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNEcmF3IiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJUb25lIiwibm9kZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwibmV3Tm9kZUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiZiIsInQiLCJqIiwiaSIsImxpbmVUbyIsIk1hdGgiLCJzaW4iLCJQSSIsInN0cm9rZSIsImNvbnRleHQiLCJwbGF5aW5nIiwibm9kZUVsZSIsImdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzIiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnYWluIiwidmFsdWUiLCJ0eXBlIiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImRldHVuZSIsImh6IiwiaW5pdGlhbGl6ZSIsInN0YXJ0Iiwidm9sdW1lIiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJyZW1vdmUiLCJ0b25lTGlzdCIsInRvbmVMaSIsInBsYXlCdXR0b24iLCJwbGF5Iiwidm9sdW1lU2xpZGVyIiwibWluIiwibWF4Iiwic3RlcCIsImNsYXNzTmFtZSIsImV2ZW50IiwiYWRqdXN0R2FpbiIsInRhcmdldCIsInBpdGNoQmFyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREMsaUVBQVU7QUFFVixNQUFNQyxRQUFRLEdBQUcsS0FBS0MsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNFLGtCQUFuQyxHQUFqQjtBQUNBRixRQUFNLENBQUNHLElBQVAsR0FBY0EscURBQWQ7QUFFQSxNQUFNQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixRQUF2QixDQUF0QjtB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QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHYXBELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDN0hBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUb25lIGZyb20gXCIuL3NjcmlwdHMvdG9uZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNhbnZhc0RyYXcoKTtcblxuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICB3aW5kb3cuVG9uZSA9IFRvbmU7XG5cbiAgY29uc3Qgbm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG5ld05vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb2RlQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IE5vZGVcIjtcbiAgbmV3Tm9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIG5ldyBUb25lKGF1ZGlvQ3R4KTtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgdG9uZSBub2RlLiBiZWVwIGJvb3AgYmVlcC5cIik7XG4gIH0pO1xuXG4gIG5vZGVDb250YWluZXIuYXBwZW5kKG5ld05vZGVCdXR0b24pO1xufSk7XG4iLCJjb25zdCBjYW52YXNEcmF3ID0gKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyBjdHguZmlsbFN0eWxlID0gXCIjOGJlY2RmYzlcIjtcbiAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgbGV0IGYgPSA0NDA7XG4gIGxldCB0ID0gMC4wMTtcbiAgbGV0IGogPSA2MDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMud2lkdGg7IGkrKykge1xuICAgIGN0eC5saW5lVG8oXG4gICAgICBpLFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgK1xuICAgICAgICAoTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIGNhbnZhcy53aWR0aCkpKSArXG4gICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGogKiAodCAvIGNhbnZhcy53aWR0aCkpKSkgKlxuICAgICAgICAgIDIwMFxuICAgICk7XG4gIH1cbiAgY3R4LnN0cm9rZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRHJhdztcbiIsImltcG9ydCBjYW52YXNEcmF3IGZyb20gXCIuL2NhbnZhc1wiO1xuXG5jbGFzcyBUb25lIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlRWxlID0gdGhpcy5nZW5lcmF0ZVRvbmVDb250cm9sbGVycygpO1xuICAgIHRoaXMuY2FudmFzRHJhdygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IgPSB0aGlzLmNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuNTtcblxuICAgIHRoaXMub3NjaWxsYXRvci50eXBlID0gXCJzaW5lXCI7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZSg0NDAsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmRldHVuZS52YWx1ZSA9IDEwMDtcbiAgfVxuXG4gIGRldHVuZShoeikge1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBoejtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0YXJ0KCk7XG4gIH1cblxuICBhZGp1c3RHYWluKHZvbHVtZSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIDEpO1xuICAgIHRoaXMub3NjaWxsYXRvci5zdG9wKDEuNSk7XG4gICAgdGhpcy5ub2RlRWxlLnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgdG9uZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvbmVMaXN0XCIpO1xuICAgIGNvbnN0IHRvbmVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b25lTGlzdC5hcHBlbmQodG9uZUxpKTtcblxuICAgIC8vIHBsYXkvc3RvcCBidXR0b25cbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUGxheSBUb25lXCI7XG4gICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJSZW1vdmUgTm9kZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB2b2x1bWUgY29udHJvbFxuXG4gICAgY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHZvbHVtZVNsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHZvbHVtZVNsaWRlci5taW4gPSAwLjA7XG4gICAgdm9sdW1lU2xpZGVyLm1heCA9IDEuMDtcbiAgICB2b2x1bWVTbGlkZXIudmFsdWUgPSAwLjU7XG4gICAgdm9sdW1lU2xpZGVyLnN0ZXAgPSAwLjAxO1xuICAgIHZvbHVtZVNsaWRlci5jbGFzc05hbWUgPSBcInZvbHVtZVwiO1xuXG4gICAgdm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMuYWRqdXN0R2FpbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gcGl0Y2hCYXIgb3IgdG9uZSBhZGp1c3RtZW50IHJhbmdlLXNsaWRlclxuICAgIGNvbnN0IHBpdGNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBpdGNoQmFyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcGl0Y2hCYXIubWluID0gMjA7XG4gICAgcGl0Y2hCYXIubWF4ID0gNDAwMDtcbiAgICBwaXRjaEJhci52YWx1ZSA9IDQ0MDtcbiAgICBwaXRjaEJhci5jbGFzc05hbWUgPSBcInBpdGNoLWJhclwiO1xuXG4gICAgcGl0Y2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5kZXR1bmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRvbmVMaS5hcHBlbmQocGxheUJ1dHRvbik7XG4gICAgdG9uZUxpLmFwcGVuZCh2b2x1bWVTbGlkZXIpO1xuICAgIHRvbmVMaS5hcHBlbmQocGl0Y2hCYXIpO1xuICAgIHJldHVybiB0b25lTGk7XG4gIH1cblxuICAvLyBjYW52YXNEcmF3KCkge1xuICAvLyAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgLy8gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgLy8gICAvLyBjdHguZmlsbFN0eWxlID0gXCIjOGJlY2RmYzlcIjtcbiAgLy8gICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgLy8gICBkZWJ1Z2dlcjtcbiAgLy8gICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICAvLyAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcblxuICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAvLyAgIGxldCBmID0gNDQwO1xuXG4gIC8vICAgLy8gbGV0IGYgPSB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlIHx8IDA7XG4gIC8vICAgbGV0IHQgPSAwLjAxO1xuXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMud2lkdGg7IGkrKykge1xuICAvLyAgICAgY3R4LmxpbmVUbyhcbiAgLy8gICAgICAgaSxcbiAgLy8gICAgICAgY2FudmFzLmhlaWdodCAvIDIgK1xuICAvLyAgICAgICAgIE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBmICogKHQgLyBjYW52YXMud2lkdGgpKSkgKiA1MDBcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuICAvLyAgIGN0eC5zdHJva2UoKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb25lO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==