import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogEntryComponent } from './blog/blog-entry.component';

const routes: Routes = [
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'blog',
    component: BlogListComponent
  },
  {
    path: 'blog-entry/:id',
    component: BlogEntryComponent
  },
  {
    path: '',
    redirectTo: '/aboutme',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
