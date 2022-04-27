import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaBienvenidaComponent } from './pages/pagina-bienvenida/pagina-bienvenida.component';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { CalcularFechaComponent } from './pages/calcular-fecha/calcular-fecha.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
  children:[
    {
      path:'bienvenida', component: PaginaBienvenidaComponent
    },
    {
      path:'conversiones', component:ConversionesComponent
    },
    {
      path:'calcula-fecha',component:CalcularFechaComponent
    },
    {
      path:'formulario', component:FormularioComponent
    },
    {
      path:'**', redirectTo:'bienvenida'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
