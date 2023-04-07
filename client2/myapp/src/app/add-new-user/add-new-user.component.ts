import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {

  constructor(private http:HttpClient ,private router:Router){}

  newUs:any={name:'',email:''}
  sub1:Subscription=new Subscription()


  addUser(isValid:boolean | null)
  {
    if(isValid==true)
    {
      // console.log(isValid)
      this.sub1=this.http.post("http://localhost:8000/api/users",this.newUs)
      .subscribe((stasus:any)=>{
        alert(stasus)
        this.router.navigate(["homepage"])
      })
      // window.location.reload();

    }
    
  }
  ngOnDestroy()
  {
    this.sub1.unsubscribe()
  }

}
