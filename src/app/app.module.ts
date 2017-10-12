import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
