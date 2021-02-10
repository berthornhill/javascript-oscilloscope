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
/* harmony import */ var _scripts_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/display */ "./src/scripts/display.js");





document.addEventListener("DOMContentLoaded", function () {
  var display = new _scripts_display__WEBPACK_IMPORTED_MODULE_3__["default"]();
}); // document.addEventListener("DOMContentLoaded", () => {
//   // old initiation
//   // canvasDraw();
//   const wave = new Wave();
//   animate = animate.bind(wave);
//   animate();
//   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//   // window.Tone = Tone;
//   const nodeContainer = document.getElementById("node-container");
//   const newNodeButton = document.createElement("button");
//   newNodeButton.innerHTML = "New Node";
//   newNodeButton.addEventListener("click", () => {
//     debugger;
//     let tone = new Tone(audioCtx);
//     // tones.push(tone);
//     console.log("Generating tone node. beep boop beep.");
//   });
//   nodeContainer.append(newNodeButton);
// });
// function animate() {
//   debugger;
//   requestAnimationFrame(animate);
//   // this.draw();
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   this.ctx.beginPath();
//   this.ctx.moveTo(0, canvas.height / 2);
//   for (let i = 0; i < this.canvas.width; i++) {
//     this.ctx.lineTo(
//       i,
//       this.yAxis + Math.sin(i * this.frequency + this.step) * 300
//       // Math.sin(i * this.frequency + this.step) * 300
//     );
//   }
//   this.ctx.stroke();
//   this.step += this.frequency;
//   // this.step > this.canvas.width ? (this.step = 0.01) : (this.step += this.step);
// }
// for (let i = 0; i < this.canvas.width; i++) {
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
var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.t = 0.01 / this.canvas.width;
    this.hz = 440;
    this.yAxis = this.canvas.height / 2;
    this.frequency = 2 * Math.PI * this.hz * this.t;
    this.step = this.frequency;
    this.twoPI = 2 * Math.PI;
  }

  _createClass(Canvas, [{
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

  return Canvas;
}();

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tone */ "./src/scripts/tone.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Display = /*#__PURE__*/function () {
  function Display() {
    _classCallCheck(this, Display);

    this.canv = new _canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.toneNodes = [];
    this.animateWave = this.animateWave.bind(this);
    this.calculateWave = this.calculateWave.bind(this);
    this.calculateStep = this.calculateStep.bind(this);
    this.createNewNodeButton();
    this.animateWave();
  }

  _createClass(Display, [{
    key: "createNewNodeButton",
    value: function createNewNodeButton() {
      var _this = this;

      this.nodeContainer = document.getElementById("node-container");
      this.newNodeButton = document.createElement("button");
      this.newNodeButton.innerHTML = "Add Node";
      this.newNodeButton.addEventListener("click", function () {
        var tone = new _tone__WEBPACK_IMPORTED_MODULE_0__["default"](_this.audioCtx);

        _this.toneNodes.push(tone);

        console.log("Generating tone node. beep boop beep.");
      });
      this.nodeContainer.append(this.newNodeButton);
    }
  }, {
    key: "animateWave",
    value: function animateWave() {
      debugger;
      requestAnimationFrame(this.animateWave); // this.draw();

      this.canv.ctx.clearRect(0, 0, this.canv.canvas.width, this.canv.canvas.height);
      this.canv.ctx.beginPath();
      this.canv.ctx.moveTo(0, canvas.height / 2);

      for (var i = 0; i < this.canv.canvas.width; i++) {
        this.canv.ctx.lineTo(i, this.canv.yAxis + this.calculateWave(i) * 200 // Math.sin(i * this.canv.frequency + this.canv.step) * 300
        );
      }

      this.canv.ctx.stroke();
      this.calculateStep();
    } // Math.sin( location * ( 2pi*oscillatorFrequency * t ) + step)

  }, {
    key: "calculateWave",
    value: function calculateWave(i) {
      debugger; // if (this.toneNodes.length === 0) return 0;

      var result = 0;

      for (var j = 0; j < this.toneNodes.length; j++) {
        debugger;
        var node = this.toneNodes[j];
        debugger;
        result += Math.sin(i * (this.canv.twoPI * node.oscillator.frequency.value * this.canv.t) + node.step);
      }

      debugger;
      return result;
    } //adds step to increment motion of wave.

  }, {
    key: "calculateStep",
    value: function calculateStep() {
      debugger;

      for (var i = 0; i < this.toneNodes.length; i++) {
        debugger;
        this.toneNodes[i].step += this.incrementStep(this.toneNodes[i]);
        debugger;
      }
    } // return calculates frequency to increment

  }, {
    key: "incrementStep",
    value: function incrementStep(node) {
      debugger;
      return this.canv.twoPI * node.oscillator.frequency.value * this.canv.t;
    }
  }]);

  return Display;
}();

/* harmony default export */ __webpack_exports__["default"] = (Display);

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
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.gainNode.gain.value = 0.5; // setting wave type, "sine" and initial value at 440Hz, or A 440.
    // detune value is set to 100 and referenced in cents.

    this.oscillator.type = "sine";
    this.oscillator.frequency.setValueAtTime(440, this.context.currentTime);
    this.oscillator.detune.value = 100; // step keeps track of the motion of the wave.
    // starting value is always based off frequency and incremented from there
    // it will be reset every change in oscillator frequency.

    this.step;
    this.setStep(); // setting these two constants to reference and not calculate every animate loop

    this.twoPI = 2 * Math.PI;
    this.t = 0.01 / 1600;
  } // sets frequency after change from user. Also resets step value to new frequency.


  _createClass(Tone, [{
    key: "detune",
    value: function detune(hz) {
      this.oscillator.frequency.value = hz;
      this.setStep();
    }
  }, {
    key: "adjustGain",
    value: function adjustGain(volume) {
      debugger;
      this.gainNode.gain.value = volume;
      debugger;
    } // this.frequency = 2 * Math.PI * this.hz * (this.t / this.canvas.width);

  }, {
    key: "setStep",
    value: function setStep() {
      this.step = this.twoPI * this.oscillator.frequency.value * this.t;
    }
  }, {
    key: "play",
    value: function play() {
      // this.initialize();
      this.oscillator.start();
      this.setStep();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, 1);
      this.oscillator.stop(1.5);
      this.oscillator.frequency.value = 0;
      this.setStep();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJEaXNwbGF5IiwiQ2FudmFzIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ0IiwiaHoiLCJ5QXhpcyIsImZyZXF1ZW5jeSIsIk1hdGgiLCJQSSIsInN0ZXAiLCJ0d29QSSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImYiLCJqIiwiaSIsImxpbmVUbyIsInNpbiIsInN0cm9rZSIsImNhbnYiLCJhdWRpb0N0eCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsInRvbmVOb2RlcyIsImFuaW1hdGVXYXZlIiwiYmluZCIsImNhbGN1bGF0ZVdhdmUiLCJjYWxjdWxhdGVTdGVwIiwiY3JlYXRlTmV3Tm9kZUJ1dHRvbiIsIm5vZGVDb250YWluZXIiLCJuZXdOb2RlQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRvbmUiLCJUb25lIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZXN1bHQiLCJsZW5ndGgiLCJub2RlIiwib3NjaWxsYXRvciIsInZhbHVlIiwiaW5jcmVtZW50U3RlcCIsImNvbnRleHQiLCJwbGF5aW5nIiwibm9kZUVsZSIsImdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzIiwiY3JlYXRlT3NjaWxsYXRvciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJ0eXBlIiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImRldHVuZSIsInNldFN0ZXAiLCJ2b2x1bWUiLCJzdGFydCIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwicmVtb3ZlIiwidG9uZUxpc3QiLCJ0b25lTGkiLCJwbGF5QnV0dG9uIiwicGxheSIsInZvbHVtZVNsaWRlciIsIm1pbiIsIm1heCIsImNsYXNzTmFtZSIsImV2ZW50IiwiYWRqdXN0R2FpbiIsInRhcmdldCIsInBpdGNoQmFyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFD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LENBQThCLFFBQTlCLEVBQXdDLFVBQUNxRixLQUFELEVBQVc7QUFDakQ7O0FBQ0EsYUFBSSxDQUFDQyxVQUFMLENBQWdCRCxLQUFLLENBQUNFLE1BQU4sQ0FBYWhDLEtBQTdCO0FBQ0QsT0FIRCxFQTdCd0IsQ0FrQ3hCOztBQUNBLFVBQU1pQyxRQUFRLEdBQUd6RixRQUFRLENBQUMwQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO0FBQ0ErQyxjQUFRLENBQUNyQixJQUFULEdBQWdCLE9BQWhCO0FBQ0FxQixjQUFRLENBQUNOLEdBQVQsR0FBZSxFQUFmO0FBQ0FNLGNBQVEsQ0FBQ0wsR0FBVCxHQUFlLElBQWY7QUFDQUssY0FBUSxDQUFDakMsS0FBVCxHQUFpQixHQUFqQjtBQUNBaUMsY0FBUSxDQUFDSixTQUFULEdBQXFCLFdBQXJCO0FBRUFJLGNBQVEsQ0FBQ3hGLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNxRixLQUFELEVBQVc7QUFDN0M7QUFDQSxhQUFJLENBQUNmLE1BQUwsQ0FBWWUsS0FBSyxDQUFDRSxNQUFOLENBQWFoQyxLQUF6QjtBQUNELE9BSEQ7QUFLQXVCLFlBQU0sQ0FBQzlCLE1BQVAsQ0FBYytCLFVBQWQ7QUFDQUQsWUFBTSxDQUFDOUIsTUFBUCxDQUFjaUMsWUFBZDtBQUNBSCxZQUFNLENBQUM5QixNQUFQLENBQWN3QyxRQUFkO0FBQ0EsYUFBT1YsTUFBUDtBQUNEOzs7Ozs7QUFHWWxDLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDeEhBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUb25lIGZyb20gXCIuL3NjcmlwdHMvdG9uZVwiO1xuaW1wb3J0IFdhdmUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL3NjcmlwdHMvZGlzcGxheVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xufSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgLy8gb2xkIGluaXRpYXRpb25cbi8vICAgLy8gY2FudmFzRHJhdygpO1xuXG4vLyAgIGNvbnN0IHdhdmUgPSBuZXcgV2F2ZSgpO1xuLy8gICBhbmltYXRlID0gYW5pbWF0ZS5iaW5kKHdhdmUpO1xuLy8gICBhbmltYXRlKCk7XG5cbi8vICAgY29uc3QgYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbi8vICAgLy8gd2luZG93LlRvbmUgPSBUb25lO1xuXG4vLyAgIGNvbnN0IG5vZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZGUtY29udGFpbmVyXCIpO1xuLy8gICBjb25zdCBuZXdOb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgbmV3Tm9kZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk5ldyBOb2RlXCI7XG4vLyAgIG5ld05vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBkZWJ1Z2dlcjtcbi8vICAgICBsZXQgdG9uZSA9IG5ldyBUb25lKGF1ZGlvQ3R4KTtcbi8vICAgICAvLyB0b25lcy5wdXNoKHRvbmUpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGluZyB0b25lIG5vZGUuIGJlZXAgYm9vcCBiZWVwLlwiKTtcbi8vICAgfSk7XG5cbi8vICAgbm9kZUNvbnRhaW5lci5hcHBlbmQobmV3Tm9kZUJ1dHRvbik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgZGVidWdnZXI7XG4vLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgLy8gdGhpcy5kcmF3KCk7XG4vLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuLy8gICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbi8vICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgICB0aGlzLmN0eC5saW5lVG8oXG4vLyAgICAgICBpLFxuLy8gICAgICAgdGhpcy55QXhpcyArIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbi8vICAgICAgIC8vIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuLy8gICB0aGlzLnN0ZXAgKz0gdGhpcy5mcmVxdWVuY3k7XG4vLyAgIC8vIHRoaXMuc3RlcCA+IHRoaXMuY2FudmFzLndpZHRoID8gKHRoaXMuc3RlcCA9IDAuMDEpIDogKHRoaXMuc3RlcCArPSB0aGlzLnN0ZXApO1xuLy8gfVxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgdGhpcy5jdHgubGluZVRvKFxuLy8gICAgIGksXG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4vLyAgICAgICBNYXRoLnNpbihcbi8vICAgICAgICAgaSAqICgyICogTWF0aC5QSSAqIHRoaXMuaHogKiAodGhpcy50IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHRoaXMuc3RlcFxuLy8gICAgICAgKSAqXG4vLyAgICAgICAgIDIwMFxuLy8gICApO1xuLy8gfVxuIiwiLy8gY29uc3QgY2FudmFzRHJhdyA9ICgpID0+IHtcbi8vICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuLy8gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzhiZWNkZmM5XCI7XG4vLyAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4vLyAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4vLyAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcblxuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4vLyAgIGxldCBmID0gNDQwO1xuLy8gICBsZXQgdCA9IDAuMDE7XG4vLyAgIGxldCBqID0gNjAwO1xuXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgICBjdHgubGluZVRvKFxuLy8gICAgICAgaSxcbi8vICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICtcbi8vICAgICAgICAgKE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBmICogKHQgLyBjYW52YXMud2lkdGgpKSkgK1xuLy8gICAgICAgICAgIE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBqICogKHQgLyBjYW52YXMud2lkdGgpKSkpICpcbi8vICAgICAgICAgICAyMDBcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIGN0eC5zdHJva2UoKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNhbnZhc0RyYXc7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbiAgICB0aGlzLnQgPSAwLjAxIC8gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5oeiA9IDQ0MDtcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmZyZXF1ZW5jeSA9IDIgKiBNYXRoLlBJICogdGhpcy5oeiAqIHRoaXMudDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLmZyZXF1ZW5jeTtcbiAgICB0aGlzLnR3b1BJID0gMiAqIE1hdGguUEk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgICBsZXQgZiA9IDQ0MDtcbiAgICBsZXQgdCA9IDAuMTtcbiAgICBsZXQgaiA9IDYwMDtcbiAgICBsZXQgc3RlcCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgaSxcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIHRoaXMuY2FudmFzLndpZHRoKSkgKyBzdGVwKSAqIDIwMFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBhbmltYXRlKCkge1xuICAvLyAgIGRlYnVnZ2VyO1xuICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAvLyAgIC8vIHRoaXMuZHJhdygpO1xuXG4gIC8vICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIC8vICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAvLyAgIGxldCBmID0gNDQwO1xuICAvLyAgIGxldCB0ID0gMC4wMTtcbiAgLy8gICBsZXQgaiA9IDYwMDtcbiAgLy8gICBsZXQgc3RlcCA9IDAuMDE7XG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbiAgLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgLy8gICAgICAgaSxcbiAgLy8gICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gIC8vICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIHRoaXMuY2FudmFzLndpZHRoKSkgKyBzdGVwKSAqIDIwMFxuICAvLyAgICAgKTtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuIiwiaW1wb3J0IFRvbmUgZnJvbSBcIi4vdG9uZVwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXNcIjtcblxuY2xhc3MgRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudiA9IG5ldyBDYW52YXMoKTtcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG4gICAgdGhpcy50b25lTm9kZXMgPSBbXTtcblxuICAgIHRoaXMuYW5pbWF0ZVdhdmUgPSB0aGlzLmFuaW1hdGVXYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVXYXZlID0gdGhpcy5jYWxjdWxhdGVXYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGVwID0gdGhpcy5jYWxjdWxhdGVTdGVwLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZU5ld05vZGVCdXR0b24oKTtcbiAgICB0aGlzLmFuaW1hdGVXYXZlKCk7XG4gIH1cblxuICBjcmVhdGVOZXdOb2RlQnV0dG9uKCkge1xuICAgIHRoaXMubm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5uZXdOb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRoaXMubmV3Tm9kZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBOb2RlXCI7XG5cbiAgICB0aGlzLm5ld05vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCB0b25lID0gbmV3IFRvbmUodGhpcy5hdWRpb0N0eCk7XG4gICAgICB0aGlzLnRvbmVOb2Rlcy5wdXNoKHRvbmUpO1xuICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIHRvbmUgbm9kZS4gYmVlcCBib29wIGJlZXAuXCIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub2RlQ29udGFpbmVyLmFwcGVuZCh0aGlzLm5ld05vZGVCdXR0b24pO1xuICB9XG5cbiAgYW5pbWF0ZVdhdmUoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZVdhdmUpO1xuICAgIC8vIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuY2Fudi5jdHguY2xlYXJSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmNhbnYuY2FudmFzLndpZHRoLFxuICAgICAgdGhpcy5jYW52LmNhbnZhcy5oZWlnaHRcbiAgICApO1xuXG4gICAgdGhpcy5jYW52LmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNhbnYuY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2Fudi5jYW52YXMud2lkdGg7IGkrKykge1xuICAgICAgdGhpcy5jYW52LmN0eC5saW5lVG8oXG4gICAgICAgIGksXG4gICAgICAgIHRoaXMuY2Fudi55QXhpcyArIHRoaXMuY2FsY3VsYXRlV2F2ZShpKSAqIDIwMFxuICAgICAgICAvLyBNYXRoLnNpbihpICogdGhpcy5jYW52LmZyZXF1ZW5jeSArIHRoaXMuY2Fudi5zdGVwKSAqIDMwMFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnYuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlU3RlcCgpO1xuICB9XG5cbiAgLy8gTWF0aC5zaW4oIGxvY2F0aW9uICogKCAycGkqb3NjaWxsYXRvckZyZXF1ZW5jeSAqIHQgKSArIHN0ZXApXG4gIGNhbGN1bGF0ZVdhdmUoaSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIC8vIGlmICh0aGlzLnRvbmVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICAgIGxldCByZXN1bHQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRvbmVOb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgZGVidWdnZXI7XG4gICAgICBsZXQgbm9kZSA9IHRoaXMudG9uZU5vZGVzW2pdO1xuICAgICAgZGVidWdnZXI7XG4gICAgICByZXN1bHQgKz0gTWF0aC5zaW4oXG4gICAgICAgIGkgKiAodGhpcy5jYW52LnR3b1BJICogbm9kZS5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSAqIHRoaXMuY2Fudi50KSArXG4gICAgICAgICAgbm9kZS5zdGVwXG4gICAgICApO1xuICAgIH1cbiAgICBkZWJ1Z2dlcjtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvL2FkZHMgc3RlcCB0byBpbmNyZW1lbnQgbW90aW9uIG9mIHdhdmUuXG4gIGNhbGN1bGF0ZVN0ZXAoKSB7XG4gICAgZGVidWdnZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9uZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMudG9uZU5vZGVzW2ldLnN0ZXAgKz0gdGhpcy5pbmNyZW1lbnRTdGVwKHRoaXMudG9uZU5vZGVzW2ldKTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBjYWxjdWxhdGVzIGZyZXF1ZW5jeSB0byBpbmNyZW1lbnRcbiAgaW5jcmVtZW50U3RlcChub2RlKSB7XG4gICAgZGVidWdnZXI7XG4gICAgcmV0dXJuIHRoaXMuY2Fudi50d29QSSAqIG5vZGUub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgKiB0aGlzLmNhbnYudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuIiwiaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vY2FudmFzXCI7XG5cbmNsYXNzIFRvbmUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGVFbGUgPSB0aGlzLmdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzKCk7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjU7XG5cbiAgICAvLyBzZXR0aW5nIHdhdmUgdHlwZSwgXCJzaW5lXCIgYW5kIGluaXRpYWwgdmFsdWUgYXQgNDQwSHosIG9yIEEgNDQwLlxuICAgIC8vIGRldHVuZSB2YWx1ZSBpcyBzZXQgdG8gMTAwIGFuZCByZWZlcmVuY2VkIGluIGNlbnRzLlxuXG4gICAgdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDQ0MCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZGV0dW5lLnZhbHVlID0gMTAwO1xuXG4gICAgLy8gc3RlcCBrZWVwcyB0cmFjayBvZiB0aGUgbW90aW9uIG9mIHRoZSB3YXZlLlxuICAgIC8vIHN0YXJ0aW5nIHZhbHVlIGlzIGFsd2F5cyBiYXNlZCBvZmYgZnJlcXVlbmN5IGFuZCBpbmNyZW1lbnRlZCBmcm9tIHRoZXJlXG4gICAgLy8gaXQgd2lsbCBiZSByZXNldCBldmVyeSBjaGFuZ2UgaW4gb3NjaWxsYXRvciBmcmVxdWVuY3kuXG5cbiAgICB0aGlzLnN0ZXA7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG5cbiAgICAvLyBzZXR0aW5nIHRoZXNlIHR3byBjb25zdGFudHMgdG8gcmVmZXJlbmNlIGFuZCBub3QgY2FsY3VsYXRlIGV2ZXJ5IGFuaW1hdGUgbG9vcFxuXG4gICAgdGhpcy50d29QSSA9IDIgKiBNYXRoLlBJO1xuICAgIHRoaXMudCA9IDAuMDEgLyAxNjAwO1xuICB9XG5cbiAgLy8gc2V0cyBmcmVxdWVuY3kgYWZ0ZXIgY2hhbmdlIGZyb20gdXNlci4gQWxzbyByZXNldHMgc3RlcCB2YWx1ZSB0byBuZXcgZnJlcXVlbmN5LlxuICBkZXR1bmUoaHopIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gaHo7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG4gIH1cblxuICBhZGp1c3RHYWluKHZvbHVtZSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuXG4gIC8vIHRoaXMuZnJlcXVlbmN5ID0gMiAqIE1hdGguUEkgKiB0aGlzLmh6ICogKHRoaXMudCAvIHRoaXMuY2FudmFzLndpZHRoKTtcblxuICBzZXRTdGVwKCkge1xuICAgIHRoaXMuc3RlcCA9IHRoaXMudHdvUEkgKiB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlICogdGhpcy50O1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgICB0aGlzLnNldFN0ZXAoKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIDEpO1xuICAgIHRoaXMub3NjaWxsYXRvci5zdG9wKDEuNSk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IDA7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG4gICAgdGhpcy5ub2RlRWxlLnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgdG9uZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvbmVMaXN0XCIpO1xuICAgIGNvbnN0IHRvbmVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b25lTGlzdC5hcHBlbmQodG9uZUxpKTtcblxuICAgIC8vIHBsYXkvc3RvcCBidXR0b25cbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUGxheSBUb25lXCI7XG4gICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJSZW1vdmUgTm9kZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB2b2x1bWUgY29udHJvbFxuXG4gICAgY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHZvbHVtZVNsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHZvbHVtZVNsaWRlci5taW4gPSAwLjA7XG4gICAgdm9sdW1lU2xpZGVyLm1heCA9IDEuMDtcbiAgICB2b2x1bWVTbGlkZXIudmFsdWUgPSAwLjU7XG4gICAgdm9sdW1lU2xpZGVyLnN0ZXAgPSAwLjAxO1xuICAgIHZvbHVtZVNsaWRlci5jbGFzc05hbWUgPSBcInZvbHVtZVwiO1xuXG4gICAgdm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMuYWRqdXN0R2FpbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gcGl0Y2hCYXIgb3IgdG9uZSBhZGp1c3RtZW50IHJhbmdlLXNsaWRlclxuICAgIGNvbnN0IHBpdGNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBpdGNoQmFyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcGl0Y2hCYXIubWluID0gMjA7XG4gICAgcGl0Y2hCYXIubWF4ID0gNDAwMDtcbiAgICBwaXRjaEJhci52YWx1ZSA9IDQ0MDtcbiAgICBwaXRjaEJhci5jbGFzc05hbWUgPSBcInBpdGNoLWJhclwiO1xuXG4gICAgcGl0Y2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5kZXR1bmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRvbmVMaS5hcHBlbmQocGxheUJ1dHRvbik7XG4gICAgdG9uZUxpLmFwcGVuZCh2b2x1bWVTbGlkZXIpO1xuICAgIHRvbmVMaS5hcHBlbmQocGl0Y2hCYXIpO1xuICAgIHJldHVybiB0b25lTGk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9uZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=