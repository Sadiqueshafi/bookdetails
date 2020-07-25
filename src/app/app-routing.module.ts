import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailsComponent, DockerTableComponent} from './docker-table/docker-table.component'

const routes: Routes = [
{path:'dockerlink',component:DockerTableComponent} ,
// {path:'create',component:BookDetailsComponent} ,
// {path:'edit/:postId',component:BookDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
