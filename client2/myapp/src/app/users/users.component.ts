import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../user-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  isHidden:boolean = true ;

  constructor(private http:HttpClient,private router:Router){}

  @Input()
  userData:UserData=new UserData();

  @Output()
  sentAllDataUser: EventEmitter<any> =new EventEmitter<any>()

  @Output()
  showalldataright1: EventEmitter<any> =new EventEmitter<any>()
  showalldataright2:boolean=false

  allData2:any={}

  // isRedFrame: boolean = true;
  colorBorderSolod:boolean=true;
  backgroundColor:boolean=false;
  arrBool:any[]=[]

  sub1:Subscription=new Subscription()


  ngOnInit(): void
  {
    this.allData2=this.userData
    for (let i = 0; i < this.allData2.tasks.length; i++) {
      
      if(this.allData2.tasks[i].completed==false)
      {
        this.colorBorderSolod=false
        this.router.navigate([""]);

        break
      }
      else
      {
        this.router.navigate([""]);

      }

    }
    // this.isRedFrame = this.allData2.tasks.some((elem: any) => !elem.completed);
  }



  hide()
  {
    this.isHidden = !this.isHidden;
  }

  updateUser()
  {
    this.sub1=this.http.put("http://localhost:8000/api/users/"+this.userData._id,this.userData)
    .subscribe((status:any)=>
    {
      alert (status)
      // this.router.navigate(['']);
    })
  }
  showTasks()
  {

    this.backgroundColor=!this.backgroundColor
    if(this.backgroundColor)
    {
      this.sentAllDataUser.emit(this.userData)  //מעביר את המידע לאבא והאבא מעביר לילד אחר
      this.showalldataright1.emit(!this.showalldataright2)  //מעביר את המידע לאבא והאבא מעביר לילד אחר

    }
    else
    {

      this.sentAllDataUser.emit("")
      this.showalldataright1.emit(this.showalldataright2)  //מעביר את המידע לאבא והאבא מעביר לילד אחר

    }
    // this.router.navigate(['/todosUser',this.userData._id])
    // console.log(this.userData)
    // this.sentAllDataUser.emit(this.userData)  //מעביר את המידע לאבא והאבא מעביר לילד אחר
    // sessionStorage["id"]=this.userData._id

    // sessionStorage["showbtn"]=true
  }
  deletUser()
  {
    console.log(this.userData)
    this.http.delete("http://localhost:8000/api/users/"+this.userData._id)
    .subscribe((status:any)=>
    {
      alert(status)
      this.router.navigate(["/homepage"])
    })

  }

  ngOnDestroy()
  {
    this.sub1.unsubscribe()
  }
}
