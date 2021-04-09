import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:QuizService, private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(Question:string, option1:string,option2:string,option3:string,option4:string){
  
    
    this.service.CreateQuestion(Question,option1,option2,option3,option4).subscribe(res=>{

    });

  }
}
