import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { LoginComponent } from './auth/login/login.component';
import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CambioLetrasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
