import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/dialogs/confirmation/confirmation.component';
import { NewAppoitnmentComponent } from 'src/app/new-appoitnment/new-appoitnment.component';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';
import { Reservation } from 'src/app/model/reservation';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnChanges {
  @Input() donationCenter!: DonationCenter;
  @Input() userType: String | undefined;


  appointments: any[] = [];
  predefinedAppointments: Array<Appointment> = [];
  constructor(private donationService: DonationCenterService, private userService: UsersService, public dialog: MatDialog) {

  }
  isQuestionareFilled = this.userService.didLoggedUserFilledQuestionare();
  
  ngOnChanges(changes: SimpleChanges): void {
    
    this.donationService.getCenter(this.donationCenter.id).subscribe(res => {
      this.predefinedAppointments = res.appointments;

      for (let appointment of this.predefinedAppointments) {
        
        this.appointments.push( {
          id: appointment.id,
          start: new Date(appointment.start * 1000).toLocaleTimeString(),
          end: new Date(appointment.end * 1000).toLocaleTimeString(),
          date: new Date(appointment.start * 1000).toLocaleDateString(),
        });
      }
      //console.log("original: ", this.predefinedAppointments);
      //console.log("display: ", this.appointments);
    })

  }
  ngOnInit() {
    this.updateView(this.donationCenter);
  }

  sortCriteria = " ";
  updateView(event: any) {
    //this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(event.id);

  }
  sort(event: any) {
    switch (this.sortCriteria) {
      case "date_asc":
        this.predefinedAppointments?.sort((x, y) => x.date.getTime() - y.date.getTime());
        break;
      case "date_dsc":
        this.predefinedAppointments?.sort((y, x) => x.date.getTime() - y.date.getTime());
        break;
    }
  }
  reserveTerm(sender: any, data: Appointment) {    

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if (result == 'yes')
        this.donationService.createReservation(data.id).subscribe(res => {
          console.log("Appointment reserved", res);
        });
    });
  }
  additionalTerm(){    
    const dialogRef = this.dialog.open(NewAppoitnmentComponent, {
      data: this.donationCenter,
    });

    dialogRef.afterClosed().subscribe(result => {      
      console.log(result);
   this.donationService.createAppointment(this.donationCenter.id,result).subscribe(res => {
          console.log("Appointment created", res);
        });
    });
  }

  deleteTerm() { }
  updateTerm() { }
}
