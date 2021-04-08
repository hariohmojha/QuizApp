import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private quizservice:QuizService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(name:string, email:string){
     this.quizservice.insertParticipant(name,email).subscribe(
       (data:any)=>{
        
        this.route.navigate(['/quiz']);
       }
     );
       
     
  }





}
