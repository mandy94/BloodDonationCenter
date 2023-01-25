import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit { // chield
  @Input() donationCenter: DonationCenter | undefined;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private donationCenterService: DonationCenterService) { }

  addPredefiendTerm = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
    date: new FormControl(new Date(Date.now()))
  })

  date: any;
  formFilled = true;
  ngOnInit() { }
  addTerm() {
    let date = this.addPredefiendTerm.value.date!;
    let startTime = this.addPredefiendTerm.value.start!;
    let endTime = this.addPredefiendTerm.value.end!;

    let s1 = startTime.split(':');
    let startHour: number = +s1[0];
    let startMinute: number = +s1[1];
    
    let s2 = endTime.split(':');
    let endHour: number = +s2[0];
    let endMinute: number = +s2[1];

    let start = date.setHours(startHour, startMinute) / 1000;
    let end = date.setHours(endHour, endMinute) / 1000;

    //console.log("start", start);
    //console.log("end", end);

    let term: Appointment = {
      id: 0, // delete to be
      start: start,
      end: end,
      date: new Date()
    }
    if (this.addPredefiendTerm.value.date)
      term.date = this.addPredefiendTerm.value.date;

    this.donationCenterService.addPredefiendTermsToCenter(this.donationCenter, term);
    //this.notifyParent.emit(term);
  }
}
