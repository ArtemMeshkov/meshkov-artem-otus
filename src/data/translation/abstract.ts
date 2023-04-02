import { Observable } from "rxjs";

export abstract class TranslatorHttpService {
    abstract translate(params: ITranslateParams): Observable<TranslatedResponse>;
}

export interface ITranslateParams {
    query: string;
    fromLanguage: Language;
    toLanguage: Language;
}

export interface ResponseData {
    translatedText: string;
    match: number;
}

export interface Match {
    id: string;
    segment: string;
    translation: string;
    source: string;
    target: string;
    quality: string;
    reference?: any;
}

export interface TranslatedResponse {
    responseData: ResponseData;
    quotaFinished: boolean;
    mtLangSupported?: any;
    responseDetails: string;
    responseStatus: number;
    responderId?: any;
    exception_code?: any;
    matches: Match[];
}

export type Language = 'ru' | 'eng';
