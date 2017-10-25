import {Component, OnInit, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})

export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public reminder: any) {}

  ngOnInit() {}

  cancel(): void {
    this.dialogRef.close();
  }

  create(): void {
    if (this.isValidForm(this.reminder)) {
      this.dialogRef.close(this.reminder);
    }
  }

  isValidForm(reminder) {
    let isValid: boolean = true;
    for (let key in reminder) {
      if (!reminder[key]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
}
