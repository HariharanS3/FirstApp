import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-http2',
  templateUrl: './use-http2.component.html',
  styleUrls: ['./use-http2.component.css']
})
export class UseHttp2Component implements OnInit {
  public details:any=[];
  public ShowComments(){
    var request = this.http.get("http://jsonplaceholder.typicode.com/users").toPromise();
    request.then((data)=> this.details= data);
  }


  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
