import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-new-appoitnment',
  templateUrl: './new-appoitnment.component.html',
  styleUrls: ['./new-appoitnment.component.css']
})
export class NewAppoitnmentComponent {

  form = new FormGroup({
    start: new FormControl('2023-02-03T11:25:30.00Z'),    
    end: new FormControl('2023-02-03T11:30:30.00Z'),
    date: new FormControl(new Date(Date.now()))
  })

  constructor(
    public dialogRef: MatDialogRef<NewAppoitnmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onSubmit() {
    // console.log(this.form);
    this.dialogRef.close(this.form.value);
  }
}
