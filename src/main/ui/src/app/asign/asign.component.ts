import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { ActivatedRoute,  Params, Router } from '@angular/router';

@Component({
  selector: 'app-asign',
  templateUrl: './asign.component.html',
  styleUrls: ['./asign.component.css']
})
export class AsignComponent implements OnInit {
  private routeSub: Subscription;
  usuarioId: string;
  constructor(private appService: AppService, private route: ActivatedRoute) {}


 

  
  asignaturas: any[] = [];
  asignaturaCount = 0;
  cursos: any[] = [];
  cursoCount = 0;
  idcursos: any[] = [];
  cursosAsig: any[] = [];


  destroy$: Subject<boolean> = new Subject<boolean>();



  

  getAllAsignaturas() {
    this.appService.getAsignaturas().pipe(takeUntil(this.destroy$)).subscribe((asignaturas: any[]) => {
		this.asignaturaCount = asignaturas.length;
    this.asignaturas = []
    for(let asignatura of asignaturas){
      if(asignatura['idprofesor'] == this.usuarioId){
        this.asignaturas.push(asignatura)
        for(let curso of this.cursos){
          if(curso['id'] == asignatura['idcurso']){
            this.cursosAsig.push(curso)
          }
        }
       
        
      }
    }
        //this.asignaturas = asignaturas;
        console.log('Objeto asignaturas : ', this.asignaturas)
        console.log('Obj cursos asig : ', this.cursosAsig)
        console.log('Long : ', this.asignaturaCount)
    });
    // this.appService.getCursos().pipe(takeUntil(this.destroy$)).subscribe((cursos: any[]) => {
    //   this.cursoCount = cursos.length;
    //       this.cursos = [];
    //       for (let curso of cursos){
    //         for (let idcurso of this.idcursos){
    //           if (idcurso == curso['id']){
    //             this.cursos.push(curso)
    //           }
    //         }
    //       }
    //       // console.log('Objeto cursos : ', this.cursos)
    //       // console.log('Long : ', this.cursoCount)
    //   });
  }

  getAllCursos() {
    this.appService.getCursos().pipe(takeUntil(this.destroy$)).subscribe((cursos: any[]) => {
      this.cursoCount = cursos.length;
          this.cursos = [];
          for (let curso of cursos){
            
                this.cursos.push(curso)
              }
           
          console.log('Objeto cursos : ', this.cursos)
          console.log('Long : ', this.cursoCount)
      });
    
  }


 
 

  ngOnInit() {
    this.getAllCursos()
    this.routeSub = this.route.params.subscribe(params => {
      this.usuarioId=params['userId'];
    });
    console.log('Usuario : ', this.usuarioId)
  
	
  this.getAllAsignaturas();
 
  }
}
