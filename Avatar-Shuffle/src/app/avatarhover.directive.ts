import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvatarhover]'
})
export class AvatarhoverDirective {

  @Input('appAvatarhover') backgroundColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseenter') onMouseEnter() {
    this.hoverEffect(this.backgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverEffect(null);
  }

  private hoverEffect(color: string){
    let element = this.el.nativeElement;
    this.renderer.setStyle(element, 'backgroundColor', color);
   }

}
