import { TestBed } from '@angular/core/testing';
import { SimplePlayerComponent } from './simple-player.component';

describe('Module: ui', () => {
    describe('Component: SimplePlayerComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [SimplePlayerComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(SimplePlayerComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});