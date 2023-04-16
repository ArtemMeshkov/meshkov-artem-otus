import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoPageComponent } from 'src/pages/go/go-page/go-page.component';
import { RecentlyAddedComponent } from 'src/pages/recently-added/recently-added/recently-added.component';
import { SettingsPageComponent } from 'src/pages/settings/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/last-added',
  },
  {
    path: 'excercises',
    component: GoPageComponent
  },
  {
    path: 'last-added',
    component: RecentlyAddedComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
