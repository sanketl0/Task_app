import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

const routes: Routes = [

  {
    path: "",
    component :LoginComponent,  
  },
  {
    path: "login",
    component :LoginComponent,  
  },
  {
    path:"SignupComponent",
    component:SignupComponent
  },
  {
    path:'TaskListComponent',
    component : TaskListComponent
  },
  {
    path:"viewdetails/:id",
    component: ViewDetailsComponent
  },
  {
    path : '**',
    component:PageNotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
