import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { JusticeLigueModule } from './justice-ligue/justice-ligue.module';
import { PowersModule } from './heroes/powers/powers.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JusticeLigueModule,
    PowersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
