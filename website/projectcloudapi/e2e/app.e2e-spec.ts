import { ProjectcloudapiPage } from './app.po';

describe('projectcloudapi App', () => {
  let page: ProjectcloudapiPage;

  beforeEach(() => {
    page = new ProjectcloudapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
