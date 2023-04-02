import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AddWordComponent } from './add-word.component';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatLegacyButtonModule,
  ],
  declarations: [
    AddWordComponent
  ],
})
export class AddWordModule {}
