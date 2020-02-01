import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DrawUseCaseComponent } from './draw-use-case/draw-use-case.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DrawUseCaseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
