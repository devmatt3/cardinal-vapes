// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA5PilRp2hyevWw5uOWmbBKf5ezK5PQiaY",
    authDomain: "cardinal-vapes.firebaseapp.com",
    databaseURL: "https://cardinal-vapes.firebaseio.com",
    projectId: "cardinal-vapes",
    storageBucket: "cardinal-vapes.appspot.com",
    messagingSenderId: "240617817101"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
