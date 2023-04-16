import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
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
import { MatInputModule } from '@angular/material/input';
import { AddWordModule } from 'src/components/add-word/add-word.module';
import { isPlatformBrowser } from '@angular/common';
import { CountDownModule } from 'src/components/timer-count-down/timer-count-down.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataHttpModule.forRoot(),
    MatTabsModule,
    RecentlyAddedPageModule,
    GoPageModule,
    AddWordModule,
    SettingsPageModule,
    CountDownModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
        'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
