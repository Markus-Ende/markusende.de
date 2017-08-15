import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmeComponent } from './aboutme.component';

describe('AboutmeComponent', () => {
  it('should be creatable', () => {
    TestBed.configureTestingModule({
      declarations: [AboutmeComponent]
    });
    expect(TestBed.createComponent(AboutmeComponent).componentInstance).toBeTruthy();
  });
});
