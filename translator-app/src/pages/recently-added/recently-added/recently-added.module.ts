import { NgModule } from '@angular/core';
import { RecentlyAddedComponent } from './recently-added.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  declarations: [
    RecentlyAddedComponent
  ],
})
export class RecentlyAddedPageModule {}
