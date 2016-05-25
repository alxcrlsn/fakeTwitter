export class FakeTwitterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fake-twitter-app h1')).getText();
  }
}
