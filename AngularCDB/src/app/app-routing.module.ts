import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './Components/Login-SignIn/authentication-page/authentication-page.component'
import { ListElementsComponent } from './Components/list-elements/list-elements.component'


const routes: Routes = [{
  path: 'authentication',
  component: AuthenticationPageComponent,
  pathMatch: 'full'
},
{
  path: 'applogin',
  component: ListElementsComponent,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'authentication',
  pathMatch: 'full'
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
