import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginaBienvenidaComponent } from './pages/pagina-bienvenida/pagina-bienvenida.component';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { CalcularFechaComponent } from './pages/calcular-fecha/calcular-fecha.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginaBienvenidaComponent,
    ConversionesComponent,
    CalcularFechaComponent,
    FormularioComponent,
    ModalComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PaginasModule { }
