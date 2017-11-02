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
    let title = reminder.title;
    let options = {
      icon: '../assets/img/notification-icon.png',
      body: reminder.tags.join(', '),
    };

    if (!('Notification' in window)) {
      alert('Sorry, your browser don\'t support notifications!');
    }

    let Notification = window['Notification'];

    if (Notification.permission === 'granted') {
      let notification = new Notification(title, options);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          let notification = new Notification(title, options);
        }
      });
    }

    this.remindersService.notifyReminder(reminder);
  }
}
