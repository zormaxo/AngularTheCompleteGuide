import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OmerComponent } from './omer/omer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    OmerComponent],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
