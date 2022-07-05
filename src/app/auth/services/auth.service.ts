import { register } from './../state/auth.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { login } from '../state/auth.actions';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersInDb = [
    { id: 1, username: 'test', password: '12345678' }
  ]

  constructor(private store: Store<AppState>) { }

  login(user: User): Observable<string | boolean> {
    const usernameUser = this.usersInDb.find(el => el.username === user.username)

    if (usernameUser) {
      if (usernameUser.password === user.password) {
        this.store.dispatch(login({ user: usernameUser }))
        return of(true)
      } else {
        return of('Invalid credentials')
      }
    } else {
      return of('Username not found')
    }
  }

  register(user: User): Observable<string | boolean> {
    const usernameUser = this.usersInDb.find(el => el.username === user.username)

    if (usernameUser) return of('Username already taken')


    const id = Math.max(...this.usersInDb.map(el => el.id)) + 1
    const newUser = { ...user, id }

    this.usersInDb = [...this.usersInDb, newUser]
    this.store.dispatch(login({ user: newUser }))

    return of(true)
  }
}
