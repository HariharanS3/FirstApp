import { Component, OnInit } from '@angular/core';
import { Svc1Service } from '../svc1.service';
@Component({
  selector: 'app-use-svc2',
  templateUrl: './use-svc2.component.html',
  styleUrls: ['./use-svc2.component.css']
})
export class UseSvc2Component implements OnInit {

  constructor(public svcObj:Svc1Service) { }
  public PlugFb(){
    return this.svcObj.showFbNotifications();
  }
  ngOnInit(): void {
  }

}
