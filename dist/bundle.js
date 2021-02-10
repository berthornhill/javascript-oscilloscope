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
  // old initiation
  // canvasDraw();
  var wave = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
  animate = animate.bind(wave);
  animate();
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  window.Tone = _scripts_tone__WEBPACK_IMPORTED_MODULE_2__["default"];
  var nodeContainer = document.getElementById("node-container");
  var newNodeButton = document.createElement("button");
  newNodeButton.innerHTML = "New Node";
  newNodeButton.addEventListener("click", function () {
    debugger;
    var tone = new _scripts_tone__WEBPACK_IMPORTED_MODULE_2__["default"](audioCtx);
    tones.push(tone);
    console.log("Generating tone node. beep boop beep.");
  });
  nodeContainer.append(newNodeButton);
});

function animate() {
  debugger;
  requestAnimationFrame(animate); // this.draw();

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.beginPath();
  this.ctx.moveTo(0, canvas.height / 2); // let f = 440;
  // let t = 0.01;
  // let j = 600;
  // let step = 0.01;
  // console.log(step);

  for (var i = 0; i < this.canvas.width; i++) {
    this.ctx.lineTo(i, this.yAxis + Math.sin(i * this.frequency + this.step) * 300 // Math.sin(i * this.frequency + this.step) * 300
    );
  }

  this.ctx.stroke();
  this.step += this.frequency; // this.step > this.canvas.width ? (this.step = 0.01) : (this.step += this.step);
} // for (let i = 0; i < this.canvas.width; i++) {
//   this.ctx.lineTo(
//     i,
//     this.canvas.height / 2 +
//       Math.sin(
//         i * (2 * Math.PI * this.hz * (this.t / this.canvas.width)) + this.step
//       ) *
//         200
//   );
// }

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const canvasDraw = () => {
//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");
//   // ctx.fillStyle = "#8becdfc9";
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   ctx.beginPath();
//   ctx.moveTo(0, canvas.height / 2);
//   let f = 440;
//   let t = 0.01;
//   let j = 600;
//   for (let i = 0; i < canvas.width; i++) {
//     ctx.lineTo(
//       i,
//       canvas.height / 2 +
//         (Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) +
//           Math.sin(i * (2 * Math.PI * j * (t / canvas.width)))) *
//           200
//     );
//   }
//   ctx.stroke();
// };
// export default canvasDraw;
var Wave = /*#__PURE__*/function () {
  function Wave() {
    _classCallCheck(this, Wave);

    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.t = 0.01;
    this.hz = 440;
    this.yAxis = this.canvas.height / 2;
    this.frequency = 2 * Math.PI * this.hz * (this.t / this.canvas.width);
    this.step = this.frequency;
  }

  _createClass(Wave, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(0, canvas.height / 2);
      var f = 440;
      var t = 0.1;
      var j = 600;
      var step = 0;

      for (var i = 0; i < this.canvas.width; i++) {
        this.ctx.lineTo(i, this.canvas.height / 2 + Math.sin(i * (2 * Math.PI * f * (t / this.canvas.width)) + step) * 200);
      }

      this.ctx.stroke();
    } // animate() {
    //   debugger;
    //   requestAnimationFrame(this.animate);
    //   // this.draw();
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(0, canvas.height / 2);
    //   let f = 440;
    //   let t = 0.01;
    //   let j = 600;
    //   let step = 0.01;
    //   for (let i = 0; i < this.canvas.width; i++) {
    //     this.ctx.lineTo(
    //       i,
    //       this.canvas.height / 2 +
    //         Math.sin(i * (2 * Math.PI * f * (t / this.canvas.width)) + step) * 200
    //     );
    //   }
    //   this.ctx.stroke();
    // }

  }]);

  return Wave;
}();

