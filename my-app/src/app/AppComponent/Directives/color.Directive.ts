import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[elementColor]',
})
export class ColorDirective {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.backgroundColor = '#36454F';
  }
}
