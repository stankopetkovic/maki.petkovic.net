(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <title>Makijev YouTube</title>\n</head>\n<body>\n<nav class=\"navbar navbar-dark bg-dark justify-content-between\">\n  <a class=\"navbar-brand\" [routerLink]=\"'/'\">\n    <img [src]=\"env.avatar\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Makijev YouTube\n  </a>\n  <a class=\"btn btn-outline-success\" *ngIf=\"!isRootRouteActive()\" [routerLink]=\"'/'\" type=\"button\">Nazad</a>\n</nav>\n<router-outlet></router-outlet>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/video-group/video-group.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/video-group/video-group.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <img [src]=\"videoGroup.thumbnail\"\n         style=\"width:100%;\"\n         class=\"d-inline-block align-top\" alt=\"\">\n    <h5 class=\"card-title\">{{videoGroup.name}}</h5>\n    <p class=\"card-text\">{{videoGroup.description}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/youtube-video-groups.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/youtube-video-groups.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding: 0\">\n  <div class=\"jumbotron jumbotron-fluid\"\n       style=\"background: url('assets/img/pozadina.jpg') no-repeat; background-size: 100%;\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Marko Videos</h1>\n      <p class=\"lead\">Adaptacija YouTube-a </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-4\" *ngFor=\"let videoGroup of videoGroups\">\n      <a [routerLink]=\"['/', videoGroup.id]\">\n        <app-video-group [videoGroup]=\"videoGroup\"></app-video-group>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-play/youtube-video-play.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-play/youtube-video-play.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"video-container\" [innerHTML]=\"videoElement\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"modal-header\">-->\n  <!--<h4 class=\"modal-title\">Prikazujem video: {{video.name}}</h4>-->\n  <!--<button type=\"button\" class=\"close\" aria-label=\"Close\"-->\n          <!--(click)=\"activeModal.dismiss('Cross click')\">-->\n    <!--<span aria-hidden=\"true\">&times;</span>-->\n  <!--</button>-->\n  <!--<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">-->\n    <!--Zatvori-->\n  <!--</button>-->\n<!--</div>-->\n<!--<div class=\"modal-body\" [innerHTML]=\"videoPlayer\"></div>-->\n<!--<div class=\"modal-footer\">-->\n  <!--<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">-->\n    <!--Zatvori-->\n  <!--</button>-->\n<!--</div>-->\n\n<a href=\"#myModal\" role=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\">Launch modal</a>\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-full\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body p-4\" id=\"result\">\n        <p>The grid inside the modal is responsive too..</p>\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            Content\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/video.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/video.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <a [routerLink]=\"['/play', video.url]\">\n      <img [src]=\"videoImage\" [alt]=\"video.name\"/>\n  </a>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{video.name}}</h5>\n    <p class=\"card-text\">{{video.description}}</p>\n    <p class=\"card-text\">{{video.date}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/youtube-videos.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/youtube-videos.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding: 0\">\n  <div class=\"jumbotron jumbotron-fluid\" *ngIf=\"selectedVideoGroup\"\n       style=\"background: url('assets/img/pozadina.jpg') no-repeat; background-size: 100%;\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{selectedVideoGroup.name}}</h1>\n      <p class=\"lead\">{{selectedVideoGroup.description}}</p>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"selectedVideoGroup\">\n      <div class=\"col-sm-12 col-md-4\" *ngFor=\"let video of filterVideos(selectedVideoGroup.videos)\">\n        <app-video [video]=\"video\"></app-video>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _youtube_videos_youtube_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-videos/youtube-videos.component */ "./src/app/youtube-videos/youtube-videos.component.ts");
/* harmony import */ var _youtube_video_groups_youtube_video_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-video-groups/youtube-video-groups.component */ "./src/app/youtube-video-groups/youtube-video-groups.component.ts");
/* harmony import */ var _youtube_video_play_youtube_video_play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube-video-play/youtube-video-play.component */ "./src/app/youtube-video-play/youtube-video-play.component.ts");






