import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { SomosutlComponent } from './main/somosutl/somosutl.component';
import { SoyaspiranteComponent } from './main/soyaspirante/soyaspirante.component';
import { SoyestudianteComponent } from './main/soyestudiante/soyestudiante.component';
import { SoydocenteComponent } from './main/soydocente/soydocente.component';
import { SoyadministrativoComponent } from './main/soyadministrativo/soyadministrativo.component';
import { SoyempresarioComponent } from './main/soyempresario/soyempresario.component';
import { SoyegresadoComponent } from './main/soyegresado/soyegresado.component';
import { FooterComponent } from './main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SomosutlComponent,
    SoyaspiranteComponent,
    SoyestudianteComponent,
    SoydocenteComponent,
    SoyadministrativoComponent,
    SoyempresarioComponent,
    SoyegresadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
