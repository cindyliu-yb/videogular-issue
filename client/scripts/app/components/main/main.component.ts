import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { SimplePlayerComponent } from '../../../ui/components/simple-player/simple-player.component';

@Component({
    selector: 'main',
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}