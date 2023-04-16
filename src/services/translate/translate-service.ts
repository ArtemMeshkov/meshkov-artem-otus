import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { TranslatorHttpService } from "src/data/translation/abstract";

@Injectable({ providedIn: 'root' })
export class TranslateService {
    constructor(private translationHttpService: TranslatorHttpService) {}

    getWord(word: string) {
        return this.translationHttpService.translate({ query: word, fromLanguage: 'ru', toLanguage: 'eng' }).pipe(
            map(resp => resp.responseData.translatedText)
        );
    }
}