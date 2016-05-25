import { FakeTwitterPage } from './app.po';

describe('fake-twitter App', function() {
  let page: FakeTwitterPage;

  beforeEach(() => {
    page = new FakeTwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fake-twitter works!');
  });
});
