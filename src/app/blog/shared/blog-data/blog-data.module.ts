import { BlogDataService } from './blog-data.service';
import { BlogDataServiceImpl } from './blog-data.service.impl';
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
    { provide: BlogDataService, useClass: BlogDataServiceImpl },
    { provide: BLOG_DATA, useValue: blogData }],
  exports: [BlogDataComponent]
})
export class BlogDataModule { }
