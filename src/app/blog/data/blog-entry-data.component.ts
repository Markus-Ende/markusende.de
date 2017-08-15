import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BlogEntryId } from './blog-entry-id.enum.generated';

@Component({
  selector: 'me-blog-entry-data',
  templateUrl: './blog-data.generated.html',
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogEntryDataComponent {
  @Input()
  public blogEntryId: BlogEntryId;
}
