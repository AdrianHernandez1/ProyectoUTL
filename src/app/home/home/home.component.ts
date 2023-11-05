import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _router: Router){

  }

  irSomosUtl(){
    this._router.navigateByUrl('SomosUTL');
  }

  irSoyAspirante(){
    this._router.navigateByUrl('SoyAspirante');
  }

  irSoyEstudiante(){
    this._router.navigateByUrl('SoyEstudiante');
  }

  irSoyDocente(){
    this._router.navigateByUrl('SoyDocente');
  }

  irSoyEgresado(){
    this._router.navigateByUrl('SoyEgresado');
  }

  irSoyAdministrativo(){
    this._router.navigateByUrl('SoyAdministrativo');
  }

  irSoyAempresario(){
    this._router.navigateByUrl('SoyEmpresario');
  }
}
