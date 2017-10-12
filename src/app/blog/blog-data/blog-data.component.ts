import { Component, Input, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { BlogEntryId } from './generated/blog-entry-id.enum.generated';

@Component({
  selector: 'me-blog-data',
  templateUrl: './generated/blog-data.generated.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BlogDataComponent {
  @Input()
  public blogEntryId: BlogEntryId;
}
