import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,private question:QuestionService) { }
  qid:any;
  questions:any;
  marksGot = 0;
  correctAnswers = 0;
  attempted =0;
  isSubmit = false;
  timer:any;


  ngOnInit(): void {
    this.preventBackButton();
    this.qid= this.route.snapshot.params['qid'];
    //console.log(this.qid)
    this.loadQuestions();
  }


  loadQuestions(){
    this.question.getQuestionOfQuizForTest(this.qid).subscribe((data)=>{
      //console.log(data)
      this.questions=data;
      this.timer= this.questions.length * 0.2 * 60;
      this.questions.forEach((q:any) => {
        q['givenAnswer']= '';
        
      });
      this.startTimer();
      console.log(data);
      
    },(error)=>{
      console.log(error);
      Swal.fire('Error','Error in loading questions of quiz','error')
    })
  }

  preventBackButton(){
    history.pushState(null, 'm',location.href);
    this.locationSt.onPopState(()=>{
       history.pushState(null,'m',location.href);
    });
  }

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText:'Start',
    
      icon:'info',
    }).then((e)=>{
      if(e.isConfirmed){
        //calculation
        this.evalQuiz();

      }
    });
  }
  startTimer(){
    let t = window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000);
  }
  getFromattedTime(){
    let mm= Math.floor(this.timer/60)
    let ss = this.timer-mm*60
    return mm+' min :'+ss+' sec ';

  }
  evalQuiz(){
    this.isSubmit = true
    this.questions.forEach((q:any)=>{
        if(q.givenAnswer == q.answer){
            this.correctAnswers++;
            let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
            this.marksGot+=marksSingle;
            
        }
        if(q.givenAnswer.trim() != ''){
            this.attempted++;
        }
          
    })
    console.log('Correct Answers :'+this.correctAnswers);
    console.log('Marks Got '+this.marksGot);
    console.log('Attempted : '+this.attempted);
    console.log(this.questions);

  }

}
