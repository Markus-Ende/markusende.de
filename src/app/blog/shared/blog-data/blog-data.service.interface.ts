export abstract class IBlogDataService {
  public getBlogEntryData: (id: string) => BlogEntryMetadata;

  public getBlogEntryIds: () => Array<string>;
}
