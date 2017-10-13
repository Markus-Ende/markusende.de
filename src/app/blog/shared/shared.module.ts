import { BlogDataComponent } from './blog-data/blog-data.component';
import { BlogService } from './blog.service';
import { BlogDataModule } from './blog-data/blog-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BlogDataModule
  ],
  declarations: [],
  providers: [BlogService],
  exports: [BlogDataComponent]
})
export class SharedModule { }
