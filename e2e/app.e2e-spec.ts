import { FoolshopNg2Page } from './app.po';

describe('foolshop-ng2 App', function() {
  let page: FoolshopNg2Page;

  beforeEach(() => {
    page = new FoolshopNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
