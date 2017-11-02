import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

let key = 'reminders';

let storage = {
  getItem(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      throw new Error('Failed to get data from localStorage');
    }
  },

  setItem(key: string, value: {}) {
    try {
      return localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      throw new Error('Failed to set data to localStorage');
    }
  }
};

@Injectable()
export class RemindersService {
  reminders: Subject<any> = new Subject<any>();

  constructor() {
    if (!storage.getItem(key)) {
      storage.setItem(key, [])
    }
  }

  getReminders() {
    try {
      let reminders: any[] = storage.getItem(key);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  addReminder(reminder) {
    try {
      let reminders: any[] = storage.getItem(key);
      reminders.push(reminder);
      storage.setItem(key, reminders);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  removeReminders() {
    try {
      storage.setItem(key, []);
      this.getReminders();
    } catch (err) {
      throw err;
    }
  }

  removeReminder(reminder) {
    try {
      let reminders: any[] = storage.getItem(key);
      let index = this.getReminderIndex(reminders, reminder);
      reminders.splice(index, 1);
      storage.setItem(key, reminders);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  completeReminder(reminder) {
    try {
      let reminders: any[] = storage.getItem(key);
      let index = this.getReminderIndex(reminders, reminder);
      reminders[index].completed = true;
      storage.setItem(key, reminders);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  notifyReminder(reminder) {
    try {
      let reminders: any[] = storage.getItem(key);
      let index = this.getReminderIndex(reminders, reminder);
      reminders[index].notified = true;
      storage.setItem(key, reminders);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  resetRemindersNotified() {
    try {
      let reminders: any[] = storage.getItem(key);
      reminders.forEach((reminder) => {
        if (reminder.completed !== reminder.notified) {
          reminder.notified = false;
        }
      });
      storage.setItem(key, reminders);
      this.reminders.next(reminders);
    } catch (err) {
      throw err;
    }
  }

  getReminderIndex(reminders, reminder) {
    for (let i = 0; i < reminders.length; i++) {
      if (reminders[i].id === reminder.id) {
        return i;
      }
    }
  }
}
