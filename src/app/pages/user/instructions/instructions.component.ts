import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qid:any;
  quizz:any;

  constructor(private route: ActivatedRoute, private quiz:QuizService,private routerr:Router) { 

  }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    //console.log(this.qid);
    this.quiz.getQuiz(this.qid).subscribe((data)=>{
      //console.log(data);
      this.quizz = data;

    },(error)=>{
      console.log(error);
      alert('Error in loading quiz data');

    })

  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
    
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.routerr.navigate(['/start/'+this.qid])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
