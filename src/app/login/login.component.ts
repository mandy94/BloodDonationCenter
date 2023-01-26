
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userService : UsersService) { }
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
   
  isUserLogged:boolean | undefined = false;
  ngOnInit() {
    this.userService.isUserLogged().subscribe((res: any) =>  {
      this.isUserLogged =  res != null? true : false
    });
    console.log(this.isUserLogged);
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }  
  logout() {
    this.userService.logout();      
    this.isUserLogged = false;
    this.router.navigate(['/login']); 
    }
    
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('access-token', res.accessToken);
        const decoded = this.authService.getDecodedAccessToken(res.accessToken);
        localStorage.setItem('user', decoded);
        this.authService.loggedUser = decoded;
        console.log(this.authService.loggedUser); 
        if(res.role === "USER")        
          this.router.navigate(['/user'])
        else
          this.router.navigate(['/admin'])
        
          
      },
      (err: any) => console.log(err)
    );
  }
}