import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  title = "Projects"

  projects = [
    {
      name: 'Dovetail',
      category: 'Game',
      technology: ['HTML', 'CSS', 'Javascript'],
      iconSource: '/assets/icon-javascript.png',
      screenshots: ['/assets/dovetail-thumb.png', '/assets/dovetail-thumb.png'],
      description: 'Dovetail is a fantasy sandbox adventure. You begin the game with tools designed to cultivate the land and in doing so, you will attract new residents, unlock events, and complete objectives.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
    },
    {
      name: 'Wallet HOA',
      category: 'Web Application',
      technology: ['Angular'],
      iconSource: '/assets/icon-angular.png',
      screenshots: ['/assets/dovetail-thumb.png', '/assets/dovetail-thumb.png'],
      description: 'Wallet HOA is a solution to track income and expenses.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
    },
    {
      name: 'Metadata Sound',
      category: 'Website',
      technology: ['NextJS'],
      iconSource: '/assets/icon-nextjs.png',
      screenshots: ['/assets/dovetail-thumb.png', '/assets/dovetail-thumb.png'],
      description: 'Music by Metadata.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
    },
    {
      name: 'Sunbalm Acrylics',
      category: 'Website',
      technology: ['Vue'],
      iconSource: '/assets/icon-vue.png',
      screenshots: ['/assets/dovetail-thumb.png', '/assets/dovetail-thumb.png'],
      description: 'Painting gallery.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
    },
  ]
}
