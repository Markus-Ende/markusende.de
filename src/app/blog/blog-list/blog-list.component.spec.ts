import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../shared';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () => {

  it('should be creatable', () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BlogListComponent],
      providers: [{ provide: BlogService, useValue: {} }]
    });
    expect(TestBed.createComponent(BlogListComponent).componentInstance).toBeTruthy();
  });

});
