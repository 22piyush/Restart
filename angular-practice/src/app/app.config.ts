import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideStore } from '@ngrx/store'; // or './routes' depending on your file name
import { authInterceptor } from './interceptors/auth-interceptor';
import { withInterceptors } from '@angular/common/http';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideBrowserGlobalErrorListeners(),
    // provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    // provideStore(),
  ],
};
