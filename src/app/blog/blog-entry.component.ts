import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogDataService } from './blog-data';
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
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  private id: string | null;
  private readonly blogEntryData$$ = new BehaviorSubject<BlogEntryMetadata>(nullBlogEntryMetadata);
  public readonly blogEntryData$ = this.blogEntryData$$.asObservable();
  public get blogEntryId(): string | null {
    return this.id;
  }

  constructor(private blogService: BlogDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idParamToBlogEntryDataOrNull = (params: ParamMap) => {
      const blogEntryId = params.get('id');
      this.id = blogEntryId;
      let blogEntryData: BlogEntryMetadata | null = null;
      if (blogEntryId !== null) {
        try {
          blogEntryData = this.blogService.getBlogEntryData(blogEntryId);
        } catch (e) {
        }
      }
      return blogEntryData;
    };

    this.route.paramMap
      .map(idParamToBlogEntryDataOrNull)
      .subscribe((blogEntryData: BlogEntryMetadata | null) =>
        this.blogEntryData$$.next(blogEntryData === null ? nullBlogEntryMetadata : blogEntryData)
      );
  }

}
