import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './screens/splash/splash.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { AboutComponent } from './screens/about/about.component';
import { ContactComponent } from './screens/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
