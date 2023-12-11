import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './component/render/render.component';

const routes: Routes = [
  {
    path: 'preview',
    component: CoursesComponent,
    title:  'Course Preview',
  },
  {
    path: '',
    component: RenderComponent,
    title:  'Homepage',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;
