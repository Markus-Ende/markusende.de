import { BlogDataService } from '../blog-data';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {

  public get blogEntryListItems() {
    return this.blogService.getBlogEntryIds()
      .map(id => ({
          routerLink: id,
          title: this.blogService.getBlogEntryData(id).shortTitle
      }));
  }

  constructor(private blogService: BlogDataService) {
  }

}
