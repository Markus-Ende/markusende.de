import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from './blog.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const nullBlogEntryMetadata: BlogEntryMetadata = {
  id: '',
  created: '',
  lastModified: '',
  shortTitle: '',
  fullTitle: '',
  state: '',
};

@Component({
  selector: 'me-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogEntryComponent implements OnInit {
  private id: string | null;
  private readonly blogEntryDataSubject = new BehaviorSubject<BlogEntryMetadata>(nullBlogEntryMetadata);
  public readonly blogEntryData$ = this.blogEntryDataSubject.asObservable();
  public get blogEntryId(): string | null {
    return this.id;
  }

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idParamToBlogEntryDataOrNull = (params: ParamMap) => {
      const blogEntryId = params.get('id');
      this.id = blogEntryId;
      let blogEntryData: BlogEntryMetadata | null = null;
      if (blogEntryId !== null) {
        try {
          blogEntryData = this.blogService.getBlogEntryData(blogEntryId);
        } catch (e) {
          console.error('Could not retrieve blog data: ', e);
        }
      }
      return blogEntryData;
    };

    this.route.paramMap
      .map(idParamToBlogEntryDataOrNull)
      .subscribe((blogEntryData: BlogEntryMetadata | null) =>
        this.blogEntryDataSubject.next(blogEntryData === null ? nullBlogEntryMetadata : blogEntryData)
      );
  }


}
