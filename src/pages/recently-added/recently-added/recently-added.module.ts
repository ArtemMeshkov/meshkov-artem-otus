import { NgModule } from '@angular/core';
import { RecentlyAddedComponent } from './recently-added.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AddWordModule } from 'src/components/add-word/add-word.module';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';

@NgModule({
  imports: [
    CommonModule,
    AddWordModule,
    MatLegacyButtonModule,
    MatListModule,
  ],
  declarations: [
    RecentlyAddedComponent
  ],
  exports: [
    RecentlyAddedComponent
  ]
})
export class RecentlyAddedPageModule {}
