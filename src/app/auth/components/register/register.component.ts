import { register } from './../../state/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../form.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage!: string;
  subscription$!: Subscription

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(user: { username: string, password: string }) {
    this.subscription$ = this.authService.register(user).subscribe((data) => {
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