/* harmony default export */ __webpack_exports__["default"] = (Wave);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3YXZlIiwiV2F2ZSIsImFuaW1hdGUiLCJiaW5kIiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJUb25lIiwibm9kZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwibmV3Tm9kZUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0b25lIiwidG9uZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFwcGVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN0eCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiaSIsImxpbmVUbyIsInlBeGlzIiwiTWF0aCIsInNpbiIsImZyZXF1ZW5jeSIsInN0ZXAiLCJzdHJva2UiLCJnZXRDb250ZXh0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidCIsImh6IiwiUEkiLCJmIiwiaiIsImNvbnRleHQiLCJwbGF5aW5nIiwibm9kZUVsZSIsImdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzIiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnYWluIiwidmFsdWUiLCJ0eXBlIiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImRldHVuZSIsImluaXRpYWxpemUiLCJzdGFydCIsInZvbHVtZSIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwicmVtb3ZlIiwidG9uZUxpc3QiLCJ0b25lTGkiLCJwbGF5QnV0dG9uIiwicGxheSIsInZvbHVtZVNsaWRlciIsIm1pbiIsIm1heCIsImNsYXNzTmFtZSIsImV2ZW50IiwiYWRqdXN0R2FpbiIsInRhcmdldCIsInBpdGNoQmFyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEO0FBQ0E7QUFFQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsdURBQUosRUFBYjtBQUNBQyxTQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxJQUFiLENBQVY7QUFDQUUsU0FBTztBQUVQLE1BQU1FLFFBQVEsR0FBRyxLQUFLQyxNQUFNLENBQUND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R0FBZ0IsT0FBaEI7QUFDQXFCLGNBQVEsQ0FBQ04sR0FBVCxHQUFlLEVBQWY7QUFDQU0sY0FBUSxDQUFDTCxHQUFULEdBQWUsSUFBZjtBQUNBSyxjQUFRLENBQUN0QixLQUFULEdBQWlCLEdBQWpCO0FBQ0FzQixjQUFRLENBQUNKLFNBQVQsR0FBcUIsV0FBckI7QUFFQUksY0FBUSxDQUFDOUUsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBQzJFLEtBQUQsRUFBVztBQUM3QztBQUNBLGFBQUksQ0FBQ2YsTUFBTCxDQUFZZSxLQUFLLENBQUNFLE1BQU4sQ0FBYXJCLEtBQXpCO0FBQ0QsT0FIRDtBQUtBWSxZQUFNLENBQUNoRCxNQUFQLENBQWNpRCxVQUFkO0FBQ0FELFlBQU0sQ0FBQ2hELE1BQVAsQ0FBY21ELFlBQWQ7QUFDQUgsWUFBTSxDQUFDaEQsTUFBUCxDQUFjMEQsUUFBZDtBQUNBLGFBQU9WLE1BQVA7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHYTNELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUhBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUb25lIGZyb20gXCIuL3NjcmlwdHMvdG9uZVwiO1xuaW1wb3J0IFdhdmUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBvbGQgaW5pdGlhdGlvblxuICAvLyBjYW52YXNEcmF3KCk7XG5cbiAgY29uc3Qgd2F2ZSA9IG5ldyBXYXZlKCk7XG4gIGFuaW1hdGUgPSBhbmltYXRlLmJpbmQod2F2ZSk7XG4gIGFuaW1hdGUoKTtcblxuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICB3aW5kb3cuVG9uZSA9IFRvbmU7XG5cbiAgY29uc3Qgbm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG5ld05vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb2RlQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IE5vZGVcIjtcbiAgbmV3Tm9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIGxldCB0b25lID0gbmV3IFRvbmUoYXVkaW9DdHgpO1xuICAgIHRvbmVzLnB1c2godG9uZSk7XG4gICAgY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIHRvbmUgbm9kZS4gYmVlcCBib29wIGJlZXAuXCIpO1xuICB9KTtcblxuICBub2RlQ29udGFpbmVyLmFwcGVuZChuZXdOb2RlQnV0dG9uKTtcbn0pO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBkZWJ1Z2dlcjtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAvLyB0aGlzLmRyYXcoKTtcbiAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4gIC8vIGxldCBmID0gNDQwO1xuICAvLyBsZXQgdCA9IDAuMDE7XG4gIC8vIGxldCBqID0gNjAwO1xuICAvLyBsZXQgc3RlcCA9IDAuMDE7XG4gIC8vIGNvbnNvbGUubG9nKHN0ZXApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICBpLFxuICAgICAgdGhpcy55QXhpcyArIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbiAgICAgIC8vIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbiAgICApO1xuICB9XG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB0aGlzLnN0ZXAgKz0gdGhpcy5mcmVxdWVuY3k7XG4gIC8vIHRoaXMuc3RlcCA+IHRoaXMuY2FudmFzLndpZHRoID8gKHRoaXMuc3RlcCA9IDAuMDEpIDogKHRoaXMuc3RlcCArPSB0aGlzLnN0ZXApO1xufVxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgdGhpcy5jdHgubGluZVRvKFxuLy8gICAgIGksXG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4vLyAgICAgICBNYXRoLnNpbihcbi8vICAgICAgICAgaSAqICgyICogTWF0aC5QSSAqIHRoaXMuaHogKiAodGhpcy50IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHRoaXMuc3RlcFxuLy8gICAgICAgKSAqXG4vLyAgICAgICAgIDIwMFxuLy8gICApO1xuLy8gfVxuIiwiLy8gY29uc3QgY2FudmFzRHJhdyA9ICgpID0+IHtcbi8vICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuLy8gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzhiZWNkZmM5XCI7XG4vLyAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4vLyAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4vLyAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcblxuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4vLyAgIGxldCBmID0gNDQwO1xuLy8gICBsZXQgdCA9IDAuMDE7XG4vLyAgIGxldCBqID0gNjAwO1xuXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgICBjdHgubGluZVRvKFxuLy8gICAgICAgaSxcbi8vICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICtcbi8vICAgICAgICAgKE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBmICogKHQgLyBjYW52YXMud2lkdGgpKSkgK1xuLy8gICAgICAgICAgIE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBqICogKHQgLyBjYW52YXMud2lkdGgpKSkpICpcbi8vICAgICAgICAgICAyMDBcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIGN0eC5zdHJva2UoKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNhbnZhc0RyYXc7XG5cbmNsYXNzIFdhdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy50ID0gMC4wMTtcbiAgICB0aGlzLmh6ID0gNDQwO1xuICAgIHRoaXMueUF4aXMgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuZnJlcXVlbmN5ID0gMiAqIE1hdGguUEkgKiB0aGlzLmh6ICogKHRoaXMudCAvIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLmZyZXF1ZW5jeTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAgIGxldCBmID0gNDQwO1xuICAgIGxldCB0ID0gMC4xO1xuICAgIGxldCBqID0gNjAwO1xuICAgIGxldCBzdGVwID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMud2lkdGg7IGkrKykge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICBpLFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICtcbiAgICAgICAgICBNYXRoLnNpbihpICogKDIgKiBNYXRoLlBJICogZiAqICh0IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHN0ZXApICogMjAwXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIGFuaW1hdGUoKSB7XG4gIC8vICAgZGVidWdnZXI7XG4gIC8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gIC8vICAgLy8gdGhpcy5kcmF3KCk7XG5cbiAgLy8gICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICB0aGlzLmN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4gIC8vICAgbGV0IGYgPSA0NDA7XG4gIC8vICAgbGV0IHQgPSAwLjAxO1xuICAvLyAgIGxldCBqID0gNjAwO1xuICAvLyAgIGxldCBzdGVwID0gMC4wMTtcblxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMud2lkdGg7IGkrKykge1xuICAvLyAgICAgdGhpcy5jdHgubGluZVRvKFxuICAvLyAgICAgICBpLFxuICAvLyAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICtcbiAgLy8gICAgICAgICBNYXRoLnNpbihpICogKDIgKiBNYXRoLlBJICogZiAqICh0IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHN0ZXApICogMjAwXG4gIC8vICAgICApO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vY2FudmFzXCI7XG5cbmNsYXNzIFRvbmUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGVFbGUgPSB0aGlzLmdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMub3NjaWxsYXRvciA9IHRoaXMuY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMC41O1xuXG4gICAgdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDQ0MCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZGV0dW5lLnZhbHVlID0gMTAwO1xuICB9XG5cbiAgZGV0dW5lKGh6KSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGh6O1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgfVxuXG4gIGFkanVzdEdhaW4odm9sdW1lKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdm9sdW1lO1xuICAgIGRlYnVnZ2VyO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgMSk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AoMS41KTtcbiAgICB0aGlzLm5vZGVFbGUucmVtb3ZlKCk7XG4gIH1cblxuICBnZW5lcmF0ZVRvbmVDb250cm9sbGVycygpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCB0b25lTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9uZUxpc3RcIik7XG4gICAgY29uc3QgdG9uZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRvbmVMaXN0LmFwcGVuZCh0b25lTGkpO1xuXG4gICAgLy8gcGxheS9zdG9wIGJ1dHRvblxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5IFRvbmVcIjtcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlJlbW92ZSBOb2RlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHZvbHVtZSBjb250cm9sXG5cbiAgICBjb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdm9sdW1lU2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgdm9sdW1lU2xpZGVyLm1pbiA9IDAuMDtcbiAgICB2b2x1bWVTbGlkZXIubWF4ID0gMS4wO1xuICAgIHZvbHVtZVNsaWRlci52YWx1ZSA9IDAuNTtcbiAgICB2b2x1bWVTbGlkZXIuc3RlcCA9IDAuMDE7XG4gICAgdm9sdW1lU2xpZGVyLmNsYXNzTmFtZSA9IFwidm9sdW1lXCI7XG5cbiAgICB2b2x1bWVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5hZGp1c3RHYWluKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBwaXRjaEJhciBvciB0b25lIGFkanVzdG1lbnQgcmFuZ2Utc2xpZGVyXG4gICAgY29uc3QgcGl0Y2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGl0Y2hCYXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgICBwaXRjaEJhci5taW4gPSAyMDtcbiAgICBwaXRjaEJhci5tYXggPSA0MDAwO1xuICAgIHBpdGNoQmFyLnZhbHVlID0gNDQwO1xuICAgIHBpdGNoQmFyLmNsYXNzTmFtZSA9IFwicGl0Y2gtYmFyXCI7XG5cbiAgICBwaXRjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICB0aGlzLmRldHVuZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdG9uZUxpLmFwcGVuZChwbGF5QnV0dG9uKTtcbiAgICB0b25lTGkuYXBwZW5kKHZvbHVtZVNsaWRlcik7XG4gICAgdG9uZUxpLmFwcGVuZChwaXRjaEJhcik7XG4gICAgcmV0dXJuIHRvbmVMaTtcbiAgfVxuXG4gIC8vIGNhbnZhc0RyYXcoKSB7XG4gIC8vICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAvLyAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiM4YmVjZGZjOVwiO1xuICAvLyAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAvLyAgIGRlYnVnZ2VyO1xuICAvLyAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4gIC8vICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuXG4gIC8vICAgY3R4LmJlZ2luUGF0aCgpO1xuICAvLyAgIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4gIC8vICAgbGV0IGYgPSA0NDA7XG5cbiAgLy8gICAvLyBsZXQgZiA9IHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgfHwgMDtcbiAgLy8gICBsZXQgdCA9IDAuMDE7XG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy53aWR0aDsgaSsrKSB7XG4gIC8vICAgICBjdHgubGluZVRvKFxuICAvLyAgICAgICBpLFxuICAvLyAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArXG4gIC8vICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIGNhbnZhcy53aWR0aCkpKSAqIDUwMFxuICAvLyAgICAgKTtcbiAgLy8gICB9XG4gIC8vICAgY3R4LnN0cm9rZSgpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvbmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9