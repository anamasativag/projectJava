import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private appService: AppService) { }

  users: any[] = [];
  userCount = 0

 
  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
		this.userCount = users.length;
        this.users = users;
    });
  }

  ngOnInit(): void {
    console.log("userComponent objeto: ", this.users)
    this.getAllUsers();
  }

}
