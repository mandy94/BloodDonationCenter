import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnChanges{
  @Input() donationCenter!: DonationCenter;
  @Input() userType: String | undefined;

  predefinedAppointments: Array<Appointment> | null | undefined;
  constructor(private donationService: DonationCenterService) {

  }
  ngOnChanges(changes:SimpleChanges):void{
    this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(this.donationCenter.id);
    console.log(changes);
  }
  ngOnInit() {
    this.updateView(this.donationCenter);
  }

  sortCriteria = " ";
  updateView(event:any){ 
    this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(event.id);
   
  }
  sort(event: any) {
    switch( this.sortCriteria){
      case "date_asc":
        this.predefinedAppointments?.sort((x, y) => x.date.getTime() - y.date.getTime());    
        break;
        case "date_dsc":
          this.predefinedAppointments?.sort((y, x) => x.date.getTime() - y.date.getTime());    
        break;
        case "name_asc":
          this.predefinedAppointments?.sort((x, y) => x.type.localeCompare(y.type));    
          break;
          case "name_dsc":
            this.predefinedAppointments?.sort((y, x) => x.type.localeCompare(y.type));    
          break;
       
     }
  }
  reserveTerm() {
    // na klik se reservise termin
  }
  deleteTerm() { }
  updateTerm() { }
}
