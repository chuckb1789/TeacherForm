import { ScotchFormAngular4Page } from './app.po';

describe('scotch-form-angular4 App', () => {
  let page: ScotchFormAngular4Page;

  beforeEach(() => {
    page = new ScotchFormAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
