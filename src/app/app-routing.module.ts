import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
    {
    path: "cv",
    component: CvComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
