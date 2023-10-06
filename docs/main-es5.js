function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _note_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./note/note.component */
    "./src/app/note/note.component.ts");

    var routes = [{
      path: ':id',
      component: _note_note_component__WEBPACK_IMPORTED_MODULE_2__["NoteComponent"]
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notes-list/notes-list.component */
    "./src/app/notes-list/notes-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      consts: [["id", "container"], [1, "sidebar"], [1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-notes-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_2__["NotesListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["#container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 200px 1fr; \r\n  grid-template-rows: 50px 1fr; \r\n  grid-template-areas:\r\n                \"header header\"\r\n                \"sidebar content\"; \r\n  height: 100vh; \r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  grid-area: header; \r\n  background-color: #333; \r\n  color: white;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  grid-area: sidebar; \r\n  background-color: #ddd; \r\n  overflow-y: auto; \r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  grid-area: content; \r\n  background-color: #f5f5f5; \r\n  overflow-y: auto; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDLEVBQUUsbUZBQW1GO0VBQ3JILDRCQUE0QixFQUFFLGlFQUFpRTtFQUMvRjs7aUNBRStCLEVBQUUsNERBQTREO0VBQzdGLGFBQWEsRUFBRSx1QkFBdUI7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxxQ0FBcUM7RUFDeEQsc0JBQXNCLEVBQUUsb0JBQW9CO0VBQzVDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLCtDQUErQztFQUNuRSxzQkFBc0IsRUFBRSw2QkFBNkI7RUFDckQsZ0JBQWdCLEVBQUUsb0VBQW9FO0FBQ3hGOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsd0NBQXdDO0VBQzVELHlCQUF5QixFQUFFLHVCQUF1QjtFQUNsRCxnQkFBZ0IsRUFBRSxvRUFBb0U7QUFDeEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7IC8qINCe0L/RgNC10LTQtdC70Y/QtdC8INC00LLQtSDQutC+0LvQvtC90LrQuDogMjAwcHgg0YjQuNGA0LjQvdGLINC00LvRjyDQsdC+0LrQvtCy0L7QuSDQv9Cw0L3QtdC70Lgg0Lgg0L7RgdGC0LDRgtC+0Log0LTQu9GPINC60L7QvdGC0LXQvdGC0LAgKi9cclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyOyAvKiDQntC/0YDQtdC00LXQu9GP0LXQvCDQtNCy0LUg0YHRgtGA0L7QutC4OiA1MHB4INC00LvRjyDRiNCw0L/QutC4INC4INC+0YHRgtCw0YLQvtC6INC00LvRjyDQutC+0L3RgtC10L3RgtCwICovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICBcInNpZGViYXIgY29udGVudFwiOyAvKiDQl9Cw0LTQsNC10Lwg0YDQsNC30LzQtdGJ0LXQvdC40LUg0LHQu9C+0LrQvtCyINGBINC/0L7QvNC+0YnRjNGOINC40LzQtdC90L7QstCw0L3QvdGL0YUg0L7QsdC70LDRgdGC0LXQuSAqL1xyXG4gIGhlaWdodDogMTAwdmg7IC8qINCS0YvRgdC+0YLQsCAxMDAlINGN0LrRgNCw0L3QsCAqL1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyOyAvKiDQoNCw0LfQvNC10YnQsNC10Lwg0YjQsNC/0LrRgyDQsiDQvtCx0LvQsNGB0YLRjCBoZWFkZXIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiDQptCy0LXRgiDRhNC+0L3QsCDRiNCw0L/QutC4ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyOyAvKiDQoNCw0LfQvNC10YnQsNC10Lwg0LHQvtC60L7QstGD0Y4g0L/QsNC90LXQu9GMINCyINC+0LHQu9Cw0YHRgtGMIHNpZGViYXIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiDQptCy0LXRgiDRhNC+0L3QsCDQsdC+0LrQvtCy0L7QuSDQv9Cw0L3QtdC70LggKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiDQlNC+0LHQsNCy0LvRj9C10Lwg0LLQtdGA0YLQuNC60LDQu9GM0L3Rg9GOINC/0YDQvtC60YDRg9GC0LrRgywg0LXRgdC70Lgg0YHQvtC00LXRgNC20LjQvNC+0LUg0L3QtSDQv9C+0LzQtdGJ0LDQtdGC0YHRjyAqL1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZ3JpZC1hcmVhOiBjb250ZW50OyAvKiDQoNCw0LfQvNC10YnQsNC10Lwg0LrQvtC90YLQtdC90YIg0LIg0L7QsdC70LDRgdGC0YwgY29udGVudCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qINCm0LLQtdGCINGE0L7QvdCwINC60L7QvdGC0LXQvdGC0LAgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiDQlNC+0LHQsNCy0LvRj9C10Lwg0LLQtdGA0YLQuNC60LDQu9GM0L3Rg9GOINC/0YDQvtC60YDRg9GC0LrRgywg0LXRgdC70Lgg0YHQvtC00LXRgNC20LjQvNC+0LUg0L3QtSDQv9C+0LzQtdGJ0LDQtdGC0YHRjyAqL1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notes-list/notes-list.component */
    "./src/app/notes-list/notes-list.component.ts");
    /* harmony import */


    var _note_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./note/note.component */
    "./src/app/note/note.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"], _note_note_component__WEBPACK_IMPORTED_MODULE_5__["NoteComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"], _note_note_component__WEBPACK_IMPORTED_MODULE_5__["NoteComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[2, "height", "100%", "display", "flex", "justify-content", "center", "align-items", "center"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/note/note.component.ts":
  /*!****************************************!*\
    !*** ./src/app/note/note.component.ts ***!
    \****************************************/

  /*! exports provided: NoteComponent */

  /***/
  function srcAppNoteNoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteComponent", function () {
      return NoteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/note.service */
    "./src/app/services/note.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NoteComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0435\u043A\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteComponent_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.saveNote();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
      }
    }

    function NoteComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.note.text);
      }
    }

    var NoteComponent = /*#__PURE__*/function () {
      function NoteComponent(noteService, route, router) {
        _classCallCheck(this, NoteComponent);

        this.noteService = noteService;
        this.route = route;
        this.router = router;
        this.subscriptions = [];
      }

      _createClass(NoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscriptions.push(this.route.params.subscribe(function (params) {
            var id = parseInt(params['id'], 10);
            _this.note = _this.noteService.getNote(id);

            if (!_this.note) {
              _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sb) {
            return sb.unsubscribe();
          });
        }
      }, {
        key: "saveNote",
        value: function saveNote() {
          var newId = Date.now();
          this.noteService.addNote(Object.assign(Object.assign({}, this.formGroup.value), {
            id: newId
          }));
          this.router.navigate([newId]);
        }
      }]);

      return NoteComponent;
    }();

    NoteComponent.ɵfac = function NoteComponent_Factory(t) {
      return new (t || NoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoteComponent,
      selectors: [["app-note"]],
      decls: 4,
      vars: 2,
      consts: [["class", "new-note", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["noteInfo", ""], [1, "new-note", 3, "formGroup"], ["for", "note-title"], ["type", "text", "id", "note-title", "formControlName", "title"], ["for", "note-text"], ["id", "note-text", "formControlName", "text"], ["type", "button", 3, "disabled", "click"], [1, "note-info"]],
      template: function NoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoteComponent_div_1_Template, 9, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoteComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.note)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".new-note[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\n.new-note[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    margin: 1%;\r\n}\r\n.new-note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    min-height: 150px;\r\n    resize: vertical;\r\n}\r\n.note-info[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW5vdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxufVxyXG4ubmV3LW5vdGUgKiB7XHJcbiAgICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4ubmV3LW5vdGUgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4ubm90ZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-note',
          templateUrl: './note.component.html',
          styleUrls: ['./note.component.css']
        }]
      }], function () {
        return [{
          type: _services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notes-list/notes-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/notes-list/notes-list.component.ts ***!
    \****************************************************/

  /*! exports provided: NotesListComponent */

  /***/
  function srcAppNotesListNotesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesListComponent", function () {
      return NotesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/note.service */
    "./src/app/services/note.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function NotesListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, note_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.title);
      }
    }

    var NotesListComponent = /*#__PURE__*/function () {
      function NotesListComponent(noteService, router) {
        _classCallCheck(this, NotesListComponent);

        this.noteService = noteService;
        this.router = router;
      }

      _createClass(NotesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.noteList = this.noteService.getNotes();
        }
      }]);

      return NotesListComponent;
    }();

    NotesListComponent.ɵfac = function NotesListComponent_Factory(t) {
      return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesListComponent,
      selectors: [["app-notes-list"]],
      decls: 4,
      vars: 1,
      consts: [[1, "notes-list"], [3, "click"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active-list-element", 3, "routerLink"]],
      template: function NotesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesListComponent_Template_button_click_1_listener() {
            return ctx.router.navigate(["new"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotesListComponent_div_3_Template, 3, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noteList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".notes-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;;\r\n    justify-content: center;\r\n}\r\n\r\n.notes-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    margin: 1%;\r\n}\r\n\r\n.notes-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.active-list-element[_ngcontent-%COMP%] {\r\n    border-bottom: 1px dashed black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMtbGlzdC9ub3Rlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy1saXN0L25vdGVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rlcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm90ZXMtbGlzdCAqIHtcclxuICAgIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0IHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aXZlLWxpc3QtZWxlbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes-list',
          templateUrl: './notes-list.component.html',
          styleUrls: ['./notes-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/note.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/note.service.ts ***!
    \******************************************/

  /*! exports provided: NoteService */

  /***/
  function srcAppServicesNoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteService", function () {
      return NoteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NoteService = /*#__PURE__*/function () {
      function NoteService() {
        _classCallCheck(this, NoteService);

        this.notes = [{
          id: 1,
          title: '1. Lorem ipsum dolor sit amet',
          text: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 2,
          title: '2. Lorem ipsum dolor sit amet',
          text: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 3,
          title: '3. Lorem ipsum dolor sit amet',
          text: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 4,
          title: '4. Lorem ipsum dolor sit amet',
          text: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 5,
          title: '5. Lorem ipsum dolor sit amet',
          text: '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 6,
          title: '6. Lorem ipsum dolor sit amet',
          text: '6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 7,
          title: '7. Lorem ipsum dolor sit amet',
          text: '7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 8,
          title: '8. Lorem ipsum dolor sit amet',
          text: '8. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }];
      }

      _createClass(NoteService, [{
        key: "getNotes",
        value: function getNotes() {
          return this.notes;
        }
      }, {
        key: "getNote",
        value: function getNote(id) {
          return this.notes.find(function (note) {
            return note.id === id;
          });
        }
      }, {
        key: "addNote",
        value: function addNote(note) {
          this.notes.push(note);
        }
      }]);

      return NoteService;
    }();

    NoteService.ɵfac = function NoteService_Factory(t) {
      return new (t || NoteService)();
    };

    NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NoteService,
      factory: NoteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\io\Documents\WebProjects\notes-angular-test-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map