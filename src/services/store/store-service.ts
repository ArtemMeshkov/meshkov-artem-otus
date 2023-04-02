import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { Word } from '../../data/interfaces/translator'

const win = window as any;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private language = 'ru|eng';

  private localStorage = win.localStorage;
  constructor() {
  }

  getDictFromStorage(): Word[] {
    const arr = JSON.parse(this.localStorage.getItem(this.language));
    return Array.isArray(arr) ? arr : [];
  }

  addDictItems(dictItems: Word[]) {
    const dict = this.getDictFromStorage();
    const resDictionary = dictItems
        .filter(item => !dict.find(({word}) => word === item.word));
    dict.unshift(...resDictionary);
        
    this.localStorage.setItem(this.language, JSON.stringify(dict));
  }
}