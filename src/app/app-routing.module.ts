import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './screens/splash/splash.component';
import { ProjectsComponent } from './screens/projects/projects.component';

const routes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
