import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

interface User {
  username: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersInDb = [
    { username: 'test', password: '12345678' }
  ]

  constructor() { }

  login(user: User): Observable<string | boolean> {
    const usernameUser = this.usersInDb.find(el => el.username === user.username)

    if (usernameUser) {
      if (usernameUser.password === user.password) {
        return of(true)
      } else {
        return of('Invalid credentials')
      }
    } else {
      return of('Username not found')
    }
  }
}
