import { BlogService } from './../blog.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'me-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {

  public get blogEntryListItems() {
    return this.blogService.getBlogEntryIds()
      .map(id => ({
          link: id,
          title: this.blogService.getBlogEntryData(id).shortTitle
      }));
  }

  constructor(private blogService: BlogService) {
  }

}
