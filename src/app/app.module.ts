import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerModule } from '@prsn/date-picker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DatePickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
