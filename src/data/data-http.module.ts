import { ModuleWithProviders, NgModule } from "@angular/core";
import { DataHttpCommonServiceProvider } from "./translation/provider";

@NgModule()
export class DataHttpModule {
	static forRoot(): ModuleWithProviders<DataHttpModule> {
		return {
			ngModule: DataHttpModule,
			providers: [
                DataHttpCommonServiceProvider,
            ]
        }
    }
}