import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Translate app';

  navLinks = [
    {
      path: '/last-added',
      label: 'Последние добавленные слова'
    },
    {
      path: '/excercises',
      label: 'Упражнения',
    },
    {
      path: '/settings',
      label: 'Настройки'
    }
  ]
}
