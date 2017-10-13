import { BlogDataService, IBlogDataService } from './blog-data';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService implements IBlogDataService {

  constructor(private blogDataService: BlogDataService) {
  }

  public getBlogEntryData(id: string): BlogEntryMetadata {
    return this.blogDataService.getBlogEntryData(id);
  }

  public getBlogEntryIds(): string[] {
    return this.blogDataService.getBlogEntryIds();
  }

}
