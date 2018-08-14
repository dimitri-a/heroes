import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { DingComponent } from './ding/ding.component';
import { BongComponent } from './bong/bong.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DingComponent,
    BongComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
