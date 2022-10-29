import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route : ActivatedRoute, private quiz:QuizService,private cat:CategoryService,private router:Router) { }
  qid = 0;
  quizz:any;
  categories:any;

  ngOnInit(): void {
    this.qid= this.route.snapshot.params['qid'];
    //alert(this.qid) 
    this.quiz.getQuiz(this.qid).subscribe((data:any)=>{
      this.quizz = data;
     // console.log(this.quizz)
    },
    (error)=>{
      console.log(error);
    }
    )

    this.cat.categories().subscribe((data:any)=>{
      this.categories= data;

    },(error)=>{
      alert('error in loading data');
    })



  }

  //update form submit
  public updateData(){
    
    //validate

    this.quiz.updateQuiz(this.quizz).subscribe((data)=>{
      Swal.fire('Success !!','quiz updated', 'success').then((e)=>{
        this.router.navigate(['/admin/quizzes']);
      });

    },(error)=>{
      Swal.fire('Error','error in updating quiz', 'error');
      console.log(error);
    }
    )
  }

}
