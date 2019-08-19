import { User } from './../modals/user.modal';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUserByEmail(email): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((responce: Response) => responce.json())
      .map((user: User[]) => user[0] ? user[0] : undefined)
  }

  createNewUser(user): Observable<User> {
    return this.http.post('http://localhost:3000/users', user)
      .map((response: Response) => response.json())
  }
}
