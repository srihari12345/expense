// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: "http://localhost:3000/",
  API_VERSION: 'api/v1/',
  SUB_PATH: {
    GROUP: 'group/',
    EXPENSE:'expense/'
  },
  APIS: {
    SIGNUP: 'signup',
    SIGNIN: 'login',
    FORGOTPASSWORD: 'resetPassword',
    RESETPASSWORD:'updatePassword',
    LOGOUT:'logout',
    CREATEGROUP:'group/createGroup',
    DELETE: 'delete',
    DETAILS:'details',
    UPDATEGROUP:'updateGroup',
    CREATEEXPENSE:'createExpense',
    UPDATEEXPENSE:'updateExpense',
    EXPENSE_DETAILS:'details',
    LIST: 'list'
    
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
