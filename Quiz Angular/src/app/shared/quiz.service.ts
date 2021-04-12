import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:55442/';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }

    

    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/Questions');
  }

  getAnswers() {
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }

  CreateQuestion(Question:string, option1:string,option2:string,option3:string,option4:string) {

    var Qustionlist = {
      Qn:Question,
      option1: option1,
      option2:option2,
      option3:option3,
      option4:option4

    }
    alert(Qustionlist)
   
    return this.http.post(this.rootUrl + '/api/CrateQuestion', Qustionlist);
  }

}
