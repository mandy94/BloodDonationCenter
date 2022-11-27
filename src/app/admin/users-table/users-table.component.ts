import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from 'src/app/dialogs/user-details/user-details.component';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/users.service';

var displayedColumns: string[];
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent {

  constructor(private userDetailsDialog: MatDialog, private userService: UsersService) { }
  @Input() donationCenter: DonationCenter | undefined;
  
  displayedColumns = this.userService.props; 
  dataSource :any;

  searchString: string = "";
  selectedOption: string = "";
  ngOnInit() {
    console.log(this.dataSource);
    this.userService.saveReference(this);
    this.dataSource = new MatTableDataSource<User>(this.userService.getAllUsersFromDonationcenter(this.donationCenter));
    this.dataSource.filterPredicate = function (data:User, filter: string,): boolean {
      let searchName = filter.split("|")[0];
      let searchRating = filter.split("|")[1];
      return (data.firstName.toString().toLowerCase().includes(searchName)
        || data.lastName.toString().toLowerCase().includes(searchName))

    };
  }
  updateTable(newDc: DonationCenter){
     this.dataSource = new MatTableDataSource<User>(this.userService.getAllUsersFromDonationcenter(newDc));
  }
  applyFilter() {
    this.dataSource.filter = this.searchString.trim().toLowerCase() + "|" + this.selectedOption;
  }
  showUserDetails(user: User) {
    const dialogRef = this.userDetailsDialog.open(UserDetailsComponent, {
      width: '850px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}


import { Pipe, PipeTransform } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { DonationCenter } from 'src/app/model/donationCenter';
import { Observable } from 'rxjs/internal/Observable';


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
