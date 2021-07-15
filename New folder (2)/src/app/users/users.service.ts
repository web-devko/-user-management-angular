import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'http://localhost:3000/users';
  status: string;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getSearchUser(searchText: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?q=${searchText}`);
  }

  addUser(): void {
    this.http.post(`${this.url}/users`)
  }

  deleteUser(id: number): void {
    this.http.delete(`${this.url}/${id}`).subscribe(() => (this.status = 'Delete successful'));
  }
}
