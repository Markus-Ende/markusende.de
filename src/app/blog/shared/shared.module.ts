import { BlogDataComponent } from './blog-data/blog-data.component';
import { BlogService } from './blog.service';
import { BlogServiceImpl } from './blog.service.impl';
import { BlogDataModule } from './blog-data/blog-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BlogDataModule
  ],
  providers: [
    { provide: BlogService, useClass: BlogServiceImpl }
  ],
  exports: [BlogDataComponent]
})
export class SharedModule { }
