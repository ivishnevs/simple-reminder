import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
