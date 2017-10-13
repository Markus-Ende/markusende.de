import { BlogService } from '../shared';
import { BlogDataComponent } from '../shared/blog-data/blog-data.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { BlogEntryComponent } from './blog-entry.component';
import { Observable } from 'rxjs/Observable';
import { mock, instance, when } from 'ts-mockito';

describe('BlogEntryComponent', () => {

  it('should be creatable via DI', () => {
    TestBed.configureTestingModule({
      declarations: [BlogEntryComponent, BlogDataComponent],
      providers: [
        { provide: BlogService, useValue: {} },
        { provide: ActivatedRoute, useValue: {} }
      ]
    });
    expect(TestBed.createComponent(BlogEntryComponent).componentInstance).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set blogEntryId according to id param', () => {
      const activatedRouteMock = mock(ActivatedRoute);
      when(activatedRouteMock.paramMap).thenReturn(Observable.of(convertToParamMap({id: 'test' })));
      const blogEntryComponent = new BlogEntryComponent(instance(mock(BlogService)), instance(activatedRouteMock));
      blogEntryComponent.ngOnInit();
      expect(blogEntryComponent.blogEntryId).toBe('test');
    });

  });

});
