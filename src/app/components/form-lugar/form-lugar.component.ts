import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';


@Component({
  selector: 'app-form-lugar',
  templateUrl: './form-lugar.component.html',
  styleUrls: ['./form-lugar.component.css']
})
export class FormLugarComponent implements OnInit {

  formLugar: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required])
  });

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  //Crear un nuevo lugar con el nombre ingresado y la id del ultimo lugar registrado mas uno
  createLugar() {
    this.database.getAllLugares().subscribe(
      data => {
        var id = data.length + 1;
        var lugar = {
          ID_Lugar: id,
          Nombre_Lugar: this.formLugar.value.nombre
        }
        this.database.createLugar(lugar).subscribe(
          data => {
            console.log(data);
            this.limpiarForm();
          }
        );
      }
    );
  }

  //Limpiar form
  limpiarForm() {
    this.formLugar.reset();
  }
}
