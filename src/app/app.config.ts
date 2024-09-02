import {ApplicationConfig, InjectionToken} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

function getWindow(){
  const wnd   =window ;
  return wnd;
}
export const WINDOW_REF  = new InjectionToken<Window>("Browser Window Reference", {
  providedIn: 'root', factory: () => getWindow(),
});
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
