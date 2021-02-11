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
      this.newNodeButton.className = "new-node";
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

      this.canv.ctx.fillStyle = "rgba(0,0,0,0.03)";
      this.canv.ctx.fillRect(0, 0, this.canv.canvas.width, this.canv.canvas.height);
      this.canv.ctx.beginPath();
      this.canv.ctx.moveTo(0, canvas.height / 2);

      for (var i = 0; i < this.canv.canvas.width; i++) {
        this.canv.ctx.lineTo(i, this.canv.yAxis + this.calculateWave(i) * 125 // Math.sin(i * this.canv.frequency + this.canv.step) * 300
        );
      }

      this.canv.ctx.strokeStyle = "hsl(190, 70%, 50%)";
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
      this.gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 2);
      this.oscillator.stop(1);
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
      volumeSlider.step = 0.01;
      volumeSlider.value = 0.5; // 1.0

      volumeSlider.className = "volume";
      debugger;
      volumeSlider.addEventListener("change", function (event) {
        debugger;

        _this.adjustGain(event.target.value);
      }); // pitchBar or tone adjustment range-slider

      var pitchBar = document.createElement("input");
      pitchBar.type = "range";
      pitchBar.min = 20;
      pitchBar.max = 3000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJEaXNwbGF5IiwiQ2FudmFzIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ0IiwiaHoiLCJ5QXhpcyIsImZyZXF1ZW5jeSIsIk1hdGgiLCJQSSIsInN0ZXAiLCJ0d29QSSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImYiLCJqIiwiaSIsImxpbmVUbyIsInNpbiIsInN0cm9rZSIsImNhbnYiLCJhdWRpb0N0eCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsInRvbmVOb2RlcyIsImFuaW1hdGVXYXZlIiwiYmluZCIsImNhbGN1bGF0ZVdhdmUiLCJjYWxjdWxhdGVTdGVwIiwiY3JlYXRlTmV3Tm9kZUJ1dHRvbiIsIm5vZGVDb250YWluZXIiLCJuZXdOb2RlQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInRvbmUiLCJUb25lIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwicmVzdWx0IiwibGVuZ3RoIiwibm9kZSIsIm9zY2lsbGF0b3IiLCJ2YWx1ZSIsImluY3JlbWVudFN0ZXAiLCJjb250ZXh0IiwicGxheWluZyIsIm5vZGVFbGUiLCJnZW5lcmF0ZVRvbmVDb250cm9sbGVycyIsImNyZWF0ZU9zY2lsbGF0b3IiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnYWluIiwidHlwZSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJkZXR1bmUiLCJzZXRTdGVwIiwidm9sdW1lIiwic3RhcnQiLCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lIiwic3RvcCIsInJlbW92ZSIsInRvbmVMaXN0IiwidG9uZUxpIiwicGxheUJ1dHRvbiIsInBsYXkiLCJ2b2x1bWVTbGlkZXIiLCJtaW4iLCJtYXgiLCJldmVudCIsImFkanVzdEdhaW4iLCJ0YXJnZXQiLCJwaXRjaEJhciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUb25lIGZyb20gXCIuL3NjcmlwdHMvdG9uZVwiO1xuaW1wb3J0IFdhdmUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL3NjcmlwdHMvZGlzcGxheVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xufSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgLy8gb2xkIGluaXRpYXRpb25cbi8vICAgLy8gY2FudmFzRHJhdygpO1xuXG4vLyAgIGNvbnN0IHdhdmUgPSBuZXcgV2F2ZSgpO1xuLy8gICBhbmltYXRlID0gYW5pbWF0ZS5iaW5kKHdhdmUpO1xuLy8gICBhbmltYXRlKCk7XG5cbi8vICAgY29uc3QgYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbi8vICAgLy8gd2luZG93LlRvbmUgPSBUb25lO1xuXG4vLyAgIGNvbnN0IG5vZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZGUtY29udGFpbmVyXCIpO1xuLy8gICBjb25zdCBuZXdOb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgbmV3Tm9kZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk5ldyBOb2RlXCI7XG4vLyAgIG5ld05vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBkZWJ1Z2dlcjtcbi8vICAgICBsZXQgdG9uZSA9IG5ldyBUb25lKGF1ZGlvQ3R4KTtcbi8vICAgICAvLyB0b25lcy5wdXNoKHRvbmUpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGluZyB0b25lIG5vZGUuIGJlZXAgYm9vcCBiZWVwLlwiKTtcbi8vICAgfSk7XG5cbi8vICAgbm9kZUNvbnRhaW5lci5hcHBlbmQobmV3Tm9kZUJ1dHRvbik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgZGVidWdnZXI7XG4vLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgLy8gdGhpcy5kcmF3KCk7XG4vLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuLy8gICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbi8vICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgICB0aGlzLmN0eC5saW5lVG8oXG4vLyAgICAgICBpLFxuLy8gICAgICAgdGhpcy55QXhpcyArIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbi8vICAgICAgIC8vIE1hdGguc2luKGkgKiB0aGlzLmZyZXF1ZW5jeSArIHRoaXMuc3RlcCkgKiAzMDBcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuLy8gICB0aGlzLnN0ZXAgKz0gdGhpcy5mcmVxdWVuY3k7XG4vLyAgIC8vIHRoaXMuc3RlcCA+IHRoaXMuY2FudmFzLndpZHRoID8gKHRoaXMuc3RlcCA9IDAuMDEpIDogKHRoaXMuc3RlcCArPSB0aGlzLnN0ZXApO1xuLy8gfVxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgdGhpcy5jdHgubGluZVRvKFxuLy8gICAgIGksXG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4vLyAgICAgICBNYXRoLnNpbihcbi8vICAgICAgICAgaSAqICgyICogTWF0aC5QSSAqIHRoaXMuaHogKiAodGhpcy50IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHRoaXMuc3RlcFxuLy8gICAgICAgKSAqXG4vLyAgICAgICAgIDIwMFxuLy8gICApO1xuLy8gfVxuIiwiLy8gY29uc3QgY2FudmFzRHJhdyA9ICgpID0+IHtcbi8vICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuLy8gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzhiZWNkZmM5XCI7XG4vLyAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4vLyAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4vLyAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcblxuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG4vLyAgIGxldCBmID0gNDQwO1xuLy8gICBsZXQgdCA9IDAuMDE7XG4vLyAgIGxldCBqID0gNjAwO1xuXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzLndpZHRoOyBpKyspIHtcbi8vICAgICBjdHgubGluZVRvKFxuLy8gICAgICAgaSxcbi8vICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICtcbi8vICAgICAgICAgKE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBmICogKHQgLyBjYW52YXMud2lkdGgpKSkgK1xuLy8gICAgICAgICAgIE1hdGguc2luKGkgKiAoMiAqIE1hdGguUEkgKiBqICogKHQgLyBjYW52YXMud2lkdGgpKSkpICpcbi8vICAgICAgICAgICAyMDBcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIGN0eC5zdHJva2UoKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNhbnZhc0RyYXc7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbiAgICB0aGlzLnQgPSAwLjAxIC8gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5oeiA9IDQ0MDtcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmZyZXF1ZW5jeSA9IDIgKiBNYXRoLlBJICogdGhpcy5oeiAqIHRoaXMudDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLmZyZXF1ZW5jeTtcbiAgICB0aGlzLnR3b1BJID0gMiAqIE1hdGguUEk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgICBsZXQgZiA9IDQ0MDtcbiAgICBsZXQgdCA9IDAuMTtcbiAgICBsZXQgaiA9IDYwMDtcbiAgICBsZXQgc3RlcCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgaSxcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIHRoaXMuY2FudmFzLndpZHRoKSkgKyBzdGVwKSAqIDIwMFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBhbmltYXRlKCkge1xuICAvLyAgIGRlYnVnZ2VyO1xuICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAvLyAgIC8vIHRoaXMuZHJhdygpO1xuXG4gIC8vICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIC8vICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAvLyAgIGxldCBmID0gNDQwO1xuICAvLyAgIGxldCB0ID0gMC4wMTtcbiAgLy8gICBsZXQgaiA9IDYwMDtcbiAgLy8gICBsZXQgc3RlcCA9IDAuMDE7XG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpKyspIHtcbiAgLy8gICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgLy8gICAgICAgaSxcbiAgLy8gICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArXG4gIC8vICAgICAgICAgTWF0aC5zaW4oaSAqICgyICogTWF0aC5QSSAqIGYgKiAodCAvIHRoaXMuY2FudmFzLndpZHRoKSkgKyBzdGVwKSAqIDIwMFxuICAvLyAgICAgKTtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuIiwiaW1wb3J0IFRvbmUgZnJvbSBcIi4vdG9uZVwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXNcIjtcblxuY2xhc3MgRGlzcGxheSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudiA9IG5ldyBDYW52YXMoKTtcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG4gICAgdGhpcy50b25lTm9kZXMgPSBbXTtcblxuICAgIHRoaXMuYW5pbWF0ZVdhdmUgPSB0aGlzLmFuaW1hdGVXYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVXYXZlID0gdGhpcy5jYWxjdWxhdGVXYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGVwID0gdGhpcy5jYWxjdWxhdGVTdGVwLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZU5ld05vZGVCdXR0b24oKTtcbiAgICB0aGlzLmFuaW1hdGVXYXZlKCk7XG4gIH1cblxuICBjcmVhdGVOZXdOb2RlQnV0dG9uKCkge1xuICAgIHRoaXMubm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9kZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5uZXdOb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0aGlzLm5ld05vZGVCdXR0b24uY2xhc3NOYW1lID0gXCJuZXctbm9kZVwiO1xuICAgIHRoaXMubmV3Tm9kZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBOb2RlXCI7XG5cbiAgICB0aGlzLm5ld05vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCB0b25lID0gbmV3IFRvbmUodGhpcy5hdWRpb0N0eCk7XG4gICAgICB0aGlzLnRvbmVOb2Rlcy5wdXNoKHRvbmUpO1xuICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIHRvbmUgbm9kZS4gYmVlcCBib29wIGJlZXAuXCIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub2RlQ29udGFpbmVyLmFwcGVuZCh0aGlzLm5ld05vZGVCdXR0b24pO1xuICB9XG5cbiAgYW5pbWF0ZVdhdmUoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZVdhdmUpO1xuICAgIC8vIHRoaXMuZHJhdygpO1xuXG4gICAgdGhpcy5jYW52LmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wMylcIjtcbiAgICB0aGlzLmNhbnYuY3R4LmZpbGxSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmNhbnYuY2FudmFzLndpZHRoLFxuICAgICAgdGhpcy5jYW52LmNhbnZhcy5oZWlnaHRcbiAgICApO1xuXG4gICAgdGhpcy5jYW52LmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNhbnYuY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2Fudi5jYW52YXMud2lkdGg7IGkrKykge1xuICAgICAgdGhpcy5jYW52LmN0eC5saW5lVG8oXG4gICAgICAgIGksXG4gICAgICAgIHRoaXMuY2Fudi55QXhpcyArIHRoaXMuY2FsY3VsYXRlV2F2ZShpKSAqIDEyNVxuICAgICAgICAvLyBNYXRoLnNpbihpICogdGhpcy5jYW52LmZyZXF1ZW5jeSArIHRoaXMuY2Fudi5zdGVwKSAqIDMwMFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnYuY3R4LnN0cm9rZVN0eWxlID0gXCJoc2woMTkwLCA3MCUsIDUwJSlcIjtcbiAgICB0aGlzLmNhbnYuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlU3RlcCgpO1xuICB9XG5cbiAgLy8gTWF0aC5zaW4oIGxvY2F0aW9uICogKCAycGkqb3NjaWxsYXRvckZyZXF1ZW5jeSAqIHQgKSArIHN0ZXApXG4gIGNhbGN1bGF0ZVdhdmUoaSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIC8vIGlmICh0aGlzLnRvbmVOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICAgIGxldCByZXN1bHQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRvbmVOb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgZGVidWdnZXI7XG4gICAgICBsZXQgbm9kZSA9IHRoaXMudG9uZU5vZGVzW2pdO1xuICAgICAgZGVidWdnZXI7XG4gICAgICByZXN1bHQgKz0gTWF0aC5zaW4oXG4gICAgICAgIGkgKiAodGhpcy5jYW52LnR3b1BJICogbm9kZS5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSAqIHRoaXMuY2Fudi50KSArXG4gICAgICAgICAgbm9kZS5zdGVwXG4gICAgICApO1xuICAgIH1cbiAgICBkZWJ1Z2dlcjtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvL2FkZHMgc3RlcCB0byBpbmNyZW1lbnQgbW90aW9uIG9mIHdhdmUuXG4gIGNhbGN1bGF0ZVN0ZXAoKSB7XG4gICAgZGVidWdnZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9uZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMudG9uZU5vZGVzW2ldLnN0ZXAgKz0gdGhpcy5pbmNyZW1lbnRTdGVwKHRoaXMudG9uZU5vZGVzW2ldKTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBjYWxjdWxhdGVzIGZyZXF1ZW5jeSB0byBpbmNyZW1lbnRcbiAgaW5jcmVtZW50U3RlcChub2RlKSB7XG4gICAgZGVidWdnZXI7XG4gICAgcmV0dXJuIHRoaXMuY2Fudi50d29QSSAqIG5vZGUub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgKiB0aGlzLmNhbnYudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuIiwiaW1wb3J0IGNhbnZhc0RyYXcgZnJvbSBcIi4vY2FudmFzXCI7XG5cbmNsYXNzIFRvbmUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGVFbGUgPSB0aGlzLmdlbmVyYXRlVG9uZUNvbnRyb2xsZXJzKCk7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjU7XG5cbiAgICAvLyBzZXR0aW5nIHdhdmUgdHlwZSwgXCJzaW5lXCIgYW5kIGluaXRpYWwgdmFsdWUgYXQgNDQwSHosIG9yIEEgNDQwLlxuICAgIC8vIGRldHVuZSB2YWx1ZSBpcyBzZXQgdG8gMTAwIGFuZCByZWZlcmVuY2VkIGluIGNlbnRzLlxuXG4gICAgdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDQ0MCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZGV0dW5lLnZhbHVlID0gMTAwO1xuXG4gICAgLy8gc3RlcCBrZWVwcyB0cmFjayBvZiB0aGUgbW90aW9uIG9mIHRoZSB3YXZlLlxuICAgIC8vIHN0YXJ0aW5nIHZhbHVlIGlzIGFsd2F5cyBiYXNlZCBvZmYgZnJlcXVlbmN5IGFuZCBpbmNyZW1lbnRlZCBmcm9tIHRoZXJlXG4gICAgLy8gaXQgd2lsbCBiZSByZXNldCBldmVyeSBjaGFuZ2UgaW4gb3NjaWxsYXRvciBmcmVxdWVuY3kuXG5cbiAgICB0aGlzLnN0ZXA7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG5cbiAgICAvLyBzZXR0aW5nIHRoZXNlIHR3byBjb25zdGFudHMgdG8gcmVmZXJlbmNlIGFuZCBub3QgY2FsY3VsYXRlIGV2ZXJ5IGFuaW1hdGUgbG9vcFxuXG4gICAgdGhpcy50d29QSSA9IDIgKiBNYXRoLlBJO1xuICAgIHRoaXMudCA9IDAuMDEgLyAxNjAwO1xuICB9XG5cbiAgLy8gc2V0cyBmcmVxdWVuY3kgYWZ0ZXIgY2hhbmdlIGZyb20gdXNlci4gQWxzbyByZXNldHMgc3RlcCB2YWx1ZSB0byBuZXcgZnJlcXVlbmN5LlxuICBkZXR1bmUoaHopIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gaHo7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG4gIH1cblxuICBhZGp1c3RHYWluKHZvbHVtZSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuXG4gIC8vIHRoaXMuZnJlcXVlbmN5ID0gMiAqIE1hdGguUEkgKiB0aGlzLmh6ICogKHRoaXMudCAvIHRoaXMuY2FudmFzLndpZHRoKTtcblxuICBzZXRTdGVwKCkge1xuICAgIHRoaXMuc3RlcCA9IHRoaXMudHdvUEkgKiB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlICogdGhpcy50O1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgICB0aGlzLnNldFN0ZXAoKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoXG4gICAgICAwLjAxLFxuICAgICAgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgMlxuICAgICk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AoMSk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IDA7XG4gICAgdGhpcy5zZXRTdGVwKCk7XG4gICAgdGhpcy5ub2RlRWxlLnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgdG9uZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvbmVMaXN0XCIpO1xuICAgIGNvbnN0IHRvbmVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b25lTGlzdC5hcHBlbmQodG9uZUxpKTtcblxuICAgIC8vIHBsYXkvc3RvcCBidXR0b25cbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUGxheSBUb25lXCI7XG4gICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJSZW1vdmUgTm9kZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB2b2x1bWUgY29udHJvbFxuXG4gICAgY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHZvbHVtZVNsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHZvbHVtZVNsaWRlci5taW4gPSAwLjA7XG4gICAgdm9sdW1lU2xpZGVyLm1heCA9IDEuMDtcbiAgICB2b2x1bWVTbGlkZXIuc3RlcCA9IDAuMDE7XG4gICAgdm9sdW1lU2xpZGVyLnZhbHVlID0gMC41OyAvLyAxLjBcbiAgICB2b2x1bWVTbGlkZXIuY2xhc3NOYW1lID0gXCJ2b2x1bWVcIjtcbiAgICBkZWJ1Z2dlcjtcblxuICAgIHZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgZGVidWdnZXI7XG4gICAgICB0aGlzLmFkanVzdEdhaW4oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIHBpdGNoQmFyIG9yIHRvbmUgYWRqdXN0bWVudCByYW5nZS1zbGlkZXJcbiAgICBjb25zdCBwaXRjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwaXRjaEJhci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHBpdGNoQmFyLm1pbiA9IDIwO1xuICAgIHBpdGNoQmFyLm1heCA9IDMwMDA7XG4gICAgcGl0Y2hCYXIudmFsdWUgPSA0NDA7XG4gICAgcGl0Y2hCYXIuY2xhc3NOYW1lID0gXCJwaXRjaC1iYXJcIjtcblxuICAgIHBpdGNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMuZGV0dW5lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICB0b25lTGkuYXBwZW5kKHBsYXlCdXR0b24pO1xuICAgIHRvbmVMaS5hcHBlbmQodm9sdW1lU2xpZGVyKTtcbiAgICB0b25lTGkuYXBwZW5kKHBpdGNoQmFyKTtcbiAgICByZXR1cm4gdG9uZUxpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvbmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9