import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailModalComponent } from './detail-modal/detail-modal.component';



@NgModule({
  declarations: [DetailModalComponent],
  exports: [
    DetailModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalsModule { }
