import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarProductCardComponent } from './similar-product-card/similar-product-card.component';



@NgModule({
  declarations: [SimilarProductCardComponent],
  imports: [
    CommonModule
  ],
  exports : [
    SimilarProductCardComponent
  ]
})
export class SharedComponentsModule { }
