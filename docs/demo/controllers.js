(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["8ece738517e5a821b92f06774e973762"] = factory();
	else
		root["8ece738517e5a821b92f06774e973762"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["outcome"] = outcome;/* harmony export */ exports["model"] = model;
/** 
 * For the documentation of pie controllers see
 * https://pielabs.github.io/pie-docs/developing/controller.html
 */

let createOutcome = (question, session) => {
  return {score:1};
}

function outcome(question, session, env) {
  const legacyOutcome = createOutcome(question, session)
  const raw = legacyOutcome.score;
  const min = 0;
  const max = 1;
  const scaled = (raw - min) / (max - min) + min;

  const id = question.id;
  const score = {
    scaled, raw, min, max
  };
  const completed = true;
  const duration = "PT1M"; //one minute, see https://en.wikipedia.org/wiki/ISO_8601#Durations
  const extensions = {}; //optional, see docs in the link above
  const outcome = {
    id, score, completed, duration, extensions
  };

  return Promise.resolve(outcome);
}

function model(question, session, env) {
  let result = {
    question, env
  };

  if (env.mode === 'evaluate') {
    result.response = createOutcome(question, session);
  }
  return Promise.resolve(result);
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

exports['corespring-calculator-ng15'] = __webpack_require__(0);
exports['corespring-calculator-ng15'].version =  '../node_modules/corespring-calculator-ng15/controller';

/***/ }
/******/ ])
});
;