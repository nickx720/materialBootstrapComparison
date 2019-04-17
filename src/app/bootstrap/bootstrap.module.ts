import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule, AccordionModule, BsDropdownModule, BsDatepickerModule, ButtonsModule, ProgressbarModule 
 } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  exports: [
    AccordionModule,
    BsDropdownModule,
    BsDatepickerModule,
    ButtonsModule,
    ProgressbarModule
  ]
})
export class BootstrapModule { }
