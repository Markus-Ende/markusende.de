import { BlogDataService } from './blog-data.service';


describe('BlogDataService', () => {

  it('should be creatable', () => {
    expect(new BlogDataService([])).toBeTruthy();
  });

  describe('getBlogEntryData', () => {

    it('should throw error if given id does not exist', () => {
      expect(() => new BlogDataService([]).getBlogEntryData('TESTID')).toThrowError(/'TESTID' does not exist/);
    });

    it('should get blog entry', () => {
      const blogEntry: BlogEntryMetadata = <any>{ id: 'TESTID'};
      const blogService = new BlogDataService([blogEntry]);
      expect(blogService.getBlogEntryData('TESTID')).toEqual(blogEntry);
    });

  });

  describe('getBlogEntryIds', () => {

    it('should get all blog enty IDs', () => {
      const blogService = new BlogDataService([
        <BlogEntryMetadata>{ id: '1' },
        <BlogEntryMetadata>{ id: '2' },
        <BlogEntryMetadata>{ id: '3' }]);
      expect(blogService.getBlogEntryIds()).toEqual(['1', '2', '3']);
    });

  });
});
