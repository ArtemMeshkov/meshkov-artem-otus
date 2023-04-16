import { Injectable } from '@angular/core';
const storageKey = 'translate-app-config';

export interface Config {
  wordsInTrainingQuantity: number;
  trainingSessionsNecessary: number;
  trainingLessonWordsQuantity: number;
  language: 'ru' | 'eng';
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
      language: 'ru',
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