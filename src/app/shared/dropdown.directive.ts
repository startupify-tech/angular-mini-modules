import { Directive, HostBinding, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event.target']) openDropdown(element: any) {
    this.isOpen = !this.isOpen;
    // using element ref
    if (this.isOpen) {
      this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event.target']) close(targetElement: any) {
    let inside: boolean = this.elementRef.nativeElement.contains(targetElement);
    if (!inside) {
      this.isOpen = false;
      this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
  }
}
