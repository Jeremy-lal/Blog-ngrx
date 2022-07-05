import { getCurrentUser } from '../../auth/state/auth.selectors';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let valid = false

    this.store.select(getCurrentUser).pipe(
      tap(user => {
        if (user) valid = true
      })
    ).subscribe().unsubscribe()

    if (!valid) {
      this.router.navigateByUrl('/articles')
    }

    return valid;
  }

}
