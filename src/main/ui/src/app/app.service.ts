import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any, id: number) {
	user.id = id;
	return this.http.post(this.rootURL + '/user', user);
  }
//Agregue
  getColegios() {
    return this.http.get(this.rootURL + '/colegios');
  }

  addColegio(colegio: any, id: number) {
	colegio.id = id;
	return this.http.post(this.rootURL + '/colegio', colegio);
  }

  getCursos() {
    return this.http.get(this.rootURL + '/cursos');
  }

  addCurso(curso: any, id: number) {
	curso.id = id;
	return this.http.post(this.rootURL + '/curso', curso);
  }

  getEstudiantes() {
    return this.http.get(this.rootURL + '/estudiantes');
  }

  addEstudiante(estudiante: any, id: number) {
	estudiante.id = id;
	return this.http.post(this.rootURL + '/estudiante', estudiante);
  }

  getAsignaturas() {
    return this.http.get(this.rootURL + '/asignaturas');
  }

  addAsignatura(asignatura: any, id: number) {
	asignatura.id = id;
	return this.http.post(this.rootURL + '/asignatura', asignatura);
  }

  getAsignaturasXEstudiantes() {
    return this.http.get(this.rootURL + '/asignaturasxestudiantes');
  }

  addAsignaturasXEstudiantes(asignaturaxestudiante: any, id: number) {
	asignaturaxestudiante.id = id;
	return this.http.post(this.rootURL + '/asignaturaxestudiante', asignaturaxestudiante);
  }




}
