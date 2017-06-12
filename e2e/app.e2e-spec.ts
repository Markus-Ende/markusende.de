import { MarkusendedePage } from './app.po';

describe('markusendede App', () => {
  let page: MarkusendedePage;

  beforeEach(() => {
    page = new MarkusendedePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Markus Ende');
  });
});
