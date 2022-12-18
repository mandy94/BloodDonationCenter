import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent {

  constructor( private userService:UsersService){}
  questions = Object.assign(this.userService.QUESTIONARE); // copy construktor
  ngOnInit(){}
  saveQuestionare(){
   console.log(this.questions); 
   this.userService.saveUsersFilledQuestionare( this.questions);
  }
}

