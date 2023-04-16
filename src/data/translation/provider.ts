import { Provider } from "@angular/core";
import { TranslatorHttpService } from "./abstract";
import { TranslatorHttpServiceImpl } from "./translator-http-service";

export const DataHttpCommonServiceProvider: Provider = {
	provide: TranslatorHttpService,
	useClass: TranslatorHttpServiceImpl,
};