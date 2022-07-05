import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../form.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage!: string;
  subscription$!: Subscription

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(user: { username: string, password: string }) {
    this.subscription$ = this.authService.login(user).subscribe((data) => {
      if (typeof (data) === 'boolean') this.router.navigateByUrl('/articles')
      else this.errorMessage = data
    })
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe()
    }
  }
}
