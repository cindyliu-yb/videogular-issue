import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'simple-player',
    styles: CONFIG_IS_FUSE ? null : [require('./simple-player.component.scss').toString()],
    template: require('./simple-player.component' + CONFIG_TEMPLATE_SUFFIX),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplePlayerComponent {

}