import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './component/render/render.component';
import { CoursesComponent } from './component/courses/courses.component';
const routes: Routes = [
  {
    path: 'preview',
    component: CoursesComponent,
    title:  'Course Preview',
  },
  {
    path: '',
    component: RenderComponent,
    title:  'Home ',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;