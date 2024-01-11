import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FantasicComponent } from './pages/fantasic/fantasic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './pages/temp/temp.component';
import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    FantasicComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Component,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
