function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/forgot-password/forgot-password.component */
    "./src/app/authentication/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _authentication_reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication/reset-password/reset-password/reset-password.component */
    "./src/app/authentication/reset-password/reset-password/reset-password.component.ts");
    /* harmony import */


    var _modules_groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/groups/groups/groups.component */
    "./src/app/modules/groups/groups/groups.component.ts");
    /* harmony import */


    var _modules_my_profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/my profile/my-profile/my-profile.component */
    "./src/app/modules/my profile/my-profile/my-profile.component.ts");
    /* harmony import */


    var _modules_notifications_notifications_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/notifications/notifications/notifications/notifications.component */
    "./src/app/modules/notifications/notifications/notifications/notifications.component.ts");
    /* harmony import */


    var _helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./helpers/guards/auth.guard */
    "./src/app/helpers/guards/auth.guard.ts");
    /* harmony import */


    var _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-not-found/page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _modules_groups_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/groups/create-group/create-group.component */
    "./src/app/modules/groups/create-group/create-group.component.ts");
    /* harmony import */


    var _modules_groups_update_group_update_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modules/groups/update-group/update-group.component */
    "./src/app/modules/groups/update-group/update-group.component.ts");
    /* harmony import */


    var _modules_groups_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modules/groups/group-details/group-details.component */
    "./src/app/modules/groups/group-details/group-details.component.ts");
    /* harmony import */


    var _modules_expenses_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/expenses/add-expense/add-expense.component */
    "./src/app/modules/expenses/add-expense/add-expense.component.ts");
    /* harmony import */


    var _modules_expenses_update_expense_update_expense_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/expenses/update-expense/update-expense.component */
    "./src/app/modules/expenses/update-expense/update-expense.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'authenticate',
      pathMatch: 'full'
    }, {
      path: 'authenticate',
      component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'forgot-password',
      component: _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
    }, {
      path: 'resetpassword/:validationToken',
      component: _authentication_reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
    }, {
      path: 'groups',
      component: _modules_groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'groups/create-group',
      component: _modules_groups_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_10__["CreateGroupComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'groups/:id',
      component: _modules_groups_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_12__["GroupDetailsComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'groups/updateGroup',
      component: _modules_groups_update_group_update_group_component__WEBPACK_IMPORTED_MODULE_11__["UpdateGroupComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'groups/expense/create-expense/:groupId',
      component: _modules_expenses_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_13__["AddExpenseComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'groups/expense/update-expense/:expenseId',
      component: _modules_expenses_update_expense_update_expense_component__WEBPACK_IMPORTED_MODULE_14__["UpdateExpenseComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'my-profile',
      component: _modules_my_profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'notifications',
      component: _modules_notifications_notifications_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"],
      canActivate: [_helpers_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: '*',
      component: _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'split-expenses-client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication/authentication.module */
    "./src/app/authentication/authentication.module.ts");
    /* harmony import */


    var _helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/services/core/communication.service */
    "./src/app/helpers/services/core/communication.service.ts");
    /* harmony import */


    var _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./page-not-found/page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _modules_groups_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/groups.module */
    "./src/app/modules/groups.module.ts");
    /* harmony import */


    var _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./helpers/services/socket/socket.service */
    "./src/app/helpers/services/socket/socket.service.ts");
    /* harmony import */


    var _helpers_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./helpers/services/notifications/notifications.service */
    "./src/app/helpers/services/notifications/notifications.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticateService"], _helpers_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__["NotificationsService"], src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_9__["CommunicationService"], _helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_11__["GroupsService"], _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_14__["SocketService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(), _modules_groups_module__WEBPACK_IMPORTED_MODULE_13__["GroupsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"], _modules_groups_module__WEBPACK_IMPORTED_MODULE_13__["GroupsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(), _modules_groups_module__WEBPACK_IMPORTED_MODULE_13__["GroupsModule"]],
          providers: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticateService"], _helpers_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__["NotificationsService"], src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_9__["CommunicationService"], _helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_11__["GroupsService"], _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_14__["SocketService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modules/shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../helpers/services/utils/utils.service */
    "./src/app/helpers/services/utils/utils.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/authentication/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reset-password/reset-password/reset-password.component */
    "./src/app/authentication/reset-password/reset-password/reset-password.component.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/forgot-password/forgot-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppAuthenticationForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
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


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ForgotPasswordComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(fb, _auth, router, toastr) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.fb = fb;
        this._auth = _auth;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this = this;

          this._auth.forgotPassword(this.forgotForm.value).subscribe(function (response) {
            console.log(response);

            if (response.status == 200) {
              _this.forgotForm.reset();

              _this.router.navigateByUrl('/authenticate');
            } else {
              alert("Error in the file ");

              _this.forgotForm.reset();
            }
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 17,
      vars: 4,
      consts: [[1, "container-fluid"], [1, "row", "M0"], [1, "col-12"], [1, "signup1"], [1, "signin", 3, "formGroup", "ngSubmit"], [1, "full-width-field"], ["matSuffix", "", 1, "material-icons"], ["matInput", "", "formControlName", "email", "placeholder", "Ex. pat@example.com", "autocomplete", "off"], [4, "ngIf"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "MR15", 3, "disabled"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener() {
            return ctx.forgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " person_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_mat_error_12_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_mat_error_13_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotForm.controls.email.hasError("email") && !ctx.forgotForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.forgotForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".content[_ngcontent-%COMP%] {\n  background: #FAF3EC;\n  width: 100%;\n  height: 100%;\n  display: block;\n  font-family: \"Roboto\";\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #748194;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 650px;\n  animation: fadein 1s;\n  -moz-animation: fadein 1s;\n  \n  -webkit-animation: fadein 1s;\n  \n  -o-animation: fadein 1s;\n}\n\n.c1[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px grey;\n  background-color: white;\n  width: 300px;\n  height: 500px;\n  display: inline-block;\n  border-radius: 15px 15px 15px 15px;\n}\n\n.c11[_ngcontent-%COMP%] {\n  background-image: url(\"https://image.shutterstock.com/image-vector/hand-using-calculator-260nw-600855293.jpg\");\n  background-size: 232px 280px;\n  background-repeat: no-repeat;\n  background-color: #5ea4a3;\n  width: 300px;\n  height: 400px;\n  display: inline-block;\n  position: absolute;\n  z-index: 4;\n  border-radius: 15px 15px 200px 200px;\n  border-color: transparent;\n  background-position: 69px 142px;\n}\n\n#left[_ngcontent-%COMP%], #right[_ngcontent-%COMP%] {\n  color: white;\n  display: inline-block;\n  width: 146px;\n  height: 500px;\n  background-color: white;\n  cursor: pointer;\n  position: relative;\n}\n\n#left[_ngcontent-%COMP%] {\n  border-radius: 15px 0px 0px 15px;\n}\n\n#right[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px 0px;\n}\n\n.left_hover[_ngcontent-%COMP%] {\n  color: #EE9BA3;\n  box-shadow: 5px 0 18px -10px #333;\n  z-index: 1;\n  position: absolute;\n}\n\n.right_hover[_ngcontent-%COMP%] {\n  box-shadow: -5px 0 15px -10px #333;\n  z-index: 1;\n  position: absolute;\n}\n\n.s1class[_ngcontent-%COMP%] {\n  color: #748194;\n  position: absolute;\n  bottom: 0;\n  left: 63%;\n  margin-left: -50%;\n}\n\n.s1class[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .s2class[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.su[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.s2class[_ngcontent-%COMP%] {\n  color: #748194;\n  position: absolute;\n  bottom: 0;\n  right: 63%;\n  margin-right: -50%;\n}\n\n.mainhead[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.mainp[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 13px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.c2[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 300px;\n  height: 500px;\n  border-radius: 15px;\n  position: relative;\n  \n  display: inline-block;\n}\n\n.email[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  margin: 0 35px 20px;\n  height: 35px;\n  padding: 6px 15px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background: #F6F7F9;\n  color: #748194;\n  font-size: 14px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 230px;\n  margin: 0 35px 20px;\n  height: 45px;\n  padding: 6px 15px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background: #EE9BA3;\n  color: white;\n  font-size: 14px;\n}\n\n.signup1[_ngcontent-%COMP%], .signup2[_ngcontent-%COMP%] {\n  color: #748194;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 50px;\n  font-weight: 400;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.signup[_ngcontent-%COMP%], .signin[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 50px;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n  font-size: 12px;\n  font-weight: 500;\n  font-style: italic;\n  color: #314658;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  \n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NyaWhhcmkvRG9jdW1lbnRzL2V4cGVuc2Utc3BsaXQvc3BsaXQtY2xpZW50L3NyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUE4Qix3QkFBQTtFQUM1QixjQUFBO0FDR0Y7O0FEREE7RUFBcUIsZ0JBQUE7RUFDbkIsY0FBQTtBQ0tGOztBREhBO0VBQXlCLFdBQUE7RUFDdkIsY0FBQTtBQ09GOztBRExBO0VBQW9CLGdCQUFBO0VBQ2xCLGNBQUE7QUNTRjs7QURQQTtFQVFBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFBMkIsWUFBQTtFQUMzQiw0QkFBQTtFQUE4QixzQkFBQTtFQUM5Qix1QkFBQTtBQ0tBOztBREhBO0VBUUEseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQ0RBOztBRElBO0VBQ0csOEdBQUE7RUFDQyw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDREo7O0FER0E7RUFDRyxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUg7O0FERUE7RUFDRyxnQ0FBQTtBQ0NIOztBRENBO0VBQ0csaUNBQUE7QUNFSDs7QURBQTtFQUNHLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0dIOztBRERBO0VBQ0csa0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNJSDs7QURGQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNLSDs7QURIQTtFQUNHLGNBQUE7QUNNSDs7QURKQTtFQUNHLGVBQUE7QUNPSDs7QURMQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNRSDs7QUROQTtFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1NIOztBRFBBO0VBQ0csWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVUg7O0FEUkE7RUFRQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNJQTs7QURGQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSDs7QURIQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNNSDs7QURKQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDT0g7O0FETEE7RUFDRyxxQkFBQTtBQ1FIOztBRExBO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FDUUg7O0FETEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNRSjs7QURMQTtFQUNJO0lBQ0ksVUFBQTtFQ1FOO0VETkU7SUFDSSxVQUFBO0VDUU47QUFDRjs7QURFQTtFQUE0QixzQkFBQTtFQUN4QjtJQUNJLFVBQUE7RUNVTjtFRFJFO0lBQ0ksVUFBQTtFQ1VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6I0ZBRjNFQztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogIzc0ODE5NDtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjogIzc0ODE5NDtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICM3NDgxOTQ7XG59XG4uY29udGFpbmVye1xuICAgLy9kaXNwbGF5Om5vbmU7XG4vLyAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbi8vIFx0d2lkdGg6IGF1dG87XG4vLyBcdGhlaWdodDphdXRvO1xuLy8gXHR0b3A6IGNhbGMoNTAlIC0gMjQwcHgpO1xuLy8gXHRsZWZ0OiBjYWxjKDQwJSAtIDE2MHB4KTtcbi8vICAgIGJvcmRlci1yYWRpdXM6MTVweCAxNXB4IDE1cHggMTVweDtcbm1heC13aWR0aDogNzAwcHg7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1pbi1oZWlnaHQ6IDY1MHB4O1xuYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4tbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94ICovXG4td2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxufVxuLmMxe1xuLy8gICAgYm94LXNoYWRvdzowIDAgMTBweCBncmV5O1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbi8vICAgIHdpZHRoOjMwMHB4O1xuLy8gICAgaGVpZ2h0OjUwMHB4O1xuLy8gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4vLyAgICBib3JkZXItcmFkaXVzOjE1cHggMTVweCAxNXB4IDE1cHg7XG5cbmJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbndpZHRoOiAzMDBweDtcbmhlaWdodDogNTAwcHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5ib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uYzExe1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLnNodXR0ZXJzdG9jay5jb20vaW1hZ2UtdmVjdG9yL2hhbmQtdXNpbmctY2FsY3VsYXRvci0yNjBudy02MDA4NTUyOTMuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMzJweCAyODBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWE0YTM7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAyMDBweCAyMDBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDY5cHggMTQycHg7XG59XG4jbGVmdCwgI3JpZ2h0IHtcbiAgIGNvbG9yOndoaXRlO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6MTQ2cHg7XG4gICBoZWlnaHQ6IDUwMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgIGN1cnNvcjpwb2ludGVyO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2xlZnR7XG4gICBib3JkZXItcmFkaXVzOjE1cHggMHB4IDBweCAxNXB4O1xufVxuI3JpZ2h0e1xuICAgYm9yZGVyLXJhZGl1czoxNXB4IDE1cHggMTVweCAwcHg7XG59XG4ubGVmdF9ob3ZlcntcbiAgIGNvbG9yOiNFRTlCQTM7XG4gICBib3gtc2hhZG93OiA1cHggMCAxOHB4IC0xMHB4ICMzMzM7XG4gICB6LWluZGV4OjE7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cbi5yaWdodF9ob3ZlcntcbiAgIGJveC1zaGFkb3c6IC01cHggMCAxNXB4IC0xMHB4ICMzMzM7XG4gICB6LWluZGV4OjE7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cbi5zMWNsYXNze1xuICAgY29sb3I6Izc0ODE5NDtcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgYm90dG9tOjA7XG4gICBsZWZ0OjYzJTtcbiAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xufVxuLnMxY2xhc3Mgc3BhbiwgIC5zMmNsYXNzIHNwYW57XG4gICBkaXNwbGF5OmJsb2NrO1xufVxuLnN1e1xuICAgZm9udC1zaXplOjIwcHg7XG59XG4uczJjbGFzc3tcbiAgIGNvbG9yOiM3NDgxOTQ7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgIGJvdHRvbTowO1xuICAgcmlnaHQ6NjMlO1xuICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xufVxuLm1haW5oZWFke1xuICAgY29sb3I6d2hpdGU7XG4gICBmb250LXNpemU6MjRweDtcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuLm1haW5we1xuICAgY29sb3I6d2hpdGU7XG4gICBmb250LXNpemU6MTNweDtcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuLmMye1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbi8vICAgIHdpZHRoOjMwMHB4O1xuLy8gICAgaGVpZ2h0OjUwMHB4O1xuLy8gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuLy8gICAgcG9zaXRpb246YWJzb2x1dGU7XG4vLyAgICBsZWZ0OjM3MHB4O1xuLy8gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbndpZHRoOiAzMDBweDtcbmhlaWdodDogNTAwcHg7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xuLyogbGVmdDogMzcwcHg7ICovXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZW1haWx7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIHdpZHRoOiAyMDBweDtcbiAgIG1hcmdpbjogMCAzNXB4IDIwcHggO1xuICAgaGVpZ2h0OiAzNXB4O1xuICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBvdXRsaW5lOiBub25lO1xuICAgYm9yZGVyOiBub25lO1xuICAgYmFja2dyb3VuZDogI0Y2RjdGOTtcbiAgIGNvbG9yOiAjNzQ4MTk0O1xuICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJ0bntcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgd2lkdGg6IDIzMHB4O1xuICAgbWFyZ2luOiAwIDM1cHggMjBweCA7XG4gICBoZWlnaHQ6IDQ1cHg7XG4gICBwYWRkaW5nOiA2cHggMTVweDtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIG91dGxpbmU6IG5vbmU7XG4gICBib3JkZXI6IG5vbmU7XG4gICBiYWNrZ3JvdW5kOiAjRUU5QkEzO1xuICAgY29sb3I6IHdoaXRlO1xuICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ251cDEsLnNpZ251cDJ7XG4gICBjb2xvcjojNzQ4MTk0O1xuICAgZm9udC1zaXplOjMwcHg7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICBmb250LXdlaWdodDogNDAwO1xufVxuYXtcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cCwgLnNpZ25pbntcbiAgIGRpc3BsYXk6YmxvY2s7XG4gICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3Jke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzMxNDY1ODtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4geyAvKiBGaXJlZm94ICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4geyAvKiBPcGVyYSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IiwiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkFGM0VDO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6ICM3NDgxOTQ7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSUUgMTArICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxcztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG59XG5cbi5jMSB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcbn1cblxuLmMxMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS12ZWN0b3IvaGFuZC11c2luZy1jYWxjdWxhdG9yLTI2MG53LTYwMDg1NTI5My5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjMycHggMjgwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZWE0YTM7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAyMDBweCAyMDBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjlweCAxNDJweDtcbn1cblxuI2xlZnQsICNyaWdodCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTQ2cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xlZnQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcbn1cblxuI3JpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xufVxuXG4ubGVmdF9ob3ZlciB7XG4gIGNvbG9yOiAjRUU5QkEzO1xuICBib3gtc2hhZG93OiA1cHggMCAxOHB4IC0xMHB4ICMzMzM7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpZ2h0X2hvdmVyIHtcbiAgYm94LXNoYWRvdzogLTVweCAwIDE1cHggLTEwcHggIzMzMztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uczFjbGFzcyB7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNjMlO1xuICBtYXJnaW4tbGVmdDogLTUwJTtcbn1cblxuLnMxY2xhc3Mgc3BhbiwgLnMyY2xhc3Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3Uge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zMmNsYXNzIHtcbiAgY29sb3I6ICM3NDgxOTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNjMlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCU7XG59XG5cbi5tYWluaGVhZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tYWlucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbGVmdDogMzcwcHg7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVtYWlsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDM1cHggMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA2cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGNkY3Rjk7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW46IDAgMzVweCAyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI0VFOUJBMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zaWdudXAxLCAuc2lnbnVwMiB7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cCwgLnNpZ25pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMzMTQ2NTg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogT3BlcmEgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/services/utils/utils.service */
    "./src/app/helpers/services/utils/utils.service.ts");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function LoginComponent_mat_error_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var code_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", code_r11.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", code_r11.slug, " ");
      }
    }

    function LoginComponent_mat_error_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a country code ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "left_hover": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "color": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "right_hover": a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "display": a0
      };
    };

    var _c4 = function _c4() {
      return ["/forgot-password"];
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, _utils, _auth, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this._utils = _utils;
        this._auth = _auth;
        this.router = router;
        this.toastr = toastr;
        this.toggle = true;
        this.hide = true;
        this.countryCodes = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signInForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.signUpForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getCountryCodes();
          this.showMenu('signin');
        }
      }, {
        key: "getCountryCodes",
        value: function getCountryCodes() {
          var _this2 = this;

          this._utils.getCountryCodes().subscribe(function (response) {
            _this2.countryCodes = response;
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this3 = this;

          var req = {
            firstName: this.signUpForm.value.firstName,
            lastName: this.signUpForm.value.lastName,
            email: this.signUpForm.value.email,
            phoneNumber: '+' + this.signUpForm.value.code + '-' + this.signUpForm.value.phoneNumber,
            password: this.signUpForm.value.password
          };
          console.log(req);

          this._auth.signup(req).subscribe(function (response) {
            console.log(response);

            if (response.status == 200) {
              setTimeout(function () {//this.getSignIn();
              }, 1000);
            } else {
              alert("Error in the file ");

              _this3.signUpForm.reset();
            }
          });
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var _this4 = this;

          this._auth.signin(this.signInForm.value).subscribe(function (response) {
            console.log(response);

            if (response.status == 200) {
              _this4._auth.setUserInfoInLocalStorage(response.data.userDetails);

              _this4._auth.setAuthToken(response.data.authToken); //this._comm.emitChange(true);


              _this4.router.navigate(["/groups"]); //redirects

            } else {
              (function (error_message) {
                if (error_message.status == 404) {
                  _this4.toastr.warning("Login Failed");
                } else if (error_message.status == 400) {
                  _this4.toastr.warning("Login Failed", "Wrong Password");
                } else {
                  _this4.toastr.error("Some Error Occurred", "Error!");
                }
              });
            }
          });
        }
      }, {
        key: "showMenu",
        value: function showMenu(menu) {
          if (menu == 'signin') {
            this.toggle = true;
          } else if (menu == 'signup') {
            this.toggle = false;
          }

          if (this.toggle) {
            this.signInForm.reset();
          } else {
            this.signUpForm.reset();
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 100,
      vars: 43,
      consts: [[1, "container-fluid"], [1, "content"], [1, "container"], [1, "c1"], [1, "c11"], [1, "mainhead"], [1, "mainp"], ["id", "left", 3, "ngClass", "click"], [1, "s1class", 3, "ngStyle"], [1, "su"], ["id", "right", 3, "ngClass", "click"], [1, "s2class", 3, "ngStyle"], [1, "c2"], [1, "container-fluid", 3, "ngStyle"], [1, "row", "M0"], [1, "col-12"], [1, "signup1"], [1, "signup", 3, "formGroup", "ngSubmit"], [1, "half-width-field", "MR4"], ["matSuffix", "", 1, "material-icons"], ["matInput", "", "formControlName", "firstName", "placeholder", "John", "autocomplete", "off"], [4, "ngIf"], [1, "half-width-field", "ML4"], ["matInput", "", "formControlName", "lastName", "placeholder", "Doe", "autocomplete", "off"], [1, "full-width-field"], ["matInput", "", "formControlName", "email", "placeholder", "Ex. pat@example.com", "autocomplete", "off"], [1, "_30width"], ["formControlName", "code", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "_70width"], ["matInput", "", "formControlName", "phoneNumber", "placeholder", "Ex. +91-9876543210", "autocomplete", "off"], [1, "full-width-field", "M0"], ["matInput", "", "formControlName", "password", "placeholder", "Ex. Abcd@123", "autocomplete", "off", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width-field", 3, "disabled"], [1, "signin", 3, "formGroup", "ngSubmit"], [1, "forgot-password", "MB15", 3, "routerLink"], [3, "value"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PICK YOUR SPOT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Just click the buttons below to toggle between SignIn & SignUp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_9_listener() {
            return ctx.showMenu("signin");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SIGN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_15_listener() {
            return ctx.showMenu("signup");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SIGN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_27_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " person_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_mat_error_34_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " person_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, LoginComponent_mat_error_41_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " person_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, LoginComponent_mat_error_48_Template, 2, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, LoginComponent_mat_error_49_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, LoginComponent_mat_option_56_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LoginComponent_mat_error_57_Template, 2, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, LoginComponent_mat_error_62_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_67_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, LoginComponent_mat_error_70_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_78_listener() {
            return ctx.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " person_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, LoginComponent_mat_error_85_Template, 2, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, LoginComponent_mat_error_86_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_91_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, LoginComponent_mat_error_94_Template, 4, 0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.toggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, ctx.toggle ? "#EE9BA3" : "#748194"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c2, !ctx.toggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, !ctx.toggle ? "#EE9BA3" : "#748194"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c3, !ctx.toggle ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.firstName.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.lastName.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.email.hasError("email") && !ctx.signUpForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.code.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.phoneNumber.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls.password.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signUpForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c3, ctx.toggle ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.email.hasError("email") && !ctx.signInForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signInForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: [".content[_ngcontent-%COMP%] {\n  background: #FAF3EC;\n  width: 100%;\n  height: 100%;\n  display: block;\n  font-family: \"Roboto\";\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #748194;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #748194;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 650px;\n  animation: fadein 1s;\n  -moz-animation: fadein 1s;\n  \n  -webkit-animation: fadein 1s;\n  \n  -o-animation: fadein 1s;\n}\n\n.c1[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px grey;\n  background-color: white;\n  width: 300px;\n  height: 500px;\n  display: inline-block;\n  border-radius: 15px 15px 15px 15px;\n}\n\n.c11[_ngcontent-%COMP%] {\n  background-image: url(\"https://image.shutterstock.com/image-vector/hand-using-calculator-260nw-600855293.jpg\");\n  background-size: 232px 280px;\n  background-repeat: no-repeat;\n  background-color: #5ea4a3;\n  width: 300px;\n  height: 400px;\n  display: inline-block;\n  position: absolute;\n  z-index: 4;\n  border-radius: 15px 15px 200px 200px;\n  border-color: transparent;\n  background-position: 69px 142px;\n}\n\n#left[_ngcontent-%COMP%], #right[_ngcontent-%COMP%] {\n  color: white;\n  display: inline-block;\n  width: 146px;\n  height: 500px;\n  background-color: white;\n  cursor: pointer;\n  position: relative;\n}\n\n#left[_ngcontent-%COMP%] {\n  border-radius: 15px 0px 0px 15px;\n}\n\n#right[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 15px 0px;\n}\n\n.left_hover[_ngcontent-%COMP%] {\n  color: #EE9BA3;\n  box-shadow: 5px 0 18px -10px #333;\n  z-index: 1;\n  position: absolute;\n}\n\n.right_hover[_ngcontent-%COMP%] {\n  box-shadow: -5px 0 15px -10px #333;\n  z-index: 1;\n  position: absolute;\n}\n\n.s1class[_ngcontent-%COMP%] {\n  color: #748194;\n  position: absolute;\n  bottom: 0;\n  left: 63%;\n  margin-left: -50%;\n}\n\n.s1class[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .s2class[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.su[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.s2class[_ngcontent-%COMP%] {\n  color: #748194;\n  position: absolute;\n  bottom: 0;\n  right: 63%;\n  margin-right: -50%;\n}\n\n.mainhead[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.mainp[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 13px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.c2[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 300px;\n  height: 500px;\n  border-radius: 15px;\n  position: relative;\n  \n  display: inline-block;\n}\n\n.username[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  margin: 0 35px 20px;\n  height: 35px;\n  padding: 6px 15px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background: #F6F7F9;\n  color: #748194;\n  font-size: 14px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 230px;\n  margin: 0 35px 20px;\n  height: 45px;\n  padding: 6px 15px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background: #EE9BA3;\n  color: white;\n  font-size: 14px;\n}\n\n.signup1[_ngcontent-%COMP%], .signup2[_ngcontent-%COMP%] {\n  color: #748194;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 50px;\n  font-weight: 400;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.signup[_ngcontent-%COMP%], .signin[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 50px;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n  font-size: 12px;\n  font-weight: 500;\n  font-style: italic;\n  color: #314658;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  \n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NyaWhhcmkvRG9jdW1lbnRzL2V4cGVuc2Utc3BsaXQvc3BsaXQtY2xpZW50L3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQThCLHdCQUFBO0VBQzVCLGNBQUE7QUNHRjs7QUREQTtFQUFxQixnQkFBQTtFQUNuQixjQUFBO0FDS0Y7O0FESEE7RUFBeUIsV0FBQTtFQUN2QixjQUFBO0FDT0Y7O0FETEE7RUFBb0IsZ0JBQUE7RUFDbEIsY0FBQTtBQ1NGOztBRFBBO0VBUUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUEyQixZQUFBO0VBQzNCLDRCQUFBO0VBQThCLHNCQUFBO0VBQzlCLHVCQUFBO0FDS0E7O0FESEE7RUFRQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FDREE7O0FESUE7RUFDRyw4R0FBQTtFQUNDLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNESjs7QURHQTtFQUNHLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSDs7QURFQTtFQUNHLGdDQUFBO0FDQ0g7O0FEQ0E7RUFDRyxpQ0FBQTtBQ0VIOztBREFBO0VBQ0csY0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDR0g7O0FEREE7RUFDRyxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0lIOztBREZBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0tIOztBREhBO0VBQ0csY0FBQTtBQ01IOztBREpBO0VBQ0csZUFBQTtBQ09IOztBRExBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1FIOztBRE5BO0VBQ0csWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDU0g7O0FEUEE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNVSDs7QURSQTtFQVFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0lBOztBREZBO0VBQ0csaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0tIOztBREhBO0VBQ0csaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01IOztBREpBO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNPSDs7QURMQTtFQUNHLHFCQUFBO0FDUUg7O0FETEE7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7QUNRSDs7QURMQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRExBO0VBQ0k7SUFDSSxVQUFBO0VDUU47RURORTtJQUNJLFVBQUE7RUNRTjtBQUNGOztBREVBO0VBQTRCLHNCQUFBO0VBQ3hCO0lBQ0ksVUFBQTtFQ1VOO0VEUkU7SUFDSSxVQUFBO0VDVU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6I0ZBRjNFQztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogIzc0ODE5NDtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjogIzc0ODE5NDtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICM3NDgxOTQ7XG59XG4uY29udGFpbmVye1xuICAgLy9kaXNwbGF5Om5vbmU7XG4vLyAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbi8vIFx0d2lkdGg6IGF1dG87XG4vLyBcdGhlaWdodDphdXRvO1xuLy8gXHR0b3A6IGNhbGMoNTAlIC0gMjQwcHgpO1xuLy8gXHRsZWZ0OiBjYWxjKDQwJSAtIDE2MHB4KTtcbi8vICAgIGJvcmRlci1yYWRpdXM6MTVweCAxNXB4IDE1cHggMTVweDtcbm1heC13aWR0aDogNzAwcHg7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1pbi1oZWlnaHQ6IDY1MHB4O1xuYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4tbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94ICovXG4td2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxufVxuLmMxe1xuLy8gICAgYm94LXNoYWRvdzowIDAgMTBweCBncmV5O1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbi8vICAgIHdpZHRoOjMwMHB4O1xuLy8gICAgaGVpZ2h0OjUwMHB4O1xuLy8gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4vLyAgICBib3JkZXItcmFkaXVzOjE1cHggMTVweCAxNXB4IDE1cHg7XG5cbmJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbndpZHRoOiAzMDBweDtcbmhlaWdodDogNTAwcHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5ib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uYzExe1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLnNodXR0ZXJzdG9jay5jb20vaW1hZ2UtdmVjdG9yL2hhbmQtdXNpbmctY2FsY3VsYXRvci0yNjBudy02MDA4NTUyOTMuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMzJweCAyODBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWE0YTM7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAyMDBweCAyMDBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDY5cHggMTQycHg7XG59XG4jbGVmdCwgI3JpZ2h0IHtcbiAgIGNvbG9yOndoaXRlO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6MTQ2cHg7XG4gICBoZWlnaHQ6IDUwMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgIGN1cnNvcjpwb2ludGVyO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2xlZnR7XG4gICBib3JkZXItcmFkaXVzOjE1cHggMHB4IDBweCAxNXB4O1xufVxuI3JpZ2h0e1xuICAgYm9yZGVyLXJhZGl1czoxNXB4IDE1cHggMTVweCAwcHg7XG59XG4ubGVmdF9ob3ZlcntcbiAgIGNvbG9yOiNFRTlCQTM7XG4gICBib3gtc2hhZG93OiA1cHggMCAxOHB4IC0xMHB4ICMzMzM7XG4gICB6LWluZGV4OjE7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cbi5yaWdodF9ob3ZlcntcbiAgIGJveC1zaGFkb3c6IC01cHggMCAxNXB4IC0xMHB4ICMzMzM7XG4gICB6LWluZGV4OjE7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cbi5zMWNsYXNze1xuICAgY29sb3I6Izc0ODE5NDtcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgYm90dG9tOjA7XG4gICBsZWZ0OjYzJTtcbiAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xufVxuLnMxY2xhc3Mgc3BhbiwgIC5zMmNsYXNzIHNwYW57XG4gICBkaXNwbGF5OmJsb2NrO1xufVxuLnN1e1xuICAgZm9udC1zaXplOjIwcHg7XG59XG4uczJjbGFzc3tcbiAgIGNvbG9yOiM3NDgxOTQ7XG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgIGJvdHRvbTowO1xuICAgcmlnaHQ6NjMlO1xuICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xufVxuLm1haW5oZWFke1xuICAgY29sb3I6d2hpdGU7XG4gICBmb250LXNpemU6MjRweDtcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuLm1haW5we1xuICAgY29sb3I6d2hpdGU7XG4gICBmb250LXNpemU6MTNweDtcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuLmMye1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbi8vICAgIHdpZHRoOjMwMHB4O1xuLy8gICAgaGVpZ2h0OjUwMHB4O1xuLy8gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuLy8gICAgcG9zaXRpb246YWJzb2x1dGU7XG4vLyAgICBsZWZ0OjM3MHB4O1xuLy8gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbndpZHRoOiAzMDBweDtcbmhlaWdodDogNTAwcHg7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xuLyogbGVmdDogMzcwcHg7ICovXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udXNlcm5hbWV7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIHdpZHRoOiAyMDBweDtcbiAgIG1hcmdpbjogMCAzNXB4IDIwcHggO1xuICAgaGVpZ2h0OiAzNXB4O1xuICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBvdXRsaW5lOiBub25lO1xuICAgYm9yZGVyOiBub25lO1xuICAgYmFja2dyb3VuZDogI0Y2RjdGOTtcbiAgIGNvbG9yOiAjNzQ4MTk0O1xuICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJ0bntcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgd2lkdGg6IDIzMHB4O1xuICAgbWFyZ2luOiAwIDM1cHggMjBweCA7XG4gICBoZWlnaHQ6IDQ1cHg7XG4gICBwYWRkaW5nOiA2cHggMTVweDtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIG91dGxpbmU6IG5vbmU7XG4gICBib3JkZXI6IG5vbmU7XG4gICBiYWNrZ3JvdW5kOiAjRUU5QkEzO1xuICAgY29sb3I6IHdoaXRlO1xuICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ251cDEsLnNpZ251cDJ7XG4gICBjb2xvcjojNzQ4MTk0O1xuICAgZm9udC1zaXplOjMwcHg7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICBmb250LXdlaWdodDogNDAwO1xufVxuYXtcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cCwgLnNpZ25pbntcbiAgIGRpc3BsYXk6YmxvY2s7XG4gICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3Jke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzMxNDY1ODtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4geyAvKiBGaXJlZm94ICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4geyAvKiBPcGVyYSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IiwiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkFGM0VDO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6ICM3NDgxOTQ7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSUUgMTArICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjNzQ4MTk0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxcztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG59XG5cbi5jMSB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcbn1cblxuLmMxMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS12ZWN0b3IvaGFuZC11c2luZy1jYWxjdWxhdG9yLTI2MG53LTYwMDg1NTI5My5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjMycHggMjgwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZWE0YTM7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAyMDBweCAyMDBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjlweCAxNDJweDtcbn1cblxuI2xlZnQsICNyaWdodCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTQ2cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xlZnQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcbn1cblxuI3JpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xufVxuXG4ubGVmdF9ob3ZlciB7XG4gIGNvbG9yOiAjRUU5QkEzO1xuICBib3gtc2hhZG93OiA1cHggMCAxOHB4IC0xMHB4ICMzMzM7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpZ2h0X2hvdmVyIHtcbiAgYm94LXNoYWRvdzogLTVweCAwIDE1cHggLTEwcHggIzMzMztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uczFjbGFzcyB7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNjMlO1xuICBtYXJnaW4tbGVmdDogLTUwJTtcbn1cblxuLnMxY2xhc3Mgc3BhbiwgLnMyY2xhc3Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3Uge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zMmNsYXNzIHtcbiAgY29sb3I6ICM3NDgxOTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNjMlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCU7XG59XG5cbi5tYWluaGVhZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tYWlucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbGVmdDogMzcwcHg7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDM1cHggMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA2cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGNkY3Rjk7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW46IDAgMzVweCAyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI0VFOUJBMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zaWdudXAxLCAuc2lnbnVwMiB7XG4gIGNvbG9yOiAjNzQ4MTk0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ251cCwgLnNpZ25pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMzMTQ2NTg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogT3BlcmEgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]
        }, {
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/reset-password/reset-password/reset-password.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/authentication/reset-password/reset-password/reset-password.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppAuthenticationResetPasswordResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResetPasswordComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter a value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter atleast 8 Chars");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_mat_error_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter a value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_mat_error_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter atleast 8 Chars");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(_auth, _route, router, toastr) {
        _classCallCheck(this, ResetPasswordComponent);

        this._auth = _auth;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validationToken = this._route.snapshot.paramMap.get('validationToken');
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/signin']);
        } //end of goToSign function

      }, {
        key: "updatePasswordFunction",
        value: function updatePasswordFunction() {
          var _this5 = this;

          if (this.password != this.confirmPassword) {
            this.toastr.warning("Password doesn't match", "Warning!");
          } else {
            var data = {
              validationToken: this.validationToken,
              password: this.password
            };

            this._auth.updatePassword(data).subscribe(function (apiResponse) {
              if (apiResponse.status == 200) {
                _this5.toastr.success("Please login", "Password Updated!");

                setTimeout(function () {
                  _this5.goToSignIn();
                }, 1000); //redirecting to signIn page
              } else {
                _this5.toastr.error(apiResponse.message, "Error!");
              }
            }, function (error) {
              if (error.status == 404) {
                _this5.toastr.warning("Password Update failed", "Please request another password reset!");
              } else {
                _this5.toastr.error("Some Error Occurred", "Error!");
              }
            }); //end calling updatePassword

          }
        } //end updatePasswordFunction

      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 40,
      vars: 6,
      consts: [[1, "container-fluid", "bg-image"], [1, "row"], [1, "col-md-6", "mx-auto", "col-sm-8", 2, "margin-top", "5vh"], [1, "card", "border-info", "cardBorder"], [1, "card-body", "text-center", 2, "padding-top", "30px"], [1, "text-center"], ["role", "form", 1, "form-horizontal"], [1, "input-group", "mb-3", "form-field-container"], ["appearance", "standard"], ["matInput", "", "type", "password", "placeholder", "Enter your Password", "minlength", "8", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["pwd", "ngModel"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Re-enter your Password", "minlength", "8", "name", "confirmPassword", "required", "", 3, "ngModel", "ngModelChange"], ["conpwd", "ngModel"], [1, "form-group", 2, "margin-top", "10px"], [1, "col-sm-12", "controls"], ["id", "btn-save", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "icon-hand-right"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please choose new password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "* Min 8 Characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResetPasswordComponent_mat_error_22_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ResetPasswordComponent_mat_error_23_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Re-enter Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "* Min 8 Characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ResetPasswordComponent_mat_error_33_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ResetPasswordComponent_mat_error_34_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_37_listener() {
            return ctx.updatePasswordFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.minlength);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".cardBorder[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 #530303, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.form-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-field-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NyaWhhcmkvRG9jdW1lbnRzL2V4cGVuc2Utc3BsaXQvc3BsaXQtY2xpZW50L3NyYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQm9yZGVye1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYig4MywgMywgMyksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuIFxuLmZvcm0tZmllbGQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiAgXG4uZm9ybS1maWVsZC1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6M3Z3OyBcbn1cbiIsIi5jYXJkQm9yZGVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzUzMDMwMywgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5mb3JtLWZpZWxkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWZpZWxkLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogM3Z3O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/guards/auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/helpers/guards/auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppHelpersGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, _auth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this._auth = _auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var token = this._auth.getUserAuth();

          var info = this._auth.getUserInfoFromLocalStorage();

          if (token != null && info != null && token && info) {
            return true;
          }

          this.router.navigate(["/authenticate"]);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/authentication/authenticate.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/helpers/services/authentication/authenticate.service.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthenticateService */

  /***/
  function srcAppHelpersServicesAuthenticationAuthenticateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
      return AuthenticateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenticateService =
    /*#__PURE__*/
    function () {
      function AuthenticateService(_http) {
        _classCallCheck(this, AuthenticateService);

        this._http = _http;

        this.setUserInfoInLocalStorage = function (req) {
          localStorage.setItem("userInfo", JSON.stringify(req));
        };

        this.setAuthToken = function (req) {
          localStorage.setItem("auth", req);
        };

        this.getUserInfoFromLocalStorage = function () {
          return JSON.parse(localStorage.getItem("userInfo"));
        };

        this.getUserAuth = function () {
          return localStorage.getItem("auth");
        };

        this.setAllUsersInfoInLocalStorage = function (req) {
          localStorage.setItem("allUsersInfo", JSON.stringify(req));
        };

        this.getAllUsersInfoFromLocalStorage = function () {
          return JSON.parse(localStorage.getItem("allUsersInfo"));
        };
      }

      _createClass(AuthenticateService, [{
        key: "signup",
        value: function signup(req) {
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.SIGNUP, req).map(function (response) {
            return response;
          });
        }
      }, {
        key: "signin",
        value: function signin(req) {
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.SIGNIN, req).map(function (response) {
            return response;
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(req) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", req.email);
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.FORGOTPASSWORD, req).map(function (response) {
            return response;
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(req) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('validationToken', req.validationToken).set('password', req.password);
          return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.RESETPASSWORD, params).map(function (response) {
            return response;
          });
        } //end updatePassword

      }, {
        key: "logout",
        value: function logout(userId, authToken) {
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION).concat(userId, "/logout?authToken=").concat(authToken), {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers(authToken) {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION, "view/all?authToken=").concat(authToken));
        }
      }]);

      return AuthenticateService;
    }();

    AuthenticateService.ɵfac = function AuthenticateService_Factory(t) {
      return new (t || AuthenticateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthenticateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticateService,
      factory: AuthenticateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/core/communication.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/helpers/services/core/communication.service.ts ***!
    \****************************************************************/

  /*! exports provided: CommunicationService */

  /***/
  function srcAppHelpersServicesCoreCommunicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicationService", function () {
      return CommunicationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/Subject */
    "./node_modules/rxjs-compat/_esm2015/Subject.js");

    var CommunicationService =
    /*#__PURE__*/
    function () {
      function CommunicationService() {
        _classCallCheck(this, CommunicationService);

        this.emitChangeSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeEmitted = this.emitChangeSource.asObservable();
      } // Service message


      _createClass(CommunicationService, [{
        key: "emitChange",
        value: function emitChange(myMessage) {
          this.emitChangeSource.next(myMessage);
        }
      }]);

      return CommunicationService;
    }();

    CommunicationService.ɵfac = function CommunicationService_Factory(t) {
      return new (t || CommunicationService)();
    };

    CommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommunicationService,
      factory: CommunicationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/groups/groups.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/helpers/services/groups/groups.service.ts ***!
    \***********************************************************/

  /*! exports provided: GroupsService */

  /***/
  function srcAppHelpersServicesGroupsGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsService", function () {
      return GroupsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");

    var GroupsService =
    /*#__PURE__*/
    function () {
      function GroupsService(_http, _auth) {
        _classCallCheck(this, GroupsService);

        this._http = _http;
        this._auth = _auth;
        this.authToken = this._auth.getUserAuth();
        this.userId = this._auth.getUserInfoFromLocalStorage();
        this.firstName = this._auth.getUserInfoFromLocalStorage();
      }

      _createClass(GroupsService, [{
        key: "addGroup",
        value: function addGroup(req) {
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION, "group/createGroup?authToken=").concat(this.authToken), req).map(function (response) {
            return response;
          });
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups(userId, authToken) {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION, "group/").concat(userId, "/allGroup?authToken=").concat(authToken));
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup(req) {
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.GROUP + req + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.DELETE + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "groupDetails",
        value: function groupDetails(req) {
          return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.GROUP + req + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.DETAILS + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "updateGroup",
        value: function updateGroup(req) {
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.GROUP + req + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.UPDATEGROUP + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "createExpense",
        value: function createExpense(req) {
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION, "group/expense/createExpense?authToken=").concat(this.authToken), req).map(function (response) {
            return response;
          });
        }
      }, {
        key: "deleteExpense",
        value: function deleteExpense(req) {
          return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.EXPENSE + req + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.DELETE + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "expenseDetails",
        value: function expenseDetails(req) {
          return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.GROUP + req + '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.EXPENSE + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.LIST + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "updateExpense",
        value: function updateExpense(req) {
          return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.GROUP + req + '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SUB_PATH.EXPENSE + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.UPDATEEXPENSE + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }]);

      return GroupsService;
    }();

    GroupsService.ɵfac = function GroupsService_Factory(t) {
      return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]));
    };

    GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GroupsService,
      factory: GroupsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/notifications/notifications.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/helpers/services/notifications/notifications.service.ts ***!
    \*************************************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppHelpersServicesNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");

    var NotificationsService =
    /*#__PURE__*/
    function () {
      function NotificationsService(_http, _auth) {
        _classCallCheck(this, NotificationsService);

        this._http = _http;
        this._auth = _auth;
        this.authToken = this._auth.getUserAuth();
        this.userId = this._auth.getUserInfoFromLocalStorage();
        this.firstName = this._auth.getUserInfoFromLocalStorage();
      }

      _createClass(NotificationsService, [{
        key: "fetchNotificationById",
        value: function fetchNotificationById(req) {
          return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + req + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.NOTIFICATIONS + "?authToken=" + this.authToken, {}).map(function (response) {
            return response;
          });
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(id) {
          var req = {};
          req['isSeen'] = true;
          req['notifyId'] = id;
          return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_VERSION + id + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.NOTIFICATIONS + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIS.UPDATE + "?authToken=" + this.authToken, req).map(function (response) {
            return response;
          });
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ɵfac = function NotificationsService_Factory(t) {
      return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]));
    };

    NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationsService,
      factory: NotificationsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/socket/socket.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/helpers/services/socket/socket.service.ts ***!
    \***********************************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppHelpersServicesSocketSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SocketService = function SocketService(http) {
      var _this6 = this;

      _classCallCheck(this, SocketService);

      this.http = http;

      this.verifyUser = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on('verifyUser', function (data) {
            console.log("verifying socket user", data);
            observer.next(data);
          });
        });
      };

      this.onlineUserList = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on('online-user-list', function (userList) {
            console.log("online users list from socket", userList);
            observer.next(userList);
          });
        });
      };

      this.disconnect = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on('disconnect', function () {
            observer.next();
          });
        });
      };

      this.listenAuthError = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on('auth-error', function (data) {
            observer.next(data);
          });
        });
      };

      this.getUpdatesFromUser = function (userId) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on(userId, function (data) {
            observer.next(data);
          });
        });
      };

      this.receiveSocketNotification = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this6.socket.on('receive-notification', function (data) {
            console.log("Socket receiver", data);
            observer.next(data);
          });
        });
      };

      this.setUser = function (authToken) {
        _this6.socket.emit('set-user', authToken);
      };

      this.notifyUpdates = function (data) {
        _this6.socket.emit('notify-updates', data);
      };

      this.notifyUpdatesItem = function (data) {
        _this6.socket.emit('notify-updates-item', data);
      };

      this.exitSocket = function () {
        _this6.socket.disconnect();
      };

      this.disconnectedSocket = function () {
        _this6.socket.emit("disconnect", "");
      };

      this.sendSocketNotification = function (data) {
        console.log("send notification", data);

        _this6.socket.emit('send-notification', data);
      };

      this.sendSocketNotifs = function (socketname, data) {
        _this6.socket.emit(socketname, data);
      };

      console.log("SocketService is called");
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL, {
        forceNew: true
      });
      console.log(this.socket);
    };

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/services/utils/utils.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/helpers/services/utils/utils.service.ts ***!
    \*********************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppHelpersServicesUtilsUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService(Http) {
        _classCallCheck(this, UtilsService);

        this.Http = Http;
      }

      _createClass(UtilsService, [{
        key: "getCountryCodes",
        value: function getCountryCodes() {
          return this.Http.get("./assets/code.json");
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return this.Http.get("./assets/category.json");
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();

    ;
    /***/
  },

  /***/
  "./src/app/modules/expenses/add-expense/add-expense.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/expenses/add-expense/add-expense.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddExpenseComponent */

  /***/
  function srcAppModulesExpensesAddExpenseAddExpenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddExpenseComponent", function () {
      return AddExpenseComponent;
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


    var src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/services/utils/utils.service */
    "./src/app/helpers/services/utils/utils.service.ts");
    /* harmony import */


    var src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/services/socket/socket.service */
    "./src/app/helpers/services/socket/socket.service.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AddExpenseComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Expense Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddExpenseComponent_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddExpenseComponent =
    /*#__PURE__*/
    function () {
      function AddExpenseComponent(fb, _groups, toastr, _router, _authenticate, _utils, route, _socket) {
        var _this7 = this;

        _classCallCheck(this, AddExpenseComponent);

        this.fb = fb;
        this._groups = _groups;
        this.toastr = toastr;
        this._router = _router;
        this._authenticate = _authenticate;
        this._utils = _utils;
        this.route = route;
        this._socket = _socket;
        this.allUsers = [];
        this.category = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
          singleSelection: false,
          idField: "item_id",
          textField: "item_text",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
        this.dropdownSettings1 = {
          singleSelection: true,
          idField: "item_id",
          textField: "item_text",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };

        this.getGroupDetails = function (gid) {
          _this7._groups.groupDetails(gid).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              console.log("in if");

              _this7.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data) {
              console.log("in else if");
              _this7.groupDetail = response.data;
              _this7.allUsers = _this7.groupDetail.group_users;
              console.log(_this7.allUsers);
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.resetForm = function () {
          console.log("in resrt form");

          _this7.addExpenseForm.reset();

          console.log("before call");

          _this7._router.navigateByUrl("/groups");
        };
      }

      _createClass(AddExpenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupId = this.route.snapshot.paramMap.get("groupId");
          console.log(this.groupId);
          this.getGroupDetails(this.groupId);
          this.authToken = this._authenticate.getUserAuth();
          this.userId = this._authenticate.getUserInfoFromLocalStorage();
          this.addExpenseForm = this.fb.group({
            expenseName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expensePaidBy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expenseUsersInvolved: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getCategory();
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          this.selectedItems.push(item);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this8 = this;

          this._utils.getCategory().subscribe(function (response) {
            _this8.category = response;
          });
        }
      }, {
        key: "createExpense",
        value: function createExpense() {
          var _this9 = this;

          var req = {
            expenseName: this.addExpenseForm.value.expenseName,
            amount: this.addExpenseForm.value.amount,
            expensePaidBy: this.addExpenseForm.value.expensePaidBy,
            expenseUsersInvolved: this.addExpenseForm.value.expenseUsersInvolved,
            category: this.addExpenseForm.value.category,
            groupId: this.groupId
          };

          this._groups.createExpense(req).subscribe(function (response) {
            console.log(response);

            if (response.status == 200 && response.data) {
              _this9.addExpenseForm.reset();

              _this9._socket.sendSocketNotification(req.expenseUsersInvolved);

              _this9._router.navigate(["/groups", _this9.groupId]);
            }

            if (response.status == 500 && response.error == true) {
              _this9.addExpenseForm.reset();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return AddExpenseComponent;
    }();

    AddExpenseComponent.ɵfac = function AddExpenseComponent_Factory(t) {
      return new (t || AddExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]));
    };

    AddExpenseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddExpenseComponent,
      selectors: [["app-add-expense"]],
      decls: 36,
      vars: 13,
      consts: [[1, "c2"], [1, "container-fluid"], [1, "row", "M0"], [1, "offset-3", "col-6"], [1, "MTB15"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "full-width-field", "MR4"], ["matInput", "", "formControlName", "expenseName", "type", "text", "placeholder", "Enter Group Name", "autocomplete", "off"], [4, "ngIf"], [1, "description"], ["matInput", "", "formControlName", "amount", "type", "number", "placeholder", "Ex: 5000 INR", "autocomplete", "off"], ["formControlName", "expensePaidBy", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], ["formControlName", "expenseUsersInvolved", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], ["formControlName", "category", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], [1, "flex-even"], ["type", "button", "mat-raised-button", "", "color", "default", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function AddExpenseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddExpenseComponent_Template_form_ngSubmit_6_listener() {
            return ctx.createExpense();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Expense Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddExpenseComponent_mat_error_12_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddExpenseComponent_mat_error_18_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Paid By:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-multiselect-dropdown", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelect_22_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_22_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Expense to be split between:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-multiselect-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelect_26_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_26_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-multiselect-dropdown", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelect_30_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function AddExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_30_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddExpenseComponent_Template_button_click_32_listener() {
            return ctx.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addExpenseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addExpenseForm.controls.expenseName.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addExpenseForm.controls.amount.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Users to Add")("data", ctx.allUsers)("settings", ctx.dropdownSettings1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Users to Add")("data", ctx.allUsers)("settings", ctx.dropdownSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select a category to add")("data", ctx.category)("settings", ctx.dropdownSettings1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addExpenseForm.valid);
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_8__["TopNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["MultiSelectComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZW5zZXMvYWRkLWV4cGVuc2UvYWRkLWV4cGVuc2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddExpenseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-add-expense",
          templateUrl: "./add-expense.component.html",
          styleUrls: ["./add-expense.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/expenses/update-expense/update-expense.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/expenses/update-expense/update-expense.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UpdateExpenseComponent */

  /***/
  function srcAppModulesExpensesUpdateExpenseUpdateExpenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateExpenseComponent", function () {
      return UpdateExpenseComponent;
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


    var src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/services/utils/utils.service */
    "./src/app/helpers/services/utils/utils.service.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var UpdateExpenseComponent =
    /*#__PURE__*/
    function () {
      function UpdateExpenseComponent(fb, _groups, toastr, _router, _authenticate, _utils, route) {
        var _this10 = this;

        _classCallCheck(this, UpdateExpenseComponent);

        this.fb = fb;
        this._groups = _groups;
        this.toastr = toastr;
        this._router = _router;
        this._authenticate = _authenticate;
        this._utils = _utils;
        this.route = route;
        this.allUsers = [];
        this.category = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
          singleSelection: false,
          idField: "item_id",
          textField: "item_text",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
        this.dropdownSettings1 = {
          singleSelection: true,
          idField: "item_id",
          textField: "item_text",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };

        this.getGroupDetails = function (gid) {
          _this10._groups.groupDetails(gid).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              console.log("in if");

              _this10.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data) {
              console.log("in else if");
              _this10.groupDetail = response.data;
              _this10.allUsers = _this10.groupDetail.group_users;
              console.log(_this10.allUsers);
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.getExpenseDetails = function () {
          _this10._groups.expenseDetails(_this10.gid).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              console.log("in if");

              _this10.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data) {
              console.log("in else if");
              _this10.expenseDetail = response.data;
              console.log(response.data);
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.resetForm = function () {
          console.log("in resrt form");

          _this10.updateExpenseForm.reset();

          console.log("before call");

          _this10._router.navigateByUrl("/groups");
        };
      }

      _createClass(UpdateExpenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.expenseId = this.route.snapshot.paramMap.get("expenseId");
          console.log(this.expenseId);
          this.groupId = this.route.snapshot.paramMap.get("groupId");
          console.log(this.groupId);
          this.getGroupDetails(this.groupId);
          this.authToken = this._authenticate.getUserAuth();
          this.userId = this._authenticate.getUserInfoFromLocalStorage();
          this.getExpenseDetails(this.expenseId);
          this.updateExpenseForm = this.fb.group({
            expenseName: [this.expenseDetail.expenseName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: [this.expenseDetail.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expensePaidBy: [this.expenseDetail.expensePaidBy, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [this.expenseDetail.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expenseUsersInvolved: [this.expenseDetail.expenseUsersInvolved, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getCategory();
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          this.selectedItems.push(item);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this11 = this;

          this._utils.getCategory().subscribe(function (response) {
            _this11.category = response;
          });
        }
      }, {
        key: "updateExpense",
        value: function updateExpense() {
          var _this12 = this;

          var req = {
            expenseName: this.updateExpenseForm.value.expenseName,
            amount: this.updateExpenseForm.value.amount,
            expensePaidBy: this.updateExpenseForm.value.expensePaidBy,
            expenseUsersInvolved: this.updateExpenseForm.value.expenseUsersInvolved,
            category: this.updateExpenseForm.value.category,
            groupId: this.groupId
          };

          this._groups.updateExpense(req).subscribe(function (response) {
            console.log(response);

            if (response.status == 200 && response.data) {
              setTimeout(function () {
                _this12.updateExpenseForm.reset();

                _this12._router.navigateByUrl("/groups");
              }, 1000);
            }

            if (response.status == 500 && response.error == true) {
              _this12.updateExpenseForm.reset();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UpdateExpenseComponent;
    }();

    UpdateExpenseComponent.ɵfac = function UpdateExpenseComponent_Factory(t) {
      return new (t || UpdateExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    UpdateExpenseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateExpenseComponent,
      selectors: [["app-update-expense"]],
      decls: 34,
      vars: 11,
      consts: [[1, "c2"], [1, "container-fluid"], [1, "row", "M0"], [1, "offset-3", "col-6"], [1, "MTB15"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "full-width-field", "MR4"], ["matInput", "", "formControlName", "expenseName", "type", "text", "placeholder", "Enter Group Name", "autocomplete", "off"], [1, "description"], ["matInput", "", "formControlName", "amount", "type", "number", "placeholder", "Ex: 5000 INR", "autocomplete", "off"], ["formControlName", "expensePaidBy", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], ["formControlName", "expenseUsersInvolved", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], ["formControlName", "category", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], [1, "flex-even"], ["type", "button", "mat-raised-button", "", "color", "default", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function UpdateExpenseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateExpenseComponent_Template_form_ngSubmit_6_listener() {
            return ctx.updateExpense();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Expense Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Paid By:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ng-multiselect-dropdown", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelect_20_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_20_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Expense to be split between:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-multiselect-dropdown", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelect_24_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_24_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ng-multiselect-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelect_28_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function UpdateExpenseComponent_Template_ng_multiselect_dropdown_onSelectAll_28_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateExpenseComponent_Template_button_click_30_listener() {
            return ctx.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateExpenseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Users to Add")("data", ctx.allUsers)("settings", ctx.dropdownSettings1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Users to Add")("data", ctx.allUsers)("settings", ctx.dropdownSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select a category to add")("data", ctx.category)("settings", ctx.dropdownSettings1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateExpenseForm.valid);
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__["TopNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["MultiSelectComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZW5zZXMvdXBkYXRlLWV4cGVuc2UvdXBkYXRlLWV4cGVuc2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateExpenseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-update-expense",
          templateUrl: "./update-expense.component.html",
          styleUrls: ["./update-expense.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: src_app_helpers_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/groups.module.ts":
  /*!******************************************!*\
    !*** ./src/app/modules/groups.module.ts ***!
    \******************************************/

  /*! exports provided: GroupsModule */

  /***/
  function srcAppModulesGroupsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsModule", function () {
      return GroupsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _groups_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./groups/create-group/create-group.component */
    "./src/app/modules/groups/create-group/create-group.component.ts");
    /* harmony import */


    var _groups_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./groups/group-details/group-details.component */
    "./src/app/modules/groups/group-details/group-details.component.ts");
    /* harmony import */


    var _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./groups/groups/groups.component */
    "./src/app/modules/groups/groups/groups.component.ts");
    /* harmony import */


    var _groups_update_group_update_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./groups/update-group/update-group.component */
    "./src/app/modules/groups/update-group/update-group.component.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _my_profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./my profile/my-profile/my-profile.component */
    "./src/app/modules/my profile/my-profile/my-profile.component.ts");
    /* harmony import */


    var _notifications_notifications_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./notifications/notifications/notifications/notifications.component */
    "./src/app/modules/notifications/notifications/notifications/notifications.component.ts");
    /* harmony import */


    var _expenses_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./expenses/add-expense/add-expense.component */
    "./src/app/modules/expenses/add-expense/add-expense.component.ts");
    /* harmony import */


    var _expenses_update_expense_update_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./expenses/update-expense/update-expense.component */
    "./src/app/modules/expenses/update-expense/update-expense.component.ts"); //import { MyProfileModule } from '../my profile/my-profile.module';


    var GroupsModule = function GroupsModule() {
      _classCallCheck(this, GroupsModule);
    };

    GroupsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GroupsModule
    });
    GroupsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GroupsModule_Factory(t) {
        return new (t || GroupsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GroupsModule, {
        declarations: [_groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"], _groups_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateGroupComponent"], _groups_update_group_update_group_component__WEBPACK_IMPORTED_MODULE_8__["UpdateGroupComponent"], _groups_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsComponent"], _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__["TopNavigationComponent"], _my_profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__["MyProfileComponent"], _notifications_notifications_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"], _expenses_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_12__["AddExpenseComponent"], _expenses_update_expense_update_expense_component__WEBPACK_IMPORTED_MODULE_13__["UpdateExpenseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"], _groups_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateGroupComponent"], _groups_update_group_update_group_component__WEBPACK_IMPORTED_MODULE_8__["UpdateGroupComponent"], _groups_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsComponent"], _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__["TopNavigationComponent"], _my_profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__["MyProfileComponent"], _notifications_notifications_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"], _expenses_add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_12__["AddExpenseComponent"], _expenses_update_expense_update_expense_component__WEBPACK_IMPORTED_MODULE_13__["UpdateExpenseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/groups/create-group/create-group.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/groups/create-group/create-group.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateGroupComponent */

  /***/
  function srcAppModulesGroupsCreateGroupCreateGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function () {
      return CreateGroupComponent;
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


    var src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CreateGroupComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Group Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateGroupComponent_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreateGroupComponent =
    /*#__PURE__*/
    function () {
      function CreateGroupComponent(_groups, toastr, fb, _router, _authenticate) {
        var _this13 = this;

        _classCallCheck(this, CreateGroupComponent);

        this._groups = _groups;
        this.toastr = toastr;
        this.fb = fb;
        this._router = _router;
        this._authenticate = _authenticate;
        this.allUsers = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};

        this.getMyGroups = function () {
          _this13._groups.getAllGroups(_this13.userId.userId, _this13.authToken).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              _this13.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data.length > 0) {
              _this13.allGroups = response.data;
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.getUsersGroup = function () {
          _this13._authenticate.getUsers(_this13.authToken).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              _this13.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data.length > 0) {
              _this13.allUsers = [];
              response.data.forEach(function (element) {
                if (element["firstName"] != "") {
                  _this13.allUsers.push({
                    item_id: element.userId,
                    item_text: element["firstName"] + " " + element["lastName"]
                  });
                }
              });
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.createGroup = function () {
          console.log("in this call");

          _this13.createGroupForm.value.group_users.push({
            item_id: _this13.userId.userId,
            item_text: _this13.userId.firstName + " " + _this13.userId.lastName
          });

          _this13.createGroupForm.patchValue({
            group_creatorName: _this13.userId.firstName + " " + _this13.userId.lastName,
            group_creatorId: _this13.userId.userId,
            group_updater_id: _this13.userId.userId,
            group_updater_name: _this13.userId.firstName + " " + _this13.userId.lastName
          });

          _this13._groups.addGroup(_this13.createGroupForm.value).subscribe(function (response) {
            console.log(response);

            if (response.status == 200 && response.data) {
              setTimeout(function () {
                _this13.createGroupForm.reset();

                _this13._router.navigateByUrl("/groups");
              }, 1000);

              _this13.getMyGroups();

              _this13.getUsersGroup();
            }

            if (response.status == 500 && response.error == true) {
              _this13.createGroupForm.reset();
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.resetForm = function () {
          console.log("in resrt form");

          _this13.createGroupForm.reset();

          console.log("before call");

          _this13._router.navigateByUrl("/groups");
        };
      }

      _createClass(CreateGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authToken = this._authenticate.getUserAuth();
          this.userId = this._authenticate.getUserInfoFromLocalStorage(); // this.userName=this.getUsersGroup.firstName+' '+this.getUsersGroup.lastName

          this.createGroupForm = this.fb.group({
            group_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_users: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_creatorId: [this.userId.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_creatorName: [this.userId.firstName + " " + this.userId.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_updater_id: [this.userId.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_updater_name: [this.userId.firstName + " " + this.userId.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getUsersGroup();
          this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          this.selectedItems.push(item);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }]);

      return CreateGroupComponent;
    }();

    CreateGroupComponent.ɵfac = function CreateGroupComponent_Factory(t) {
      return new (t || CreateGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]));
    };

    CreateGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateGroupComponent,
      selectors: [["app-create-group"]],
      decls: 31,
      vars: 7,
      consts: [[1, "c2"], [1, "container-fluid"], [1, "row", "M0"], [1, "offset-3", "col-6"], [1, "MTB15"], ["className", "login-container"], [1, "signup", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "full-width-field", "MR4"], ["matInput", "", "formControlName", "group_name", "type", "text", "placeholder", "Enter Group Name", "autocomplete", "off"], [4, "ngIf"], [1, "description"], ["matInput", "", "formControlName", "description", "type", "text", "placeholder", "description"], ["formControlName", "group_users", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll"], [1, "flex-even"], ["type", "button", "mat-raised-button", "", "color", "default", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function CreateGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateGroupComponent_Template_form_ngSubmit_9_listener() {
            return ctx.createGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Group Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateGroupComponent_mat_error_15_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateGroupComponent_mat_error_21_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-multiselect-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function CreateGroupComponent_Template_ng_multiselect_dropdown_onSelect_25_listener($event) {
            return ctx.onItemSelect($event);
          })("onSelectAll", function CreateGroupComponent_Template_ng_multiselect_dropdown_onSelectAll_25_listener($event) {
            return ctx.onSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateGroupComponent_Template_button_click_27_listener() {
            return ctx.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createGroupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createGroupForm.controls.group_name.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createGroupForm.controls.description.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Users to Add")("data", ctx.allUsers)("settings", ctx.dropdownSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.createGroupForm.valid);
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__["TopNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["MultiSelectComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3JvdXBzL2NyZWF0ZS1ncm91cC9jcmVhdGUtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-create-group",
          templateUrl: "./create-group.component.html",
          styleUrls: ["./create-group.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/groups/group-details/group-details.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/groups/group-details/group-details.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GroupDetailsComponent */

  /***/
  function srcAppModulesGroupsGroupDetailsGroupDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function () {
      return GroupDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/services/socket/socket.service */
    "./src/app/helpers/services/socket/socket.service.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GroupDetailsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_div_20_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.redirectToUpdateExpense();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " open_in_new ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_div_20_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var item_r31 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.deleteExpense(item_r31.expenseId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " delete_forever ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r31 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.expenseName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("amount : ", item_r31.amount, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("category : ", item_r31.category[0].item_text, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by: ", ctx_r28.groupDetail == null ? null : ctx_r28.groupDetail.group_creatorName, "");
      }
    }

    function GroupDetailsComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r36.item_text);
      }
    }

    function GroupDetailsComponent_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r37.toPayToCreator, " ");
      }
    }

    var GroupDetailsComponent =
    /*#__PURE__*/
    function () {
      function GroupDetailsComponent(_authenticate, toastr, _groups, _router, fb, route, socket) {
        var _this14 = this;

        _classCallCheck(this, GroupDetailsComponent);

        this._authenticate = _authenticate;
        this.toastr = toastr;
        this._groups = _groups;
        this._router = _router;
        this.fb = fb;
        this.route = route;
        this.socket = socket;
        this.settleExpenseTableData = [];

        this.getMyGroups = function () {
          _this14._groups.getAllGroups(_this14.userId.userId, _this14.authToken).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              _this14.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data.length > 0) {
              _this14.allGroups = response.data;
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.getAllUsers = function () {
          _this14._authenticate.getUsers(_this14.authToken).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              _this14.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data.length > 0) {
              _this14.allUsers = [];
              response.data.forEach(function (element) {
                if (element["firstName"] != "") {
                  _this14.allUsers.push({
                    item_id: element.userId,
                    item_text: element["firstName"] + " " + element["lastName"]
                  });
                }
              });
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.getGroupDetails = function (gid) {
          _this14._groups.groupDetails(gid).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              console.log("in if");

              _this14.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data) {
              console.log("in else if");
              _this14.groupDetail = response.data;
              console.log(response.data);
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.getExpenseDetails = function () {
          _this14._groups.expenseDetails(_this14.gid).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              console.log("in if");

              _this14.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data) {
              console.log("in else if");
              _this14.expenseDetail = response.data;
              console.log(response.data);

              _this14.generateSettleExpenseData(_this14.expenseDetail);
            }
          }, function (error) {
            console.log(error);
          });
        }; // _id: "5e8b4bcd8088ef5f006e75a1"
        // expenseName: "test"
        // amount: 1000
        // updatedOn: "2020-04-06T15:33:33.000Z"
        // deletedOn: null
        // groupId: "VNlib4vqj"
        // expenseId: "eT-LkmQ2t"
        // expensePaidBy: [{_id: "5e8b4bcd8088ef5f006e75a2", item_id: "HQ_cnFKBk", item_text: "sri "}]
        // category: [{_id: "5e8b4bcd8088ef5f006e75a3", item_id: "1", item_text: "Petrol/Gas"}]
        // createdOn: "2020-04-06T15:33:33.000Z"
        // expenseUsersInvolved: [{_id: "5e8b4bcd8088ef5f006e75a4", item_id: "HQ_cnFKBk", item_text: "sri "},…]
        // 0: {_id: "5e8b4bcd8088ef5f006e75a4", item_id: "HQ_cnFKBk", item_text: "sri "}
        // 1: {_id: "5e8b4bcd8088ef5f006e75a5", item_id: "qYYq4Y79b", item_text: "sri "}


        this.generateSettleExpenseData = function (data) {
          _this14.settleExpenseTableData = [];

          if (data.length > 0) {
            data.forEach(function (element) {
              var usersVal = "";

              if (element.expenseUsersInvolved.length > 0) {
                var len = element.expenseUsersInvolved.length;
                element.expenseUsersInvolved.forEach(function (element, index) {
                  if (index + 1 == len) {
                    usersVal += usersVal + element.item_text;
                  } else {
                    usersVal += usersVal + element.item_text + " and ";
                  }
                });
              }

              _this14.settleExpenseTableData.push({
                toPayToCreator: usersVal + " has to pay to " + element.expensePaidBy[0].item_text + " INR " + element.amount + " only"
              });
            });
            console.log(_this14.settleExpenseTableData);
          }
        };

        this.deleteExpense = function (id) {
          _this14._groups.deleteExpense(id).subscribe(function (res) {
            _this14.getExpenseDetails(_this14.gid);
          });
        };

        this.redirectToCreateExpense = function () {
          _this14._router.navigate(['/groups/expense/create-expense', _this14.gid]);
        };

        this.redirectToUpdateExpense = function () {
          _this14._router.navigate(['/groups/expense/update-expense', _this14.gid]);
        };

        this.getUpdatesFromUser = function () {
          _this14.socket.getUpdatesFromUser(_this14.userId).subscribe(function (data) {
            //getting message from user.
            _this14.toastr.info(data.message); //console.log(data)


            if (!data.gid) _this14.getExpenseDetails();
          });
        }; //end getUpdatesFromUser
        //listened


        this.verifyUserConfirmation = function () {
          _this14.socket.verifyUser().subscribe(function () {
            _this14.socket.setUser(_this14.authToken); //in reply to verify user emitting set-user event with authToken as parameter.

          }, function (err) {
            _this14.toastr.error(err, "Some error occured");
          }); //end subscribe

        }; //end verifyUserConfirmation
        //emitted 


        this.notifyUpdatesToUser = function (data) {
          //data will be object with message and userId(recieverId)
          _this14.socket.notifyUpdates(data); //console.log(data)


          if (!data.gid) _this14.getExpenseDetails(_this14.userId);
        }; //end notifyUpdatesToUser

      }

      _createClass(GroupDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.authToken = this._authenticate.getUserAuth();
          this.userId = this._authenticate.getUserInfoFromLocalStorage();
          console.log("this is get group details");
          this.route.params.subscribe(function (params) {
            _this15.gid = params.id;
          });
          this.getGroupDetails(this.gid);
          this.getAllUsers();
          this.getExpenseDetails();
          this.verifyUserConfirmation();
          this.getUpdatesFromUser();
        }
      }]);

      return GroupDetailsComponent;
    }();

    GroupDetailsComponent.ɵfac = function GroupDetailsComponent_Factory(t) {
      return new (t || GroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]));
    };

    GroupDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupDetailsComponent,
      selectors: [["app-group-details"]],
      decls: 31,
      vars: 5,
      consts: [[1, "container", "MT50"], [1, "row"], [1, "col-12", "text-center"], [1, "col-12"], ["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "Expenses"], [1, "container-fluid"], [3, "click"], ["mat-fab", "", "color", "primary", 1, "float-right", "MTB15"], [1, "material-icons"], [1, "row", "clear-both"], ["class", "col-md-4 col-lg-4 col-xl-4 MTB15", 4, "ngFor", "ngForOf"], ["label", "Users"], [1, "row", "M0"], ["class", "card col-3", 4, "ngFor", "ngForOf"], ["label", "Settle Expenses"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-lg-4", "col-xl-4", "MTB15"], [1, "card"], [1, "card-header"], [1, "card-title"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "card-body"], [1, "card-text"], [1, "card-footer"], [1, "flex-even"], ["mat-mini-fab", "", "color", "warn", 1, "float-right", 3, "click"], [1, "card", "col-3"]],
      template: function GroupDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_Template_a_click_14_listener() {
            return ctx.redirectToCreateExpense();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GroupDetailsComponent_div_20_Template, 21, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GroupDetailsComponent_div_23_Template, 4, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GroupDetailsComponent_tr_30_Template, 3, 1, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupDetail == null ? null : ctx.groupDetail.group_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupDetail == null ? null : ctx.groupDetail.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expenseDetail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupDetail == null ? null : ctx.groupDetail.group_users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.settleExpenseTableData);
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__["TopNavigationComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3JvdXBzL2dyb3VwLWRldGFpbHMvZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-group-details",
          templateUrl: "./group-details.component.html",
          styleUrls: ["./group-details.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/groups/groups/groups.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/groups/groups/groups.component.ts ***!
    \***********************************************************/

  /*! exports provided: GroupsComponent */

  /***/
  function srcAppModulesGroupsGroupsGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () {
      return GroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/services/groups/groups.service */
    "./src/app/helpers/services/groups/groups.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../helpers/services/socket/socket.service */
    "./src/app/helpers/services/socket/socket.service.ts");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GroupsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_div_8_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var group_r21 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.groupDetails(group_r21.groupId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " open_in_new ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_div_8_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var group_r21 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.deleteGroup(group_r21.groupId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " delete_forever ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r21.group_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r21.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by: ", group_r21.group_creatorName, "");
      }
    }

    var _c0 = function _c0() {
      return ["/groups/create-group"];
    };

    var GroupsComponent =
    /*#__PURE__*/
    function () {
      function GroupsComponent(_authenticate, toastr, _groups, _router, socket) {
        var _this16 = this;

        _classCallCheck(this, GroupsComponent);

        this._authenticate = _authenticate;
        this.toastr = toastr;
        this._groups = _groups;
        this._router = _router;
        this.socket = socket;

        this.getMyGroups = function () {
          _this16._groups.getAllGroups(_this16.userId.userId, _this16.authToken).subscribe(function (response) {
            console.log(response);

            if (response.error == true && response.status == 404) {
              _this16.toastr.warning(response.message, "");
            } else if (response.status == 200 && response.data.length > 0) {
              _this16.allGroups = response.data;
            }
          }, function (error) {
            console.log(error);
          });
        };

        this.deleteGroup = function (id) {
          _this16._groups.deleteGroup(id).subscribe(function (res) {
            console.log(res);

            _this16.getMyGroups();
          });
        };

        this.groupDetails = function (id) {
          _this16._groups.groupDetails(id).subscribe(function (res) {
            console.log(res);

            _this16._router.navigate(["./groups/" + id]);

            _this16.getMyGroups();
          });
        };
      }

      _createClass(GroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authToken = this._authenticate.getUserAuth();
          this.userId = this._authenticate.getUserInfoFromLocalStorage();
          this.getMyGroups();
        }
      }]);

      return GroupsComponent;
    }();

    GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
      return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]));
    };

    GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupsComponent,
      selectors: [["app-groups"]],
      decls: 9,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "btn", "btn-success"], [3, "routerLink"], [1, "material-icons"], [1, "row", "clear-both"], ["class", "col-md-4 col-lg-4 col-xl-4 MTB15", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-lg-4", "col-xl-4", "MTB15"], [1, "card"], [1, "card-header"], [1, "card-title"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "card-body"], [1, "card-text"], [1, "card-footer"], [1, "flex-even"], ["mat-mini-fab", "", "color", "warn", 1, "float-right", 3, "click"]],
      template: function GroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupsComponent_div_8_Template, 19, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allGroups);
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__["TopNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3JvdXBzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-groups",
          templateUrl: "./groups.component.html",
          styleUrls: ["./groups.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_helpers_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/groups/update-group/update-group.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/groups/update-group/update-group.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UpdateGroupComponent */

  /***/
  function srcAppModulesGroupsUpdateGroupUpdateGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateGroupComponent", function () {
      return UpdateGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UpdateGroupComponent =
    /*#__PURE__*/
    function () {
      function UpdateGroupComponent() {
        _classCallCheck(this, UpdateGroupComponent);
      }

      _createClass(UpdateGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateGroupComponent;
    }();

    UpdateGroupComponent.ɵfac = function UpdateGroupComponent_Factory(t) {
      return new (t || UpdateGroupComponent)();
    };

    UpdateGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateGroupComponent,
      selectors: [["app-update-group"]],
      decls: 2,
      vars: 0,
      template: function UpdateGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-group works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3JvdXBzL3VwZGF0ZS1ncm91cC91cGRhdGUtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-group',
          templateUrl: './update-group.component.html',
          styleUrls: ['./update-group.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/my profile/my-profile/my-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/my profile/my-profile/my-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppModulesMyProfileMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent() {
        _classCallCheck(this, MyProfileComponent);
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
      return new (t || MyProfileComponent)();
    };

    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProfileComponent,
      selectors: [["app-my-profile"]],
      decls: 3,
      vars: 0,
      template: function MyProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "my-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__["TopNavigationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbXkgcHJvZmlsZS9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-profile',
          templateUrl: './my-profile.component.html',
          styleUrls: ['./my-profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/notifications/notifications/notifications/notifications.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/notifications/notifications/notifications/notifications.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppModulesNotificationsNotificationsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/top-navigation/top-navigation/top-navigation.component */
    "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)();
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 3,
      vars: 0,
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_top_navigation_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__["TopNavigationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html',
          styleUrls: ['./notifications.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/shared/shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/shared/shared.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppModulesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(), _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(), _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/shared/top-navigation/top-navigation/top-navigation.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TopNavigationComponent */

  /***/
  function srcAppModulesSharedTopNavigationTopNavigationTopNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function () {
      return TopNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/helpers/services/core/communication.service */
    "./src/app/helpers/services/core/communication.service.ts");
    /* harmony import */


    var _app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../app/helpers/services/authentication/authenticate.service */
    "./src/app/helpers/services/authentication/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../helpers/services/socket/socket.service */
    "./src/app/helpers/services/socket/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/groups"];
    };

    function TopNavigationComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function TopNavigationComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavigationComponent_a_24_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.logoutFunction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/notifications"];
    };

    var _c2 = function _c2() {
      return ["/my-profile"];
    };

    var TopNavigationComponent =
    /*#__PURE__*/
    function () {
      function TopNavigationComponent(_comm, _auth, router, toastr, socket) {
        var _this17 = this;

        _classCallCheck(this, TopNavigationComponent);

        this._comm = _comm;
        this._auth = _auth;
        this.router = router;
        this.toastr = toastr;
        this.socket = socket;
        this.notificationCount = 0;
        this.isLoggedIn = false;

        this.logoutFunction = function () {
          _this17.authToken = _this17._auth.getUserAuth();

          _this17._auth.logout(_this17.userId, _this17.authToken).subscribe(function (response) {
            if (response.status === 200) {
              localStorage.removeItem("userInfo");
              localStorage.removeItem("auth");

              _this17._comm.emitChange(false);

              _this17.socket.disconnectedSocket();

              _this17.socket.exitSocket();

              _this17.router.navigate(["/authenticate"]);
            } else {
              _this17.toastr.error(response.message, "Error!");
            } // end condition

          }, function (err) {
            if (err.status == 404) {
              _this17.toastr.warning("Logout Failed", "Already Logged Out or Invalid User");

              _this17.router.navigate(["/authenticate"]);
            } else {
              _this17.toastr.error("Some Error Occurred", "Error!");
            }
          });
        };

        this._comm.changeEmitted.subscribe(function (resp) {
          console.log(resp);

          if (resp === true) {
            _this17.isLoggedIn = true;
          } else {
            _this17.isLoggedIn = false;
          }
        });

        this.isUserDataStored = this._auth.getUserInfoFromLocalStorage();

        if (this.isUserDataStored && this.isUserDataStored.userId != null) {
          this.userId = this.isUserDataStored.userId;
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }

        this.fetchToken = this._auth.getUserAuth();

        if (this.fetchToken) {
          this.authToken = this.fetchToken;
        } else {
          this.isLoggedIn = false;
        }

        this.socket.setUser(this.fetchToken);
        this.socket.receiveSocketNotification().subscribe(function (resp) {
          _this17.notificationCount = 0;
          console.log("socket resposne received", resp);
          resp.forEach(function (element) {
            if (element.item_id == _this17.userId) {
              console.log("this is the user who receives notification", element);
              _this17.notificationCount++;
            }
          });
        });
        console.log("notification count", this.notificationCount);
      }

      _createClass(TopNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.socket.setUser(this.fetchToken);
          this.isUserDataStored = this._auth.getUserInfoFromLocalStorage();

          if (this.isUserDataStored && this.isUserDataStored.userId != null) {
            this.userId = this.isUserDataStored.userId;
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }

          this.fetchToken = this._auth.getUserAuth();

          if (this.fetchToken) {
            this.authToken = this.fetchToken;
          } else {
            this.isLoggedIn = false;
          }

          this.activeDashBoard = this.active;
          this.socket.receiveSocketNotification().subscribe(function (resp) {
            _this18.notificationCount = 0;
            console.log("socket resposne received", resp);
            resp.forEach(function (element) {
              if (element.item_id == _this18.userId) {
                console.log("this is the user who receives notification", element);
                _this18.notificationCount++;
              }
            });
          });
          console.log("notification count", this.notificationCount);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.activeDashBoard = changes.active;
        }
      }]);

      return TopNavigationComponent;
    }();

    TopNavigationComponent.ɵfac = function TopNavigationComponent_Factory(t) {
      return new (t || TopNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]));
    };

    TopNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopNavigationComponent,
      selectors: [["app-top-navigation"]],
      inputs: {
        active: "active"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 25,
      vars: 11,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], ["id", "navbar-list-4", 1, "collapse", "navbar-collapse", "justify-flex-end"], [1, "notifAnchor", 3, "routerLink"], [1, "notificationIconPointer"], [1, "material-icons", "icons"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "flex-even"], [1, "userName"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngIf"], [1, "nav-item"], [1, "", 3, "routerLink"], ["href", "#", 1, "dropdown-item", 3, "click"]],
      template: function TopNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Expense Split Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TopNavigationComponent_li_7_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " notifications_active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " person ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TopNavigationComponent_a_24_Template, 2, 0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Hey, ", ctx.isUserDataStored == null ? null : ctx.isUserDataStored.firstName, " ", ctx.isUserDataStored == null ? null : ctx.isUserDataStored.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".userName[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  color: #fff;\n  margin: 10px 15px;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  padding: 0 20px;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%] {\n  color: #313131;\n  padding: 5px 15px;\n}\n\na.notifAnchor[_ngcontent-%COMP%] {\n  position: relative;\n}\n\na.notifAnchor[_ngcontent-%COMP%]   .notificationIconPointer[_ngcontent-%COMP%] {\n  background-color: #69ce1e;\n  color: #313131;\n  border-radius: 50%;\n  padding: 1px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  position: absolute;\n  top: -7px;\n  left: -7px;\n  font-size: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NyaWhhcmkvRG9jdW1lbnRzL2V4cGVuc2Utc3BsaXQvc3BsaXQtY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3RvcC1uYXZpZ2F0aW9uL3RvcC1uYXZpZ2F0aW9uL3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC90b3AtbmF2aWdhdGlvbi90b3AtbmF2aWdhdGlvbi90b3AtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyTmFtZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gYXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5kcm9wZG93bi1pdGVte1xuICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG5cbmEubm90aWZBbmNob3J7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLm5vdGlmaWNhdGlvbkljb25Qb2ludGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWNlMWU7XG4gICAgY29sb3I6ICMzMTMxMzE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogLTdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG59IiwiLnVzZXJOYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmRyb3Bkb3duLWl0ZW0ge1xuICBjb2xvcjogIzMxMzEzMTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbmEubm90aWZBbmNob3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5hLm5vdGlmQW5jaG9yIC5ub3RpZmljYXRpb25JY29uUG9pbnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OWNlMWU7XG4gIGNvbG9yOiAjMzEzMTMxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogLTdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-top-navigation",
          templateUrl: "./top-navigation.component.html",
          styleUrls: ["./top-navigation.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_helpers_services_core_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"]
        }, {
          type: _app_helpers_services_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _helpers_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found/page-not-found.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found/page-not-found.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent(location) {
        var _this19 = this;

        _classCallCheck(this, PageNotFoundComponent);

        this.location = location;

        this.goBack = function () {
          _this19.location.back();
        };
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 18,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "mx-auto", 2, "margin-top", "20vh"], [1, "card", "border-info", "cardBorder"], [1, "card-body", "text-center"], [1, "text-center"], [2, "color", "red"], [1, "card-footer", "text-center"], [1, "col-md-12", "control"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You are looking for something that doesn't exist.404!!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Error 404 :( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_16_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Go back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-page-not-found",
          templateUrl: "./page-not-found.component.html",
          styleUrls: ["./page-not-found.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
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
      production: false,
      BASE_URL: "https://fierce-stream-20585.herokuapp.com/",
      API_VERSION: 'api/v1/',
      SUB_PATH: {
        GROUP: 'group/',
        EXPENSE: 'expense/'
      },
      APIS: {
        SIGNUP: 'signup',
        SIGNIN: 'login',
        FORGOTPASSWORD: 'resetPassword',
        RESETPASSWORD: 'updatePassword',
        LOGOUT: 'logout',
        CREATEGROUP: 'group/createGroup',
        DELETE: 'delete',
        DETAILS: 'details',
        UPDATEGROUP: 'updateGroup',
        CREATEEXPENSE: 'createExpense',
        UPDATEEXPENSE: 'updateExpense',
        EXPENSE_DETAILS: 'details',
        LIST: 'list',
        NOTIFICATIONS: 'notifications',
        UPDATE: 'update'
      }
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
    /*! /home/srihari/Documents/expense-split/split-client/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map