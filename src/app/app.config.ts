import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import Lara from '@primeng/themes/lara';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideAnimations(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'reset, primeng'
          },
          darkModeSelector: 'none',
          
        }
      }
    })
  ]
};

function providePrimeNG(arg0: { ripple: boolean; theme: { preset: any; options: { cssLayer: { name: string; order: string; }; darkModeSelector: string; }; }; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
