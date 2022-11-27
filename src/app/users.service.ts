import { Injectable } from '@angular/core';
import { UsersTableComponent } from './admin/users-table/users-table.component';
import { DonationCenterService } from './donation-center.service';
import { DonationCenter } from './model/donationCenter';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS: Array<User> = [
    { id: 1, firstName: "Pera", lastName: "Peric", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(1), appointments: null, enabled: true, password: "123" },
    { id: 2, firstName: "Jovan", lastName: "Losa", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(1), appointments: null, enabled: false, password: "123" },
    { id: 3, firstName: "Milia", lastName: "Kovacevoic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(1), appointments: null, enabled: true, password: "123" },
    { id: 4, firstName: "Nikola", lastName: "Zvetic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(2), appointments: null, enabled: true, password: "123" },
    { id: 5, firstName: "Jovana", lastName: "JOvik", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(3), appointments: null, enabled: false, password: "123" },
    { id: 6, firstName: "Ana", lastName: "Jokic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(3), appointments: null, enabled: false, password: "123" },
    { id: 7, firstName: "Mileva", lastName: "Tot", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(2), appointments: null, enabled: true, password: "123" },
    { id: 8, firstName: "Spahija", lastName: "Iles", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(4), appointments: null, enabled: true, password: "123" },
  ]
  displays = ['ID', 'Korisnicko ime', 'Ime', 'Prezime', 'Adresa', 'Broj telefona', 'Status']
  props = ['id', 'fullName', 'address', 'phone', 'status']

  constructor(private dc: DonationCenterService) { }


  getAllUsersFromDonationcenter(center: DonationCenter|undefined) {
    // some query from backend
    if( center == undefined) return [];
   return this.USERS.filter(item => {
      if (item.assigned != undefined) {      
        return item.assigned.id === center.id;
      } else return false;
    });
  }
  getAllUsers() {
    return this.USERS;
  }

    // tempoerary methods ----->
    userTableReference : UsersTableComponent|undefined;
    updateDonationCentersToDisplay(dc:DonationCenter){
        if(this.userTableReference != undefined)
        this.userTableReference.updateTable(dc);
    }
    saveReference(compo: UsersTableComponent){
      this.userTableReference = compo;
    }
    // <---- Only for dev use
}

