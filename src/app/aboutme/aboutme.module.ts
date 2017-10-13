import { AboutmeComponent } from './aboutme.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeRoutingModule } from './aboutme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutmeRoutingModule
  ],
  declarations: [AboutmeComponent]
})
export class AboutmeModule { }
