import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs'
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  private routeSub: Subscription;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  estudiantes: any[] = [];
  estudianteCount = 0;
  asignaturasxestudiantes: any[] = [];
  asignaturaxestudianteCount = 0;
  asignId : string;


  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllEstudiantes() {
    this.appService.getAsignaturasXEstudiantes().pipe(takeUntil(this.destroy$)).subscribe((asignaturasxestudiantes: any[]) => {
      this.asignaturaxestudianteCount = asignaturasxestudiantes.length;
          this.asignaturasxestudiantes = [];
          for(let asignxest of asignaturasxestudiantes){
            if(asignxest['idasig']== this.asignId){
              this.asignaturasxestudiantes.push(asignxest['idestud'])  
            }
            
          }
          console.log('Array stud : ', this.asignaturasxestudiantes)
          
      });
    this.appService.getEstudiantes().pipe(takeUntil(this.destroy$)).subscribe((estudiantes: any[]) => {
		this.estudianteCount = estudiantes.length;
        this.estudiantes = [];
        for (let estud of estudiantes){
          for (let id of this.asignaturasxestudiantes){
            if (id == estud['id']){
              this.estudiantes.push(estud)
            }
          }
        }

        console.log('Objeto : ', estudiantes)
        console.log('Long : ', this.estudianteCount)
    });
  }

  getAllAsignaturasXEstudiantes() {
    this.appService.getAsignaturasXEstudiantes().pipe(takeUntil(this.destroy$)).subscribe((asignaturasxestudiantes: any[]) => {
		this.asignaturaxestudianteCount = asignaturasxestudiantes.length;
        this.asignaturasxestudiantes = [];
        for(let asignxest of asignaturasxestudiantes){
          if(asignxest['idasig']== this.asignId){
            this.asignaturasxestudiantes.push(asignxest['idestud'])  
          }
          
        }
        console.log('Array stud : ', this.asignaturasxestudiantes)
        
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.asignId=params['asignId'];
    });
    console.log('Entra a estudiantes')
    // this.getAllAsignaturasXEstudiantes();
    this.getAllEstudiantes();
    
  }

}
