import { BlogServiceImpl } from './blog.service.impl';
import { TestBed, inject } from '@angular/core/testing';
import { BlogDataServiceImpl } from './blog-data/blog-data.service.impl';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  it('should be creatable', () => {
    expect(new BlogServiceImpl(new BlogDataServiceImpl([]))).toBeTruthy();
  });

});
