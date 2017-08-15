import { BlogEntryDataComponent } from './data/blog-entry-data.component';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogEntryComponent } from './blog-entry.component';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs/Observable';

describe('BlogEntryComponent', () => {

  it('should be creatable', () => {
    TestBed.configureTestingModule({
      declarations: [BlogEntryComponent, BlogEntryDataComponent],
      providers: [{ provide: BlogService, useValue: {} },
      {
        provide: ActivatedRoute, useValue: {
          params: Observable.of({ id: 'test' })
        }
      }]
    });
    expect(TestBed.createComponent(BlogEntryComponent).componentInstance).toBeTruthy();
  });

  it('should bind ', () => {
    TestBed.configureTestingModule({
      declarations: [BlogEntryComponent, BlogEntryDataComponent],
      providers: [{ provide: BlogService, useValue: {} },
      {
        provide: ActivatedRoute, useValue: {
          params: Observable.of({ id: 'test' })
        }
      }]
    });
    expect(TestBed.createComponent(BlogEntryComponent).componentInstance).toBeTruthy();
  });

});
