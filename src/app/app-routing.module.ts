import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './canActivate/login/login.component';
import { SignupComponent } from './canActivate/signup/signup.component';
import { ObservableAndSubscribeComponent } from './observable_And_Subscribe/observable-and-subscribe/observable-and-subscribe.component';
import { ActivateGuard } from './canActivate/activate.guard';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'signIn', component: SignupComponent},
  { path: 'observables', component: ObservableAndSubscribeComponent, canActivate: [ActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
