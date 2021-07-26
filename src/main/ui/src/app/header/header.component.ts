
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService) { }

  colegios: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  colegio: string;



  ngOnInit(): void {
    this.getAllColegios();

  }

  getAllColegios() {
    this.appService.getColegios().pipe(takeUntil(this.destroy$)).subscribe((colegios: any[]) => {
	//	this.colegioCount = colegios.length;
        //this.colegios = colegios;
        console.log('Objeto : ', colegios)
        for (let colegio of colegios){
          this.colegio=colegio["name"]
          console.log('test : ', colegio)
        }
        console.log('Long : ', this.colegio)
    });
  }


}
