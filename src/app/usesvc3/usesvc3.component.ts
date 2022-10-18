import { Component, OnInit } from '@angular/core';
import { Svc3Service } from '../svc3.service';

@Component({
  selector: 'app-usesvc3',
  templateUrl: './usesvc3.component.html',
  styleUrls: ['./usesvc3.component.css']
})
export class Usesvc3Component implements OnInit {

  constructor(public svcObj:Svc3Service) { }
  public PlugTwitter(){
    return this.svcObj.showTwNotification();
  }
  ngOnInit(): void {
  }

}
