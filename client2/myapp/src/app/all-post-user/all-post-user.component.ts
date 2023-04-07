import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-post-user',
  templateUrl: './all-post-user.component.html',
  styleUrls: ['./all-post-user.component.css']
})
export class AllPostUserComponent {
  constructor(private http:HttpClient){}

  @Input()
  allDataPost4:any={}

  @Input()
  locationInArr:any={}

  @Input()
  bigallData4:any={}
  
  @Input()
  idUser:any=""

  show:boolean=true
  
  showAddPost()
  {
    this.show=!this.show
  }

  


}
