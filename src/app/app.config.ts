import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import Material from '@primeng/themes/material';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
          preset: Material,
          options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
            cssLayer: {
              name: 'primeng',
              order: 'app-styles, tailwind-base, primeng, tailwind-utilities'
          }
        }
        },
        ripple: true
    }) 
  ]
};
