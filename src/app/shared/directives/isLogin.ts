import { Observable, tap } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Directive, ElementRef, OnInit } from '@angular/core';
import { getCurrentUser } from 'src/app/auth/state/auth.selectors';

@Directive({ selector: '[isLogin]' })
export class IsLoginDirective implements OnInit {
    user$!: Observable<any>
    constructor(private store: Store<AppState>, private el: ElementRef) { }

    ngOnInit(): void {
        console.log('fjvbfhjvbhjxfbvhjbxfjv');

        this.store.select(getCurrentUser).pipe(
            tap(user => {
                if (!user) this.el.nativeElement.remove()
            })
        ).subscribe()
    }
}