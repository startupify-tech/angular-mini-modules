import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    DropdownDirective,
  ],
  exports: [
    DropdownDirective,
  ]
})

export class SharedModule{
  
}
