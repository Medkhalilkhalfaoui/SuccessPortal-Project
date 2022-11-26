import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qid:any;
  qtitle:any;
  questions:any= [];
  constructor(private route:ActivatedRoute,private question:QuestionService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    this.qtitle = this.route.snapshot.params['title'];
    this.question.getQuestionOfQuiz(this.qid).subscribe((data)=>{
      //console.log(data);
      this.questions = data;
    },(error)=>{
      console.log(error)
    })
  }

  deleteQuestion(qesid:any){
      Swal.fire({
        icon:'info',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        title:'Are you sure , want to delete this question ?'
      }).then((result)=>{
         if(result.isConfirmed){
          this.question.deleteQuestion(qesid).subscribe((qata)=>{
            this.snack.open('Question Deleted','',{
               duration:3000,
            });
            this.questions = this.questions.filter((q:any)=> q.quesid != qesid);

          })
         }
      },(error)=>{
        this.snack.open('Error in deleting questions','',{
          duration:3000,
       });
       console.log(error);
      });
  }

}
