import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',    
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http : HttpClient) { }
  cancelAppointment(id: number) {
    return this.http.post(this.API + '/'+id+'/cancel',null, httpOptions);
  }

  API = 'http://localhost:8080/appointment';
  
}
