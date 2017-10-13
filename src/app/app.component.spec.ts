import { NavigationModule } from './navigation/navigation.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should be creatable', () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavigationModule
      ],
      declarations: [
        AppComponent
      ]
    });
    expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy();
  });
});
