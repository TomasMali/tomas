// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:     {
    apiKey: "AIzaSyDZG2kqzzaOXBgGUU_fXvLZ_JdFbdBcKFY",
    authDomain: "user-service-b9b59.firebaseapp.com",
    databaseURL: "https://user-service-b9b59.firebaseio.com",
    projectId: "user-service-b9b59",
    storageBucket: "",
    messagingSenderId: "578220639623"
  },
  themes: "https://bootswatch.com/4/sketchy/bootstrap.min.css"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
