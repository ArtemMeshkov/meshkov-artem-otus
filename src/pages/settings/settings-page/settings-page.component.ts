import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from 'src/services/configuration/configuration.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  constructor(private configService: ConfigService) {
    this.config = configService.get()
  }

  public config: Config;

  saveChanges() {
    this.configService.set(this.config);
  }

  discardChanges() {
    this.config = this.configService.get();
  }
}
