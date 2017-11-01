import { Component, OnInit, Input } from '@angular/core';
import {RemindersService} from "../reminders.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  @Input() reminder;

  constructor(private remindersService: RemindersService) {}

  ngOnInit() {}

  remove() {
    this.remindersService.removeReminder(this.reminder);
  }

  complete() {
    this.remindersService.completeReminder(this.reminder);
  }
}
