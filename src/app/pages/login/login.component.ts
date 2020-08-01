import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl();
  password = new FormControl();
  hide = true;
  errorMessage = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.username.value && !this.password.value) {
      this.errorMessage = 'Enter your username and password';
      return;
    } else if (!this.username.value) {
      this.errorMessage = 'Enter your username';
      return;
    } else if (!this.password.value) {
      this.errorMessage = 'Enter your password';
      return;
    }
    const account = this.accountService.login(
      this.username.value,
      this.password.value
    );
    console.log(this.username.value, this.password.value);
    if (account) {
      this.errorMessage = '';
      this.username.setValue(undefined);
      this.password.setValue(undefined);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Password or Username is incorrect';
    }
  }

  keyDownFunction(event): void {
    if (event.keyCode === 13) {
      this.login();
    }
  }
}
