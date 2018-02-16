import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
    selector: 'me-art',
    template: `<pre @enterAnimation>

            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


                                                                                                                                                    |||||||||||||||||||||||
                                                                                                                                                    |||||||||||||||||||||||
                                                                                                                                                    |||||             |||||
                                                                                                                                                    ||||| <a href="https://de.wikipedia.org/wiki/Brutalismus">Brutal schön</a> |||||
                                                                                                                                                    |||||             |||||
                                                                                                                                                    |||||             |||||
                                                                                                                                                    |||||||||||||||||||||||
                                                                                                                                                    |||||||||||||||||||||||







______________
______________
______________
______________
______________
______________
______________










                                                                                                                                   /////////
                                                                                                                                   /////////
                                                                                                                                   /////////
                                                                                                                                \\\\\\\/////////
                                                                                                                                \\\\\\\/////////
                                                                                                                                \\\\\\\/////////
                                                                                                                                \\\\\\\\\\\\\\\\
                                                                                                                                \\\\\\\\\\\\\\\\
                                                                                                                                \\\\\\\\\\\\\\\\
                                                                                                                                \\\\\\\\\\\\\\\\
                                                                                                                                \\\\\\\\\\\\\\\\
                                                                                                                                \\\\\\\\\\\\\\\\
</pre>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('enterAnimation', [
          transition(':enter', [
            // query('pre', [
              style({ opacity: 0, transform: 'scale(2)' }),
                  animate('1s ease', style({ opacity: 1, transform: 'scale(1)'}))
            // ])
          ])
        ])
      ]
})
export class ArtComponent {
}
