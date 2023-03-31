import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotlobbyComponent } from './core/chatbotlobby/chatbotlobby.component';
import { ChatbotprofileComponent } from './core/chatbotprofile/chatbotprofile.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PipeComponent } from './core/pipe/pipe.component';
import { SnackComponent } from './core/snack/snack.component';
import { WorkComponent } from './core/work/work.component';

const routes: Routes = [
  {path: '',redirectTo:'/home/work1',pathMatch:'full'},
  {path: 'chatbot',component: ChatbotlobbyComponent},
  {path: 'profile',component: ChatbotprofileComponent},
  {path: 'home',component: NavbarComponent,children: [
     {path: 'work1',component:WorkComponent},
     {path: 'table',component: HomeComponent},
     {path: 'snack',component: SnackComponent},
     {path: 'pipe',component: PipeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
