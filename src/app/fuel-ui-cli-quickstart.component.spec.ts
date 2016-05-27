import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FuelUiCliQuickstartAppComponent } from '../app/fuel-ui-cli-quickstart.component';

beforeEachProviders(() => [FuelUiCliQuickstartAppComponent]);

describe('App: FuelUiCliQuickstart', () => {
  it('should create the app',
      inject([FuelUiCliQuickstartAppComponent], (app: FuelUiCliQuickstartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fuel-ui-cli-quickstart works!\'',
      inject([FuelUiCliQuickstartAppComponent], (app: FuelUiCliQuickstartAppComponent) => {
    expect(app.title).toEqual('fuel-ui-cli-quickstart works!');
  }));
});
