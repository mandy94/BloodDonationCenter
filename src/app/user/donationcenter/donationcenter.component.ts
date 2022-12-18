import { Component, EventEmitter } from '@angular/core';
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

  constructor(private dcServise: DonationCenterService,private userService: UsersService, private router:Router) { }
  // emiter: EventEmitter<any> = new EventEmitter();
  donationCenters = new MatTableDataSource<DonationCenter>(this.dcServise.getCenters());
  displayedColumns = this.dcServise.getDisplayedColumn();
  selectedCenter: any;
  searchString:string ="";
  selectedOption = 6;
  isQuestionareFilled =this.userService.didLoggedUserFilledQuestionare();
  ngOnInit() {

    this.donationCenters.filterPredicate = function (data, filter: string,): boolean {
      let searchName = filter.split("|")[0];
      let searchRating = filter.split("|")[1];
      return (data.name.toString().toLowerCase().includes(searchName)
      || data.city.toLowerCase().includes(searchName)
      || data.street.toString().toLowerCase() === searchName)
      && data.rating <= Number(searchRating)

    };
  }

  applyFilter() {
      this.donationCenters.filter = this.searchString.trim().toLowerCase() + "|" + this.selectedOption;
      this.selectedCenter=null;
    }

  showCenterDetails(item: DonationCenter) {
    this.selectedCenter = item;

  }
  goToQuestionare(){
    this.router.navigate(['/users/questionare-form']);
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
