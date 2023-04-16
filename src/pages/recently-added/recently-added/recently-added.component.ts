import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Word } from 'src/data/interfaces/translator';
import { StorageService } from 'src/services/store/store-service';
import { MatDialog } from '@angular/material/dialog';
import { AddWordComponent } from 'src/components/add-word/add-word.component';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
  constructor(readonly storageService: StorageService, readonly dialog: MatDialog){}

  readonly items$ = new BehaviorSubject<Word[]>([]);
  ngOnInit(): void {
      this.items$.next(this.storageService.getDictFromStorage());
  }

  addToDictionary(items: Word[]) {
    this.storageService.addDictItems(items);
    this.items$.next(this.storageService.getDictFromStorage());
  }

  openAddWord() {
    this.dialog.open(AddWordComponent, {
      width: '60vw',
      height: '60vh',
    })
    .afterClosed()
    .pipe(take(1))
    .subscribe((res: Word) => {
      if (res) {
        this.addToDictionary([res]);
      }
    })
  }
}
