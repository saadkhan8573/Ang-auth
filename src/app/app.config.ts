import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { routes } from './app.routes';
import { todoReducer } from './store/todo/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ todo: todoReducer }),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideTanStackQuery(new QueryClient()),
    // importProvidersFrom(
    //   NgIconsModule.withIcons({ heroPencil, heroTrash, featherAirplay }) // Register icons here
    // ),
  ],
};
