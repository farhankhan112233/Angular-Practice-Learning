import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elementColor]',
})
export class ColorDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    //     this.element.nativeElement.style.color = 'white';
    //     this.element.nativeElement.style.backgroundColor = '#36454F';
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#36454F'
    );
  }
}
