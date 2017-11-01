import {Pipe, PipeTransform} from "@angular/core";

function filterReminder(reminder, statusStr) {
  if (statusStr === 'All') {
    return true;
  }

  if (statusStr === 'Actual') {
    return !reminder.completed
  }

  if (statusStr === 'Completed') {
    return reminder.completed
  }
}

@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform {
  transform(reminders, searchStr) {
    return reminders.filter((reminder) => filterReminder(reminder, searchStr));
  }
}
