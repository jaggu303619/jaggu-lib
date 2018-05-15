import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescTextComponent } from './desc-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DescTextComponent],
  exports:[DescTextComponent]
})
export class DescTextModule { }
