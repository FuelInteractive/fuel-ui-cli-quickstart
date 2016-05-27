import { FuelUiCliQuickstartPage } from './app.po';

describe('fuel-ui-cli-quickstart App', function() {
  let page: FuelUiCliQuickstartPage;

  beforeEach(() => {
    page = new FuelUiCliQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fuel-ui-cli-quickstart works!');
  });
});
