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
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms'
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';


import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { HeaderComponent } from './header/header.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AddDialogComponent,
    ReminderComponent,
    HeaderComponent,
    AppComponent,
    SearchPipe,
    FilterPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
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
