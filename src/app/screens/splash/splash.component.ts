import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  static now: string = new Date().toString();
  
  getGreeting(){
    //get time
    let time: string = SplashComponent.now.split(' ')[4];

    //get hour
    time = time.split(':')[0];

    //convert time into number
    let num: number = Number(time);

    //assign greeting based on time of day
    let greeting: string = "";

    if(num >= 5 && num < 12 ){
      greeting = "morning";
    }else if(num >= 12 && num < 5){
      greeting = "afternoon";
    }else if(num >= 5 && num < 9){
      greeting = "evening";
    }else{
      greeting = "night";
    }

    return greeting;
  }
}
