import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhsListComponent } from './components/ahs-list/ahs-list.component';
import { FormDatosDeEntradaComponent } from './components/form-datos-de-entrada/form-datos-de-entrada.component';
import { FormLugarComponent } from './components/form-lugar/form-lugar.component';

const routes: Routes = [
  { path: '', component: AhsListComponent },
  { path: 'datoEntrada', component: FormDatosDeEntradaComponent},
  { path: 'lugar', component: FormLugarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
