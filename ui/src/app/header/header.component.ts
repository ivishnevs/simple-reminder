import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {RemindersService} from "../reminders.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private remindersService: RemindersService) {}

  ngOnInit() {}

  openDialog(): void {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      data: {
        id: Math.random() * Math.pow(10, 10),
        completed: false,
        notified: false,
        title: '',
        date: '',
        time: '',
        tags: [],
      }
    });

    dialogRef.afterClosed().subscribe(reminder => {
      if (reminder) {
        this.remindersService.addReminder(reminder)
      }
    });
  }
}
