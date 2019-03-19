import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FractalImageComponent } from './fractal-image/fractal-image.component';


import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    FractalImageComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents : [FractalImageComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(FractalImageComponent, { injector: this.injector });
    customElements.define('fractal-image', myCustomElement);
  }
}
