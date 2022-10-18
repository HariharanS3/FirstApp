import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  public showFbNotifications(){
    return ["New Friend Request","Yur post was liked by 1000 friends","Your friend posted for the first time"];
  }
  public getCommentsForPost(postId:number){
    
  }
  constructor() { }
}
