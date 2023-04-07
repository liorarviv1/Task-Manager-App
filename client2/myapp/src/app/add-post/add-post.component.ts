import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private http:HttpClient){}

  newPost:any={title:'',body:''}

  sub1:Subscription=new Subscription();
  

  @Input()
  bigallData4:any={}

  addPost()
  {
    this.bigallData4.posts.push(this.newPost)
    console.log(this.bigallData4)
    
    this.sub1=this.http.put("http://localhost:8000/api/users/"+this.bigallData4._id,this.bigallData4)
    .subscribe((status:any)=>
    {
      alert(status)
        // this.router.navigate(['']);

    })
  }
  ngOnDestroy()
  {
    this.sub1.unsubscribe()
  }

}
