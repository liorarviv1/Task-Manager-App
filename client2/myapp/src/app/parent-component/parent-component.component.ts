import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../user-data';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  title='myapp'

  showall1:boolean=false

  show:boolean=false

  users:UserData[]=[]
  searchUser:UserData[]=[]

  allData1:any={}
  showAddNewUser:boolean=false

  sub1:Subscription=new Subscription()

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void
  {
   this.sub1 = this.http.get<UserData[]>("http://localhost:8000/api/users") //לעבור על זה
    .subscribe((data:any)=>
    {
      this.users=data
      this.searchUser=data
    })
  }

  searchInfo(txt:string)
  {
    this.searchUser=this.users.filter(x=>x.name?.includes(txt)||x.email?.includes(txt))
  }
  
  addUser()
  {
    this.showAddNewUser=!this.showAddNewUser
    this.showall1=false
    // this.router.navigate(['/addNewUser'])
  }

  ngOnDestroy()
  {
    this.sub1.unsubscribe()
  }

}
