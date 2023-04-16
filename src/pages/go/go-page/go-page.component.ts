import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, take, takeUntil } from 'rxjs';
import { Word } from 'src/data/interfaces/translator';
import { TranslatorHttpService } from 'src/data/translation/abstract';
import { TranslatorHttpServiceImpl } from 'src/data/translation/translator-http-service';
import { Config, ConfigService } from 'src/services/configuration/configuration.service';
import { StorageService } from 'src/services/store/store-service';
import { TranslateService } from 'src/services/translate/translate-service';

@Component({
  selector: 'go-page',
  templateUrl: './go-page.component.html',
  styleUrls: ['./go-page.component.scss'],
})
export class GoPageComponent implements OnInit {
    constructor(readonly translationService: TranslateService, readonly storage: StorageService, readonly configService: ConfigService, readonly modalService: MatDialog) {
      this.config = configService.get();
    }
    config!: Config;
    
    wordsToTranslate: string[] = [];
    wordPosition = 0;
    timeToGo = 0;

    translatedWord = '';

    private excerciseStopped$ = new Subject();
    private excerciseFinished$ = new Subject();

    ngOnInit(): void {
        const words: string[] = [];
        this.storage.getDictFromStorage().forEach(word => {
            const wordsSplitted = word.word.split(/[;,]\s*|\s+/);
            words.push(...wordsSplitted)
        });

        this.wordsToTranslate = words;
        this.timeToGo = this.config.timeToTrain;
        this.excerciseFinished$.pipe().subscribe(() => {
          if (this.wordPosition === this.wordsToTranslate.length) {
            window.alert('Поздравляем, вы успешно прошли упражнение')
          }
        })
    }
    
    translate({ text = '', translation = '' }) {
      const fromLang = this.config.languageFrom;
      const toLang = this.config.languageTo;
      this.translationService.getWord(text, fromLang, toLang).pipe(
        take(1)
      )
      .subscribe(trans => {
        if (translation.toLowerCase() === trans.toLowerCase()) {
          this.translatedWord = '';
          this.wordPosition++;
          this.excerciseFinished$.next(1);
        } else {
          this.translatedWord = trans.toLowerCase();
        }
      })
    }

    timeEnded() {
      window.alert('У вас закончилось время на выполнение упражнения, попробуйте снова');
      this.excerciseStopped$.next(1);
    }    
}
