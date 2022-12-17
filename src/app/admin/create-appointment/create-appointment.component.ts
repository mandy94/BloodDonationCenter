import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent { // chield
  @Input() donationCenter: DonationCenter | undefined;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor( private donationCenterService:DonationCenterService) { }
  addPredefiendTerm = new FormGroup({
    type: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
    date: new FormControl(new Date(Date.now()))
  })
  date: any;
  formFilled = true;
  ngOnInit() { }
 
  addTerm() {
   let term: Appointment= {
      id: 0, // delete to be
      start: ''+this.addPredefiendTerm.value.start,
      end:''+this.addPredefiendTerm.value.end,
      type: ''+this.addPredefiendTerm.value.type,
      date: new Date()
    }
    if( this.addPredefiendTerm.value.date)
      term.date = this.addPredefiendTerm.value.date;

    this.donationCenterService.addPredefiendTermsToCenter(this.donationCenter, term);
    this.notifyParent.emit(term);
  }
}
