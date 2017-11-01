import {Pipe, PipeTransform} from "@angular/core";

function includesStr(reminder, searchStr) {
  searchStr = searchStr.toLowerCase();

  let title = reminder.title.toLowerCase();
  let tags = reminder.tags.map((tag) => tag.toLowerCase());

  return title.includes(searchStr) || tags.some((tag) => tag.includes(searchStr));
}

@Pipe({name: 'search'})

export class SearchPipe implements PipeTransform {
  transform(reminders, searchStr) {
    return reminders.filter((reminder) => includesStr(reminder, searchStr));
  }
}
