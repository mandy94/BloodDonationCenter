
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
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAppointment(id: any, term: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'center/' + id + '/appointment', term, { headers: this.headers });
  }

  createReservation(id: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'appointment/' + id + '/reserve', { headers: this.headers });
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
      return target.predefiendAvailableAppointments;
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

  Donation_centers: Array<DonationCenter> = [
    {
      id: 1, name: "Centar za transfuziju krvi", city: "Novi Sad", address: "Novosadskog sajma 23", rating: 5, img: "../../../assets/zavod1.jpg", predefiendAvailableAppointments: [{
        id: 1,
        type: "SDK",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 12, 20)
      }, {
        id: 2,
        type: "SDK",
        start: "03:00",
        end: "03:30",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "03:30",
        end: "03:45",
        date: new Date(2022, 13, 20)
      }, {
        id: 2,
        type: "SDK",
        start: "04:40",
        end: "04:45",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "04:45",
        end: "04:00",
        date: new Date(2022, 13, 20)
      }, {
        id: 2,
        type: "SDK",
        start: "05:15",
        end: "05:30",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 13, 20)
      }, {
        id: 2,
        type: "SDK",
        start: "03:00",
        end: "03:30",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 13, 20)
      }, {
        id: 2,
        type: "SDK",
        start: "03:00",
        end: "03:30",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 13, 20)
      }]
    },
    { id: 2, name: "Centar za transfuziju krvi", city: "Beograd", address: "Novosadskog sajma 23", rating: 4, img: "../../../assets/zavod2.jpeg", predefiendAvailableAppointments: [] },
    { id: 3, name: "Institut za transfuziju krvi", city: "Beograd", address: "Novosadskog sajma 23", rating: 5, img: "../../../assets/zavod3.jpeg", predefiendAvailableAppointments: [] },
    { id: 4, name: "Dobrovoljni davaoci krvi Nis", city: "Nis", address: "Novosadskog sajma 23", rating: 4, img: "", predefiendAvailableAppointments: [] },
    {
      id: 5, name: "Centar za transfuziju krvi", city: "Sombor", address: "Novosadskog sajma 23", rating: 3, img: "", predefiendAvailableAppointments: [{
        id: 2,
        type: "SDK",
        start: "03:00",
        end: "03:30",
        date: new Date(2022, 12, 20)
      },
      {
        id: 3,
        type: "Sindakti Srbije",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 13, 20)
      }]
    },
    {
      id: 6, name: "Dobrovoljci", city: "Vrbas", address: "Novosadskog sajma 23", rating: 4, img: "", predefiendAvailableAppointments: [{
        id: 13,
        type: "Sindakti Srbije",
        start: "02:00",
        end: "02:30",
        date: new Date(2022, 13, 20)
      }]
    }]

}
