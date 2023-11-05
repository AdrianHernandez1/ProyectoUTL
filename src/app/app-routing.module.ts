import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SomosutlComponent } from './main/somosutl/somosutl.component';
import { SoyaspiranteComponent } from './main/soyaspirante/soyaspirante.component';
import { SoyadministrativoComponent } from './main/soyadministrativo/soyadministrativo.component';
import { SoydocenteComponent } from './main/soydocente/soydocente.component';
import { SoyegresadoComponent } from './main/soyegresado/soyegresado.component';
import { SoyestudianteComponent } from './main/soyestudiante/soyestudiante.component';
import { SoyempresarioComponent } from './main/soyempresario/soyempresario.component';

const routes: Routes = [
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "SomosUTL",
    component: SomosutlComponent
  },
  {
    path: "SoyAspirante",
    component: SoyaspiranteComponent
  },
  {
    path: "SoyAdministrativo",
    component: SoyadministrativoComponent
  },
  {
    path: "SoyDocente",
    component: SoydocenteComponent
  },
  {
    path: "SoyEgresado",
    component: SoyegresadoComponent
  },
  {
    path: "SoyEmpresario",
    component: SoyempresarioComponent
  },
  {
    path: "SoyEstudiante",
    component: SoyestudianteComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
