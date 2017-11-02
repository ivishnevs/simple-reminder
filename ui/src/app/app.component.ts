import {Component} from "@angular/core";
import {RemindersService} from "./reminders.service";
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    RemindersService,
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ]
})

export class AppComponent {
  filters: string[] = ['All', 'Actual', 'Completed'];
  filterStr: string = this.filters[0];
  searchStr: string = '';
  reminders: any[];
  observer: any;

  constructor(private remindersService: RemindersService) {}

  ngOnInit() {
    this.observer = this.remindersService.reminders.subscribe((reminders) => this.reminders = reminders);
    this.remindersService.getReminders();
    this.remindersService.resetRemindersNotified();
    setInterval(() => this.checkReminder(), 10000);
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

  checkReminder() {
    let actualReminders = this.reminders.filter((reminder) => !reminder.completed);
    let notNotifiedReminders = actualReminders.filter((reminder) => !reminder.notified);
    let currentTimestamp = Date.now();

    notNotifiedReminders.forEach((reminder) => {
      if (currentTimestamp > reminder.timestamp) {
        this.notify(reminder);
      }
    });
  }

  notify(reminder) {
    alert(`TITLE: ${reminder.title}; TAGS: ${reminder.tags}`);
    this.remindersService.notifyReminder(reminder);
  }
}
