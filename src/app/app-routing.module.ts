import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  {
    path: '' , 
    pathMatch:'full' , 
    redirectTo: 'login'
  },
  {
    path: 'login' , 
    pathMatch:'full' , 
    component: LoginComponent
  },
  
  {
    path:'' ,
    pathMatch : 'full' ,
    redirectTo : '/members'
  },
  {
    path: 'members' , 
    pathMatch:'full' , 
    component: MemberComponent
  },
  
  {
    path:':id/edit',
    pathMatch:'full' , 
    component: MemberFormComponent
  },
  {
    path: 'dashboard' , 
    pathMatch:'full' , 
    component: DashbordComponent
  },
  {
    path: 'tools' , 
    pathMatch:'full' , 
    component: ToolsComponent
  },
  {
    path: 'events' , 
    pathMatch:'full' , 
    component: EventsComponent
  },
  {
    path: 'createEvent' , 
    pathMatch:'full' , 
    component: EventCreateComponent
  },

  {
    path: 'articles' , 
    pathMatch:'full' , 
    component: ArticleComponent
  },
  
  {
    path:'create' ,
    pathMatch: 'full' ,
    component : MemberFormComponent
  },
  {
    path:'**' ,
    redirectTo:'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
