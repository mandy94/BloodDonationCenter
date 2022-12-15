import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DonationCenter } from 'src/app/model/donationCenter';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  @Input() donationCenter: DonationCenter | undefined;

  constructor() { }
  addPredefiendTerm = new FormGroup({
    type: new FormControl(''),
    time: new FormControl(''),
    date: new FormControl(new Date())
  })
  date: any;
  ngOnInit() { }
  addTerm(){
    
  }
}
