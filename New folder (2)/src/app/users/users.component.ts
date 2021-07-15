import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from './role';
import { User } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  cols: any[];
  value1: string;
  info: string;

  selectedRole: string;
  roles: Role[];


  status: string;


  constructor(private usersService: UsersService) {
    this.roles = [
      {name: 'Admin', code: 'ADM'},
      {name: 'Moderator', code: 'MOD'},
      {name: 'User', code: 'USR'}
    ]
  }

  search(): void {
    if (this.value1 === '') {
      this.users = this.usersService.getUsers();
    } else {
      this.users = this.usersService.getSearchUser(this.value1);
    }
  }

  test():void {
    console.log(this.selectedRole)
  }

  edit(id: number): void {}
  delete(id: number): void {
    this.usersService.deleteUser(id);
    this.users = this.usersService.getUsers();
    alert('usunięto poprawnie');
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();


  }
}
