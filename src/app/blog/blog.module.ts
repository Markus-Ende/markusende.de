import { BlogRoutingModule } from './blog-routing.module';
import { BlogDataModule } from './blog-data/blog-data.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogDataModule
  ],
  declarations: [
    BlogEntryComponent,
    BlogListComponent,
    BlogComponent]
})
export class BlogModule { }
