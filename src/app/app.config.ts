import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { SiteConfigService } from './services/site-config.service';
import { firstValueFrom } from 'rxjs';

export function initConfig(configService: SiteConfigService) {
  return () => firstValueFrom(configService.load());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),

    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [SiteConfigService],
      multi: true
    }
  ]
};