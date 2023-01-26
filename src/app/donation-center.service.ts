
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './model/appointment';
import { DonationCenter } from './model/donationCenter';
import { Center } from './model/center';

@Injectable({
  providedIn: 'root'
})
export class DonationCenterService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  });

  constructor(private http: HttpClient) { }

  createAppointment(id: any, term: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'center/' + id + '/appointment', term, { headers: this.headers });
  }

  createReservation(id: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'appointment/' + id + '/reserve', null, { headers: this.headers });
  }

  getCenters(): Observable<DonationCenter[]> {
    return this.http.get<DonationCenter[]>(this.apiHost + 'center/', { headers: this.headers });
  }

  getCenter(id: number): Observable<Center> {
    return this.http.get<Center>(this.apiHost + 'center/' + id, { headers: this.headers });
  }

  getCenterById(id: number): DonationCenter | undefined {
    return this.Donation_centers.find(item => item.id === id);
  }

  getPredefiendAvailableAppointmentsByCenterId(id: number | undefined): Array<Appointment> | null {
    var target = this.Donation_centers.find(center => center.id === id);
    if (target)
      return target.appointments;
    else
      return null;
  }

  addPredefiendTermsToCenter(center: DonationCenter | undefined, term: Appointment): void {
    this.createAppointment(center!.id, term).subscribe(res => {
      console.log("Appointment created: ", res);
    });

    //console.log(center)
    // if (center != undefined) {
    //   let target: DonationCenter | undefined = this.Donation_centers.find(x => { x.id === center.id });
    //   if (target != undefined)
    //     target.predefiendAvailableAppointments.push(term);
    // }
  }

  getDisplayedColumn() {
    return ['name', 'city', 'rating'];
  }

  Donation_centers: Array<DonationCenter> = [];

}
