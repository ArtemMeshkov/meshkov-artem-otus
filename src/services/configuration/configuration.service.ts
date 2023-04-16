import { Injectable } from '@angular/core';
import { Language } from 'src/data/translation/abstract';
const storageKey = 'translate-app-config';

export interface Config {
  wordsInTrainingQuantity: number;
  trainingSessionsNecessary: number;
  trainingLessonWordsQuantity: number;
  languageFrom: Language;
  languageTo: Language;
  timeToTrain: number; // время в минутах на упражнение
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: Config;

  constructor() {
    this.config = {
      wordsInTrainingQuantity: 36,
      trainingSessionsNecessary: 5,
      trainingLessonWordsQuantity: 5,
      languageFrom: 'ru',
      languageTo: 'eng',
      timeToTrain: 10,
    };
    const storage = localStorage.getItem(storageKey);
    if (storage) {
      try {
        this.config = JSON.parse(storage);
      } catch {}
    }
  }

  private store() {
    localStorage.setItem(storageKey, JSON.stringify(this.config));
  }

  public get(): Config {
    return Object.assign({}, this.config);
  }

  public set(config: Config) {
    this.config = config;
    this.store();
  }

}