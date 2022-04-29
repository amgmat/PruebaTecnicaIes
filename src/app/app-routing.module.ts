import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'',
    loadChildren:()=>import('./paginas/paginas.module').then(m=>m.PaginasModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
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
