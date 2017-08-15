import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogEntryComponent } from './blog/blog-entry.component';
import { BlogService } from './blog/blog.service';
import { BLOG_DATA } from './app-tokens';
import { BlogEntryDataComponent } from './blog/data/blog-entry-data.component';
import blogData from './blog/data/blog-metadata.generated.json';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    BlogEntryComponent,
    BlogEntryDataComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BlogService,
    { provide: BLOG_DATA, useValue: blogData }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
