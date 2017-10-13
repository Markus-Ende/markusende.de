/**
 * Interface of BlogDataService
 */
export abstract class BlogDataService {
  public getBlogEntryData: (id: string) => BlogEntryMetadata;

  public getBlogEntryIds: () => Array<string>;
}