const routes = [
    { path: '', component: _youtube_video_groups_youtube_video_groups_component__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideoGroupsComponent"] },
    { path: 'play/:videoId', component: _youtube_video_play_youtube_video_play_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeVideoPlayComponent"] },
    { path: ':id', component: _youtube_videos_youtube_videos_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeVideosComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'maki-youtube';
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
    }
    isRootRouteActive() {
        console.log(this.env);
        return this.router.url === '/';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _youtube_videos_youtube_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube-videos/youtube-videos.component */ "./src/app/youtube-videos/youtube-videos.component.ts");
/* harmony import */ var _youtube_videos_video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtube-videos/video/video.component */ "./src/app/youtube-videos/video/video.component.ts");
/* harmony import */ var _youtube_video_groups_youtube_video_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youtube-video-groups/youtube-video-groups.component */ "./src/app/youtube-video-groups/youtube-video-groups.component.ts");
/* harmony import */ var _youtube_video_groups_video_group_video_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./youtube-video-groups/video-group/video-group.component */ "./src/app/youtube-video-groups/video-group/video-group.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _youtube_videos_video_full_screen_modal_full_screen_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./youtube-videos/video/full-screen-modal/full-screen-modal.component */ "./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.ts");
/* harmony import */ var _youtube_video_play_youtube_video_play_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./youtube-video-play/youtube-video-play.component */ "./src/app/youtube-video-play/youtube-video-play.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _youtube_videos_youtube_videos_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeVideosComponent"],
            _youtube_videos_video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"],
            _youtube_video_groups_youtube_video_groups_component__WEBPACK_IMPORTED_MODULE_8__["YoutubeVideoGroupsComponent"],
            _youtube_video_groups_video_group_video_group_component__WEBPACK_IMPORTED_MODULE_9__["VideoGroupComponent"],
            _youtube_videos_video_full_screen_modal_full_screen_modal_component__WEBPACK_IMPORTED_MODULE_12__["FullScreenModalComponent"],
            _youtube_video_play_youtube_video_play_component__WEBPACK_IMPORTED_MODULE_13__["YoutubeVideoPlayComponent"]
        ],
        entryComponents: [
            _youtube_videos_video_full_screen_modal_full_screen_modal_component__WEBPACK_IMPORTED_MODULE_12__["FullScreenModalComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_11__["EmbedVideo"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/youtube-video-groups/video-group/video-group.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/youtube-video-groups/video-group/video-group.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW8tZ3JvdXBzL3ZpZGVvLWdyb3VwL3ZpZGVvLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/youtube-video-groups/video-group/video-group.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/youtube-video-groups/video-group/video-group.component.ts ***!
  \***************************************************************************/
/*! exports provided: VideoGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGroupComponent", function() { return VideoGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoGroupComponent = class VideoGroupComponent {
    constructor() {
        this.videoGroup = null;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VideoGroupComponent.prototype, "videoGroup", void 0);
VideoGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/video-group/video-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-group.component.scss */ "./src/app/youtube-video-groups/video-group/video-group.component.scss")).default]
    })
], VideoGroupComponent);



/***/ }),

/***/ "./src/app/youtube-video-groups/youtube-video-groups.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/youtube-video-groups/youtube-video-groups.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW8tZ3JvdXBzL3lvdXR1YmUtdmlkZW8tZ3JvdXBzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/youtube-video-groups/youtube-video-groups.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/youtube-video-groups/youtube-video-groups.component.ts ***!
  \************************************************************************/
/*! exports provided: YoutubeVideoGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoGroupsComponent", function() { return YoutubeVideoGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtube_videos_get_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtube-videos/get-videos.service */ "./src/app/youtube-videos/get-videos.service.ts");



let YoutubeVideoGroupsComponent = class YoutubeVideoGroupsComponent {
    constructor(getVideosService) {
        this.getVideosService = getVideosService;
        this.videoGroups = [];
    }
    ngOnInit() {
        this.getVideosService.getVideoGroups().subscribe((response) => {
            console.log(response);
            this.videoGroups = response;
        }, (error) => {
            console.log(error);
        });
    }
};
YoutubeVideoGroupsComponent.ctorParameters = () => [
    { type: _youtube_videos_get_videos_service__WEBPACK_IMPORTED_MODULE_2__["GetVideosService"] }
];
YoutubeVideoGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-youtube-video-groups',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./youtube-video-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-groups/youtube-video-groups.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./youtube-video-groups.component.scss */ "./src/app/youtube-video-groups/youtube-video-groups.component.scss")).default]
    })
], YoutubeVideoGroupsComponent);



/***/ }),

/***/ "./src/app/youtube-video-play/youtube-video-play.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/youtube-video-play/youtube-video-play.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#video-container {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YW5rby9Eb2N1bWVudHMvbWFraS15b3V0dWJlL3NyYy9hcHAveW91dHViZS12aWRlby1wbGF5L3lvdXR1YmUtdmlkZW8tcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS12aWRlby1wbGF5L3lvdXR1YmUtdmlkZW8tcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW8tcGxheS95b3V0dWJlLXZpZGVvLXBsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuIiwiI3ZpZGVvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/youtube-video-play/youtube-video-play.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/youtube-video-play/youtube-video-play.component.ts ***!
  \********************************************************************/
