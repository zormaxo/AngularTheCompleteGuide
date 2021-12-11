import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;
  // dropdown;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  // ngOnInit(): void {
  //   let self = this;
  //   document.getElementsByTagName('body')[0].addEventListener('click', function (evt) {
  //     if (evt.target != self.elementRef.nativeElement) {
  //       if (self.isOpen) {
  //         self.isOpen = false;
  //         const dropdown = self.elementRef.nativeElement.nextElementSibling;
  //         self.renderer.removeClass(dropdown, 'show');
  //       }
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   this.dropdown = this.elementRef.nativeElement.nextElementSibling;
  //   document.getElementsByTagName('body')[0].addEventListener('click', (evt) => {
  //     if (evt.target != this.elementRef.nativeElement) {
  //       if (this.isOpen) {
  //         this.isOpen = false;
  //         this.renderer.removeClass(this.dropdown, 'show');
  //       }
  //     }
  //   });
  // }

  /*   @HostListener('click') toggleOpen() {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    // const dropdown = document.querySelector('.dropdown-menu'); 
    // const dropdown = document.querySelector('.mmm'); 
    // const dropdown = document.getElementsByClassName('dropdown-menu');
    // const dropdown = this.elementRef.nativeElement.getElementsByClassName('dropdown-menu');/ içinde değil
    // const dropdown = this.elementRef.nativeElement.querySelector('.mmm');

    if (!this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
      this.renderer.setAttribute(dropdown, 'data-bs-popper', 'none');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }

    // if (dropdown.classList.contains('show')) {
    //   this.renderer.removeClass(dropdown, 'show');
    // } else {
    //   this.renderer.addClass(dropdown, 'show');
    // }

    // document.addEventListener('click', (event) => {
    //   if (event.target !== this.elementRef.nativeElement) {
    //     this.isOpen = false;
    //     this.renderer.removeClass(dropdown, 'show');
    //   }
    // });

    this.isOpen = !this.isOpen;
  } */

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;

    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    if (this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
      this.renderer.setAttribute(dropdown, 'data-bs-popper', 'none');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }
  }
}
