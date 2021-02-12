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
/* harmony import */ var _scripts_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/display */ "./src/scripts/display.js");


document.addEventListener("DOMContentLoaded", function () {
  var display = new _scripts_display__WEBPACK_IMPORTED_MODULE_1__["default"]();
});
var modal = document.getElementById("entry-modal");
modal.addEventListener("click", function () {
  var modalScreen = document.getElementById("modal-screen");
  var modalContent = document.getElementById("modal-content");
  modalContent.classList.add("hide");
  modalScreen.classList.add("hide");
  setTimeout(function () {
    modal.className = "modal";
  }, 1000);
});
var aboutModal = document.getElementById("about-modal");
var aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", function () {
  aboutModal.classList.add("showing");
});
var aboutClose = document.getElementById("close-button");
aboutClose.addEventListener("click", function () {
  var modalScreen = document.getElementById("about-modal-screen");
  var modalContent = document.getElementById("about-modal-content");
  debugger;
  modalContent.classList.add("hide");
  modalScreen.classList.add("hide");
  setTimeout(function () {
    debugger;
    aboutModal.className = "modal";
    modalContent.className = "modal-content";
    modalScreen.className = "modal-screen";
  }, 700);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJEaXNwbGF5IiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsU2NyZWVuIiwibW9kYWxDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsImNsYXNzTmFtZSIsImFib3V0TW9kYWwiLCJhYm91dEJ1dHRvbiIsImFib3V0Q2xvc2UiLCJDYW52YXMiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ0IiwiaHoiLCJ5QXhpcyIsImZyZXF1ZW5jeSIsIk1hdGgiLCJQSSIsInN0ZXAiLCJ0d29QSSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImYiLCJqIiwiaSIsImxpbmVUbyIsInNpbiIsInN0cm9rZSIsImNhbnYiLCJhdWRpb0N0eCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsInRvbmVOb2RlcyIsImFuaW1hdGVXYXZlIiwiYmluZCIsImNhbGN1bGF0ZVdhdmUiLCJjYWxjdWxhdGVTdGVwIiwiY3JlYXRlTmV3Tm9kZUJ1dHRvbiIsIm5vZGVDb250YWluZXIiLCJuZXdOb2RlQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRvbmUiLCJUb25lIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwicmVzdWx0IiwibGVuZ3RoIiwibm9kZSIsIm9zY2lsbGF0b3IiLCJ2YWx1ZSIsImluY3JlbWVudFN0ZXAiLCJjb250ZXh0IiwicGxheWluZyIsIm5vZGVFbGUiLCJnZW5lcmF0ZVRvbmVDb250cm9sbGVycyIsImNyZWF0ZU9zY2lsbGF0b3IiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnYWluIiwidHlwZSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJkZXR1bmUiLCJzZXRTdGVwIiwidm9sdW1lIiwic3RhcnQiLCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lIiwic3RvcCIsInJlbW92ZSIsInRvbmVMaXN0IiwidG9uZUxpIiwicGxheUJ1dHRvbiIsInBsYXkiLCJ2b2x1bWVTbGlkZXIiLCJtaW4iLCJtYXgiLCJldmVudCIsImFkanVzdEdhaW4iLCJ0YXJnZXQiLCJwaXRjaEJhciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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RixTQUFiLEdBQXlCLFFBQXpCO0FBQ0E7QUFFQW1GLGtCQUFZLENBQUM3RixnQkFBYixDQUE4QixRQUE5QixFQUF3QyxVQUFDZ0csS0FBRCxFQUFXO0FBQ2pEOztBQUNBLGFBQUksQ0FBQ0MsVUFBTCxDQUFnQkQsS0FBSyxDQUFDRSxNQUFOLENBQWEvQixLQUE3QjtBQUNELE9BSEQsRUE5QndCLENBbUN4Qjs7QUFDQSxVQUFNZ0MsUUFBUSxHQUFHcEcsUUFBUSxDQUFDb0QsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBZ0QsY0FBUSxDQUFDcEIsSUFBVCxHQUFnQixPQUFoQjtBQUNBb0IsY0FBUSxDQUFDTCxHQUFULEdBQWUsRUFBZjtBQUNBSyxjQUFRLENBQUNKLEdBQVQsR0FBZSxJQUFmO0FBQ0FJLGNBQVEsQ0FBQ2hDLEtBQVQsR0FBaUIsR0FBakI7QUFDQWdDLGNBQVEsQ0FBQ3pGLFNBQVQsR0FBcUIsV0FBckI7QUFFQXlGLGNBQVEsQ0FBQ25HLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNnRyxLQUFELEVBQVc7QUFDN0M7QUFDQSxhQUFJLENBQUNkLE1BQUwsQ0FBWWMsS0FBSyxDQUFDRSxNQUFOLENBQWEvQixLQUF6QjtBQUNELE9BSEQ7QUFLQXVCLFlBQU0sQ0FBQ2hDLE1BQVAsQ0FBY2lDLFVBQWQ7QUFDQUQsWUFBTSxDQUFDaEMsTUFBUCxDQUFjbUMsWUFBZDtBQUNBSCxZQUFNLENBQUNoQyxNQUFQLENBQWN5QyxRQUFkO0FBQ0EsYUFBT1QsTUFBUDtBQUNEOzs7Ozs7QUFHWXBDLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUhBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9zY3JpcHRzL2Rpc3BsYXlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbn0pO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cnktbW9kYWxcIik7XG5cbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBtb2RhbFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtc2NyZWVuXCIpO1xuICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250ZW50XCIpO1xuXG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgbW9kYWxTY3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICB9LCAxMDAwKTtcbn0pO1xuXG5jb25zdCBhYm91dE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1tb2RhbFwiKTtcblxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWJvdXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd2luZ1wiKTtcbn0pO1xuXG5jb25zdCBhYm91dENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idXR0b25cIik7XG5hYm91dENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBtb2RhbFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtbW9kYWwtc2NyZWVuXCIpO1xuICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1tb2RhbC1jb250ZW50XCIpO1xuICBkZWJ1Z2dlcjtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBtb2RhbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBhYm91dE1vZGFsLmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJtb2RhbC1jb250ZW50XCI7XG4gICAgbW9kYWxTY3JlZW4uY2xhc3NOYW1lID0gXCJtb2RhbC1zY3JlZW5cIjtcbiAgfSwgNzAwKTtcbn0pO1xuIiwiY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuICAgIHRoaXMudCA9IDAuMDEgLyB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmh6ID0gNDQwO1xuICAgIHRoaXMueUF4aXMgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuZnJlcXVlbmN5ID0gMiAqIE1hdGguUEkgKiB0aGlzLmh6ICogdGhpcy50O1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuZnJlcXVlbmN5O1xuICAgIHRoaXMudHdvUEkgPSAyICogTWF0aC5QSTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAgIGxldCBmID0gNDQwO1xuICAgIGxldCB0ID0gMC4xO1xuICAgIGxldCBqID0gNjAwO1xuICAgIGxldCBzdGVwID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMud2lkdGg7IGkrKykge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICBpLFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICtcbiAgICAgICAgICBNYXRoLnNpbihpICogKDIgKiBNYXRoLlBJICogZiAqICh0IC8gdGhpcy5jYW52YXMud2lkdGgpKSArIHN0ZXApICogMjAwXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG4iLCJpbXBvcnQgVG9uZSBmcm9tIFwiLi90b25lXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL2NhbnZhc1wiO1xuXG5jbGFzcyBEaXNwbGF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52ID0gbmV3IENhbnZhcygpO1xuICAgIHRoaXMuYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICB0aGlzLnRvbmVOb2RlcyA9IFtdO1xuXG4gICAgdGhpcy5hbmltYXRlV2F2ZSA9IHRoaXMuYW5pbWF0ZVdhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVdhdmUgPSB0aGlzLmNhbGN1bGF0ZVdhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVN0ZXAgPSB0aGlzLmNhbGN1bGF0ZVN0ZXAuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlTmV3Tm9kZUJ1dHRvbigpO1xuICAgIHRoaXMuYW5pbWF0ZVdhdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZU5ld05vZGVCdXR0b24oKSB7XG4gICAgdGhpcy5ub2RlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub2RlLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLm5ld05vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMubmV3Tm9kZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm5ldy1ub2RlXCI7XG4gICAgdGhpcy5uZXdOb2RlQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIE5vZGVcIjtcblxuICAgIHRoaXMubmV3Tm9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHRvbmUgPSBuZXcgVG9uZSh0aGlzLmF1ZGlvQ3R4KTtcbiAgICAgIHRoaXMudG9uZU5vZGVzLnB1c2godG9uZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgdG9uZSBub2RlLiBiZWVwIGJvb3AgYmVlcC5cIik7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vZGVDb250YWluZXIuYXBwZW5kKHRoaXMubmV3Tm9kZUJ1dHRvbik7XG4gIH1cblxuICBhbmltYXRlV2F2ZSgpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlV2F2ZSk7XG4gICAgLy8gdGhpcy5kcmF3KCk7XG5cbiAgICB0aGlzLmNhbnYuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjAzKVwiO1xuICAgIHRoaXMuY2Fudi5jdHguZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMuY2Fudi5jYW52YXMud2lkdGgsXG4gICAgICB0aGlzLmNhbnYuY2FudmFzLmhlaWdodFxuICAgICk7XG5cbiAgICB0aGlzLmNhbnYuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY2Fudi5jdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52LmNhbnZhcy53aWR0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNhbnYuY3R4LmxpbmVUbyhcbiAgICAgICAgaSxcbiAgICAgICAgdGhpcy5jYW52LnlBeGlzICsgdGhpcy5jYWxjdWxhdGVXYXZlKGkpICogMTI1XG4gICAgICAgIC8vIE1hdGguc2luKGkgKiB0aGlzLmNhbnYuZnJlcXVlbmN5ICsgdGhpcy5jYW52LnN0ZXApICogMzAwXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBcImhzbCgxOTAsIDcwJSwgNTAlKVwiO1xuICAgIHRoaXMuY2Fudi5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGVwKCk7XG4gIH1cblxuICAvLyBNYXRoLnNpbiggbG9jYXRpb24gKiAoIDJwaSpvc2NpbGxhdG9yRnJlcXVlbmN5ICogdCApICsgc3RlcClcbiAgY2FsY3VsYXRlV2F2ZShpKSB7XG4gICAgZGVidWdnZXI7XG4gICAgLy8gaWYgKHRoaXMudG9uZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudG9uZU5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIGxldCBub2RlID0gdGhpcy50b25lTm9kZXNbal07XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHJlc3VsdCArPSBNYXRoLnNpbihcbiAgICAgICAgaSAqICh0aGlzLmNhbnYudHdvUEkgKiBub2RlLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlICogdGhpcy5jYW52LnQpICtcbiAgICAgICAgICBub2RlLnN0ZXBcbiAgICAgICk7XG4gICAgfVxuICAgIGRlYnVnZ2VyO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vYWRkcyBzdGVwIHRvIGluY3JlbWVudCBtb3Rpb24gb2Ygd2F2ZS5cbiAgY2FsY3VsYXRlU3RlcCgpIHtcbiAgICBkZWJ1Z2dlcjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b25lTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy50b25lTm9kZXNbaV0uc3RlcCArPSB0aGlzLmluY3JlbWVudFN0ZXAodGhpcy50b25lTm9kZXNbaV0pO1xuICAgICAgZGVidWdnZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV0dXJuIGNhbGN1bGF0ZXMgZnJlcXVlbmN5IHRvIGluY3JlbWVudFxuICBpbmNyZW1lbnRTdGVwKG5vZGUpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICByZXR1cm4gdGhpcy5jYW52LnR3b1BJICogbm9kZS5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSAqIHRoaXMuY2Fudi50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG4iLCJpbXBvcnQgY2FudmFzRHJhdyBmcm9tIFwiLi9jYW52YXNcIjtcblxuY2xhc3MgVG9uZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMubm9kZUVsZSA9IHRoaXMuZ2VuZXJhdGVUb25lQ29udHJvbGxlcnMoKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IgPSB0aGlzLmNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuNTtcblxuICAgIC8vIHNldHRpbmcgd2F2ZSB0eXBlLCBcInNpbmVcIiBhbmQgaW5pdGlhbCB2YWx1ZSBhdCA0NDBIeiwgb3IgQSA0NDAuXG4gICAgLy8gZGV0dW5lIHZhbHVlIGlzIHNldCB0byAxMDAgYW5kIHJlZmVyZW5jZWQgaW4gY2VudHMuXG5cbiAgICB0aGlzLm9zY2lsbGF0b3IudHlwZSA9IFwic2luZVwiO1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNDQwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuICAgIHRoaXMub3NjaWxsYXRvci5kZXR1bmUudmFsdWUgPSAxMDA7XG5cbiAgICAvLyBzdGVwIGtlZXBzIHRyYWNrIG9mIHRoZSBtb3Rpb24gb2YgdGhlIHdhdmUuXG4gICAgLy8gc3RhcnRpbmcgdmFsdWUgaXMgYWx3YXlzIGJhc2VkIG9mZiBmcmVxdWVuY3kgYW5kIGluY3JlbWVudGVkIGZyb20gdGhlcmVcbiAgICAvLyBpdCB3aWxsIGJlIHJlc2V0IGV2ZXJ5IGNoYW5nZSBpbiBvc2NpbGxhdG9yIGZyZXF1ZW5jeS5cblxuICAgIHRoaXMuc3RlcDtcbiAgICB0aGlzLnNldFN0ZXAoKTtcblxuICAgIC8vIHNldHRpbmcgdGhlc2UgdHdvIGNvbnN0YW50cyB0byByZWZlcmVuY2UgYW5kIG5vdCBjYWxjdWxhdGUgZXZlcnkgYW5pbWF0ZSBsb29wXG5cbiAgICB0aGlzLnR3b1BJID0gMiAqIE1hdGguUEk7XG4gICAgdGhpcy50ID0gMC4wMSAvIDE2MDA7XG4gIH1cblxuICAvLyBzZXRzIGZyZXF1ZW5jeSBhZnRlciBjaGFuZ2UgZnJvbSB1c2VyLiBBbHNvIHJlc2V0cyBzdGVwIHZhbHVlIHRvIG5ldyBmcmVxdWVuY3kuXG4gIGRldHVuZShoeikge1xuICAgIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBoejtcbiAgICB0aGlzLnNldFN0ZXAoKTtcbiAgfVxuXG4gIGFkanVzdEdhaW4odm9sdW1lKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdm9sdW1lO1xuICAgIGRlYnVnZ2VyO1xuICB9XG5cbiAgLy8gdGhpcy5mcmVxdWVuY3kgPSAyICogTWF0aC5QSSAqIHRoaXMuaHogKiAodGhpcy50IC8gdGhpcy5jYW52YXMud2lkdGgpO1xuXG4gIHNldFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwID0gdGhpcy50d29QSSAqIHRoaXMub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgKiB0aGlzLnQ7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIC8vIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMub3NjaWxsYXRvci5zdGFydCgpO1xuICAgIHRoaXMuc2V0U3RlcCgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZShcbiAgICAgIDAuMDEsXG4gICAgICB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAyXG4gICAgKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RvcCgxKTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMDtcbiAgICB0aGlzLnNldFN0ZXAoKTtcbiAgICB0aGlzLm5vZGVFbGUucmVtb3ZlKCk7XG4gIH1cblxuICBnZW5lcmF0ZVRvbmVDb250cm9sbGVycygpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCB0b25lTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9uZUxpc3RcIik7XG4gICAgY29uc3QgdG9uZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRvbmVMaXN0LmFwcGVuZCh0b25lTGkpO1xuXG4gICAgLy8gcGxheS9zdG9wIGJ1dHRvblxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5IFRvbmVcIjtcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlJlbW92ZSBOb2RlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHZvbHVtZSBjb250cm9sXG5cbiAgICBjb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdm9sdW1lU2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgdm9sdW1lU2xpZGVyLm1pbiA9IDAuMDtcbiAgICB2b2x1bWVTbGlkZXIubWF4ID0gMS4wO1xuICAgIHZvbHVtZVNsaWRlci5zdGVwID0gMC4wMTtcbiAgICB2b2x1bWVTbGlkZXIudmFsdWUgPSAwLjU7IC8vIDEuMFxuICAgIHZvbHVtZVNsaWRlci5jbGFzc05hbWUgPSBcInZvbHVtZVwiO1xuICAgIGRlYnVnZ2VyO1xuXG4gICAgdm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMuYWRqdXN0R2FpbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gcGl0Y2hCYXIgb3IgdG9uZSBhZGp1c3RtZW50IHJhbmdlLXNsaWRlclxuICAgIGNvbnN0IHBpdGNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBpdGNoQmFyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcGl0Y2hCYXIubWluID0gMjA7XG4gICAgcGl0Y2hCYXIubWF4ID0gMzAwMDtcbiAgICBwaXRjaEJhci52YWx1ZSA9IDQ0MDtcbiAgICBwaXRjaEJhci5jbGFzc05hbWUgPSBcInBpdGNoLWJhclwiO1xuXG4gICAgcGl0Y2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5kZXR1bmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRvbmVMaS5hcHBlbmQocGxheUJ1dHRvbik7XG4gICAgdG9uZUxpLmFwcGVuZCh2b2x1bWVTbGlkZXIpO1xuICAgIHRvbmVMaS5hcHBlbmQocGl0Y2hCYXIpO1xuICAgIHJldHVybiB0b25lTGk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9uZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=