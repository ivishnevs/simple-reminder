import {Component} from "@angular/core";
import {RemindersService} from "./reminders.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RemindersService]
})

export class AppComponent {
  reminders: any[];
  observer: any;

  constructor(private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.observer = this.remindersService.reminders.subscribe((reminders) => this.reminders = reminders);
    this.remindersService.getReminders();
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

  addReminder(e) {
    console.log(e)
    let reminder = {
      title: 'title #1',
      description: 'description #1',
      tags: [],
      date: '01/01/2018',
      time: '00:00:00',
      status: false,
    };

    this.remindersService.addReminder(reminder);
  }

  removeReminders() {
    this.remindersService.removeReminders();
  }
}
