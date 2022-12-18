
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
    { id: 2, firstName: "Jovan", lastName: "Losa", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "filled", assigned: this.dc.getCenterById(1), appointments: null, enabled: false, password: "123" },
    { id: 3, firstName: "Milia", lastName: "Kovacevoic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(1), appointments: null, enabled: true, password: "123" },
    { id: 4, firstName: "Nikola", lastName: "Zvetic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(2), appointments: null, enabled: true, password: "123" },
    { id: 5, firstName: "Jovana", lastName: "JOvik", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(3), appointments: null, enabled: false, password: "123" },
    { id: 6, firstName: "Ana", lastName: "Jokic", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(3), appointments: null, enabled: false, password: "123" },
    { id: 7, firstName: "Mileva", lastName: "Tot", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(2), appointments: null, enabled: true, password: "123" },
    { id: 8, firstName: "Spahija", lastName: "Iles", username: "PericNajjaci", address: "Kucna 1", city: "NS", country: "SRB", phone: "324325", jmbg: 234232, gender: "Male", occupation: "?", employment: "d", questionnaire: "?", assigned: this.dc.getCenterById(4), appointments: null, enabled: true, password: "123" },
  ]
    QUESTIONARE:any= [
      { answer:false,text: "A1 Have you tested positive for HIV or do you think you may be HIV positive?", value: "A1" },
      {answer:false, text: "A2 Have you ever had hepatitis B or hepatitis C or think you may have hepatitis now?", value: "A2" },
      { answer:false,text: "A3 Have you ever injected yourself or been injected with illegal or non-prescribed drugs including body-building drugs or cosmetics?", value: "A3" },
      {answer:false, text: "A4 Have you ever been given money or drugs for sex?", value: "A4" },
      { answer:false,text: "A5 In the last 12 months have you had sex with:", value: "A5", disabled: true },
      { answer:false,text: "a anyone who is HIV positive;", value: "a" },
      { answer:false,text: "b anyone with hepatitis B, hepatitis C or HTLV;", value: "b" },
      { answer:false,text: "c anyone who has ever been given money or drugs for sex;", value: "c" },
      { answer:false,text: "d anyone who has ever injected drugs; or", value: "d" },
      { answer:false,text: "e anyone who may ever have had sex in parts of the world where AIDS/HIV is very common?", value: "e" },
      { answer:false,text: "A6 Male donors only; In the last 12 months have you had oral or anal sex with a man, with or without a condom?", value: "A6" },
      { answer:false,text: "A7 Female donors only; In the last 12 months have you had sex with a man who has ever had oral or anal sex with antoer man, with or without a condom?", value: "A7" },

      {answer:false, text: "B1 Have you ever been told that you should not give blood?", value: "B1" },
      { answer:false,text: "B2 Have you ever had a serious illness or seen a doctor about your heart?", value: "B2" },
      { answer:false,text: "B3 Have you ever had any hospital investigations or tests or operations?", value: "B3" },
      { answer:false,text: "B4 Are you taking any prescribed medicine or tablets or other treatments?", value: "B4" },
      { answer:false,text: "B5 In the last 7 days have you taken any additional medicines or tablets?", value: "B5" },

      {answer:false, text: "C1 In the last 2 weeks have you had any illness, infection or fever or do you think you have one now?", value: "C1" },
      { answer:false,text: "C2 In the last 4 weeks have you been in contact with anyone with an infectious disease?", value: "C2" },
      { answer:false,text: "C3 In the last 8 weeks have you had any immunisations, vaccinations or jabs?", value: "C3" },
      { answer:false,text: "C4 In the last 12 months have you had your ears, face or body pierced, had a tattoo or any cosmetic treatment that involved piercing your skin?", value: "C4" },
      { answer:false,text: "C5 In the last 12 months have you had accupuncture?", value: "C5" },
      { answer:false,text: "C6 In the last 12 months have you been exposed unintentionally to someone else's blood or body fluids eg through a needle prick or bite or broken skin?", value: "C6" },
      {answer:false, text: "C7 Have you had jaundice or hepatitis?", value: "C7" },
      {answer:false, text: "C8 Have you received a blood transfusion since 1st January 1980", value: "C8" },
      { answer:false,text: "C9 Has anyone in your family had CJD?", value: "C9" },
      {answer:false, text: "C10 Were you treated with growth hormone before 1985?", value: "C10" },
      { answer:false,text: "C11 Did you have brain surgery or an operation for a tumor or cyst in your spine before August 1992?", value: "C11" },
      { answer:false,text: "C12 Female donors only; Have you ever had treatment for infertility?", value: "C12" },
    ];
  displays = ['ID', 'Korisnicko ime', 'Ime', 'Prezime', 'Adresa', 'Broj telefona', 'Status']
  props = ['id', 'fullName', 'address', 'phone', 'status']

  constructor(private dc: DonationCenterService ){ }
  loggedUser: User = this.USERS[1];

  API = 'http://localhost:8181'
  getLoggedUser(){
   return this.loggedUser; 
  // return this.http.get(this.API + "/loggedUser");
  }
  didLoggedUserFilledQuestionare(){
    if(this.loggedUser.questionnaire=="?")return false;
    return true;
  }
  saveUsersFilledQuestionare( answers:any){
    this.loggedUser.questionnaire = answers;
  }
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

