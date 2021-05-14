import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryMenuComponent } from './memory-menu/memory-menu.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';



@NgModule({
  declarations: [
    AppComponent,
    MemoryMenuComponent,
    MemoryGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


