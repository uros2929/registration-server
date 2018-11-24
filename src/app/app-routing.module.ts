import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'/startPage', pathMatch:'full'},
  {path:'startPage', component:StartPageComponent},
  {path:'singUp', component:SingUpComponent},
  {path:'logIn', component:LogInComponent},
  {path:'main', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
