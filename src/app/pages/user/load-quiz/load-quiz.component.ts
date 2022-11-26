import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catid:any;
  quizzes:any;
  constructor(private route:ActivatedRoute, private quiz:QuizService) { }

  ngOnInit(): void {
    //this.catid = this.route.snapshot.params['catid']
    this.route.params.subscribe((params)=>{
      this.catid = params['catid']
   
    
    if(this.catid ==0 ){
      console.log("load all the quiz");
      this.quiz.getActiveQuizzes().subscribe((data)=>{
        this.quizzes = data;
        console.log(this.quizzes)
      },(error)=>{
        console.log(error)
        alert('error in loading all quizzes')
      })
    }else{
      console.log('load specific quiz');
      this.quiz.getActiveQuizzesOfCategory(this.catid).subscribe((data)=>{
        this.quizzes = data;
      },(error)=>{
        alert("error in loading data")
      })
      
    }
  });
  }

}
