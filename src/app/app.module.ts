import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { ScoreItemComponent } from './score-item/score-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionItemComponent,
    ScoreItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
