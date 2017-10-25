import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { HeaderComponent } from './header/header.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    HeaderComponent,
    AddDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  entryComponents: [AddDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
