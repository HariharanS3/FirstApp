import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc3Service {
  public showTwNotification(){
    return ["XYZ and 100 others started following you","ABC liked your tweet","ZXC retweeted your tweet"];
  }
  public getCommentsForTweet(postId:number){
    
  }
  constructor() { }
}
