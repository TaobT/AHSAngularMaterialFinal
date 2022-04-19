import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  // Traer todos los AHS
  getAllAhs(): Observable<any> {
    return this.http.get(baseUrl + 'ahs/');
  }

  // Traer un AHS por su nombre lugar
  getAhsByPlaceName(name: string): Observable<any> {
    return this.http.get(baseUrl + 'ahs/' + name);
  }

  // Crear un dato de entrada
  createDatoEntrada(datoEntrada: any): Observable<any> {
    return this.http.post(baseUrl + 'entrada/', datoEntrada);
  }

  // Traer el dato de entrada mas reciente
  getLastDatoEntrada(): Observable<any> {
    return this.http.get(baseUrl + 'entrada/');
  }

  // Trear un lugar de acuerdo al nombre del lugar
  getLugarByName(name: string): Observable<any> {
    return this.http.get(baseUrl + 'lugar/' + name);
  }

  // Traer todos los lugares
  getAllLugares(): Observable<any> {
    return this.http.get(baseUrl + 'lugar/');
  }

  //Traer el ultimo lugar registrado
  getLastLugar(): Observable<any> {
    return this.http.get(baseUrl + 'lugar/last');
  }

  //Crear un lugar
  createLugar(lugar: any): Observable<any> {
    return this.http.post(baseUrl + 'lugar/', lugar);
  }
}
