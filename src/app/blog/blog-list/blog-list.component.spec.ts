import { RouterTestingModule } from '@angular/router/testing';
import { BlogDataService } from '../blog-data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () => {

  it('should be creatable', () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BlogListComponent],
      providers: [{ provide: BlogDataService, useValue: {} }]
    });
    expect(TestBed.createComponent(BlogListComponent).componentInstance).toBeTruthy();
  });

});
