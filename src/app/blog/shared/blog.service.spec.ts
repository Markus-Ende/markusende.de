import { TestBed, inject } from '@angular/core/testing';
import { BlogDataService } from './blog-data/blog-data.service';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  it('should be creatable', () => {
    expect(new BlogService(new BlogDataService([]))).toBeTruthy();
  });

});
