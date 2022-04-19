import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface AHS {
  ID_AHS: String,
  ID_Entrada: String,
  ID_Lugar: String,
  Nombre_Lugar: String,
  Fecha: Date,
  CantidadPersonas: Number,
  UrlImagen: String,
  FechaConFormato: String,
}

@Component({
  selector: 'app-ahs-list',
  templateUrl: './ahs-list.component.html',
  styleUrls: ['./ahs-list.component.css']
})
export class AhsListComponent implements OnInit {

  gridColumns = 3;

  filtro: FormGroup = new FormGroup({
    nombreLugar: new FormControl('')
  });

  options: string[] = [];

  ahs: AHS[] = [];


  //Traer todos los AHS y guardar el Nombre Lugar en un arreglo
  getAllAhs() {
    this.database.getAllAhs().subscribe(
      data => {
        console.log(data);
        this.ahs = data;

        //Transformar la fecha a formato dd/mm/yyyy
        for (let i = 0; i < this.ahs.length; i++) {
          var date = new Date(this.ahs[i].Fecha);
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          this.ahs[i].FechaConFormato = day + '/' + month + '/' + year;
        }
      }
    );
  }

  //Traer todos los lugares y guardar los nombres en un arreglo
  getAllLugares() {
    this.database.getAllLugares().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          this.options.push(data[i].Nombre_Lugar);
        }
      }
    );
  }

  //Traer AHS por Lugar
  getAhsByPlaceName() {
    var namePlace = '';
    if(this.filtro.value.nombreLugar != ''){
      namePlace = this.filtro.value.nombreLugar;
      this.database.getAhsByPlaceName(namePlace).subscribe(
      data => {
        console.log(data);
        this.ahs = data;
      }
    );
    }
    else{
      this.getAllAhs();
    }
  }

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getAllAhs();
    this.getAllLugares();
  }

}
