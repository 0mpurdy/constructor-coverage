import { Bootstrap4Page } from './app.po';

describe('bootstrap4 App', () => {
  let page: Bootstrap4Page;

  beforeEach(() => {
    page = new Bootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
