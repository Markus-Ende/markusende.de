import { Injectable, Inject } from '@angular/core';
import { BlogDataService } from './blog-data.service';
import { BLOG_DATA } from './tokens';

@Injectable()
export class BlogDataServiceImpl implements BlogDataService {

  constructor( @Inject(BLOG_DATA) private blogData: Array<BlogEntryMetadata>) {
  }

  public getBlogEntryData(id: string): BlogEntryMetadata {
    const blogEntryData = this.blogData.find((entry => entry.id === id));
    if (!blogEntryData) {
      throw new Error(`Could not find blog data, entry with id '${id}' does not exist`);
    } else {
      return blogEntryData;
    }
  }

  public getBlogEntryIds(): Array<string> {
    return this.blogData.map(entry => entry.id);
  }
}
