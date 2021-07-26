import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private appService: AppService) {}

  title = 'angular-nodejs-example';

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;
  colegios: any[] = [];
  colegioCount = 0;
  cursos: any[] = [];
  cursoCount = 0;
  estudiantes: any[] = [];
  estudianteCount = 0;
  asignaturas: any[] = [];
  asignaturaCount = 0;
  asignaturasxestudiantes: any[] = [];
  asignaturaxestudianteCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addUser(this.userForm.value, this.userCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
      
    });
  }

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
		this.userCount = users.length;
        this.users = users;
    });
  }

  getAllColegios() {
    this.appService.getColegios().pipe(takeUntil(this.destroy$)).subscribe((colegios: any[]) => {
		this.colegioCount = colegios.length;
        this.colegios = colegios;
        console.log('Objeto : ', colegios)
        console.log('Long : ', this.colegioCount)
    });
  }

  getAllCursos() {
    this.appService.getCursos().pipe(takeUntil(this.destroy$)).subscribe((cursos: any[]) => {
		this.cursoCount = cursos.length;
        this.cursos = cursos;
        console.log('Objeto : ', cursos)
        console.log('Long : ', this.cursoCount)
    });
  }

  getAllEstudiantes() {
    this.appService.getEstudiantes().pipe(takeUntil(this.destroy$)).subscribe((estudiantes: any[]) => {
		this.estudianteCount = estudiantes.length;
        this.estudiantes = estudiantes;
        console.log('Objeto : ', estudiantes)
        console.log('Long : ', this.estudianteCount)
    });
  }

  getAllAsignaturas() {
    this.appService.getAsignaturas().pipe(takeUntil(this.destroy$)).subscribe((asignaturas: any[]) => {
		this.asignaturaCount = asignaturas.length;
        this.asignaturas = asignaturas;
        console.log('Objeto : ', asignaturas)
        console.log('Long : ', this.asignaturaCount)
    });
  }

  getAllAsignaturasXEstudiantes() {
    this.appService.getAsignaturasXEstudiantes().pipe(takeUntil(this.destroy$)).subscribe((asignaturasxestudiantes: any[]) => {
		this.asignaturaxestudianteCount = asignaturasxestudiantes.length;
        this.asignaturasxestudiantes = asignaturasxestudiantes;
        console.log('Objeto : ', asignaturasxestudiantes)
        console.log('Long : ', this.asignaturaxestudianteCount)
    });
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
	this.getAllUsers();
  this.getAllColegios();
  this.getAllCursos();
  this.getAllEstudiantes();
  this.getAllAsignaturas();
  this.getAllAsignaturasXEstudiantes();
  }
}
