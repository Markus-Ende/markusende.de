import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
