import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './canActivate/login/login.component';
import { SignupComponent } from './canActivate/signup/signup.component';
import { ObservableAndSubscribeComponent } from './observable_And_Subscribe/observable-and-subscribe/observable-and-subscribe.component';
import { ActivateGuard } from './canActivate/activate.guard';
import { CheckForDirectivesComponent } from './directive/check-for-directives/check-for-directives.component';


const routes: Routes = [
  /* { path: '', component: LoginComponent}, */
  { path: 'signIn', component: SignupComponent},
  { path: 'observables', component: ObservableAndSubscribeComponent, canActivate: [ActivateGuard]},

  // lazy loading concept as dynamic import in angular 8
  { path: 'lazyloading',
   loadChildren: () => import(`./dynamic-import-angular8/dynamic-import/dynamic-import.module`).then(m => m.DynamicImportModule)
  },
  // Directive implementations
  { path: '', component: CheckForDirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
