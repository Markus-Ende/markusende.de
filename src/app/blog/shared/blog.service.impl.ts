import { BlogDataService } from './blog-data';
import { BlogService } from './blog.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogServiceImpl implements BlogService {

  constructor(private blogDataService: BlogDataService) {
  }

  public getBlogEntryData(id: string): BlogEntryMetadata {
    return this.blogDataService.getBlogEntryData(id);
  }

  public getBlogEntryIds(): string[] {
    return this.blogDataService.getBlogEntryIds();
  }

}
