import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  getDecodedAccessToken(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
  constructor(private http: HttpClient){}
 loggedUser: any;
  register(value: any) {
    return this.http.post('http://localhost:8181/auth/signup', value);
  }
  login(value: Partial<{ username: string | null; password: string | null; }>){    
    return this.http.post('http://localhost:8181/auth/login', value);
  }

  
}
