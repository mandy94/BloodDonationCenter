import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/dialogs/confirmation/confirmation.component';
import { DonationCenterService } from 'src/app/donation-center.service';
import { Appointment } from 'src/app/model/appointment';
import { DonationCenter } from 'src/app/model/donationCenter';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnChanges {
  @Input() donationCenter!: DonationCenter;
  @Input() userType: String | undefined;


  predefinedAppointments: Array<Appointment> | null | undefined;
  constructor(private donationService: DonationCenterService, private userService: UsersService,public dialog: MatDialog) {

  }
  isQuestionareFilled = this.userService.didLoggedUserFilledQuestionare();
  ngOnChanges(changes: SimpleChanges): void {
    this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(this.donationCenter.id);
    console.log(changes);
  }
  ngOnInit() {
    this.updateView(this.donationCenter);
  }

  sortCriteria = " ";
  updateView(event: any) {
    this.predefinedAppointments = this.donationService.getPredefiendAvailableAppointmentsByCenterId(event.id);

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
    console.log(data);
   
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == 'yes')
        sender.path[0].disabled = true;
      
    });
  }
  
  deleteTerm() { }
  updateTerm() { }
}
