// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
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

export const URL = {
  serv: '127.0.0.1:8000',
  domaine: 'http://127.0.0.1:8000',
  token: '/api/token/',
  auth: {
    verb: '/api/',
    login: 'login',
    register: 'register',
    reset: 'sendPasswordResetLink',
    changePassword: 'resetPassword'
  },
  wine: {
    verb: '/wines/',
    filter_name: '?name__icontains=',
  },
  restaurant: {
    verb: '/restaurants/',
    filter_name: '?name__icontains=',
    filter_npa: '?code_postal=',
  },
  vintage: {
    verb: '/vintages/',
    filter_name: '?name__icontains=',
  },
  rate: {
    verb: '/rates/',
    filter_name: '?name__icontains=',
  },
  concoursRate: {
    verb: '/concoursrates/',
    filter_name: '?name__icontains=',
  },
  user: {
    verb: '/users/',
    id: '/user_id',
  },
}