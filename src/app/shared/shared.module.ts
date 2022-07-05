import { IsLoginDirective } from './directives/isLogin';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [IsLoginDirective],
  imports: [
    CommonModule
  ],
  exports: [
    IsLoginDirective
  ]
})
export class SharedModule { }
