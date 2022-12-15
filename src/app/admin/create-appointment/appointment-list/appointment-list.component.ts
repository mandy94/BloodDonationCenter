import { Component, Input } from '@angular/core';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input()
  donationCenter!: DonationCenter;

  predefinedAppointments: Array<Appointment> | null | undefined ;
  constructor( private donationService : DonationCenterService){
   
  }
  ngOnInit(){
    this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(this.donationCenter.id);

  }
}
