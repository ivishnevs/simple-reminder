import {Component, OnInit, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatChipInputEvent} from "@angular/material";
import {ENTER} from "@angular/cdk/keycodes";

const COMMA = 188;

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})

export class AddDialogComponent implements OnInit {
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public reminder: any) {}

  ngOnInit() {}

  addTag(event: MatChipInputEvent): void {
    let input = event.input;
    let tag = event.value;

    if ((tag || '').trim()) {
      this.reminder.tags.push(tag.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    let index = this.reminder.tags.indexOf(tag);

    if (index >= 0) {
      this.reminder.tags.splice(index, 1);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(): void {
    if (this.isValidForm(this.reminder)) {
      this.addTimestamp();
      this.dialogRef.close(this.reminder);
    }
  }

  addTimestamp() {
    let [year, month, date] = this.reminder.date.split('-');
    let [hours, minutes] = this.reminder.time.split(':');
    let timestamp = new Date(year, month - 1, date, hours, minutes).getTime();
    this.reminder.timestamp = timestamp;
  }

  isValidForm({title, date, time}) {
    return title && date && time;
  }
}
