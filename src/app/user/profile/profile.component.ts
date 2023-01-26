import { Component } from '@angular/core';
import { AppointmentsService } from 'src/app/appointments.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  router: any;

  constructor(private userService: UsersService, private appointmentServise: AppointmentsService) { 
  this.userService.getLoggedUserAppointments().
  subscribe(res => {
    this.Appointments = res;
    console.log(res);
  });
  }
Appointments: any;
cancel(id: number){
  this.appointmentServise.cancelAppointment(id).subscribe((res:any) => {
    console.log(res);
    this.router.navigate(['/profile']);
  });
}
}
