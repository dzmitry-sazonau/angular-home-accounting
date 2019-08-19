import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/servives/auth.service';
import { User } from './../../../../shared/modals/user.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
