import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DonationCenterService } from 'src/app/donation-center.service';
import { DonationCenter } from 'src/app/model/donationCenter';


var displayedColumns: string[];

@Component({
  selector: 'app-donationcenter',
  templateUrl: './donationcenter.component.html',
  styleUrls: ['./donationcenter.component.css']
})
export class DonationcenterComponent {

  constructor(private dcServise: DonationCenterService, private userService: UsersService, private router: Router, public dialog: MatDialog) { }
  // emiter: EventEmitter<any> = new EventEmitter();
  centers: DonationCenter[] = [];
  donationCenters = new MatTableDataSource<DonationCenter>();
  displayedColumns = this.dcServise.getDisplayedColumn();
  selectedCenter: any;
  searchString: string = "";
  selectedOption = 6;
  isQuestionareFilled=false;
  ngOnInit() {
    this.dcServise.getCenters().subscribe(res => {
      this.centers = res;
      this.donationCenters.data = this.centers;
    })
    this.userService.getLoggedUser().subscribe(res => {
      console.log(res);
      //this.isQuestionareFilled = res;
    });

    this.donationCenters.filterPredicate = function (data, filter: string,): boolean {
      let searchName = filter.split("|")[0];
      let searchRating = filter.split("|")[1];
      return (data.name.toString().toLowerCase().includes(searchName)
        || data.city.toLowerCase().includes(searchName)
        || data.address.toString().toLowerCase() === searchName)
        && data.rating <= Number(searchRating)

    };
  }
  addPredefiendTerm = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
    date: new FormControl(new Date(Date.now()))
  })

  searchByTerm() {

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
    //onsole.log("end", end);

    // generate term with start and end time for instant type in java
    let term: Appointment = {
      id: 0, // delete to be
      start: start,
      end: end,
      date: new Date()
    }
    if (this.addPredefiendTerm.value.date)
      term.date = this.addPredefiendTerm.value.date;

    this.dcServise.searchCenters(term).subscribe(res => {
      this.centers = res;
      this.donationCenters.data = this.centers;
      console.log(res);
    });

  }

  additionalTerm(sender: any, data: DonationCenter) {
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

    console.log("start", start);
    console.log("end", end);

    // generate term with start and end time for instant type in java
    let term: Appointment = {
      id: 0, // delete to be
      start: start,
      end: end,
      date: new Date()
    }
    if (this.addPredefiendTerm.value.date)
      term.date = this.addPredefiendTerm.value.date;

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes')
        this.dcServise.createCustomReservation(data.id, term).subscribe(res => {
          console.log("Appointment reserved", res);
        });
    });
  }

  applyFilter() {
    this.donationCenters.filter = this.searchString.trim().toLowerCase() + "|" + this.selectedOption;
    this.selectedCenter = null;
  }

  showCenterDetails(item: DonationCenter) {
    this.selectedCenter = item;

  }
  goToQuestionare() {
    this.router.navigate(['/user/questionare']);
  }

  printStars(count: number) {
    var result = "";
    for (var i = 0; i < count; i++)
      result += '★';
    return result;
  }
}


import { Pipe, PipeTransform } from "@angular/core";
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Appointment } from 'src/app/model/appointment';
import { ConfirmationComponent } from 'src/app/dialogs/confirmation/confirmation.component';


@Pipe({
  name: 'FilterData'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: string): string {
    var data = displayedColumns.filter(
      element => {
        return element === value;
      });
    return data[0];
  }
}
