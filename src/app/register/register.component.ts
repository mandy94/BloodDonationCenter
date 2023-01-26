import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registrationForm:FormGroup = new FormGroup({
    username : new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),  
    gender: new FormControl(''),
    ocupation: new FormControl(''), // zapravo je education a
    jmbg: new FormControl(''),
    employment: new FormControl(''),
});
constructor(private authService: AuthService, private router: Router) { }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe( res => {  
      console.log(res);
      this.router.navigate(['/login']);
    });
  }

}
