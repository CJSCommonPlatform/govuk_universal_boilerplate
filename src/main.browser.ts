


/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';


// Application
import {App, APP_PROVIDERS} from './app';
import {routes} from './app/app.routes';

// you must return bootstrap for client.ts
export function ngApp(initialHmrState?: any) : Promise<any> {
  return bootstrap(App, [
    ...HTTP_PROVIDERS,
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
    provideRouter(routes)
  ])
  .then(decorateComponentRef)
  .catch(err => console.error(err));
}


/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(ngApp, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => ngApp());
}
