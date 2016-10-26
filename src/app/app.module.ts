import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import * as Components from './components/index';

const mapValuesToArray = (obj: Object) => Object.keys(obj).map(key => obj[key]);

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ...mapValuesToArray(Components)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
