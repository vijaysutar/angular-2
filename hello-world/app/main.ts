/*
Start up your application
Need to tell angular to start up your application 
So create main.ts file
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);