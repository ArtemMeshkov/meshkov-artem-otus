import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataHttpModule } from 'src/data/data-http.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatListModule } from '@angular/material/list';
import { RecentlyAddedPageModule } from 'src/pages/recently-added/recently-added/recently-added.module';
import { GoPageModule } from 'src/pages/go/go-page/go-page.module';
import { SettingsPageModule } from 'src/pages/settings/settings-page/settings.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DataHttpModule.forRoot(),
    MatTabsModule,
    RecentlyAddedPageModule,
    GoPageModule,
    SettingsPageModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
