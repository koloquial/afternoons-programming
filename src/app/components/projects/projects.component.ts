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
      screenshots: ['/assets/dovetail-1.png', '/assets/dovetail-2.png', '/assets/dovetail-3.png', '/assets/dovetail-4.png', '/assets/dovetail-5.png',],
      description: 'A fantasy sandbox adventure.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Wallet HOA',
      category: 'Web Application',
      technology: ['Angular'],
      iconSource: '/assets/icon-angular.png',
      screenshots: ['/assets/screenshot-not-available.png'],
      description: 'Wallet HOA is a solution to track income and expenses.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Metadata Sound',
      category: 'Website',
      technology: ['NextJS'],
      iconSource: '/assets/icon-nextjs.png',
      screenshots: ['/assets/screenshot-not-available.png'],
      description: 'Music by Metadata.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Sunbalm Acrylics',
      category: 'Website',
      technology: ['Vue'],
      iconSource: '/assets/icon-vue.png',
      screenshots: ['/assets/screenshot-not-available.png'],
      description: 'Painting gallery.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Living Fabric',
      category: 'Website',
      technology: ['React'],
      iconSource: '/assets/icon-react.png',
      screenshots: ['/assets/screenshot-not-available.png'],
      description: 'A web developer resource kit.',
      deployment: 'https://dovetail-game.vercel.app/',
      github: 'https://github.com/koloquial/dovetail',
      dates: ['Sep 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Fabric',
      category: 'Game',
      technology: ['Angular'],
      iconSource: '/assets/icon-angular.png',
      screenshots: ['/assets/screenshot-not-available.png'],
      description: 'A PvP fantasy turn-based trading card game.',
      deployment: 'https://fabric-tcg.vercel.app/',
      github: 'https://github.com/koloquial/fabric',
      dates: ['Nov 2023', 'Present'],
      status: 'Alpha'
    },
    {
      name: 'Garden of Mirrors',
      category: 'Website',
      technology: ['Angular'],
      iconSource: '/assets/icon-angular.png',
      screenshots: ['/assets/garden-of-mirrors-1.png','/assets/garden-of-mirrors-2.png','/assets/garden-of-mirrors-3.png','/assets/garden-of-mirrors-4.png','/assets/garden-of-mirrors-5.png',],
      description: 'An aesthetic-driven non-linear story about introspective statues.',
      deployment: 'https://garden-of-mirrors.vercel.app/',
      github: 'https://github.com/koloquial/garden-of-mirrors',
      dates: ['November 2023', 'Present'],
      content: [
        'This is a work-in-progress. All images, literature, and interactions are subject to change.', 
        'Garden of Mirrors is an aesthetic-driven non-linear story about introspective statues.', 'Images and passages are paired and presented in random order. There are currently 150 pages out of a planned 300.', 
        'This is a collaborative work between human and AI.'
      ],
      technologyList: ['Literature: Chat GPT 3.5', 'Images: Stable Diffusion 1.5', 'Framework: Angular 16.2.4', 'Deployment: Vercel'],
      status: 'v. 1'
    },
  ]
}