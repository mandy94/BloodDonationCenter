import { Injectable } from '@angular/core';
import { DonactionCenter } from './model/donationCenter';

@Injectable({
  providedIn: 'root'
})
export class DonationCenterService {

  constructor() { }
  Donation_centers: Array<DonactionCenter> = [{ name: "Centar za transfuziju krvi", city: "Novi Sad", street: "Novosadskog sajma 23", rating: 5 , img:"../../../assets/zavod1.jpg"},
  { name: "Centar za transfuziju krvi", city: "Beograd", street: "Novosadskog sajma 23", rating: 4 , img:"../../../assets/zavod2.jpeg"},
  { name: "Institut za transfuziju krvi", city: "Beograd", street: "Novosadskog sajma 23", rating: 5 , img:"../../../assets/zavod3.jpeg"},
  { name: "Dobrovoljni davaoci krvi Nis", city: "Nis", street: "Novosadskog sajma 23", rating: 4 ,img:""},
  { name: "Centar za transfuziju krvi", city: "Sombor", street: "Novosadskog sajma 23", rating: 3 , img:""}, 
  { name: "Dobrovoljci", city: "Vrbas", street: "Novosadskog sajma 23", rating: 4,img:"" }]

  getCenters() {
    return this.Donation_centers;
  }
  getDisplayedColumn() {
    return ['name', 'city', 'rating'];
  }
}
