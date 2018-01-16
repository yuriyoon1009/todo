import { V6realrealPage } from './app.po';

describe('v6realreal App', function() {
  let page: V6realrealPage;

  beforeEach(() => {
    page = new V6realrealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
