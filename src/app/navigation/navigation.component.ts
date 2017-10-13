import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterEntryPoints } from '../shared';

@Component({
  selector: 'me-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  public readonly RouterEntryPoints = RouterEntryPoints;
}
