import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-todos-user',
  templateUrl: './all-todos-user.component.html',
  styleUrls: ['./all-todos-user.component.css']
})
export class AllTodosUserComponent {
  constructor(private http:HttpClient, private router:Router){}

  @Input()
  allDataTask4:any={}

  @Input()
  bigallData4:any={}

  @Input()
  locationInArr:any={}

  @Input()
  idUser:any=""

  show:boolean=true
  sub1:Subscription=new Subscription()

  // @Output()
  // sentUpdateBigallData4:EventEmitter<any>=new EventEmitter<any>()
  

  
  taskCompleted(index:any,title2:string)
  {
    console.log(title2)
    console.log(index)
    console.log(this.idUser)

    this.bigallData4.tasks[index].completed=true
    console.log(this.bigallData4)

    if(this.bigallData4.tasks.some((taks: { completed: boolean; })=>taks.completed===false)) 
    {
      this.http.put("http://localhost:8000/api/users/"+this.idUser,this.bigallData4)
      .subscribe((status:any)=>
      {
        alert(status)
      })
    }
    else
    {
      this.http.put("http://localhost:8000/api/users/"+this.idUser,this.bigallData4)
      .subscribe((status:any)=>
      {
        alert(status)
        this.router.navigate(["homepage"]);
      })
    }

  }

  addTask()
  {
    this.show=!this.show
    
  }

  ngOnDestroy()
{
  this.sub1.unsubscribe()
}

}
