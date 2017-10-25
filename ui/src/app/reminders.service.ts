import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

let key = 'reminders';

// localStorage wrapper
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
    console.log('constructor works');
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
}
