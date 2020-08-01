import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AccountService, UserAccount } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'some-app-name';
  darkTheme = true;
  bodyClass = 'mat-typography dark-theme';
  darkIcon = 'brightness_5';
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    document.title = 'Gwen Phalan';
  }

  toggleDark(): void {
    this.darkTheme = !this.darkTheme;

    if (this.darkTheme) {
      this.bodyClass = 'mat-typography dark-theme';
      this.darkIcon = 'brightness_5';
    } else {
      this.bodyClass = 'mat-typography';
      this.darkIcon = 'brightness_2';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (!this.isBiggerScreen() && this.sidenav.opened) {
      this.sidenav.toggle();
    }
  }

  isBiggerScreen(): boolean {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  getAccount(): UserAccount {
    return AccountService.account;
  }
}
