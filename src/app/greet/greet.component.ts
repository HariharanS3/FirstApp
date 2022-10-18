import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  public pageName:string="Welcome Page";
  public greetMsg:string="Welcome to our page."

  constructor() { }

  ngOnInit(): void {
  }

}
