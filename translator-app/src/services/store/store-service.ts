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

  getDictFromStorage(): Array<Word> {
    const arr = JSON.parse(this.localStorage.getItem(this.language));
    return arr instanceof Array ? arr : [];
  }

  addDictItems(dictItems: Array<Word>) {
    const dict = this.getDictFromStorage();
    from(dictItems)
      .pipe(
        filter(item => !dict.find(({word}) => word === item.word)),
        map(item => dict.unshift(item))
      ).subscribe(() => {
          this.localStorage.setItem(this.language, JSON.stringify(dict));
        })
  }
}