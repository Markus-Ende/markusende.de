import { TestBed } from '@angular/core/testing';
import { BlogDataComponent } from './blog-data.component';

describe('BlogDataComponent', () => {
  it('should be creatable', () => {
    TestBed.configureTestingModule({
      declarations: [ BlogDataComponent ]
    });
    expect(TestBed.createComponent(BlogDataComponent).componentInstance).toBeTruthy();
  });
});
