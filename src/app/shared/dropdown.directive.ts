import { Directive, HostBinding, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target']) openDropdown(element: any) {

    this.isOpen = !this.isOpen;
    // using element ref
    let dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    // using renderer
    // let dropdownMenu = this.renderer.nextSibling(element);
    if (dropdownMenu) {
      if(this.isOpen)
      this.renderer.addClass(dropdownMenu, 'show');
      else
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  }
}
