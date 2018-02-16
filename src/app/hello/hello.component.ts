import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, animate, style, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'me-hello',
  templateUrl: './hello.component.html',
  styles: ['pre {margin: 0;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerAnimation', [
      transition(':enter', [
        query('span,li,a, pre', [
          style({ opacity: 0, transform: 'translateY(-25px)' }),
          stagger(100,
            group([
              animate('1s ease', style({ opacity: 1 })),
              animate('500ms ease', style({ transform: 'translateY(0)' }))
            ])
          )
        ])
      ])
    ])
  ]
})
export class HelloComponent {
}
