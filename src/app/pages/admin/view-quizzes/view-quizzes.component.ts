import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any = []

  constructor(private quiz:QuizService) { }

  ngOnInit(): void {
    this.quiz.quizzes().subscribe((data:any)=>{
      this.quizzes = data;
      console.log(this.quizzes);
    },(error)=>{
      console.log(error);
      Swal.fire('Eroor !','Error in loading data !', 'error');
    })
  }
  deleteQuiz(qid:any){
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        //delete ...
        
        this.quiz.deleteQuiz(qid).subscribe((data)=>{
          this.quizzes= this.quizzes.filter((quiz:any)=> quiz.qid != qid);
          Swal.fire('Success','Quiz deleted', 'success');
        },
        (error)=>{
          Swal.fire('Eroor !','Error in deleting quiz !', 'error');
          console.log(error);
        }
        )
      }
    })
  }

}
