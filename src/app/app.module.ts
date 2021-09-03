import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroduccionComponent } from './01-introduccion/introduccion.component';
import { HelloworldComponent } from './02-helloworld/helloworld.component';
import { FromComponent } from './03-from/from.component';
import { FromeventComponent } from './04-fromevent/fromevent.component';
import { BasicosComponent } from './05-operadores-basicos/basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    HelloworldComponent,
    FromComponent,
    FromeventComponent,
    BasicosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
