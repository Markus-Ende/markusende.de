import { BlogDataService } from './blog-data.service';
import { IBlogDataService } from './blog-data.service.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDataComponent } from './blog-data.component';
import { BLOG_DATA } from './tokens';
import blogData from './generated/blog-metadata.generated.json';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogDataComponent],
  providers: [
    // { provide: IBlogDataService, useClass: BlogDataService },
    BlogDataService,
    { provide: BLOG_DATA, useValue: blogData }],
  exports: [BlogDataComponent]
})
export class BlogDataModule { }
