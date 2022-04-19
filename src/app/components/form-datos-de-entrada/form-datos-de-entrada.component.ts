import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface DatoEntrada {
  ID_Entrada: String,
  ID_Lugar: String,
  Fecha: Date,
  UrlImagen: String
}

@Component({
  selector: 'app-form-datos-de-entrada',
  templateUrl: './form-datos-de-entrada.component.html',
  styleUrls: ['./form-datos-de-entrada.component.css']
})
export class FormDatosDeEntradaComponent implements OnInit {

  formDatoEntrada: FormGroup = new FormGroup({
    Nombre_Lugar: new FormControl('', [Validators.required]),
    Fecha: new FormControl('', [Validators.required]),
    UrlImagen: new FormControl('', [Validators.required]),
  });

  options: string[] = [];

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

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getAllLugares();
  }

  entrada: DatoEntrada = {
    ID_Entrada: '',
    ID_Lugar: '',
    Fecha: new Date(),
    UrlImagen: ''
  }
  
  //Crear dato de entrada con la ID_Entrada mas reciente
  createDatoEntrada() {
    this.database.getLastDatoEntrada().subscribe(
      data => {
        console.log(data);
        this.entrada.ID_Entrada = data.ID_Entrada+1;
        //Traer el ID_Lugar del lugar seleccionado
        this.database.getLugarByName(this.formDatoEntrada.value.Nombre_Lugar).subscribe(
          data => {
            console.log(data[0].ID_Lugar);
            this.entrada.ID_Lugar = data[0].ID_Lugar;
          }
        );
        this.entrada.Fecha = this.formDatoEntrada.value.Fecha;
        this.entrada.UrlImagen = this.formDatoEntrada.value.UrlImagen;
        console.log(this.entrada);
        this.database.createDatoEntrada(this.entrada).subscribe(
          data => {
            console.log(data);
          }
        );
      }
    );
  }

  limpiarForm(){
    this.formDatoEntrada.reset();
  }
}
