import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent {

  selected: any[] = [];
  constructor(private userService: UsersService) { }
  questions = Object.assign(this.userService.QUESTIONARE); // copy construktor
  ngOnInit() { }
  saveQuestionare() {
    for (let question of this.questions) {
      if (question.answer)
        this.selected.push(question.value);
    }
    this.userService.saveUsersFilledQuestionare(this.selected).subscribe(res => {
      console.log(res);
    });
  }
}

