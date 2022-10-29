import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }
  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }
  formSubmit(){
    //console.log(this.user);
    if(this.user.username.trim()==''||this.user.username== null){
      //alert("user is required !!");
      this.snack.open('Username is required !!','',{duration: 3000});
      return;

    }
    if(this.user.password== null||this.user.password.trim()== ''||
    this.user.firstName.trim()== ''|| 
    this.user.lastName.trim()==''|| 
    this.user.phone=='' ||
    this.user.email.trim()==''
    
    ){
      this.snack.open('all field is required !!','',{duration: 3000});
      return;

    }
    this.userService.adduser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('SUCCESS');
       
          Swal.fire('Success done !!','user id is '+ data.id,'success')

        
        

    },
    (error)=>{
      //error
      console.log(error);
      //alert('something went wrong');
      this.snack.open('something went wrong or username used !!','',{duration: 300});
    }
    )
  }

}
