import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule, AccordionModule  } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    AccordionModule,
  ]
})
export class BootstrapModule { }
