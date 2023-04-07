import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../user-data';

@Component({
  selector: 'app-all-data-user',
  templateUrl: './all-data-user.component.html',
  styleUrls: ['./all-data-user.component.css']
})
export class AllDataUserComponent {

  constructor(private router:Router){}
  colBool:boolean=false

  show:boolean=true
  showAddPost:boolean=true

  saveUpdateUser:any={}

  show2:any=sessionStorage['showbtn']

  sub1:Subscription=new Subscription() //אין צורך כרגע

  @Input()
  allData4:any={}

  @Output()
  sentDataUser: EventEmitter<any> =new EventEmitter<any>()

  @Input()
  userData:any={};


  clii()
  {
    console.log(this.allData4)
    // this.sentDataUser.emit(this.tasksUser)  //מעביר את המידע לאבא והאבא מעביר לילד אחר

  }

  addTask()
  {
    this.show=!this.show

    // if(this.allData4._id==null)
    // {
    //   alert("You will have to click on the user ID to view or add a task to him.")
    // }
    // else
    // {
    //   this.show=!this.show

    //   // this.router.navigate(['addToDo'])
    // }
  }

  addPoat()
  {
    if(this.allData4._id==null)
    {
      alert("You will have to click on the user ID to view or add a post to him.")
    }
    else
    {
      this.showAddPost=!this.showAddPost
      this.router.navigate([''])
    }

  }
  ngOnDestroy()
  {
    this.sub1.unsubscribe()
  }

}
