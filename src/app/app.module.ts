import { BrowserModule } from '@angular/platform-browser';
import { NgModule, trigger, state, style, animate, transition } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
