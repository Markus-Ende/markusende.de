import { AboutmeComponent } from './aboutme.component';
import { RouterEntryPoints} from '../shared';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: RouterEntryPoints.ABOUTME,
    component: AboutmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutmeRoutingModule { }
