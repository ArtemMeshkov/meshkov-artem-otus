import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional, Output } from '@angular/core';
import { Word } from 'src/data/interfaces/translator';

const numberOfOptions = 5;

@Component({
  selector: 'translate-word',
  templateUrl: './translate-word.component.html',
  styleUrls: ['./translate-word.component.scss'],
})
export class TranslateWordComponent implements OnInit, OnChanges {
    @Input()
    input!: Word;
  
    @Output() 
    outcome = new EventEmitter<{ text: string, translation: string }>();
 
    constructor() { }

    public vocabulary: Word[] = [];
    public translate = '';
    ngOnInit() {
    }

    ngOnChanges() {
    }

    setResponse() {
      this.outcome.emit({ text: this.input.word, translation: this.translate });
    }
}
