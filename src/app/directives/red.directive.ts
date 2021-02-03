import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    //1st way to style
    // console.log(element);
    // console.log(element.nativeElement);
    // element.nativeElement.style.background = 'red';

    //2nd way
    // renderer.setStyle(element.nativeElement, 'background', 'red');
  }
  @HostListener('mouseover')
  setBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'red');
    // this.renderer.setAttribute(this.element.nativeElement, 'id', 'target');
    // this.renderer.addClass(this.element.nativeElement, 'xxx');
  }
  @HostListener('mouseleave')
  detachBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  }

}
