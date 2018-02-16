import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticlesModule } from '../articles/articles.module';
import { ArtComponent } from '../art/art.component';
import { HelloComponent } from '../hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ArticlesModule
  ],
  declarations: [
    HomeComponent,
    ArtComponent,
    HelloComponent]
})
export class HomeModule { }
