import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'me-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
