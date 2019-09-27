import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Directives are mainly used to change the behaviour, Structure of the DOM
@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        el.nativeElement.style.backgroundColor = 'red';
    }
}
