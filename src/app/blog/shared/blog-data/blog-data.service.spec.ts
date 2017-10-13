import { BlogDataServiceImpl } from './blog-data.service.impl';


describe('BlogDataService', () => {

  it('should be creatable', () => {
    expect(new BlogDataServiceImpl([])).toBeTruthy();
  });

  describe('getBlogEntryData', () => {

    it('should throw error if given id does not exist', () => {
      expect(() => new BlogDataServiceImpl([]).getBlogEntryData('TESTID')).toThrowError(/'TESTID' does not exist/);
    });

    it('should get blog entry', () => {
      const blogEntry: BlogEntryMetadata = <any>{ id: 'TESTID'};
      const blogService = new BlogDataServiceImpl([blogEntry]);
      expect(blogService.getBlogEntryData('TESTID')).toEqual(blogEntry);
    });

  });

  describe('getBlogEntryIds', () => {

    it('should get all blog enty IDs', () => {
      const blogService = new BlogDataServiceImpl([
        <BlogEntryMetadata>{ id: '1' },
        <BlogEntryMetadata>{ id: '2' },
        <BlogEntryMetadata>{ id: '3' }]);
      expect(blogService.getBlogEntryIds()).toEqual(['1', '2', '3']);
    });

  });
});
