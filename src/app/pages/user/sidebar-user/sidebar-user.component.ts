import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  categories:any;

  constructor(private cat: CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.cat.categories().subscribe((data)=>{
      this.categories=data;

    },(error)=>{
       this.snack.open("Error in loading categories from server",'',{
        duration:3000,
       })
    }
    )
  }

}
