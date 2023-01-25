
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        const decoded = this.authService.getDecodedAccessToken(res.accessToken);
        console.log(decoded);
        localStorage.setItem('user', JSON.stringify(decoded));
        if(res.role === "USER")
          this.router.navigate(['/']);
          
      },
      (err: any) => console.log(err)
    );
  }
}