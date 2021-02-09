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
      this.gainNode.value = volume;
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
      pitchBar.max = 4000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNEcmF3IiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJUb25lIiwibm9kZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwibmV3Tm9kZUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwicGxheWluZyIsIm5vZGVFbGUiLCJnZW5lcmF0ZVRvbmVDb250cm9sbGVycyIsIm9zY2lsbGF0b3IiLCJjcmVhdGVPc2NpbGxhdG9yIiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwidmFsdWUiLCJ0eXBlIiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImRldHVuZSIsImh6IiwiaW5pdGlhbGl6ZSIsInN0YXJ0Iiwidm9sdW1lIiwiZ2FpbiIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwicmVtb3ZlIiwidG9uZUxpc3QiLCJ0b25lTGkiLCJwbGF5QnV0dG9uIiwicGxheSIsInBpdGNoQmFyIiwibWluIiwibWF4IiwiY2xhc3NuYW1lIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFlLElBQWY7QUFDQXlCLG9CQUFVLENBQUNyQyxTQUFYLEdBQXVCLGFBQXZCO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsZUFBSSxDQUFDaUMsSUFBTDtBQUNEO0FBQ0YsT0FSRCxFQVR3QixDQW1CeEI7O0FBQ0EsVUFBTU0sUUFBUSxHQUFHbkQsUUFBUSxDQUFDVyxhQUFULENBQXVCLE9BQXZCLENBQWpCO0FBQ0F3QyxjQUFRLENBQUNqQixJQUFULEdBQWdCLE9BQWhCO0FBQ0FpQixjQUFRLENBQUNDLEdBQVQsR0FBZSxFQUFmO0FBQ0FELGNBQVEsQ0FBQ0UsR0FBVCxHQUFlLElBQWY7QUFDQUYsY0FBUSxDQUFDbEIsS0FBVCxHQUFpQixHQUFqQjtBQUNBa0IsY0FBUSxDQUFDRyxTQUFULEdBQXFCLFdBQXJCO0FBRUFILGNBQVEsQ0FBQ2xELGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNzRCxLQUFELEVBQVc7QUFDN0M7O0FBQ0EsYUFBSSxDQUFDakIsTUFBTCxDQUFZaUIsS0FBSyxDQUFDQyxNQUFOLENBQWF2QixLQUF6QjtBQUNELE9BSEQ7QUFLQWUsWUFBTSxDQUFDakMsTUFBUCxDQUFja0MsVUFBZDtBQUNBRCxZQUFNLENBQUNqQyxNQUFQLENBQWNvQyxRQUFkO0FBQ0EsYUFBT0gsTUFBUDtBQUNEOzs7Ozs7QUFHWXpDLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDN0VBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUb25lIGZyb20gXCIuL3NjcmlwdHMvdG9uZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gXG4gIGNhbnZhc0RyYXcoKTtcblxuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICB3aW5kb3cuVG9uZSA9IFRvbmU7XG5cbiAgY29uc3Qgbm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG5ld05vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb2RlQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IE5vZGVcIjtcbiAgbmV3Tm9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIG5ldyBUb25lKGF1ZGlvQ3R4KTtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgdG9uZSBub2RlLiBiZWVwIGJvb3AgYmVlcC5cIik7XG4gIH0pO1xuXG4gIG5vZGVDb250YWluZXIuYXBwZW5kKG5ld05vZGVCdXR0b24pO1xufSk7XG4iLCJjb25zdCBjYW52YXNEcmF3ID0gKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjOGJlY2RmYzlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgXG5cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNEcmF3O1xuIiwiY2xhc3MgVG9uZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMubm9kZUVsZSA9IHRoaXMuZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmdhaW5Ob2RlLnZhbHVlID0gMC4wMDI7XG5cbiAgICB0aGlzLm9zY2lsbGF0b3IudHlwZSA9IFwic2luZVwiO1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNDQwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuICAgIHRoaXMub3NjaWxsYXRvci5kZXR1bmUudmFsdWUgPSAxMDA7XG4gIH1cblxuICBkZXR1bmUoaHopIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gaHo7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMub3NjaWxsYXRvci5zdGFydCgpO1xuICB9XG5cbiAgYWRqdXN0R2Fpbih2b2x1bWUpIHtcbiAgICB0aGlzLmdhaW5Ob2RlLnZhbHVlID0gdm9sdW1lO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgMSk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AoMS41KTtcbiAgICB0aGlzLm5vZGVFbGUucmVtb3ZlKCk7XG4gIH1cblxuICBnZW5lcmF0ZVRvbmVDb250cm9sbGVycygpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCB0b25lTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9uZUxpc3RcIik7XG4gICAgY29uc3QgdG9uZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRvbmVMaXN0LmFwcGVuZCh0b25lTGkpO1xuXG4gICAgLy8gcGxheS9zdG9wIGJ1dHRvblxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5IFRvbmVcIjtcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlJlbW92ZSBOb2RlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvbmUgcmFuZ2Utc2xpZGVyXG4gICAgY29uc3QgcGl0Y2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGl0Y2hCYXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgICBwaXRjaEJhci5taW4gPSAyMDtcbiAgICBwaXRjaEJhci5tYXggPSA0MDAwO1xuICAgIHBpdGNoQmFyLnZhbHVlID0gNDQwO1xuICAgIHBpdGNoQmFyLmNsYXNzbmFtZSA9IFwicGl0Y2gtYmFyXCI7XG5cbiAgICBwaXRjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgZGVidWdnZXI7XG4gICAgICB0aGlzLmRldHVuZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdG9uZUxpLmFwcGVuZChwbGF5QnV0dG9uKTtcbiAgICB0b25lTGkuYXBwZW5kKHBpdGNoQmFyKTtcbiAgICByZXR1cm4gdG9uZUxpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvbmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9