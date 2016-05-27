export class FuelUiCliQuickstartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fuel-ui-cli-quickstart-app h1')).getText();
  }
}
