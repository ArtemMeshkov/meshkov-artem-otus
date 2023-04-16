import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { ITranslateParams, Language, TranslatedResponse, TranslatorHttpService } from "./abstract";

const translateApiUrl = (query: string, fromLanguage: Language, toLanguage: Language) =>
    `https://api.mymemory.translated.net/get?q=${query}&langpair=${fromLanguage}|${toLanguage}`;

@Injectable()
export class TranslatorHttpServiceImpl implements TranslatorHttpService {
    constructor(
        public readonly http: HttpClient,
    ) {}


    translate(params: ITranslateParams): Observable<TranslatedResponse> {
        const url = translateApiUrl(params.query, params.fromLanguage, params.toLanguage);
        return this.http.get<TranslatedResponse>(url);
    }    
}