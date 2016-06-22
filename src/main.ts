import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { FuelUiCliQuickstartAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(FuelUiCliQuickstartAppComponent, [
  provideForms(),
  disableDeprecatedForms()
]);

