import { Component, Inject } from '@angular/core';
import { DonationCenterService } from 'src/app/donation-center.service';
import { DonationCenter } from 'src/app/model/donationCenter';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  dataToShow: string = "";
  donationCenters: DonationCenter[] = [];
  donationCenterToDisplay: DonationCenter|undefined;
  constructor(private dcService: DonationCenterService, private userService: UsersService) {
    this.donationCenterToDisplay=undefined;
  }

  ngOnInit() {
    this.dcService.getCenters().subscribe(res=> {
      this.donationCenters = res;
    })
  }

  changeSelection(event:any){
   this.donationCenterToDisplay =event.value;
    this.userService.updateDonationCentersToDisplay(event.value);
    this.dataToShow='users';
  }

}
