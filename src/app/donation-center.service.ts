import { Injectable } from '@angular/core';
import { DonationCenter } from './model/donationCenter';

@Injectable({
  providedIn: 'root'
})
export class DonationCenterService {

  constructor() { }
  Donation_centers: Array<DonationCenter> = [{id:1, name: "Centar za transfuziju krvi", city: "Novi Sad", street: "Novosadskog sajma 23", rating: 5 , img:"../../../assets/zavod1.jpg"},
  { id:2,name: "Centar za transfuziju krvi", city: "Beograd", street: "Novosadskog sajma 23", rating: 4 , img:"../../../assets/zavod2.jpeg"},
  { id:3,name: "Institut za transfuziju krvi", city: "Beograd", street: "Novosadskog sajma 23", rating: 5 , img:"../../../assets/zavod3.jpeg"},
  { id:4,name: "Dobrovoljni davaoci krvi Nis", city: "Nis", street: "Novosadskog sajma 23", rating: 4 ,img:""},
  { id:5,name: "Centar za transfuziju krvi", city: "Sombor", street: "Novosadskog sajma 23", rating: 3 , img:""}, 
  {id:6,name: "Dobrovoljci", city: "Vrbas", street: "Novosadskog sajma 23", rating: 4,img:"" }]

  getCenters() : Array<DonationCenter>{
    return this.Donation_centers;
  }
  getCenterById(id:number):DonationCenter|undefined{
    return this.Donation_centers.find( item => item.id === id);
    

  }
  getDisplayedColumn() {
    return ['name', 'city', 'rating'];
  }
}
