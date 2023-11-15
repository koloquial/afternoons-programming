import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Dovetail',
      category: 'Game',
      technology: ['HTML', 'CSS', 'Javascript'],
      iconSource: '/assets/icon-javascript.png',
      screenshots: ['/assets/dovetail-thumb.png'],
      description: 'Dovetail is a fantasy sandbox adventure. You begin the game with tools designed to cultivate the land and in doing so, you will attract new residents, unlock events, and complete objectives.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
    }
  ]
}
