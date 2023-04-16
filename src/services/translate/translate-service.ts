import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Language, TranslatorHttpService } from "src/data/translation/abstract";

@Injectable({ providedIn: 'root' })
export class TranslateService {
    constructor(private translationHttpService: TranslatorHttpService) {}

    getWord(word: string, languageFrom: Language, languageTo: Language) {
        return this.translationHttpService.translate({ query: word, fromLanguage: languageFrom, toLanguage: languageTo }).pipe(
            map(resp => {
                if (languageTo === 'eng') {
                    let match = resp.matches.find(m => m.target === 'en-US') || null;
                    if (match == null) {
                        match = resp.matches.find(m => m.target === 'en-GB') || null;
                    }
                    return match?.translation || '';
                } else {
                    const match = resp.matches.find(m => m.target === 'ru-RU');
                    return match?.translation || '';
                }
            })
        );
    }
}