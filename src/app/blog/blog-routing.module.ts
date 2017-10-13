import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { RouterEntryPoints } from '../shared';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: RouterEntryPoints.BLOG,
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent,
        children: [
          {
            path: ':id',
            component: BlogEntryComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
