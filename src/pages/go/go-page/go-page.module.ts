import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoPageComponent } from './go-page.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { CountDownModule } from 'src/components/timer-count-down/timer-count-down.module';
import { TranslateWordModule } from 'src/components/translate-word/translate-word.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatInputModule,
    CountDownModule,
    TranslateWordModule,
  ],
  declarations: [
    GoPageComponent
  ],
})
export class GoPageModule {}
