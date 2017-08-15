import { BlogService } from './blog.service';

describe('BlogService', () => {

  it('should be creatable', () => {
    expect(new BlogService([])).toBeTruthy();
  });

  describe('getBlogEntryData', () => {

    it('should throw error if given id does not exist', () => {
      expect(() => new BlogService([]).getBlogEntryData('TESTID')).toThrowError(/'TESTID' does not exist/);
    });

    it('should get blog entry', () => {
      const blogEntry: BlogEntryData = { id: 'TESTID', heading: '', content: '' };
      const blogService = new BlogService([blogEntry]);
      expect(blogService.getBlogEntryData('TESTID')).toEqual(blogEntry);
    });

  });

  describe('getBlogEntryIds', () => {

    it('should get all blog enty IDs', () => {
      const blogService = new BlogService([
        { id: '1', heading: '', content: '' },
        { id: '2', heading: '', content: '' },
        { id: '3', heading: '', content: '' }]);
      expect(blogService.getBlogEntryIds()).toEqual(['1', '2', '3']);
    });

  });
});
