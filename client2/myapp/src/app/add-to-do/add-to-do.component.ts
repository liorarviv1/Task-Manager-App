import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../user-data';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  constructor(private http:HttpClient,private router:Router){}

  sub1:Subscription=new Subscription()
  @Input()
  bigallData4:any={}

  // userData:UserData=new UserData();
  show2:boolean=true


  // newTaskTitle:any[]=[{title:"",completed:false}]
  addTask(txt:any)
  {

    if(txt!="")
    {
      if(this.bigallData4.tasks.some((ts: { completed: boolean; })=>ts.completed===false)) 
      { //As soon as some() finds the member that correctly answered the request, it stops
        console.log(txt)
        let newTask={title:txt,completed:false}
        this.bigallData4.tasks.push(newTask)
        console.log(this.bigallData4)

        this.sub1=this.http.put("http://localhost:8000/api/users/"+this.bigallData4._id,this.bigallData4)
        .subscribe((status:any)=>
        {
          alert (status)

        })
      }
      else
      {
        console.log(txt)
        let newTask={title:txt,completed:false}
        this.bigallData4.tasks.push(newTask)
        console.log(this.bigallData4)

        this.sub1=this.http.put("http://localhost:8000/api/users/"+this.bigallData4._id,this.bigallData4)
        .subscribe((status:any)=>
        {
          alert (status)
          this.router.navigate(["homepage"]);

        })
      }
      
    }
    else
    {
      alert("To add a task you must give it a name")
    }
}

ngOnDestroy()
{
  this.sub1.unsubscribe()
}



}
