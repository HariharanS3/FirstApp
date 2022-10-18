import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightening',
  templateUrl: './lightening.component.html',
  styleUrls: ['./lightening.component.css']
})
export class LighteningComponent implements OnInit {
  public lightUp(mydiv:any){
    mydiv.style="background-color:yellow";
  }

  public switchOff(mydiv:any){
    mydiv.style="background-color:gray";
  }
  public dontDisturb(mydiv:any){
    mydiv.style="background-color:black; color:white";
    mydiv.innerText="Don't Disturb me1"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
