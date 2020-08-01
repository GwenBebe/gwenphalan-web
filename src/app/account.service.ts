import { Injectable } from '@angular/core';
export interface UserAccount {
  id: number;
  password: string;
  username: string;
}

const accounts: UserAccount[] = [
  {
    id: 1,
    username: 'admin',
    password: 'password',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  static account: UserAccount;

  constructor() {}

  logout(): void {
    AccountService.account = undefined;
  }

  login(username: string, password: string): UserAccount | void {
    if (AccountService.account) {
      this.logout();
    }

    const account = accounts.filter(
      (a) => a.password === password && a.username === username
    )[0];

    if (!account) {
      return;
    } else {
      AccountService.account = account;
      console.log(AccountService.account);
      return account;
    }
  }
}
