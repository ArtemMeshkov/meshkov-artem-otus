import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountDownComponent } from './timer-count-down.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    CountDownComponent
  ],
  exports: [
    CountDownComponent,
  ]
})
export class CountDownModule {}
