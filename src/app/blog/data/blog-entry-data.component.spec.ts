import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryDataComponent } from './blog-entry-data.component';

describe('BlogEntryDataComponent', () => {
  let component: BlogEntryDataComponent;
  let fixture: ComponentFixture<BlogEntryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryDataComponent ]
    });
    fixture = TestBed.createComponent(BlogEntryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
