import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FakeTwitterAppComponent } from '../app/fake-twitter.component';

beforeEachProviders(() => [FakeTwitterAppComponent]);

describe('App: FakeTwitter', () => {
  it('should create the app',
      inject([FakeTwitterAppComponent], (app: FakeTwitterAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fake-twitter works!\'',
      inject([FakeTwitterAppComponent], (app: FakeTwitterAppComponent) => {
    expect(app.title).toEqual('fake-twitter works!');
  }));
});
