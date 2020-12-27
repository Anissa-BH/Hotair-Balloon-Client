import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotairBalloonFormComponent } from './components/hotair-balloon-form/hotair-balloon-form.component';

import {HotairBalloonListComponent} from './components/hotair-balloon-list/hotair-balloon-list.component'

const routes: Routes = [
  {
    path:'',
    component: HotairBalloonListComponent
  },
  {
    path:'haballoon',
    component: HotairBalloonListComponent
  },
  {
    path:'haballoon/create',
    component: HotairBalloonFormComponent
  },
  {
    path:'haballoon/edit/:id',
    component: HotairBalloonFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
