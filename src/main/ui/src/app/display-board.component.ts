import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor() { }

  @Input() userCount = 0;
  @Input() colegioCount = 0;
  @Input() cursoCount = 0;
  @Input() estudianteCount = 0;
  @Input() asignaturaCount = 0;
  @Input() asignaturaxestudianteCount = 0;
  @Output() getUsersEvent = new EventEmitter();

  ngOnInit(): void {
  }

  // getAllUsers() {
  //   this.getUsersEvent.emit('get all users');
  // }

  getAllAsignaturasXEstudiantes() {
    this.getUsersEvent.emit('get all users');
  }

}