/*! exports provided: YoutubeVideoPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoPlayComponent", function() { return YoutubeVideoPlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let YoutubeVideoPlayComponent = class YoutubeVideoPlayComponent {
    constructor(route, sanitizer, embedVideoService) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.embedVideoService = embedVideoService;
        this.videoId = '';
        this.videoElement = null;
    }
    ngOnInit() {
        this.videoId = this.route.snapshot.paramMap.get('videoId');
        this.videoElement = this.sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
            this.videoId +
            '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        // this.videoElement = this.embedVideoService.embed_youtube(
        //   this.videoId,
        //   {
        //     query: {
        //       portrait: 0,
        //       color: '333',
        //       autoplay: 0,
        //       iv_load_policy: 3,
        //       rel: 0,
        //       enablejsapi: 1,
        //       controls: 1,
        //       playsinline: 1,
        //       autohide: 1,
        //       showinfo: 1,
        //       fs: 1,
        //       loop: 0,
        //       modestbranding: 1,
        //       origin: 'https://maki.petkovic.net;',
        //     },
        //     attr: {
        //       id: this.videoId.toLowerCase().replace(/\s/g, '_'),
        //       width: '100%',
        //       height: '100%',
        //       class: 'card-img-top',
        //       allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        //     }
        //   }
        // );
    }
};
YoutubeVideoPlayComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__["EmbedVideoService"] }
];
YoutubeVideoPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-youtube-video-play',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./youtube-video-play.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-video-play/youtube-video-play.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./youtube-video-play.component.scss */ "./src/app/youtube-video-play/youtube-video-play.component.scss")).default]
    })
], YoutubeVideoPlayComponent);



/***/ }),

/***/ "./src/app/youtube-videos/get-videos.service.ts":
/*!******************************************************!*\
  !*** ./src/app/youtube-videos/get-videos.service.ts ***!
  \******************************************************/
/*! exports provided: GetVideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVideosService", function() { return GetVideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let GetVideosService = class GetVideosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.videoGroups = [];
    }
    getVideoGroups() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].videoGroupsUrl);
    }
};
GetVideosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetVideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetVideosService);



/***/ }),

/***/ "./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-full {\n  min-width: 100%;\n  margin: 0;\n}\n\n.modal-full .modal-content {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YW5rby9Eb2N1bWVudHMvbWFraS15b3V0dWJlL3NyYy9hcHAveW91dHViZS12aWRlb3MvdmlkZW8vZnVsbC1zY3JlZW4tbW9kYWwvZnVsbC1zY3JlZW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3lvdXR1YmUtdmlkZW9zL3ZpZGVvL2Z1bGwtc2NyZWVuLW1vZGFsL2Z1bGwtc2NyZWVuLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDakNGOztBRG9DQTtFQUNFLGlCQUFBO0FDakNGIiwiZmlsZSI6InNyYy9hcHAveW91dHViZS12aWRlb3MvdmlkZW8vZnVsbC1zY3JlZW4tbW9kYWwvZnVsbC1zY3JlZW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy5tb2RhbC1jb250ZW50IHtcbi8vICB3aWR0aDogMTAwJTtcbi8vICBoZWlnaHQ6IDUwMHB4O1xuLy8gIG1heC13aWR0aDogMTAwJTtcbi8vICBtYXgtaGVpZ2h0OiAxMDAlO1xuLy8gIGJvcmRlci1yYWRpdXM6IDA7XG4vL31cbi8vXG4vLy5tb2RhbC1oZWFkZXIgPiBidXR0b24sIC5tb2RhbC1mb290ZXIgPiBidXR0b24ge1xuLy8gIHdpZHRoOiAxMDAlO1xuLy8gIGJvcmRlcjogMDtcbi8vfVxuLy9cbi8vLm1vZGFsLWRpYWxvZyB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbi8vICBtYXJnaW46IDA7XG4vLyAgcGFkZGluZzogMDtcbi8vICB3aWR0aDogMTAwJTtcbi8vICBoZWlnaHQ6IDEwMCU7XG4vL31cbi8vXG4vLy5tb2RhbC1jb250ZW50IHtcbi8vICB3aWR0aDogMTAwdnc7XG4vLyAgaGVpZ2h0OiAxMDB2aDtcbi8vfVxuLy9cbi8vLm1vZGFsLXhsIHtcbi8vICB3aWR0aDogMTAwJTtcbi8vICBoZWlnaHQ6IDUwMHB4O1xuLy8gIG1heC13aWR0aDogMTAwJTtcbi8vICBtYXgtaGVpZ2h0OiAxMDAlO1xuLy8gIGJvcmRlci1yYWRpdXM6IDA7XG4vL31cblxuLm1vZGFsLWZ1bGwge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vZGFsLWZ1bGwgLm1vZGFsLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbiIsIi5tb2RhbC1mdWxsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1mdWxsIC5tb2RhbC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FullScreenModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenModalComponent", function() { return FullScreenModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__);




