import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'',
    loadChildren:()=>import('./paginas/paginas.module').then(m=>m.PaginasModule)
  },
  {
    path:'**',redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