let FullScreenModalComponent = class FullScreenModalComponent {
    constructor(activeModal, embedVideoService) {
        this.activeModal = activeModal;
        this.embedVideoService = embedVideoService;
        this.videoPlayer = '';
    }
    ngOnInit() {
        this.videoPlayer = this.embedVideoService.embed_youtube(this.video.url, {
            query: {
                portrait: 0,
                color: '333',
                autoplay: 0,
                iv_load_policy: 3,
                rel: 0,
                enablejsapi: 1,
                controls: 1,
                playsinline: 1,
                autohide: 1,
                showinfo: 1,
                fs: 1,
                loop: 0,
                modestbranding: 1,
                origin: 'https://maki.petkovic.net;'
            },
            attr: {
                id: this.video.url.toLowerCase().replace(/\s/g, '_'),
                width: '100%',
                height: '100%',
                class: 'card-img-top',
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
        });
    }
};
FullScreenModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_3__["EmbedVideoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FullScreenModalComponent.prototype, "video", void 0);
FullScreenModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-screen-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-screen-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-screen-modal.component.scss */ "./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.scss")).default]
    })
], FullScreenModalComponent);



/***/ }),

/***/ "./src/app/youtube-videos/video/video.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/youtube-videos/video/video.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YW5rby9Eb2N1bWVudHMvbWFraS15b3V0dWJlL3NyYy9hcHAveW91dHViZS12aWRlb3MvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3lvdXR1YmUtdmlkZW9zL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAveW91dHViZS12aWRlb3MvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/youtube-videos/video/video.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/youtube-videos/video/video.component.ts ***!
  \*********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _full_screen_modal_full_screen_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-screen-modal/full-screen-modal.component */ "./src/app/youtube-videos/video/full-screen-modal/full-screen-modal.component.ts");




let VideoComponent = class VideoComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.videoImage = '';
    }
    ngOnInit() {
        this.videoImage = 'https://img.youtube.com/vi/'
            + (this.video.image ? this.video.image : this.video.url)
            + '/hqdefault.jpg';
    }
    maximizeVideo(video) {
        const modalRef = this.modalService.open(_full_screen_modal_full_screen_modal_component__WEBPACK_IMPORTED_MODULE_3__["FullScreenModalComponent"], {
            size: 'xl',
            centered: true,
            windowClass: 'maki-youtube-modal'
        });
        modalRef.componentInstance.video = video;
    }
};
VideoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VideoComponent.prototype, "video", void 0);
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/video/video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.component.scss */ "./src/app/youtube-videos/video/video.component.scss")).default]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/youtube-videos/youtube-videos.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/youtube-videos/youtube-videos.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW9zL3lvdXR1YmUtdmlkZW9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/youtube-videos/youtube-videos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube-videos/youtube-videos.component.ts ***!
  \************************************************************/
/*! exports provided: YoutubeVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideosComponent", function() { return YoutubeVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-videos.service */ "./src/app/youtube-videos/get-videos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let YoutubeVideosComponent = class YoutubeVideosComponent {
    constructor(getVideosService, route, domSanitizer) {
        this.getVideosService = getVideosService;
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.videoGroups = [];
        this.selectedVideoGroup = null;
        this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.showAll = this.route.snapshot.queryParamMap.get('show-all') || null;
    }
    ngOnInit() {
        this.getVideosService.getVideoGroups().subscribe((response) => {
            this.videoGroups = response;
            const id = this.route.snapshot.paramMap.get('id');
            this.selectedVideoGroup = this.videoGroups.find((videoGroup) => videoGroup.id === id);
        }, (error) => {
            console.log(error);
        });
    }
    filterVideos(videos) {
        return videos.filter(video => this.showAll || !video.date || video.date === this.date);
    }
};
YoutubeVideosComponent.ctorParameters = () => [
    { type: _get_videos_service__WEBPACK_IMPORTED_MODULE_2__["GetVideosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
YoutubeVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-youtube',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./youtube-videos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube-videos/youtube-videos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./youtube-videos.component.scss */ "./src/app/youtube-videos/youtube-videos.component.scss")).default]
    })
], YoutubeVideosComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    avatar: 'https://yt3.ggpht.com/a-/AAuE7mA5yjlszB_i4jJCuyG1fuCYcODkvzvw87KB_REwlQ=s88-c-k-c0xffffffff-no-rj-mo',
    videoGroupsUrl: 'assets/video-groups.json',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stanko/Documents/maki-youtube/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map